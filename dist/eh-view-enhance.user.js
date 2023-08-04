// ==UserScript==
// @name               E HENTAI VIEW ENHANCE
// @name:zh-CN         E绅士阅读强化
// @namespace          https://github.com/MapoMagpie/eh-view-enhance
// @version            4.0.1
// @author             MapoMagpie
// @description        e-hentai.org better viewer, All of thumbnail images exhibited in grid, and show the best quality image.
// @description:zh-CN  E绅士阅读强化，一目了然的缩略图网格陈列，漫画形式的大图阅读。
// @license            MIT
// @icon               https://exhentai.org/favicon.ico
// @match              https://exhentai.org/g/*
// @match              https://e-hentai.org/g/*
// @require            https://cdn.jsdelivr.net/npm/jszip@3.1.5/dist/jszip.min.js
// @require            https://cdn.jsdelivr.net/npm/file-saver@2.0.5/dist/FileSaver.min.js
// @connect            exhentai.org
// @connect            e-hentai.org
// @connect            hath.network
// @grant              GM_getValue
// @grant              GM_setValue
// @grant              GM_xmlhttpRequest
// ==/UserScript==

(function (JSZip, saveAs) {
  'use strict';

  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  function defaultConf() {
    const screenWidth = window.screen.width;
    const colCount = screenWidth > 2500 ? 8 : screenWidth > 1900 ? 7 : 5;
    return {
      backgroundImage: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAAC4AgMAAADvbYrQAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFi/guUAABYlAUlSJPAAAAAJUExURQwMDA8PDxISEkrSJjgAAAVcSURBVGjevZqxjtwwDETZTOOvm2Yafp0aNvzKFJRsade3ycqHLA4IcMo70LRIDsk1iDZ/0P8VbTmAZGZmpGiejaBECpLcIUH0DAUpSpIgHZkuSfTchaIJBtk4ggTJnVL94DzJkJjZNqFsECUDjwhEQpKUyXAKExSHh0T3bYgASSNn8zLpomSSSYg4Mo58BEEETaz3N35OL3SoW0iREvcgAyHzGKfoEN4g1t+qS7UBlR2ZLfO8L5J0WQh3KOABybNJfADpDfIol88vF1I6n0Ev5kFyUWodCoSOCIgfnumfoVigk1CkQpCQAVG+D/VMAuuJQ+hXij2RaCQW1lWY0s93UGaTCCFTw7bziSvyM4/MI/pJZtuHnKIy5TmCkJ4tev7qUKZSDyFXQXGFOz1beFsh11OonvjNEeGUFJN5T6GIHh1azAu9OUKSLJN70P/7jHCvotbrTEZGG0EjTSfBDG5CQfX7uUC5QBF1IlFqm1A/4kdIOi6IDyHwA5SCApKcnk+hH82bat2/P9MN1PNUr1W3lwb3d+lbqF5XRpv0wFSomTlElmz8bh9yZt5Btl7Y34MwILvM0xIaTyF3ZsYE9VMOKMav7SFUFpakQRU1dp0lm65Rr3UPIPZ7UVUSpJmB9KBkhhkyjHDfgkb+nX1bmV5OCSGkwytP0/MhFD9BdkofjSL0DJqTb6n7zObeTzKh0CkJnkIvN7OXcMnjyDghD+5BZzM3pRDIxot8EVlrevkSIj3rysyOGIKKZx+UgQzQMtsehK56V+jUJAMaqoB8Avk7pBfIT/1h+xCZGXFnni/mRRyZvWXdg8SIiLgxz18cgQ5xD/r02dJo/KjCuJhXwb80/BRcJnpOQfg95KoCIAlmBkNQQZ3TBZsLwCPILwiCiKDEOC0kxEMBUfkIGiLxgkSVhWsnjnqSZ1DwhGCz+DhdngGZXNvQmZdWMfWa4+z+9BtoxPWiMoyekUlJqM44IchDEsWH0JIvK9m0KQhNkI+JyTNo1WhvEKQa1QFPIV+KWmZTNeiAdLhMPGv1HnQ3v5pEIs1MgsvMkMQ8bPoSMpYf+wCNFdo8U1WJLBEyOI0l/HcgjysGShCOsVZ3x3BOjR9JxS50PfTxDvncXx69NW/PIa0QLS7oiKjhrYt7kGJuEeahIGVrVa3hrWITmkdY0muykRnMNEauxJx5voS0DGpXkXglyzFFOXLuNb6GYploQjqiqd8hdt2W1YbXvGYb0hvkbbR8FxS1NXgOaZlxN+/maTLvFyB/FfMepyPMjvTRoOgJ9P8+ZcQ6vAL52rfUVKYGXnwC+Yg2Xzr7VaX6M8i7eeM0XsYlb3o4apX0PdQd4Yt55QjYEptEXzBsQq/mVXWjRKDyG/oAjbUM8V3oB9let5K80Vo/a/3PkNCVR6ZCRyRAXAuSNirCWWoy2x4EnP9hzop+C+Uj6FolHcpaLqIL/FcoUmdzvAPZnXnVHwzIZkf4NkTJlF0kesylpoIwZOybQMPliG+hGmuZGfEyP3WRNdbCuVDqV+tnqGr8PXTtlY1LARgrxt4ZD+kj8SPEv0MobQvxGKp3qJ9zR/IImiWBrRrtzjz7K4QfoPHEBhquXOUTFJd5lXL2IIyXu07UMaA+5MKSez5AnCZjb9Cc6X3xLUdO5jDcGTVj+R4aY+e5u5Iou/5WrWYjIGW0zLYHnYlFOnSpjLmoRcxF7QFkA5rME+dlfUA6ukhs7tvQ7Ai/M29Z/dDFPeg/byRXOxykJM96xZimqhJ5r5Z3oP61AHo2aCSbCeLvQTFB8xd6xmL4t6BjQF1i/zp0tg31PY0OmY1taUFYHfEV9K/7x/nzB/aTFFDPHGpXAAAAAElFTkSuQmCC`,
      colCount,
      consecutiveMode: false,
      autoLoad: true,
      fetchOriginal: false,
      restartIdleLoader: 8e3,
      threads: 3,
      downloadThreads: 3,
      timeout: 16,
      version: "4.0.1",
      debug: true,
      first: true,
      disableDownload: false,
      reversePages: false,
      pageHelperAbTop: "unset",
      pageHelperAbLeft: "unset",
      pageHelperAbBottom: "50px",
      pageHelperAbRight: "50px"
    };
  }
  const VERSION = "4.0.1";
  function getConf() {
    let confStr = window.localStorage.getItem("cfg_");
    if (confStr) {
      let conf3 = JSON.parse(confStr);
      if (conf3.version === VERSION) {
        return conf3;
      }
    }
    let conf2 = defaultConf();
    window.localStorage.setItem("cfg_", JSON.stringify(conf2));
    return conf2;
  }
  const ConfigNumberKeys = ["colCount", "threads", "downloadThreads", "timeout"];
  const ConfigBooleanKeys = ["fetchOriginal", "autoLoad", "consecutiveMode", "reversePages"];
  const conf = getConf();
  const regulars = {
    /** 有压缩的大图地址 */
    normal: /\<img\sid=\"img\"\ssrc=\"(.*?)\"\sstyle/,
    /** 原图地址 */
    original: /\<a\shref=\"(http[s]?:\/\/e[x-]?hentai\.org\/fullimg\.php\?[^"\\]*)\"\>/,
    /** 大图重载地址 */
    nlValue: /\<a\shref=\"\#\"\sid=\"loadfail\"\sonclick=\"return\snl\(\'(.*)\'\)\"\>/,
    /** 是否开启自动多页查看器 */
    isMPV: /https?:\/\/e[-x]hentai.org\/mpv\/\w+\/\w+\/#page\w/,
    // 
    /** 多页查看器图片列表提取 */
    mpvImageList: /\{"n":"(.*?)","k":"(\w+)","t":"(.*?)".*?\}/g
  };
  const updatePageHelper = function(state, data) {
    switch (state) {
      case "fetching":
        HTML.pageHelper.classList.add("pageHelperFetching");
        break;
      case "fetched":
        HTML.pageHelper.classList.remove("pageHelperFetching");
        break;
      case "updateTotal":
        if (!data) {
          throw new Error("updateTotal data is undefined");
        }
        HTML.totalPageElement.textContent = data;
        DLC.drawDebouce();
        break;
      case "updateCurrPage":
        if (!data) {
          throw new Error("updateCurrPage data is undefined");
        }
        HTML.currPageElement.textContent = data;
        DLC.drawDebouce();
        break;
      case "updateFinished":
        if (!data) {
          throw new Error("updateFinished data is undefined");
        }
        HTML.finishedElement.textContent = data;
        DLC.drawDebouce();
        break;
    }
  };
  function evLog(msg, ...info) {
    if (conf.debug) {
      console.log((/* @__PURE__ */ new Date()).toLocaleString(), "EHVP:" + msg, ...info);
    }
  }
  var _GM_xmlhttpRequest = /* @__PURE__ */ (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
  function xhrWapper(url, responseType, cb) {
    let request = {
      method: "GET",
      url,
      responseType,
      timeout: conf.timeout * 1e3,
      headers: {
        // "Host": url.replace("https://", "").split("/").shift()!,
        // "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:106.0) Gecko/20100101 Firefox/106.0",
        // "Accept": "image/avif,image/webp,*/*",
        // "Accept-Language": "en-US,en;q=0.5",
        // "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        // "Referer": window.location.href.replace("/g/", "/mpv/"),
        "Sec-Fetch-Dest": "image",
        // "Sec-Fetch-Mode": "no-cors",
        // "Sec-Fetch-Site": "cross-site",
        "Cache-Control": "public,max-age=3600,immutable"
      },
      ...cb
    };
    _GM_xmlhttpRequest(request);
  }
  var FetchState = /* @__PURE__ */ ((FetchState2) => {
    FetchState2[FetchState2["URL"] = 1] = "URL";
    FetchState2[FetchState2["DATA"] = 2] = "DATA";
    FetchState2[FetchState2["DONE"] = 3] = "DONE";
    return FetchState2;
  })(FetchState || {});
  class IMGFetcher {
    constructor(node) {
      __publicField(this, "root");
      __publicField(this, "imgElement");
      __publicField(this, "pageUrl");
      __publicField(this, "bigImageUrl");
      /** 1:获取大图地址 2:获取大图数据 3:加载完成 */
      __publicField(this, "stage");
      __publicField(this, "tryTime");
      __publicField(this, "lock");
      __publicField(this, "rendered");
      __publicField(this, "blobData");
      __publicField(this, "blobUrl");
      __publicField(this, "title");
      __publicField(this, "downloadState");
      __publicField(this, "onFinishedEventContext");
      __publicField(this, "fetchOriginal");
      __publicField(this, "downloadBar");
      __publicField(this, "timeoutId");
      this.root = node;
      this.imgElement = node.firstChild;
      this.pageUrl = this.imgElement.getAttribute("ahref");
      this.stage = 1;
      this.tryTime = 0;
      this.lock = false;
      this.rendered = false;
      this.title = this.imgElement.getAttribute("title") || void 0;
      this.downloadState = { total: 100, loaded: 0, readyState: 0 };
      this.onFinishedEventContext = /* @__PURE__ */ new Map();
      this.fetchOriginal = false;
    }
    // 刷新下载状态
    setDownloadState(newState) {
      this.downloadState = { ...this.downloadState, ...newState };
      if (this.downloadState.readyState === 4) {
        if (this.downloadBar) {
          this.downloadBar.remove();
        }
        return;
      }
      if (!this.downloadBar) {
        const downloadBar = document.createElement("div");
        downloadBar.classList.add("downloadBar");
        downloadBar.innerHTML = `
      <progress style="position: absolute; width: 100%; height: 10px;" value="0" max="100" />
      `;
        for (let i = 0; i < downloadBar.childNodes.length; i++) {
          const node = downloadBar.childNodes[i];
          if (node.nodeType === 1) {
            node.nodeValue = this.downloadState.loaded / this.downloadState.total * 100 + "";
            break;
          }
        }
        this.downloadBar = downloadBar;
        this.root.appendChild(this.downloadBar);
      }
      DLC.drawDebouce();
    }
    async start(index) {
      if (this.lock)
        return;
      this.lock = true;
      try {
        this.changeStyle(
          0
          /* ADD */
        );
        const ok = await this.fetchImg();
        if (!ok) {
          throw new Error("图片获取器失败，中止获取！");
        }
        this.changeStyle(
          1,
          0
          /* SUCCESS */
        );
        this.onFinishedEventContext.forEach((callback) => callback(index, this));
      } catch (error) {
        this.changeStyle(
          1,
          1
          /* FAILED */
        );
        evLog(`图片获取器获取失败:`, error);
      } finally {
        this.lock = false;
      }
    }
    onFinished(eventId, callback) {
      this.onFinishedEventContext.set(eventId, callback);
    }
    async fetchImg() {
      switch (this.stage) {
        case 1:
          return await this.stage1FetchUrl();
        case 2:
          return await this.stage2FetchImg();
        case 3:
          return this.stage3Done();
      }
    }
    // 阶段一：获取大图的地址
    async stage1FetchUrl() {
      try {
        this.changeStyle(
          0
          /* ADD */
        );
        const ok = await this.fetchBigImageUrl(false);
        if (!ok) {
          evLog("获取大图地址失败");
          return false;
        }
        if (!this.bigImageUrl) {
          evLog("大图地址不存在！");
          return false;
        }
        this.stage = 2;
        return this.fetchImg();
      } catch (error) {
        evLog(`获取大图地址时出现了异常:`, error);
        return false;
      }
    }
    // 阶段二：获取大图数据
    async stage2FetchImg() {
      this.setDownloadState(this.downloadState);
      try {
        let ok = false;
        if (conf.disableDownload) {
          ok = await this.fetchBigImageWeird();
        } else {
          ok = await this.fetchBigImage();
        }
        if (!ok) {
          throw new Error(`获取大图数据失败,大图地址:${this.bigImageUrl}`);
        }
        this.stage = 3;
        return this.fetchImg();
      } catch (error) {
        evLog(`获取大图数据时出现了异常:`, error);
        ++this.tryTime;
        this.stage = 1;
        evLog(`当前重试第${this.tryTime}次`);
        if (this.tryTime > 2) {
          return false;
        }
        return this.fetchImg();
      }
    }
    // 阶段三：获取器结束
    stage3Done() {
      return true;
    }
    render() {
      if (this.rendered)
        return;
      const src = this.imgElement.getAttribute("asrc");
      if (src) {
        this.imgElement.src = src;
        this.rendered = true;
      } else {
        evLog("渲染缩略图失败，未获取到asrc属性");
      }
    }
    //立刻将当前元素的src赋值给大图元素
    setNow(index) {
      BIFM.setNow(index);
      if (this.stage === 3) {
        this.onFinishedEventContext.forEach((callback) => callback(index, this));
      } else {
        updatePageHelper("fetching");
      }
      updatePageHelper("updateCurrPage", (index + 1).toString());
    }
    /**
     *  获取大图地址
     * @param originChanged 是否为重新换源状态，为true时，不再进行新的换源动作，避免无限递归
     * @return boolean
     */
    async fetchBigImageUrl(originChanged) {
      let text = "";
      try {
        text = await window.fetch(this.pageUrl).then((resp) => resp.text());
      } catch (error) {
        evLog("获取大图页面内容失败！", error);
      }
      if (!text)
        return false;
      if (conf.fetchOriginal || this.fetchOriginal) {
        const matchs = regulars.original.exec(text);
        if (matchs && matchs.length > 0) {
          this.bigImageUrl = matchs[1].replace(/&amp;/g, "&");
        } else {
          const normalMatchs = regulars["normal"].exec(text);
          if (normalMatchs == null || normalMatchs.length == 0) {
            evLog("获取大图地址失败，内容为: ", text);
            return false;
          } else {
            this.bigImageUrl = normalMatchs[1];
          }
        }
        return true;
      }
      if (this.tryTime === 0 || originChanged) {
        this.bigImageUrl = regulars.normal.exec(text)[1];
        return true;
      } else {
        const nlValue = regulars.nlValue.exec(text)[1];
        this.pageUrl += ((this.pageUrl + "").indexOf("?") > -1 ? "&" : "?") + "nl=" + nlValue;
        evLog(`获取到重试地址:${this.pageUrl}`);
        return await this.fetchBigImageUrl(true);
      }
    }
    async fetchBigImageWeird() {
      const imgFetcher = this;
      return new Promise(async (resolve) => {
        imgFetcher.imgElement.onload = () => {
          window.clearTimeout(imgFetcher.timeoutId);
          imgFetcher.setDownloadState({ total: 1, loaded: 1, readyState: 4 });
          resolve(true);
        };
        imgFetcher.imgElement.onloadstart = () => {
          imgFetcher.timeoutId = window.setTimeout(() => {
            imgFetcher.imgElement.onloadstart = null;
            imgFetcher.imgElement.onload = null;
            const src = this.imgElement.getAttribute("asrc");
            if (src) {
              imgFetcher.imgElement.src = src;
            }
            resolve(false);
          }, conf.timeout * 1e3);
        };
        imgFetcher.blobUrl = imgFetcher.bigImageUrl;
        imgFetcher.imgElement.src = imgFetcher.blobUrl;
        imgFetcher.rendered = true;
      });
    }
    async fetchBigImage() {
      const imgFetcher = this;
      return new Promise(async (resolve) => {
        xhrWapper(imgFetcher.bigImageUrl, "blob", {
          onload: function(response) {
            let data = response.response;
            if (!(data instanceof Blob))
              throw new Error("未下载到有效的数据！");
            imgFetcher.blobData = data;
            imgFetcher.blobUrl = URL.createObjectURL(data);
            imgFetcher.imgElement.src = imgFetcher.blobUrl;
            imgFetcher.rendered = true;
            imgFetcher.setDownloadState({ readyState: response.readyState });
            resolve(true);
          },
          onerror: function(response) {
            evLog("加载大图失败:", response);
            resolve(false);
          },
          ontimeout: function() {
            evLog("加载大图超时:");
            resolve(false);
          },
          onprogress: function(response) {
            imgFetcher.setDownloadState({ total: response.total, loaded: response.loaded, readyState: response.readyState });
          }
        });
      });
    }
    changeStyle(action, fetchStatus) {
      switch (action) {
        case 0:
          this.imgElement.classList.add("fetching");
          break;
        case 1:
          this.imgElement.classList.remove("fetching");
          break;
      }
      switch (fetchStatus) {
        case 0:
          this.imgElement.classList.add("fetched");
          this.imgElement.classList.remove("fetch-failed");
          break;
        case 1:
          this.imgElement.classList.add("fetch-failed");
          this.imgElement.classList.remove("fetched");
          break;
      }
    }
  }
  const lang = navigator.language;
  const i18nIndex = lang === "zh-CN" ? 1 : 0;
  class I18nValue extends Array {
    constructor(...value) {
      super(...value);
    }
    get() {
      return this[i18nIndex];
    }
  }
  const i18n = {
    download: new I18nValue("DL", "下载"),
    config: new I18nValue("CONF", "配置"),
    collapse: new I18nValue("FOLD", "收起"),
    columns: new I18nValue("Columns", "每行数量"),
    consecutiveMode: new I18nValue("Consecutive Mode", "滚屏模式"),
    maxPreloadThreads: new I18nValue("PreloadThreads", "最大同时加载"),
    maxDownloadThreads: new I18nValue("DonloadThreads", "最大同时下载"),
    timeout: new I18nValue("Timeout(second)", "超时时间(秒)"),
    bestQuality: new I18nValue("RawImage", "最佳质量"),
    autoLoad: new I18nValue("AutoLoad", "自动加载"),
    consecutiveModeTooltip: new I18nValue("Switch to the next picture when scrolling, otherwise read continuously", "滚动时切换到下一张图片，否则连续阅读"),
    maxPreloadThreadsTooltip: new I18nValue("Max Preload Threads", "大图浏览时，每次滚动到下一张时，预加载的图片数量，大于1时体现为越看加载的图片越多，将提升浏览体验。"),
    maxDownloadThreadsTooltip: new I18nValue("Max Download Threads, suggest: <5", "下载模式下，同时加载的图片数量，建议小于等于5"),
    bestQualityTooltip: new I18nValue("enable will download the original source, cost more traffic and quotas", "启用后，将加载未经过压缩的原档文件，下载打包后的体积也与画廊所标体积一致。<br>注意：这将消耗更多的流量与配额，请酌情启用。"),
    autoLoadTooltip: new I18nValue("", "进入本脚本的浏览模式后，即使不浏览也会一张接一张的加载图片。直至所有图片加载完毕。"),
    forceDownload: new I18nValue("Take Loaded", "强制下载已加载的"),
    startDownload: new I18nValue("Start Download", "开始下载"),
    downloading: new I18nValue("Downloading...", "下载中..."),
    downloaded: new I18nValue("Downloaded", "下载完成"),
    reversePages: new I18nValue("Reverse Pages", "反向翻页"),
    dragToMove: new I18nValue("Drag to Move", "拖动移动"),
    originalCheck: new I18nValue("<a class='clickable' style='color:gray;'>Enable RawImage Transient</a>", "未启用最佳质量图片，点击此处<a class='clickable' style='color:gray;'>临时开启最佳质量</a>"),
    help: new I18nValue(`
    <h1>GUIDE:</h1>
    <ol>
      <li>Before use this script，make sure gallery switch to <a style="color: red" id="renamelink" href="${window.location.href}?inline_set=ts_l">Large</a> mode</li>
      <li>Click bottom right corner<span style="background-color: gray;">&lessdot;📖&gtdot;</span>，enter into viewer mode</li>
      <li>Just a moment，All of thumbnail images exhibited in grid，<strong style="color: red;">click</strong> one of thumbnail images, into big image mode</li>
      <li><strong style="color: orange">Image quality:</strong>level 1、thumbnail； level 2、compressed image； level 3、original image；<br>
        In default config，auto load compressed image，with low traffic consumption with good clarity。also you can enable best quality in config plane, This increases the consumption of traffic and browsing quotas。
      </li>
      <li><strong style="color: orange">Big image:</strong>click thumbnail image, into big image mode, use mouse wheel switch to next or prev</li>
      <li><strong style="color: orange">Image zoom:</strong>right mouse button + mouse wheel</li>
      <li><strong style="color: orange">Download:</strong>click download button，popup download plane，the loading status of all images is indicated by small squares.</li>
    </ol>
  `, `
    <h1>操作说明:</h1>
    <ol>
      <li>在使用本脚本浏览前，请务必切换为<a style="color: red" id="renamelink" href="${window.location.href}?inline_set=ts_l">Large|大图</a>模式</li>
      <li>点击右下角<span style="background-color: gray;">&lessdot;📖&gtdot;</span>展开，进入阅读模式</li>
      <li>稍等片刻后，缩略图会全屏陈列在页面上，<strong style="color: red;">点击</strong>某一缩略图进入大图浏览模式</li>
      <li><strong style="color: orange">图片质量:</strong>图片质量有三档，1、原始的缩略图(最模糊)；2、E绅士的压缩图；3、原图；<br>
        默认配置下，脚本会自动加载压缩图，这也是E绅士默认的浏览行为，具有较小的流量消耗与良好的清晰度。也可以在配置中启用最佳质量，脚本会加载原图，这会增加流量与浏览配额的消耗。
      </li>
      <li><strong style="color: orange">大图展示:</strong>点击缩略图，可以展开大图，在大图上滚动切换上一张下一张图片</li>
      <li><strong style="color: orange">图片缩放:</strong>在大图上鼠标右键+滚轮<strong style="color: red">缩放</strong>图片</li>
      <li><strong style="color: orange">下载功能:</strong>右下角点击下载按钮，弹出下载面板，内部通过小方块展示了所有图片的加载状态，点击开始下载按钮后，会加快图片加载效率并在所有图片加载完成后进行下载。 </li>
    </ol>
  `)
  };
  class Debouncer {
    constructor() {
      __publicField(this, "tids");
      this.tids = {};
    }
    addEvent(id, event, timeout) {
      window.clearTimeout(this.tids[id]);
      this.tids[id] = window.setTimeout(event, timeout);
    }
  }
  function modPageHelperPostion() {
    const style = HTML.pageHelper.style;
    conf.pageHelperAbTop = style.top;
    conf.pageHelperAbLeft = style.left;
    conf.pageHelperAbBottom = style.bottom;
    conf.pageHelperAbRight = style.right;
    window.localStorage.setItem("cfg_", JSON.stringify(conf));
  }
  function modNumberConfigEvent(key, data) {
    var _a;
    const range = {
      colCount: [1, 12],
      threads: [1, 10],
      downloadThreads: [1, 10],
      timeout: [8, 40]
    };
    if (data === "add") {
      if (conf[key] < range[key][1]) {
        conf[key]++;
      }
    } else if (data === "minus") {
      if (conf[key] > range[key][0]) {
        conf[key]--;
      }
    }
    const inputElement = document.querySelector(`#${key}Input`);
    if (inputElement) {
      inputElement.value = conf[key].toString();
    }
    if (key === "colCount") {
      const cssRules = Array.from(((_a = HTML.styleSheel.sheet) == null ? void 0 : _a.cssRules) || []);
      for (const cssRule of cssRules) {
        if (cssRule instanceof CSSStyleRule) {
          if (cssRule.selectorText === ".fullViewPlane") {
            cssRule.style.gridTemplateColumns = `repeat(${conf[key]}, 1fr)`;
            break;
          }
        }
      }
    }
    window.localStorage.setItem("cfg_", JSON.stringify(conf));
  }
  function modBooleanConfigEvent(key) {
    const inputElement = document.querySelector(`#${key}Checkbox`);
    conf[key] = (inputElement == null ? void 0 : inputElement.checked) || false;
    window.localStorage.setItem("cfg_", JSON.stringify(conf));
  }
  function mouseleavePlaneEvent(target) {
    target.classList.add("p-collapse");
  }
  function togglePlaneEvent(id, collapse) {
    setTimeout(() => {
      let element = document.querySelector(`#${id}Plane`);
      if (element) {
        if (collapse === false) {
          element.classList.remove("p-collapse");
        } else if (collapse === true) {
          mouseleavePlaneEvent(element);
        } else {
          element.classList.toggle("p-collapse");
          ["config", "downloader"].filter((k) => k !== id).forEach((k) => togglePlaneEvent(k, true));
        }
      }
    }, 10);
  }
  function showFullViewPlane() {
    HTML.fullViewPlane.scroll(0, 0);
    HTML.fullViewPlane.classList.remove("collapse_full_view");
    document.body.style.display = "none";
  }
  function hiddenFullViewPlaneEvent(event) {
    if (event.target === HTML.fullViewPlane) {
      main(true);
    }
  }
  function hiddenFullViewPlane() {
    hiddenBigImageEvent();
    HTML.fullViewPlane.classList.add("collapse_full_view");
    document.body.style.display = "";
  }
  function scrollEvent() {
    if (HTML.fullViewPlane.classList.contains("collapse_full_view"))
      return;
    PF.renderCurrView(HTML.fullViewPlane.scrollTop, HTML.fullViewPlane.clientHeight);
  }
  function hiddenBigImageEvent(event) {
    if (event && event.target && event.target.tagName === "SPAN")
      return;
    HTML.bigImageFrame.classList.add("collapse");
    window.setTimeout(() => BIFM.hidden(), 700);
  }
  function bigImageWheelEvent(event) {
    stepImageEvent(event.deltaY > 0 ? "next" : "prev");
  }
  function keyboardEvent(event) {
    switch (event.key) {
      case "ArrowLeft":
        stepImageEvent(conf.reversePages ? "next" : "prev");
        break;
      case "ArrowRight":
        stepImageEvent(conf.reversePages ? "prev" : "next");
        break;
      case "Escape":
        hiddenBigImageEvent();
        break;
    }
  }
  function showBigImageEvent(event) {
    showBigImage(IFQ.findImgIndex(event.target));
  }
  function showBigImage(start) {
    HTML.bigImageFrame.classList.remove("collapse");
    BIFM.show();
    IFQ.do(start);
  }
  function stepImageEvent(oriented) {
    const start = oriented === "next" ? IFQ.currIndex + 1 : oriented === "prev" ? IFQ.currIndex - 1 : 0;
    IFQ.do(start, oriented);
  }
  function showGuideEvent() {
    const guideElement = document.createElement("div");
    document.body.after(guideElement);
    guideElement.innerHTML = `
  <div style="width: 50vw; min-height: 300px; border: 1px solid black; background-color: rgba(255, 255, 255, 0.8); font-weight: bold; line-height: 30px">${i18n.help.get()}</div>
  `;
    guideElement.setAttribute("style", `position: absolute;width: 100%;height: 100%;background-color: #363c3c78;z-index: 2004;top: 0; display: flex; justify-content: center;align-items: center;`);
    guideElement.addEventListener("click", () => guideElement.remove());
  }
  const events = {
    modNumberConfigEvent,
    modBooleanConfigEvent,
    modPageHelperPostion,
    togglePlaneEvent,
    showFullViewPlane,
    hiddenFullViewPlaneEvent,
    hiddenFullViewPlane,
    scrollEvent,
    hiddenBigImageEvent,
    bigImageWheelEvent,
    keyboardEvent,
    showBigImageEvent,
    showBigImage,
    stepImageEvent,
    showGuideEvent,
    mouseleavePlaneEvent
  };
  class GalleryMeta {
    constructor($doc) {
      __publicField(this, "url");
      __publicField(this, "title");
      __publicField(this, "originTitle");
      __publicField(this, "tags");
      this.url = $doc.location.href;
      const titleList = $doc.querySelectorAll("#gd2 h1");
      if (titleList && titleList.length > 0) {
        this.title = titleList[0].textContent || void 0;
        if (titleList.length > 1) {
          this.originTitle = titleList[1].textContent || void 0;
        }
      }
      this.tags = GalleryMeta.parser_tags($doc);
    }
    static parser_tags($doc) {
      const tagTrList = $doc.querySelectorAll("#taglist tr");
      const tags = {};
      tagTrList.forEach((tr) => {
        const tds = tr.childNodes;
        const cat = tds[0].textContent;
        if (cat) {
          const list = [];
          tds[1].childNodes.forEach((ele) => {
            if (ele.textContent)
              list.push(ele.textContent);
          });
          tags[cat] = list;
        }
      });
      return tags;
    }
  }
  class Downloader {
    constructor(queue, idleLoader) {
      __publicField(this, "meta");
      __publicField(this, "zip");
      __publicField(this, "title");
      __publicField(this, "downloading");
      __publicField(this, "downloadForceElement");
      __publicField(this, "downloadStartElement");
      __publicField(this, "downloadNoticeElement");
      __publicField(this, "queue");
      __publicField(this, "idleLoader");
      var _a, _b;
      this.queue = queue;
      this.idleLoader = idleLoader;
      this.meta = new GalleryMeta(document);
      this.zip = new JSZip();
      this.title = this.meta.originTitle || this.meta.title;
      this.zip.file("meta.json", JSON.stringify(this.meta));
      this.downloading = false;
      this.downloadForceElement = document.querySelector("#download-force") || void 0;
      this.downloadStartElement = document.querySelector("#download-start") || void 0;
      this.downloadNoticeElement = document.querySelector("#download-notice") || void 0;
      (_a = this.downloadForceElement) == null ? void 0 : _a.addEventListener("click", () => this.download());
      (_b = this.downloadStartElement) == null ? void 0 : _b.addEventListener("click", () => this.start());
    }
    addToDownloadZip(imgFetcher) {
      var _a, _b;
      if (conf.disableDownload)
        return;
      let title = imgFetcher.title;
      if (title) {
        title = title.replace(/Page\s\d+_/, "");
      } else {
        title = (_b = (_a = imgFetcher.root.firstElementChild) == null ? void 0 : _a.getAttribute("asrc")) == null ? void 0 : _b.split("/").pop();
      }
      if (!title) {
        evLog("无法解析图片文件名，因此该图片无法下载");
        return;
      }
      if (!imgFetcher.blobData) {
        evLog("无法获取图片数据，因此该图片无法下载");
        return;
      }
      this.zip.file(title, imgFetcher.blobData, { binary: true });
    }
    // check > start > download
    check() {
      var _a, _b;
      if (conf.fetchOriginal)
        return;
      if (this.downloadNoticeElement && !this.downloading) {
        this.downloadNoticeElement.innerHTML = `<span>${i18n.originalCheck.get()}</span>`;
        (_a = this.downloadNoticeElement.querySelector("a")) == null ? void 0 : _a.addEventListener("click", () => this.fetchOriginalTemporarily());
      }
      if (conf.disableDownload && this.downloadNoticeElement) {
        this.downloadNoticeElement.innerHTML = "<span>下载功能已禁用</span>";
        (_b = this.downloadNoticeElement.querySelector("a")) == null ? void 0 : _b.addEventListener("click", () => this.fetchOriginalTemporarily());
        if (this.downloadStartElement) {
          this.downloadStartElement.setAttribute("disabled", "true");
        }
      }
    }
    fetchOriginalTemporarily() {
      this.queue.forEach((imgFetcher) => {
        if (!imgFetcher.fetchOriginal || imgFetcher.stage !== FetchState.DONE) {
          imgFetcher.fetchOriginal = true;
          imgFetcher.stage = FetchState.URL;
        }
      });
      this.start();
    }
    start() {
      if (this.queue.isFinised()) {
        this.download();
        return;
      }
      if (this.downloadNoticeElement && !conf.disableDownload) {
        this.downloadNoticeElement.innerHTML = `<span>${i18n.downloading.get()}</span>`;
      }
      if (this.downloadStartElement) {
        this.downloadStartElement.textContent = i18n.downloading.get();
      }
      this.downloading = true;
      if (!conf.autoLoad)
        conf.autoLoad = true;
      this.idleLoader.lockVer++;
      this.idleLoader.processingIndexList = this.queue.map((imgFetcher, index) => !imgFetcher.lock && imgFetcher.stage === FetchState.URL ? index : -1).filter((index) => index >= 0).splice(0, conf.downloadThreads);
      this.idleLoader.start(this.idleLoader.lockVer);
    }
    download() {
      if (conf.disableDownload)
        return;
      this.downloading = false;
      this.zip.generateAsync({ type: "blob" }, (_metadata) => {
      }).then((data) => {
        saveAs(data, `${this.title}.zip`);
        if (this.downloadNoticeElement)
          this.downloadNoticeElement.innerHTML = "";
        if (this.downloadStartElement)
          this.downloadStartElement.textContent = i18n.download.get();
      });
    }
  }
  class DownloaderCanvas {
    constructor(id, queue) {
      __publicField(this, "canvas");
      __publicField(this, "mousemoveState");
      __publicField(this, "ctx");
      __publicField(this, "queue");
      __publicField(this, "rectSize");
      __publicField(this, "rectGap");
      __publicField(this, "columns");
      __publicField(this, "padding");
      __publicField(this, "scrollSize");
      __publicField(this, "scrollTop");
      __publicField(this, "debouncer");
      this.queue = queue;
      const canvas = document.querySelector(`#${id}`);
      if (!canvas) {
        throw new Error("canvas not found");
      }
      this.canvas = canvas;
      this.canvas.addEventListener("wheel", (event) => this.onwheel(event.deltaY));
      this.mousemoveState = { x: 0, y: 0 };
      this.canvas.addEventListener("mousemove", (event) => {
        this.mousemoveState = { x: event.offsetX, y: event.offsetY };
        this.drawDebouce();
      });
      this.canvas.addEventListener("click", (event) => {
        var _a;
        this.mousemoveState = { x: event.offsetX, y: event.offsetY };
        const index = (_a = this.computeDrawList()) == null ? void 0 : _a.find((state) => state.isSelected).index;
        events.showBigImage(index);
      });
      const ctx = this.canvas.getContext("2d");
      if (!ctx) {
        throw new Error("canvas context not found");
      }
      this.ctx = ctx;
      this.rectSize = 12;
      this.rectGap = 6;
      this.columns = 15;
      this.padding = 7;
      this.scrollTop = 0;
      this.scrollSize = 10;
      this.debouncer = new Debouncer();
    }
    onwheel(deltaY) {
      const [_, h] = this.getWH();
      const clientHeight = this.computeClientHeight();
      if (clientHeight > h) {
        deltaY = deltaY >> 1;
        this.scrollTop += deltaY;
        if (this.scrollTop < 0)
          this.scrollTop = 0;
        if (this.scrollTop + h > clientHeight + 20)
          this.scrollTop = clientHeight - h + 20;
        this.draw();
      }
    }
    drawDebouce() {
      this.debouncer.addEvent("DOWNLOADER-DRAW", () => this.draw(), 20);
    }
    computeDrawList() {
      const list = [];
      const [_, h] = this.getWH();
      const startX = this.computeStartX();
      const startY = -this.scrollTop;
      for (let i = 0, row = -1; i < this.queue.length; i++) {
        const currCol = i % this.columns;
        if (currCol == 0) {
          row++;
        }
        const atX = startX + (this.rectSize + this.rectGap) * currCol;
        const atY = startY + (this.rectSize + this.rectGap) * row;
        if (atY + this.rectSize < 0) {
          continue;
        }
        if (atY > h) {
          break;
        }
        list.push({ index: i, atX, atY, isSelected: this.isSelected(atX, atY) });
      }
      return list;
    }
    draw() {
      const [w, h] = this.getWH();
      this.ctx.clearRect(0, 0, w, h);
      const list = this.computeDrawList();
      for (const rectState of list) {
        this.drawSmallRect(
          rectState.atX,
          rectState.atY,
          this.queue[rectState.index],
          rectState.index === this.queue.currIndex,
          rectState.isSelected
        );
      }
    }
    computeClientHeight() {
      return Math.ceil(this.queue.length / this.columns) * (this.rectSize + this.rectGap) - this.rectGap;
    }
    scrollTo(index) {
      const clientHeight = this.computeClientHeight();
      const [_, h] = this.getWH();
      if (clientHeight <= h) {
        return;
      }
      const rowNo = Math.ceil((index + 1) / this.columns);
      const offsetY = (rowNo - 1) * (this.rectSize + this.rectGap);
      if (offsetY > h) {
        this.scrollTop = offsetY + this.rectSize - h;
        const maxScrollTop = clientHeight - h + 20;
        if (this.scrollTop + 20 <= maxScrollTop) {
          this.scrollTop += 20;
        }
      }
    }
    isSelected(atX, atY) {
      return this.mousemoveState.x - atX >= 0 && this.mousemoveState.x - atX <= this.rectSize && this.mousemoveState.y - atY >= 0 && this.mousemoveState.y - atY <= this.rectSize;
    }
    computeStartX() {
      const [w, _] = this.getWH();
      const drawW = this.rectSize * this.columns + this.rectGap * this.columns - 1;
      let startX = w - drawW >> 1;
      return startX;
    }
    drawSmallRect(x, y, imgFetcher, isCurr, isSelected) {
      switch (imgFetcher.stage) {
        case FetchState.DONE:
          this.ctx.fillStyle = "rgb(110, 200, 120)";
          break;
        case FetchState.DATA:
          const percent = imgFetcher.downloadState.loaded / imgFetcher.downloadState.total;
          this.ctx.fillStyle = `rgba(110, ${Math.ceil(percent * 200)}, 120, ${Math.max(percent, 0.1)})`;
          break;
        default:
          this.ctx.fillStyle = "rgba(200, 200, 200, 0.1)";
      }
      this.ctx.fillRect(x, y, this.rectSize, this.rectSize);
      this.ctx.shadowColor = "#d53";
      if (isSelected) {
        this.ctx.strokeStyle = "rgb(60, 20, 200)";
        this.ctx.lineWidth = 2;
      } else if (isCurr) {
        this.ctx.strokeStyle = "rgb(255, 60, 20)";
        this.ctx.lineWidth = 2;
      } else {
        this.ctx.strokeStyle = "rgb(90, 90, 90)";
        this.ctx.lineWidth = 1;
      }
      this.ctx.strokeRect(x, y, this.rectSize, this.rectSize);
    }
    getWH() {
      return [this.canvas.width, this.canvas.height];
    }
  }
  class IMGFetcherQueue extends Array {
    constructor() {
      super();
      __publicField(this, "executableQueue");
      __publicField(this, "currIndex");
      __publicField(this, "finishedIndex");
      __publicField(this, "debouncer");
      this.executableQueue = [];
      this.currIndex = 0;
      this.finishedIndex = [];
      this.debouncer = new Debouncer();
    }
    isFinised() {
      return this.finishedIndex.length === this.length;
    }
    push(...items) {
      items.forEach((imgFetcher) => imgFetcher.onFinished("QUEUE-REPORT", (index) => this.finishedReport(index)));
      return super.push(...items);
    }
    unshift(...items) {
      items.forEach((imgFetcher) => imgFetcher.onFinished("QUEUE-REPORT", (index) => this.finishedReport(index)));
      return super.unshift(...items);
    }
    do(start, oriented) {
      oriented = oriented || "next";
      this.currIndex = this.fixIndex(start);
      if (DL.downloading) {
        this[this.currIndex].setNow(this.currIndex);
        return;
      }
      IL.abort(this.currIndex);
      this[this.currIndex].setNow(this.currIndex);
      if (!this.pushInExecutableQueue(oriented))
        return;
      this.debouncer.addEvent("IFQ-EXECUTABLE", () => {
        this.executableQueue.forEach((imgFetcherIndex) => this[imgFetcherIndex].start(imgFetcherIndex));
      }, 300);
    }
    //等待图片获取器执行成功后的上报，如果该图片获取器上报自身所在的索引和执行队列的currIndex一致，则改变大图
    finishedReport(index) {
      const imgFetcher = this[index];
      if (imgFetcher.stage !== 3)
        return;
      if (DL) {
        if (this.finishedIndex.indexOf(index) < 0) {
          DL.addToDownloadZip(imgFetcher);
        }
      }
      this.pushFinishedIndex(index);
      if (DL && DL.downloading && this.isFinised()) {
        DL.download();
      }
      updatePageHelper("updateFinished", this.finishedIndex.length.toString());
      evLog(`第${index + 1}张完成，大图所在第${this.currIndex + 1}张`);
      if (index !== this.currIndex)
        return;
      updatePageHelper("fetched");
      this.scrollTo(index);
    }
    scrollTo(index) {
      const imgFetcher = this[index];
      let scrollTo = imgFetcher.root.offsetTop - window.screen.availHeight / 3;
      scrollTo = scrollTo <= 0 ? 0 : scrollTo >= HTML.fullViewPlane.scrollHeight ? HTML.fullViewPlane.scrollHeight : scrollTo;
      HTML.fullViewPlane.scrollTo({ top: scrollTo, behavior: "smooth" });
    }
    //如果开始的索引小于0,则修正索引为0,如果开始的索引超过队列的长度,则修正索引为队列的最后一位
    fixIndex(start) {
      return start < 0 ? 0 : start > this.length - 1 ? this.length - 1 : start;
    }
    /**
     * 将方向前|后 的未加载大图数据的图片获取器放入待加载队列中
     * 从当前索引开始，向后或向前进行遍历，
     * 会跳过已经加载完毕的图片获取器，
     * 会添加正在获取大图数据或未获取大图数据的图片获取器到待加载队列中
     * @param oriented 方向 前后 
     * @returns 是否添加成功
     */
    pushInExecutableQueue(oriented) {
      this.executableQueue = [];
      for (let count = 0, index = this.currIndex; this.pushExecQueueSlave(index, oriented, count); oriented === "next" ? ++index : --index) {
        if (this[index].stage === 3)
          continue;
        this.executableQueue.push(index);
        count++;
      }
      return this.executableQueue.length > 0;
    }
    // 如果索引已到达边界且添加数量在配置最大同时获取数量的范围内
    pushExecQueueSlave(index, oriented, count) {
      return (oriented === "next" && index < this.length || oriented === "prev" && index > -1) && count < conf.threads;
    }
    findImgIndex(imgElement) {
      for (let index = 0; index < this.length; index++) {
        if (this[index] instanceof IMGFetcher && this[index].imgElement === imgElement) {
          return index;
        }
      }
      return 0;
    }
    pushFinishedIndex(index) {
      if (this.finishedIndex.length === 0) {
        this.finishedIndex.push(index);
        return;
      }
      for (let i = 0; i < this.finishedIndex.length; i++) {
        if (index === this.finishedIndex[i])
          return;
        if (index < this.finishedIndex[i]) {
          this.finishedIndex.splice(i, 0, index);
          return;
        }
      }
      this.finishedIndex.push(index);
    }
  }
  class IdleLoader {
    constructor(queue) {
      __publicField(this, "queue");
      __publicField(this, "processingIndexList");
      __publicField(this, "lockVer");
      __publicField(this, "restartId");
      __publicField(this, "maxWaitMS");
      __publicField(this, "minWaitMS");
      this.queue = queue;
      this.processingIndexList = [0];
      this.lockVer = 0;
      this.restartId;
      this.maxWaitMS = 1e3;
      this.minWaitMS = 300;
    }
    async start(lockVer) {
      evLog("空闲自加载启动:" + this.processingIndexList.toString());
      if (this.lockVer != lockVer || !conf.autoLoad)
        return;
      if (this.processingIndexList.length === 0) {
        return;
      }
      for (let i = 0; i < this.processingIndexList.length; i++) {
        const processingIndex = this.processingIndexList[i];
        const imgFetcher = this.queue[processingIndex];
        if (imgFetcher.lock || imgFetcher.stage === 3) {
          continue;
        }
        imgFetcher.onFinished("IDLE-REPORT", () => {
          this.wait().then(() => {
            this.checkProcessingIndex(i);
            this.start(lockVer);
          });
        });
        imgFetcher.start(processingIndex);
      }
    }
    /**
     * @param {当前处理列表中的位置} i
     */
    checkProcessingIndex(i) {
      const processedIndex = this.processingIndexList[i];
      let restart = false;
      for (let j = processedIndex, max = this.queue.length - 1; j <= max; j++) {
        const imgFetcher = this.queue[j];
        if (imgFetcher.stage === 3 || imgFetcher.lock) {
          if (j === max && !restart) {
            j = -1;
            max = processedIndex - 1;
            restart = true;
          }
          continue;
        }
        this.processingIndexList[i] = j;
        return;
      }
      this.processingIndexList.splice(i, 1);
    }
    async wait() {
      const { maxWaitMS, minWaitMS } = this;
      return new Promise(function(resolve) {
        const time = Math.floor(Math.random() * maxWaitMS + minWaitMS);
        window.setTimeout(() => resolve(true), time);
      });
    }
    abort(newIndex) {
      this.lockVer++;
      evLog(`终止空闲自加载, 下次将从第${this.processingIndexList[0] + 1}张开始加载`);
      if (!conf.autoLoad)
        return;
      window.clearTimeout(this.restartId);
      this.restartId = window.setTimeout(() => {
        this.processingIndexList = [newIndex];
        this.checkProcessingIndex(0);
        this.start(this.lockVer);
      }, conf.restartIdleLoader);
    }
  }
  class PageFetcher {
    constructor(queue, idleLoader) {
      __publicField(this, "queue");
      __publicField(this, "pageURLs");
      __publicField(this, "currPage");
      __publicField(this, "idleLoader");
      __publicField(this, "fetched");
      __publicField(this, "imgAppends");
      this.queue = queue;
      this.idleLoader = idleLoader;
      this.pageURLs = [];
      this.currPage = 0;
      this.imgAppends = { prev: [], next: [] };
      this.fetched = false;
    }
    async init() {
      this.initPageURLs();
      await this.initPageAppend();
      this.loadAllPageImg();
      this.renderCurrView(
        HTML.fullViewPlane.scrollTop,
        HTML.fullViewPlane.clientHeight
      );
    }
    initPageURLs() {
      var _a, _b, _c;
      const pager = document.querySelector(".gtb");
      if (!pager) {
        throw new Error("未获取到分页元素！");
      }
      const tds = Array.from(pager.querySelectorAll("td"));
      if (!tds || tds.length == 0) {
        throw new Error("未获取到有效的分页元素！");
      }
      const ptds = tds.filter((p) => p.className.indexOf("ptds") != -1);
      if (!ptds || ptds.length == 0) {
        throw new Error("未获取到有效的分页元素！");
      }
      const currPageNum = PageFetcher.findPageNum(
        ((_a = ptds[0].firstElementChild) == null ? void 0 : _a.getAttribute("href")) || void 0
      );
      const firstPageUrl = ((_b = tds[1].firstElementChild) == null ? void 0 : _b.getAttribute("href")) || void 0;
      if (!firstPageUrl) {
        throw new Error("未获取到有效的分页地址！");
      }
      this.pageURLs.push(firstPageUrl);
      const lastPage = PageFetcher.findPageNum(
        ((_c = tds[tds.length - 2].firstElementChild) == null ? void 0 : _c.getAttribute("href")) || void 0
      );
      for (let i = 1; i <= lastPage; i++) {
        this.pageURLs.push(`${firstPageUrl}?p=${i}`);
        if (i == currPageNum) {
          this.currPage = i;
        }
      }
      evLog("所有页码地址加载完毕:", this.pageURLs);
    }
    async initPageAppend() {
      for (let i = 0; i < this.pageURLs.length; i++) {
        const pageURL = this.pageURLs[i];
        if (i == this.currPage) {
          await this.appendDefaultPage(pageURL);
        } else {
          const oriented = i < this.currPage ? "prev" : "next";
          this.imgAppends[oriented].push(
            async () => await this.appendPageImg(pageURL, oriented)
          );
        }
      }
    }
    async loadAllPageImg() {
      if (this.fetched)
        return;
      for (let i = 0; i < this.imgAppends["next"].length; i++) {
        const executor = this.imgAppends["next"][i];
        await executor();
      }
      for (let i = this.imgAppends["prev"].length - 1; i > -1; i--) {
        const executor = this.imgAppends["prev"][i];
        await executor();
      }
    }
    static findPageNum(pageURL) {
      if (pageURL) {
        const arr = pageURL.split("?");
        if (arr && arr.length > 1) {
          let matchs = /p=(\d*)/.exec(arr[1]);
          if (matchs && matchs.length > 1) {
            return parseInt(matchs.pop());
          }
        }
      }
      return 0;
    }
    async appendDefaultPage(pageURL) {
      const doc = await this.fetchDocument(pageURL);
      const imgNodeList = await this.obtainImageNodeList(doc);
      const IFs = imgNodeList.map(
        (imgNode) => new IMGFetcher(imgNode)
      );
      HTML.fullViewPlane.firstElementChild.nextElementSibling.after(
        ...imgNodeList
      );
      this.queue.push(...IFs);
      updatePageHelper("updateTotal", this.queue.length.toString());
    }
    async appendPageImg(pageURL, oriented) {
      try {
        const doc = await this.fetchDocument(pageURL);
        const imgNodeList = await this.obtainImageNodeList(doc);
        const IFs = imgNodeList.map(
          (imgNode) => new IMGFetcher(imgNode)
        );
        switch (oriented) {
          case "prev":
            HTML.fullViewPlane.firstElementChild.nextElementSibling.after(
              ...imgNodeList
            );
            this.queue.unshift(...IFs);
            this.idleLoader.processingIndexList[0] += IFs.length;
            const { root } = this.queue[this.idleLoader.processingIndexList[0]];
            HTML.fullViewPlane.scrollTo(0, root.offsetTop);
            break;
          case "next":
            HTML.fullViewPlane.lastElementChild.after(...imgNodeList);
            this.queue.push(...IFs);
            break;
        }
        updatePageHelper("updateTotal", this.queue.length.toString());
        return true;
      } catch (error) {
        evLog(`从下一页或上一页中提取图片元素时出现了错误！`, error);
        return false;
      }
    }
    //从文档的字符串中创建缩略图元素列表
    async obtainImageNodeList(docString) {
      const list = [];
      if (!docString)
        return list;
      const domParser = new DOMParser();
      const doc = domParser.parseFromString(docString, "text/html");
      const aNodes = doc.querySelectorAll("#gdt a");
      if (!aNodes || aNodes.length == 0) {
        evLog("wried to get a nodes from document, but failed!");
        return list;
      }
      const aNode = aNodes[0];
      const imgNodeTemplate = document.createElement("div");
      imgNodeTemplate.classList.add("img-node");
      const imgTemplate = document.createElement("img");
      imgTemplate.setAttribute("decoding", "async");
      imgTemplate.style.height = "auto";
      imgTemplate.setAttribute(
        "src",
        "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
      );
      imgNodeTemplate.appendChild(imgTemplate);
      const href = aNode.getAttribute("href");
      if (regulars.isMPV.test(href)) {
        const mpvDoc = await this.fetchDocument(href);
        const matchs = mpvDoc.matchAll(regulars.mpvImageList);
        const gid = location.pathname.split("/")[2];
        let i = 0;
        for (const match of matchs) {
          i++;
          const newImgNode = imgNodeTemplate.cloneNode(true);
          const newImg = newImgNode.firstElementChild;
          newImg.setAttribute("title", match[1]);
          newImg.setAttribute(
            "ahref",
            `${location.origin}/s/${match[2]}/${gid}-${i}`
          );
          newImg.setAttribute("asrc", match[3].replaceAll("\\", ""));
          newImg.addEventListener("click", events.showBigImageEvent);
          list.push(newImgNode);
        }
        this.fetched = true;
      } else {
        for (const aNode2 of Array.from(aNodes)) {
          const imgNode = aNode2.querySelector("img");
          if (!imgNode) {
            throw new Error("Cannot find Image");
          }
          const newImgNode = imgNodeTemplate.cloneNode(true);
          const newImg = newImgNode.firstElementChild;
          newImg.setAttribute("ahref", aNode2.getAttribute("href"));
          newImg.setAttribute("asrc", imgNode.src);
          newImg.setAttribute("title", imgNode.getAttribute("title") || "");
          newImg.addEventListener("click", events.showBigImageEvent);
          list.push(newImgNode);
        }
      }
      return list;
    }
    //通过地址请求该页的文档
    async fetchDocument(pageURL) {
      return await window.fetch(pageURL).then((response) => response.text());
    }
    /**
     *当滚动停止时，检查当前显示的页面上的是什么元素，然后渲染图片
     * @param {当前滚动位置} currTop
     * @param {窗口高度} clientHeight
     */
    renderCurrView(currTop, clientHeight) {
      const viewTop = currTop;
      const viewButtom = currTop + clientHeight;
      const colCount = conf.colCount;
      let startRander = 0;
      let endRander = 0;
      for (let i = 0, findBottom = false; i < this.queue.length; i += colCount) {
        const { root } = this.queue[i];
        if (!findBottom) {
          const distance = root.offsetTop - viewTop;
          if (distance >= 0) {
            startRander = Math.max(i - colCount, 0);
            findBottom = true;
          }
        }
        if (findBottom) {
          const distance = viewButtom - (root.offsetTop + root.offsetHeight);
          endRander = Math.min(i + colCount, this.queue.length);
          if (distance <= 0)
            break;
        }
      }
      evLog(`要渲染的范围是:${startRander + 1}-${endRander + 1}`);
      this.queue.slice(startRander, endRander + 1).forEach((imgFetcher) => imgFetcher.render());
    }
  }
  function loadStyleSheel() {
    const style = document.createElement("style");
    const css = `
.fullViewPlane {
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0);
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 1000;
  overflow: hidden scroll;
  transition: height 0.4s ease 0s;
  display: grid;
  align-content: start;
  grid-gap: 10px;
  grid-template-columns: repeat(${conf.colCount}, 1fr);
}
.fullViewPlane .img-node {
  position: relative;
}
.fullViewPlane .img-node img {
  width: 100%;
  border: 2px solid white;
  box-sizing: border-box;
}
.collapse_full_view {
  height: 0;
  transition: height 0.4s;
}
.bigImageFrame {
  position: fixed;
  width: 100%;
  height: 100%;
  right: 0;
  overflow: scroll;
  z-index: 1001;
  background-color: #000000d6;
  transition: width 0.4s;
  display: flex;
  flex-direction: column;
}
.bigImageFrame > img {
  width: 100%;
  height: 100vh;
  object-fit: contain;
  border-bottom: 1px solid #ffffff;
}
.fullViewPlane > .pageHelper {
  position: fixed;
  display: flex !important;
  justify-content: space-between;
  right: 50px;
  line-height: 25px;
  top: ${conf.pageHelperAbTop};
  left: ${conf.pageHelperAbLeft};
  bottom: ${conf.pageHelperAbBottom};
  right: ${conf.pageHelperAbRight};
  background-color: rgba(114, 114, 114, 0.8);
  z-index: 1011 !important;
  box-sizing: border-box;
  font-weight: bold;
  color: rgb(135, 255, 184);
  font-size: 1rem;
  cursor: pointer;
}
.pageHelper:hover {
  background-color: rgba(40, 40, 40, 0.8);
}
.pageHelper .clickable {
  text-decoration-line: underline;
}
.clickable:hover {
  color: white !important;
}
.pageHelper .plane {
  z-index: 1010 !important;
  background-color: rgba(38, 20, 25, 0.8);
  box-sizing: border-box;
  /* border: 1px solid red; */
  position: absolute;
  left: 0;
  bottom: 26px;
  color: rgb(200, 222, 200);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
  transition: height 0.4s;
  overflow: hidden;
  width: 337px;
}
.p-collapse {
  height: 0px !important;
  transition: height 0.4s;
}
.pageHelper .b-main {
  width: 284px;
  overflow: hidden !important;
  transition: width 0.4s;
  display: flex;
  justify-content: space-between;
  white-space: nowrap !important;
}
.b-collapse {
  width: 0px !important;
  transition: width 0.4s;
}
.pageHelper .p-config {
  height: 300px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-content: start;
  grid-gap: 10px 0px;
}
.pageHelper .p-downloader {
  height: 310px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
.p-downloader canvas {
  /* border: 1px solid greenyellow; */
}
.p-downloader .download-notice {
  font-size: small;
  text-align: center;
  width: 100%;
}
.p-downloader .downloader-btn-group {
  align-items: center;
  text-align: right;
  width: 100%;
}
.pageHelper .btn {
  color: rgb(255, 232, 176);
  cursor: pointer;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 4px;
  height: 30px;
  font-weight: 900;
  background: rgb(70, 69, 98) none repeat scroll 0% 0%;
}
.fetched {
  border: 2px solid #602a5c !important;
}
.fetch-failed {
  border: 2px solid red !important;
}
.fetching {
  padding: 2px;
  border: none !important;
  animation: 1s linear infinite cco;
  -webkit-animation: 1s linear infinite cco;
}
.pageHelperFetching {
  border: none !important;
  animation: 1s linear infinite cco;
  -webkit-animation: 1s linear infinite cco;
}
@keyframes cco {
  0% {
    background-color: #f00;
  }

  50% {
    background-color: #48ff00;
  }

  100% {
    background-color: #ae00ff;
  }
}
.collapse {
  width: 0px !important;
  transition: width 0.4s;
}
.downloadBar {
  background-color: rgba(100, 100, 100, 0.8);
  height: 10px;
  width: 100%;
  position: absolute;
  bottom: 0;
}

.imgLandLeft, .imgLandRight {
  width: 20%;
  height: 100%;
  position: fixed;
  z-index: 1004;
}
.imgLandLeft {
  left: 0;
  top: 0;
  cursor: url("https://exhentai.org/img/p.png"), auto;
}
.imgLandRight {
  right: 0;
  top: 0;
  cursor: url("https://exhentai.org/img/n.png"), auto;
}
.imgLandTop, .imgLandBottom {
  width: 100%;
  height: 20%;
  position: fixed;
  z-index: 1005;
}
.imgLandTop {
  top: 0;
  z-index: 1005;
  cursor: url("https://exhentai.org/img/p.png"), auto;
}
.imgLandBottom {
  bottom: 0;
  z-index: 1005;
  cursor: url("https://exhentai.org/img/b.png"), auto;
}
.tooltip {
  position: relative;
  border-bottom: 1px dotted black;
}
.tooltip .tooltiptext {
  visibility: hidden;
  width: 100px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  font-size: small;
}
.tooltip:hover .tooltiptext {
  visibility: visible;
}
`;
    style.textContent = css;
    document.head.appendChild(style);
    return style;
  }
  function createHTML() {
    const fullViewPlane = document.createElement("div");
    fullViewPlane.classList.add("fullViewPlane");
    fullViewPlane.classList.add("collapse_full_view");
    document.body.after(fullViewPlane);
    const HTML_STRINGS = `
 <div id="bigImageFrame" class="bigImageFrame collapse">
    <a id="imgLandLeft" hidden="true" class="imgLandLeft"></a>
    <a id="imgLandRight" hidden="true" class="imgLandRight"></a>
    <a id="imgLandTop" hidden="true" class="imgLandTop"></a>
    <a id="imgLandBottom" hidden="true" class="imgLandBottom"></a>
 </div>
 <div id="pageHelper" class="pageHelper">
     <div style="position: relative">
         <div id="configPlane" class="plane p-config p-collapse">
             <div style="grid-column-start: 1; grid-column-end: 6; padding-left: 5px;">
                 <label style="display: flex; justify-content: space-between; padding-right: 10px;">
                     <span>${i18n.columns.get()}:</span>
                     <span>
                         <button id="colCountMinusBTN" type="button">-</button>
                         <input id="colCountInput" value="${conf.colCount}" disabled type="text" style="width: 15px;" />
                         <button id="colCountAddBTN" type="button">+</button>
                     </span>
                 </label>
             </div>
             <div style="grid-column-start: 1; grid-column-end: 6; padding-left: 5px;">
                 <label style="display: flex; justify-content: space-between; padding-right: 10px;">
                     <span>${i18n.maxPreloadThreads.get()}
                        <span class="tooltip"><span class="tooltiptext" style="width: 220px; left: -100px">${i18n.maxPreloadThreadsTooltip.get()}</span></span>:
                     </span>
                     <span>
                         <button id="threadsMinusBTN" type="button">-</button>
                         <input id="threadsInput" value="${conf.threads}" disabled type="text" style="width: 15px;" />
                         <button id="threadsAddBTN" type="button">+</button>
                     </span>
                 </label>
             </div>
             <div style="grid-column-start: 1; grid-column-end: 6; padding-left: 5px;">
                 <label style="display: flex; justify-content: space-between; padding-right: 10px;">
                     <span>${i18n.maxDownloadThreads.get()}
                        <span class="tooltip"><span class="tooltiptext" style="width: 200px; left: -100px">${i18n.maxDownloadThreadsTooltip.get()}</span></span>:
                     </span>
                     <span>
                         <button id="downloadThreadsMinusBTN" type="button">-</button>
                         <input id="downloadThreadsInput" value="${conf.downloadThreads}" disabled type="text" style="width: 15px;" />
                         <button id="downloadThreadsAddBTN" type="button">+</button>
                     </span>
                 </label>
             </div>
             <div style="grid-column-start: 1; grid-column-end: 6; padding-left: 5px;">
                 <label style="display: flex; justify-content: space-between; padding-right: 10px;">
                     <span>${i18n.timeout.get()}:</span>
                     <span>
                         <button id="timeoutMinusBTN" type="button">-</button>
                         <input id="timeoutInput" value="${conf.timeout}" disabled type="text" style="width: 15px;" />
                         <button id="timeoutAddBTN" type="button">+</button>
                     </span>
                 </label>
             </div>
             <div style="grid-column-start: 1; grid-column-end: 4; padding-left: 5px;">
                 <label>
                     <span>${i18n.bestQuality.get()}
                        <span class="tooltip"><span class="tooltiptext" style="width: 220px; left: -100px">${i18n.bestQualityTooltip.get()}</span></span>:
                     </span>
                     <input id="fetchOriginalCheckbox" ${conf.fetchOriginal ? "checked" : ""} type="checkbox" style="height: 18px; width: 18px;" />
                 </label>
             </div>
             <div style="grid-column-start: 4; grid-column-end: 7; padding-left: 5px;">
                 <label>
                     <span>${i18n.autoLoad.get()}
                        <span class="tooltip"><span class="tooltiptext" style="width: 200px; right:0;">${i18n.autoLoadTooltip.get()}</span></span>:
                     </span>
                     <input id="autoLoadCheckbox" ${conf.autoLoad ? "checked" : ""} type="checkbox" style="height: 18px; width: 18px;" />
                 </label>
             </div>
             <div style="grid-column-start: 1; grid-column-end: 7; padding-left: 5px;">
                 <label>
                     <span>${i18n.consecutiveMode.get()}
                        <span class="tooltip"><span class="tooltiptext" style="width: 220px; left:0;">${i18n.consecutiveModeTooltip.get()}</span></span>:
                     </span>
                     <input id="consecutiveModeCheckbox" ${conf.consecutiveMode ? "checked" : ""} type="checkbox" style="height: 18px; width: 18px;" />
                 </label>
             </div>
             <div style="grid-column-start: 1; grid-column-end: 4; padding-left: 5px;">
                 <label>
                     <span>${i18n.reversePages.get()}
                     </span>
                     <input id="reversePagesCheckbox" ${conf.reversePages ? "checked" : ""} type="checkbox" style="height: 18px; width: 18px;" />
                 </label>
             </div>
             <div style="grid-column-start: 4; grid-column-end: 8; padding-left: 5px;">
                 <label>
                     <span>${i18n.dragToMove.get()}
                     </span>
                     <img id="dragHub" src="https://exhentai.org/img/xmpvf.png" style="cursor: move; width: 15px" title="Drag This To Move The Bar">
                 </label>
             </div>
             <div style="grid-column-start: 1; grid-column-end: 2; padding-left: 5px;">
                  <a id="showGuideElement" class="clickable">Help</a>
             </div>
         </div>
         <div id="downloaderPlane" class="plane p-downloader p-collapse">
             <div id="download-notice" class="download-notice"></div>
             <canvas id="downloaderCanvas" width="337" height="250"></canvas>
             <div class="download-btn-group">
                <a id="download-force" style="color: gray;" class="clickable">${i18n.forceDownload.get()}</a>
                <a id="download-start" style="color: rgb(120, 240, 80)" class="clickable">${i18n.startDownload.get()}</a>
             </div>
         </div>
     </div>
     <div>
         <span id="gate" style="font-weight: 800; font-size: large; text-align: center;">&lessdot;📖</span>
     </div>
     <!-- <span>展开</span> -->
     <div id="main" class="b-main b-collapse">
         <div id="configPlaneBTN" class="clickable" style="z-index: 1111;"> ${i18n.config.get()} </div>
         <div id="downloaderPlaneBTN" class="clickable" style="z-index: 1111;"> ${i18n.download.get()} </div>
         <div class="page">
             <span class="clickable" id="p-currPage"
                 style="color:orange;">1</span>/<span id="p-total">0</span>/<span>FIN:</span><span id="p-finished">0</span>
         </div>
         <div id="collapseBTN" class="clickable">${i18n.collapse.get()}</div>
     </div>
     <div>
         <span style="font-weight: 800; font-size: large; text-align: center;">&gtdot;</span>
     </div>
 </div>
`;
    fullViewPlane.innerHTML = HTML_STRINGS;
    const styleSheel = loadStyleSheel();
    return {
      fullViewPlane,
      // root element
      bigImageFrame: fullViewPlane.querySelector("#bigImageFrame"),
      // page helper
      pageHelper: fullViewPlane.querySelector("#pageHelper"),
      // config button in pageHelper
      configPlaneBTN: fullViewPlane.querySelector("#configPlaneBTN"),
      // config plane mouse leave event
      configPlane: fullViewPlane.querySelector("#configPlane"),
      // download button in pageHelper
      downloaderPlaneBTN: fullViewPlane.querySelector("#downloaderPlaneBTN"),
      // download plane mouse leave event
      downloaderPlane: fullViewPlane.querySelector("#downloaderPlane"),
      collapseBTN: fullViewPlane.querySelector("#collapseBTN"),
      gate: fullViewPlane.querySelector("#gate"),
      currPageElement: fullViewPlane.querySelector("#p-currPage"),
      totalPageElement: fullViewPlane.querySelector("#p-total"),
      finishedElement: fullViewPlane.querySelector("#p-finished"),
      showGuideElement: fullViewPlane.querySelector("#showGuideElement"),
      imgLandLeft: fullViewPlane.querySelector("#imgLandLeft"),
      imgLandRight: fullViewPlane.querySelector("#imgLandRight"),
      imgLandTop: fullViewPlane.querySelector("#imgLandTop"),
      imgLandBottom: fullViewPlane.querySelector("#imgLandBottom"),
      styleSheel
    };
  }
  class BigImageFrameManager {
    constructor(frame, queue) {
      __publicField(this, "frame");
      __publicField(this, "queue");
      __publicField(this, "currImageNode");
      __publicField(this, "lockInit");
      this.frame = frame;
      this.queue = queue;
      this.frame.addEventListener("wheel", (event) => this.onwheel(event));
      this.lockInit = false;
    }
    setNow(index) {
      if (this.lockInit) {
        this.lockInit = false;
      } else {
        this.init(index);
      }
    }
    init(start) {
      let imgNodes = this.getImgNodes() || [];
      const indices = [start];
      for (let i = indices.length - 1; i < imgNodes.length - 1; i++) {
        imgNodes[i].remove();
      }
      for (let i = 0; i < indices.length - imgNodes.length; i++) {
        this.frame.appendChild(this.createImgElement());
      }
      imgNodes = this.getImgNodes();
      for (let i = 0; i < indices.length; i++) {
        const index = indices[i];
        const imgNode = imgNodes[i];
        if (index === start)
          this.currImageNode = imgNode;
        this.setImgNode(imgNode, index);
      }
    }
    createImgElement() {
      const img = document.createElement("img");
      img.addEventListener("click", events.hiddenBigImageEvent);
      return img;
    }
    hidden() {
      this.frame.childNodes.forEach((child) => child.hidden = true);
    }
    show() {
      this.frame.childNodes.forEach((child) => child.hidden = false);
    }
    getImgNodes() {
      return Array.from(this.frame.querySelectorAll("img"));
    }
    onwheel(event) {
      if (event.buttons === 2) {
        event.preventDefault();
        this.scaleBigImages(event.deltaY > 0 ? -1 : 1, 10);
      } else if (conf.consecutiveMode) {
        this.consecutive(event);
      } else {
        event.preventDefault();
        const oriented = event.deltaY > 0 ? "next" : "prev";
        events.stepImageEvent(oriented);
      }
    }
    consecutive(event) {
      const oriented = event.deltaY > 0 ? "next" : "prev";
      let imgNodes = this.getImgNodes();
      let index = this.findImgNodeIndexOnCenter(imgNodes, event.deltaY);
      const centerNode = imgNodes[index];
      const distance = this.getRealOffsetTop(centerNode) - this.frame.scrollTop;
      console.log("before extend, offsetTop is", centerNode.offsetTop);
      const indexOffset = this.tryExtend();
      index = index + indexOffset;
      if (indexOffset !== 0) {
        this.restoreScrollTop(centerNode, distance, event.deltaY);
      }
      imgNodes = this.getImgNodes();
      const indexOfQueue = parseInt(imgNodes[index].getAttribute("d-index"));
      if (oriented === "next" && index !== imgNodes.length - 1)
        return;
      if (oriented === "prev" && index !== 0)
        return;
      if (indexOfQueue === 0 || indexOfQueue === this.queue.length - 1)
        return;
      if (imgNodes.length < 2)
        return;
      if (oriented === "next") {
        imgNodes[imgNodes.length - 1].after(imgNodes[0]);
        this.setImgNode(imgNodes[0], parseInt(centerNode.getAttribute("d-index")) + 1);
      } else {
        imgNodes[0].before(imgNodes[imgNodes.length - 1]);
        this.setImgNode(imgNodes[imgNodes.length - 1], parseInt(centerNode.getAttribute("d-index")) - 1);
      }
      this.restoreScrollTop(centerNode, distance, event.deltaY);
      this.lockInit = true;
      this.queue.do(indexOfQueue, oriented);
    }
    restoreScrollTop(imgNode, distance, deltaY) {
      this.frame.scrollTo(0, imgNode.offsetTop - distance);
      this.frame.scrollTo({ top: imgNode.offsetTop - distance + deltaY, behavior: "smooth" });
    }
    getRealOffsetTop(imgNode) {
      const naturalRatio = imgNode.naturalWidth / imgNode.naturalHeight;
      const clientRatio = imgNode.clientWidth / imgNode.clientHeight;
      if (naturalRatio > clientRatio) {
        const clientHeight = Math.round(imgNode.naturalHeight * (imgNode.clientWidth / imgNode.naturalWidth));
        console.log(`clientHeigh should be: ${clientHeight}`);
        return (imgNode.clientHeight - clientHeight) / 2 + imgNode.offsetTop;
      }
      return imgNode.offsetTop;
    }
    tryExtend() {
      let indexOffset = 0;
      let imgNodes = [];
      let offsetAfterSwap = 0;
      while (true) {
        imgNodes = this.getImgNodes();
        const frist = imgNodes[0];
        const fixTop = this.getRealOffsetTop(frist);
        if (fixTop > this.frame.scrollTop || parseInt(frist.getAttribute("d-index")) === this.queue.length - 1) {
          const extended = this.extendImgNode(frist, "prev");
          if (extended) {
            indexOffset++;
            continue;
          } else {
            break;
          }
        } else {
          if (fixTop + frist.offsetHeight <= this.frame.scrollTop) {
            offsetAfterSwap = frist.offsetHeight;
          }
          break;
        }
      }
      while (true) {
        imgNodes = this.getImgNodes();
        const last = imgNodes[imgNodes.length - 1];
        if (last.offsetTop + last.offsetHeight + offsetAfterSwap < this.frame.scrollTop + this.frame.offsetHeight + this.frame.offsetHeight / 2) {
          if (!this.extendImgNode(last, "next"))
            break;
        } else {
          break;
        }
      }
      if (imgNodes.length == 2) {
        this.extendImgNode(imgNodes[imgNodes.length - 1], "next");
      }
      return indexOffset;
    }
    extendImgNode(imgNode, oriented) {
      const index = parseInt(imgNode.getAttribute("d-index"));
      if (oriented === "prev") {
        if (index === 0)
          return false;
        imgNode.before(this.createImgElement());
        this.setImgNode(imgNode.previousElementSibling, index - 1);
      } else {
        if (index === this.queue.length - 1)
          return false;
        imgNode.after(this.createImgElement());
        this.setImgNode(imgNode.nextElementSibling, index + 1);
      }
      return true;
    }
    setImgNode(imgNode, index) {
      imgNode.setAttribute("d-index", index.toString());
      const imgFetcher = this.queue[index];
      if (imgFetcher.stage === 3) {
        imgNode.src = imgFetcher.blobUrl;
      } else {
        imgNode.src = imgFetcher.imgElement.getAttribute("asrc");
        imgFetcher.onFinished("BIG-IMG-SRC-UPDATE", ($index, $imgFetcher) => {
          if ($index === parseInt(imgNode.getAttribute("d-index"))) {
            imgNode.src = $imgFetcher.blobUrl;
          }
        });
      }
    }
    scaleBigImages(fix, rate) {
      var _a;
      const cssRules = Array.from(((_a = HTML.styleSheel.sheet) == null ? void 0 : _a.cssRules) ?? []);
      for (const cssRule of cssRules) {
        if (cssRule instanceof CSSStyleRule) {
          if (cssRule.selectorText === ".bigImageFrame > img") {
            cssRule.style.height = `${Math.max(parseInt(cssRule.style.height) + rate * fix, 100)}vh`;
            break;
          }
        }
      }
    }
    findImgNodeIndexOnCenter(imgNodes, fixOffset) {
      const centerLine = this.frame.offsetHeight / 2;
      for (let i = 0; i < imgNodes.length; i++) {
        const imgNode = imgNodes[i];
        if (imgNode.offsetTop + imgNode.offsetHeight + fixOffset - this.frame.scrollTop > centerLine)
          return i;
      }
      return 0;
    }
  }
  function dragElement(element, dragHub, callback) {
    let mouseX = 0, mouseY = 0;
    (dragHub ?? element).addEventListener("mousedown", (event) => {
      event.preventDefault();
      mouseX = event.clientX;
      mouseY = event.clientY;
      const wh = window.innerHeight;
      const ww = window.innerWidth;
      const mouseMove = (event2) => {
        event2.preventDefault();
        const newTop = element.offsetTop - (mouseY - event2.clientY);
        const newLeft = element.offsetLeft - (mouseX - event2.clientX);
        mouseX = event2.clientX;
        mouseY = event2.clientY;
        if (newTop <= wh / 2) {
          element.style.top = newTop + "px";
          element.style.bottom = "unset";
        } else {
          element.style.bottom = wh - newTop - element.clientHeight + "px";
          element.style.top = "unset";
        }
        if (newLeft <= ww / 2) {
          element.style.left = newLeft + "px";
          element.style.right = "unset";
        } else {
          element.style.right = ww - newLeft - element.clientWidth + "px";
          element.style.left = "unset";
        }
      };
      document.addEventListener("mousemove", mouseMove);
      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", mouseMove);
        callback && callback(element.offsetTop, element.offsetLeft);
      }, { once: true });
    });
  }
  const HTML = createHTML();
  const IFQ = new IMGFetcherQueue();
  const IL = new IdleLoader(IFQ);
  const BIFM = new BigImageFrameManager(HTML.bigImageFrame, IFQ);
  const PF = new PageFetcher(IFQ, IL);
  const DL = new Downloader(IFQ, IL);
  const DLC = new DownloaderCanvas("downloaderCanvas", IFQ);
  if (conf["first"]) {
    events.showGuideEvent();
    conf["first"] = false;
    window.localStorage.setItem("cfg_", JSON.stringify(conf));
  }
  const signal = { first: true };
  function main(collapse) {
    const pageHelperEle = document.querySelector("#pageHelper #main");
    if (pageHelperEle) {
      if (collapse) {
        pageHelperEle.classList.add("b-collapse");
        events.hiddenFullViewPlane();
        ["config", "downloader"].forEach((id) => events.togglePlaneEvent(id, true));
      } else {
        pageHelperEle.classList.remove("b-collapse");
        events.showFullViewPlane();
        if (signal.first) {
          signal.first = false;
          PF.init().then(() => IL.start(IL.lockVer));
        }
      }
    }
  }
  HTML.bigImageFrame.addEventListener("click", events.hiddenBigImageEvent);
  HTML.bigImageFrame.addEventListener("contextmenu", (event) => event.preventDefault());
  HTML.configPlaneBTN.addEventListener("click", () => events.togglePlaneEvent("config"));
  HTML.configPlane.addEventListener("mouseleave", (event) => events.mouseleavePlaneEvent(event.target));
  HTML.downloaderPlaneBTN.addEventListener("click", () => {
    DL.check();
    events.togglePlaneEvent("downloader");
  });
  HTML.downloaderPlane.addEventListener("mouseleave", (event) => events.mouseleavePlaneEvent(event.target));
  for (const key of ConfigNumberKeys) {
    HTML.fullViewPlane.querySelector(`#${key}MinusBTN`).addEventListener("click", () => events.modNumberConfigEvent(key, "minus"));
    HTML.fullViewPlane.querySelector(`#${key}AddBTN`).addEventListener("click", () => events.modNumberConfigEvent(key, "add"));
  }
  for (const key of ConfigBooleanKeys) {
    HTML.fullViewPlane.querySelector(`#${key}Checkbox`).addEventListener("input", () => events.modBooleanConfigEvent(key));
  }
  HTML.collapseBTN.addEventListener("click", () => main(true));
  HTML.gate.addEventListener("click", () => main(false));
  const debouncer = new Debouncer();
  HTML.fullViewPlane.addEventListener("scroll", () => debouncer.addEvent("FULL-VIEW-SCROLL-EVENT", events.scrollEvent, 500));
  HTML.fullViewPlane.addEventListener("click", events.hiddenFullViewPlaneEvent);
  HTML.currPageElement.addEventListener("click", () => events.showBigImage(IFQ.currIndex));
  HTML.currPageElement.addEventListener("wheel", (event) => events.bigImageWheelEvent(event));
  document.addEventListener("keyup", events.keyboardEvent);
  HTML.imgLandLeft.addEventListener("click", (event) => {
    events.stepImageEvent(conf.reversePages ? "next" : "prev");
    event.stopPropagation();
  });
  HTML.imgLandRight.addEventListener("click", (event) => {
    events.stepImageEvent(conf.reversePages ? "prev" : "next");
    event.stopPropagation();
  });
  HTML.imgLandTop.addEventListener("click", (event) => {
    events.stepImageEvent("prev");
    event.stopPropagation();
  });
  HTML.imgLandBottom.addEventListener("click", (event) => {
    events.stepImageEvent("next");
    event.stopPropagation();
  });
  HTML.showGuideElement.addEventListener("click", events.showGuideEvent);
  dragElement(HTML.pageHelper, HTML.pageHelper.querySelector("#dragHub") ?? void 0, events.modPageHelperPostion);

})(JSZip, saveAs);