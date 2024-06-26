import { conf, saveConf } from "./config";
import { Downloader } from "./download/downloader";
import EBUS from "./event-bus";
import { IMGFetcherQueue } from "./fetcher-queue";
import { IdleLoader } from "./idle-loader";
import { PageFetcher } from "./page-fetcher";
import { adaptMatcher, enableAutoOpen } from "./platform/adapt";
import { Matcher } from "./platform/platform";
import { initEvents } from "./ui/event";
import { FullViewGridManager } from "./ui/full-view-grid-manager";
import { createHTML, addEventListeners } from "./ui/html";
import { PageHelper } from "./ui/page-helper";
import { BigImageFrameManager } from "./ui/ultra-image-frame-manager";
import { Debouncer } from "./utils/debouncer";
import revertMonkeyPatch from "./utils/revert-monkey-patch";
import { sleep } from "./utils/sleep";

type DestoryFunc = () => Promise<void>;

function main(MATCHER: Matcher): DestoryFunc {
  const HTML = createHTML();
  [HTML.fullViewGrid, HTML.bigImageFrame].forEach(e => revertMonkeyPatch(e));

  const IFQ: IMGFetcherQueue = IMGFetcherQueue.newQueue();
  const IL: IdleLoader = new IdleLoader(IFQ);
  const PF: PageFetcher = new PageFetcher(IFQ, MATCHER);
  const DL: Downloader = new Downloader(HTML, IFQ, IL, PF, MATCHER);

  // UI Manager
  const PH: PageHelper = new PageHelper(HTML, () => PF.chapters);
  const BIFM: BigImageFrameManager = new BigImageFrameManager(HTML, (index) => PF.chapters[index]);
  const FVGM: FullViewGridManager = new FullViewGridManager(HTML, BIFM);

  const events = initEvents(HTML, BIFM, FVGM, IFQ, PF, IL, PH);
  addEventListeners(events, HTML, BIFM, DL, PH);

  EBUS.subscribe("downloader-canvas-on-click", (index) => {
    IFQ.currIndex = index;
    if (IFQ.chapterIndex !== BIFM.chapterIndex) return;
    BIFM.show(IFQ[index]);
  });


  PF.beforeInit = () => HTML.pageLoading.style.display = "flex";
  PF.afterInit = () => {
    HTML.pageLoading.style.display = "none";
    IL.processingIndexList = [0];
    IL.start();
  };

  if (conf["first"]) {
    events.showGuideEvent();
    conf["first"] = false;
    saveConf(conf);
  }
  const href = window.location.href;
  // the real entry at ./ui/event/main
  if (conf.autoOpen && enableAutoOpen(href)) events.main(true)
  return () => {
    console.log("destory eh-view-enhance");
    PF.abort();
    IL.abort();
    IFQ.length = 0;
    EBUS.reset();
    HTML.root.remove();
    return sleep(500);
  }
}

// https://stackoverflow.com/questions/6390341/how-to-detect-if-url-has-changed-after-hash-in-javascript
(() => {
  let oldPushState = history.pushState;
  history.pushState = function pushState(...args: any) {
    let ret = oldPushState.apply(this, args);
    window.dispatchEvent(new Event('pushstate'));
    window.dispatchEvent(new Event('locationchange'));
    return ret;
  };

  let oldReplaceState = history.replaceState;
  history.replaceState = function replaceState(...args: any) {
    let ret = oldReplaceState.apply(this, args);
    window.dispatchEvent(new Event('replacestate'));
    window.dispatchEvent(new Event('locationchange'));
    return ret;
  };

  window.addEventListener('popstate', () => {
    window.dispatchEvent(new Event('locationchange'));
  });
})();

let destoryFunc: DestoryFunc | undefined;
const debouncer = new Debouncer();
window.addEventListener("locationchange", () => {
  debouncer.addEvent("LOCATION-CHANGE", () => {
    const newStart = () => {
      if (document.querySelector(".ehvp-root")) return;
      const matcher = adaptMatcher(window.location.href);
      matcher && (destoryFunc = main(matcher));
    }
    if (destoryFunc) {
      console.log("locationchange");
      destoryFunc().then(newStart);
    } else {
      newStart();
    }
  }, 10);
});

const matcher = adaptMatcher(window.location.href);
if (matcher !== null) {
  destoryFunc = main(matcher);
}
