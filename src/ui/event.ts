import { ConfigBooleanType, ConfigNumberType, ConfigSelectType, conf, saveConf, Oriented } from "../config";
import { IMGFetcherQueue } from "../fetcher-queue";
import { IdleLoader } from "../idle-loader";
import { PageFetcher } from "../page-fetcher";
import { i18n } from "../utils/i18n";
import { Elements } from "./html";
import { PageHelper } from "./page-helper";
import { BigImageFrameManager } from "./ultra-image-frame-manager";

export type Events = ReturnType<typeof initEvents>;

export function initEvents(HTML: Elements, BIFM: BigImageFrameManager, IFQ: IMGFetcherQueue, PF: PageFetcher, IL: IdleLoader, PH: PageHelper) {
  function modPageHelperPostion() {
    const style = HTML.pageHelper.style;
    conf.pageHelperAbTop = style.top;
    conf.pageHelperAbLeft = style.left;
    conf.pageHelperAbBottom = style.bottom;
    conf.pageHelperAbRight = style.right;
    saveConf(conf);
  }

  // modify config
  function modNumberConfigEvent(key: ConfigNumberType, data?: "add" | "minus") {
    const range = {
      colCount: [1, 12],
      threads: [1, 10],
      downloadThreads: [1, 10],
      timeout: [8, 40],
      autoPageInterval: [500, 90000],
      preventScrollPageTime: [0, 90000],
    };
    let mod = key === "autoPageInterval" ? 100 : 1;
    mod = key === "preventScrollPageTime" ? 10 : mod;
    if (data === "add") {
      if (conf[key] < range[key][1]) {
        conf[key] += mod;
      }
    } else if (data === "minus") {
      if (conf[key] > range[key][0]) {
        conf[key] -= mod;
      }
    }
    const inputElement = document.querySelector<HTMLInputElement>(`#${key}Input`);
    if (inputElement) {
      inputElement.value = conf[key].toString();
    }
    if (key === "colCount") {
      const cssRules = Array.from(HTML.styleSheel.sheet?.cssRules || []);
      for (const cssRule of cssRules) {
        if (cssRule instanceof CSSStyleRule) {
          if (cssRule.selectorText === ".full-view-grid") {
            cssRule.style.gridTemplateColumns = `repeat(${conf[key]}, 1fr)`;
            break;
          }
        }
      }
    }
    saveConf(conf);
  }

  // modify config
  function modBooleanConfigEvent(key: ConfigBooleanType) {
    const inputElement = document.querySelector<HTMLInputElement>(`#${key}Checkbox`);
    conf[key] = inputElement?.checked || false;
    saveConf(conf);
    if (key === "autoLoad") {
      IL.autoLoad = conf.autoLoad;
      if (IL.autoLoad) {
        IL.abort(IFQ.currIndex);
      }
    }
  }

  // modify config
  function modSelectConfigEvent(key: ConfigSelectType) {
    const inputElement = document.querySelector<HTMLSelectElement>(`#${key}Select`);
    const value = inputElement?.value;
    if (value) {
      (conf[key] as any) = value;
      saveConf(conf);
    }
    if (key === "readMode") {
      BIFM.resetScaleBigImages();
      if (conf.readMode === "singlePage") {
        BIFM.init(BIFM.queue.currIndex);
      }
    }
  }

  const cancelIDContext: Record<string, number> = {};
  function collapsePanelEvent(target: HTMLElement, id: string) {
    // FIXME: in firefox, mouseleave event will be triggered when mouse move to child element, like <option>
    if (id) {
      abortMouseleavePanelEvent(id);
    }
    const timeoutId = window.setTimeout(() => target.classList.add("p-collapse"), 100);
    if (id) {
      cancelIDContext[id] = timeoutId;
    }
  }

  function abortMouseleavePanelEvent(id?: string) {
    (id ? [id] : [...Object.keys(cancelIDContext)]).forEach(k => {
      window.clearTimeout(cancelIDContext[k]);
      delete cancelIDContext[k];
    });
  }

  function togglePanelEvent(id: string, collapse?: boolean) {
    setTimeout(() => {
      let element = document.querySelector<HTMLElement>(`#${id}Panel`);
      if (element) {
        if (collapse === false) {
          element.classList.remove("p-collapse");
        } else if (collapse === true) {
          collapsePanelEvent(element, id);
        } else {
          element.classList.toggle("p-collapse");
          ["config", "downloader"].filter(k => k !== id).forEach(k => togglePanelEvent(k, true));
        }
      }
    }, 10);
  }

  let bodyOverflow = document.body.style.overflow;
  function showFullViewGrid() {
    // HTML.fullViewGrid.scroll(0, 0); //否则加载会触发滚动事件
    PH.minify(true, "fullViewGrid");
    HTML.fullViewGrid.classList.remove("full-view-grid-collapse");
    HTML.fullViewGrid.focus();
    document.body.style.overflow = "hidden";
  };

  function hiddenFullViewGridEvent(event: Event) {
    if (event.target === HTML.fullViewGrid || (event.target as HTMLElement).classList.contains("img-node")) {
      main(false);
    }
  };

  function hiddenFullViewGrid() {
    BIFM.hidden();
    PH.minify(false, "fullViewGrid");
    HTML.fullViewGrid.classList.add("full-view-grid-collapse");
    HTML.fullViewGrid.blur();
    document.querySelector("html")?.focus();
    document.body.style.overflow = bodyOverflow;
  };

  //全屏阅览元素的滚动事件
  function scrollEvent() {
    //对冒泡的处理
    if (HTML.fullViewGrid.classList.contains("full-view-grid-collapse")) return;
    //根据currTop获取当前滚动高度对应的未渲染缩略图的图片元素
    PF.renderCurrView();
    PF.appendNextPages();
  };

  //大图框架元素的滚轮事件/按下鼠标右键滚动则是缩放/直接滚动则是切换到下一张或上一张
  function bigImageWheelEvent(event: WheelEvent) {
    IFQ.stepImageEvent(event.deltaY > 0 ? "next" : "prev");
  };

  function bigImageFrameKeyBoardEvent(event: KeyboardEvent) {
    let triggered = true;
    switch (event.key) {
      case "ArrowLeft":
        IFQ.stepImageEvent(conf.reversePages ? "next" : "prev");
        break;
      case "ArrowRight":
        IFQ.stepImageEvent(conf.reversePages ? "prev" : "next");
        break;
      case "Escape":
      case "Enter":
        BIFM.hidden();
        break;
      case "Home":
        IFQ.do(0, "next");
        break;
      case "End":
        IFQ.do(IFQ.length - 1, "prev");
        break;
      case " ":
      case "ArrowUp":
      case "ArrowDown":
      case "PageUp":
      case "PageDown":
        triggered = false; // keep default behavior
        let oriented: Oriented = "next";
        if (event.key === "ArrowUp" || event.key === "PageUp") {
          oriented = "prev"
        } else if (event.key === "ArrowDown" || event.key === "PageDown" || event.key === " ") {
          oriented = "next"
        }
        if (event.shiftKey) {
          oriented = oriented === "next" ? "prev" : "next";
        }
        BIFM.frame.addEventListener("scrollend", () => {
          if (conf.readMode === "singlePage" && BIFM.isReachBoundary(oriented)) {
            BIFM.tryPreventStep();
          }
        }, { once: true });
        if (BIFM.isReachBoundary(oriented)) {
          event.preventDefault();
          HTML.bigImageFrame.dispatchEvent(new WheelEvent("wheel", { deltaY: oriented === "prev" ? -1 : 1 }));
        }
        break;
      case "-":
        BIFM.scaleBigImages(-1, 5);
        break;
      case "=":
        BIFM.scaleBigImages(1, 5);
        break;
      default:
        triggered = false;
    }
    if (triggered) {
      event.preventDefault();
    }
  }

  let numberRecord: number[] | null = null;
  function fullViewGridKeyBoardEvent(event: KeyboardEvent) {
    if (!HTML.bigImageFrame.classList.contains("big-img-frame-collapse")) {
      bigImageFrameKeyBoardEvent(event)
    }
    else if (!HTML.fullViewGrid.classList.contains("full-view-grid-collapse")) {
      let triggered = true;
      switch (event.key) {
        case "Enter": {
          let start = IFQ.currIndex;
          if (numberRecord && numberRecord.length > 0) {
            start = Number(numberRecord.join("")) - 1;
            numberRecord = null;
            if (isNaN(start)) break;
            start = Math.max(0, Math.min(start, IFQ.length - 1));
          }
          IFQ[start].node.imgElement?.dispatchEvent(new MouseEvent("click"));
          break;
        }
        case "Escape":
          main(false);
          break;
        case "p": {
          IL.autoLoad = !IL.autoLoad;
          if (IL.autoLoad) {
            IL.abort(IFQ.currIndex);
          }
          break;
        }
        case "-":
          modNumberConfigEvent("colCount", "minus");
          break;
        case "=":
          modNumberConfigEvent("colCount", "add");
          break;
        default: {
          // if event.key is number, then record it
          if (event.key.length === 1 && event.key >= "0" && event.key <= "9") {
            numberRecord = numberRecord ? [...numberRecord, Number(event.key)] : [Number(event.key)];
          } else {
            triggered = false;
          }
        }
      }
      if (triggered) {
        event.preventDefault();
      }
    }
  }

  function keyboardEvent(event: KeyboardEvent) {
    if (!HTML.fullViewGrid.classList.contains("full-view-grid-collapse")) return;
    if (!HTML.bigImageFrame.classList.contains("big-img-frame-collapse")) return;
    switch (event.key) {
      case "Enter":
        main(true);
        break;
    }
  };

  //显示简易指南事件
  function showGuideEvent() {
    const guideElement = document.createElement("div");
    document.body.after(guideElement);
    guideElement.innerHTML = `
  <div style="width: 50vw; min-height: 300px; border: 1px solid black; background-color: rgba(255, 255, 255, 0.8); font-weight: bold; line-height: 30px">${i18n.help.get()}</div>
  `;
    guideElement.setAttribute("style",
      `
position: absolute;
width: 100%;
height: 100%;
background-color: #363c3c78;
z-index: 2004;
top: 0;
display: flex;
justify-content: center;
align-items: center;
color: black;
text-align: left;
`);
    guideElement.addEventListener("click", () => guideElement.remove());
  };

  const signal = { first: true };
  // 入口
  function main(extend: boolean) {
    if (HTML.pageHelper) {
      if (extend && !HTML.pageHelper.classList.contains("p-helper-extend")) {
        HTML.pageHelper.classList.add("p-helper-extend");
        showFullViewGrid();
        if (signal.first) {
          signal.first = false;
          PF.init().then(() => IL.start(IL.lockVer));
        }
      } else {
        HTML.pageHelper.classList.remove("p-helper-extend");
        hiddenFullViewGrid();
        ["config", "downloader"].forEach(id => togglePanelEvent(id, true));
      }
    }
  }

  return {
    main,

    modNumberConfigEvent,
    modBooleanConfigEvent,
    modSelectConfigEvent,
    modPageHelperPostion,

    togglePanelEvent,
    showFullViewGrid,
    hiddenFullViewGridEvent,
    hiddenFullViewGrid,

    scrollEvent,
    bigImageWheelEvent,
    fullViewGridKeyBoardEvent,
    keyboardEvent,
    showGuideEvent,
    collapsePanelEvent,
    abortMouseleavePanelEvent,
  }
}
