import { conf } from "./config";
import EBUS from "./event-bus";
import ImageNode, { VisualNode } from "./img-node";
import { Matcher, OriginMeta } from "./platform/platform";
import { Debouncer } from "./utils/debouncer";
import { evLog } from "./utils/ev-log";
import { xhrWapper } from "./utils/query";

export type DownloadState = {
  total: number;
  loaded: number;
  /**
   * Unsent = 0,
   * Opened = 1,
   * HeadersReceived = 2,
   * Loading = 3,
   * Done = 4
   */
  readyState: 0 | 1 | 2 | 3 | 4;
}

export enum FetchState {
  FAILED = 0,
  URL = 1,
  DATA = 2,
  DONE = 3,
}

export class IMGFetcher implements VisualNode {
  node: ImageNode;
  originURL?: string;
  stage: FetchState = FetchState.URL;
  tryTimes: number = 0;
  lock: boolean = false;
  /// 0: not rendered, 1: rendered tumbinal, 2: rendered big image
  rendered: 0 | 1 | 2 = 0;
  data?: Uint8Array;
  contentType?: string;
  blobUrl?: string;
  downloadState: DownloadState;
  downloadBar?: HTMLElement;
  timeoutId?: number;
  matcher: Matcher;
  chapterIndex: number;
  randomID: string;

  constructor(root: ImageNode, matcher: Matcher, chapterIndex: number) {
    this.node = root;
    this.node.onclick = () => EBUS.emit("imf-on-click", this);
    this.downloadState = { total: 100, loaded: 0, readyState: 0, };
    this.matcher = matcher;
    this.chapterIndex = chapterIndex;
    this.randomID = chapterIndex + Math.random().toString(16).slice(2) + this.node.href;
  }

  create(): HTMLElement {
    return this.node.create();
  }

  // 刷新下载状态
  setDownloadState(newState: Partial<DownloadState>) {
    this.downloadState = { ...this.downloadState, ...newState };
    this.node.progress(this.downloadState);
    EBUS.emit("imf-download-state-change", this);
  }

  async start(index: number) {
    if (this.lock) return;
    this.lock = true;
    try {
      this.node.changeStyle("fetching");
      await this.fetchImage();
      this.node.changeStyle("fetched");
      EBUS.emit("imf-on-finished", index, true, this);
    } catch (error) {
      this.node.changeStyle("failed");
      evLog("error", `IMG-FETCHER ERROR:`, error);
      this.stage = FetchState.FAILED;
      EBUS.emit("imf-on-finished", index, false, this);
      // TODO: show error on image
    } finally {
      this.lock = false;
    }
  }

  retry() {
    if (this.stage !== FetchState.DONE) {
      this.node.changeStyle();
      this.stage = FetchState.URL;
    }
  }

  async fetchImage(): Promise<void> {
    this.tryTimes = 0;
    while (this.tryTimes < 3) {
      switch (this.stage) {
        case FetchState.FAILED:
        case FetchState.URL:
          let meta = await this.fetchOriginMeta();
          if (meta !== null) {
            this.originURL = meta.url;
            if (meta.title) {
              this.node.title = meta.title;
              if (this.node.imgElement) {
                this.node.imgElement.title = meta.title;
              }
            }
            this.stage = FetchState.DATA;
          } else {
            this.tryTimes++;
          }
          break;
        case FetchState.DATA:
          const ret = await this.fetchImageData();
          if (ret !== null) {
            [this.data, this.contentType] = ret;
            [this.data, this.contentType] = await this.matcher.processData(this.data, this.contentType, this.originURL!);
            this.blobUrl = URL.createObjectURL(new Blob([this.data], { type: this.contentType }));
            this.node.onloaded(this.blobUrl, this.contentType);
            if (this.rendered === 2) {
              this.node.render();
            }
            this.stage = FetchState.DONE;
          } else {
            this.stage = FetchState.URL;
            this.tryTimes++;
          }
          break;
        case FetchState.DONE:
          return;
      }
    }
    throw new Error(`Fetch image failed, reach max try times, current stage: ${this.stage}`);
  }

  async fetchOriginMeta(): Promise<OriginMeta | null> {
    try {
      const meta = await this.matcher.fetchOriginMeta(this.node.href, this.tryTimes > 0, this.chapterIndex);
      if (!meta) {
        evLog("error", "Fetch URL failed, the URL is empty");
        return null;
      }
      return meta;
    } catch (error) {
      evLog("error", `Fetch URL error:`, error);
      return null;
    }
  }

  async fetchImageData(): Promise<[Uint8Array, string] | null> {
    try {
      const data = await this.fetchBigImage();
      if (data == null) {
        throw new Error(`Data is null, image url:${this.originURL}`);
      }
      return data.arrayBuffer().then((buffer) => [new Uint8Array(buffer), data.type]);
    } catch (error) {
      evLog("error", `Fetch image data error:`, error);
      return null;
    }
  }

  render() {
    switch (this.rendered) {
      case 0:
      case 1:
        this.node.render();
        this.rendered = 2;
        if (this.stage === FetchState.DONE) this.node.changeStyle("fetched");
        break;
      case 2:
        break;
    }
  }

  unrender() {
    if (this.rendered === 1 || this.rendered === 0) return;
    this.rendered = 1;
    this.node.unrender();
  }

  async fetchBigImage(): Promise<Blob | null> {
    if (this.originURL?.startsWith("blob:")) {
      return await fetch(this.originURL).then(resp => resp.blob());
    }
    const imgFetcher = this;
    return new Promise(async (resolve, reject) => {
      const debouncer = new Debouncer();
      let abort: () => void;
      const timeout = () => {
        debouncer.addEvent("XHR_TIMEOUT", () => {
          reject("timeout");
          abort();
        }, conf.timeout * 1000);
      };
      abort = xhrWapper(imgFetcher.originURL!, "blob", {
        onload: function(response) {
          let data = response.response;
          if (data.type === "text/html") {
            // TODO: check response type, e.g. status code
            console.error("warn: fetch big image data type is not blob: ", data);
          }
          try {
            imgFetcher.setDownloadState({ readyState: response.readyState });
          } catch (error) {
            evLog("error", "warn: fetch big image data onload setDownloadState error:", error);
          }
          resolve(data);
        },
        onerror: function(response) {
          reject(`error:${response.error}, response:${response.response}`);
        },
        onprogress: function(response) {
          imgFetcher.setDownloadState({ total: response.total, loaded: response.loaded, readyState: response.readyState });
          timeout();
        },
        onloadstart: function() {
          imgFetcher.setDownloadState(imgFetcher.downloadState);
        }
      });
      timeout();
    });
  }

}

