import { FetchState, IMGFetcher } from "./img-fetcher";
import { conf } from "./config";
import { evLog } from "./utils/ev-log";
import { i18n } from "./utils/i18n";
import { IMGFetcherQueue } from "./fetcher-queue";
import { IdleLoader } from "./idle-loader";
import JSZip from "jszip";
import saveAs from "file-saver";
import { Matcher } from "./platform/platform";

export class GalleryMeta {
  url: string;
  title?: string;
  originTitle?: string;
  tags: Record<string, any[]>;
  constructor(url: string, title: string) {
    this.url = url;
    this.title = title;
    this.tags = {};
  }
}
const FILENAME_INVALIDCHAR = /[\\/:*?"<>|]/g;
export class Downloader {
  meta: () => GalleryMeta;
  zip: JSZip;
  downloading: boolean;
  downloadForceElement?: HTMLElement;
  downloadStartElement?: HTMLAnchorElement;
  downloadNoticeElement?: HTMLElement;
  queue: IMGFetcherQueue;
  idleLoader: IdleLoader;
  constructor(queue: IMGFetcherQueue, idleLoader: IdleLoader, matcher: Matcher) {
    this.queue = queue;
    this.idleLoader = idleLoader;
    this.meta = () => matcher.parseGalleryMeta(document);
    this.zip = new JSZip();
    this.downloading = false;
    this.downloadForceElement = document.querySelector("#download-force") || undefined;
    this.downloadStartElement = document.querySelector("#download-start") || undefined;
    this.downloadNoticeElement = document.querySelector("#download-notice") || undefined;
    this.downloadForceElement?.addEventListener("click", () => this.download());
    this.downloadStartElement?.addEventListener("click", () => this.start());
  }

  addToDownloadZip(index: number, imgFetcher: IMGFetcher) {
    if (!imgFetcher.blobData) {
      evLog("无法获取图片数据，因此该图片无法下载");
      return;
    }
    this.zip.file(this.checkTitle(index, imgFetcher.title), imgFetcher.blobData, { binary: true });
  }

  checkTitle(index: number, $title: string): string {
    let newTitle = $title.replace(FILENAME_INVALIDCHAR, "_");
    newTitle = conf.filenameTemplate.replace("{index}", index.toString()).replace("{title}", newTitle);
    // check title is unique
    if (this.zip.files[newTitle]) {
      let splits = newTitle.split(".");
      const ext = splits.pop();
      const prefix = splits.join(".");
      const num = parseInt(prefix.match(/_(\d+)$/)?.[1] || "");
      if (isNaN(num)) {
        newTitle = `${prefix}_1.${ext}`;
      } else {
        newTitle = `${prefix.replace(/\d+$/, (num + 1).toString())}.${ext}`;
      }
      return this.checkTitle(index, newTitle);
    } else {
      return newTitle;
    }
  }
  // check > start > download
  check() {
    if (conf.fetchOriginal) return;
    // append adviser element
    if (this.downloadNoticeElement && !this.downloading) {
      this.downloadNoticeElement.innerHTML = `<span>${i18n.originalCheck.get()}</span>`;
      this.downloadNoticeElement.querySelector("a")?.addEventListener("click", () => this.fetchOriginalTemporarily());
    }
  }

  fetchOriginalTemporarily() {
    conf.fetchOriginal = true; // May result in incorrect persistence of the conf
    this.queue.forEach(imgFetcher => {
      imgFetcher.stage = FetchState.URL;
    });
    this.start();
  }

  start() {
    if (this.queue.isFinised()) {
      this.download();
      return;
    }
    if (this.downloadNoticeElement) {
      this.downloadNoticeElement.innerHTML = `<span>${i18n.downloading.get()}</span>`;
    }
    if (this.downloadStartElement) {
      this.downloadStartElement.textContent = i18n.downloading.get();
    }
    this.downloading = true;

    if (!conf.autoLoad) conf.autoLoad = true;
    this.idleLoader.lockVer++;
    // find all of unloading imgFetcher and splice frist few imgFetchers
    this.idleLoader.processingIndexList = this.queue.map((imgFetcher, index) => (!imgFetcher.lock && imgFetcher.stage === FetchState.URL ? index : -1))
      .filter((index) => index >= 0)
      .splice(0, conf.downloadThreads);
    this.idleLoader.start(this.idleLoader.lockVer);
    // TODO: handle the throw error
  }

  download() {
    this.downloading = false;
    const meta = this.meta();
    this.zip.file("meta.json", JSON.stringify(meta));
    this.zip.generateAsync({ type: "blob" }, (_metadata) => {
      // console.log(metadata);
      // TODO: progress bar
    }).then(data => {
      saveAs(data, `${meta.originTitle || meta.title}.zip`);
      if (this.downloadNoticeElement) this.downloadNoticeElement.innerHTML = "";
      if (this.downloadStartElement) this.downloadStartElement.textContent = i18n.download.get();
    });
  };
}

