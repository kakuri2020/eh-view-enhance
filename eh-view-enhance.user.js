// ==UserScript==
// @name               Comic Looms
// @name:zh-CN         漫画织机
// @name:zh-TW         漫畫織機
// @name:ja            コミック織機
// @name:ko            만화 베틀
// @name:ru            Комические ткацкие станки
// @namespace          https://github.com/MapoMagpie/eh-view-enhance
// @version            4.9.1
// @author             MapoMagpie
// @description        Manga Viewer + Downloader, Focus on experience and low load on the site. Support: e-hentai.org | exhentai.org | pixiv.net | 18comic.vip | nhentai.net | hitomi.la | rule34.xxx | danbooru.donmai.us | gelbooru.com | twitter.com | wnacg.com | manhuagui.com | mangacopy.com | yande.re | hentainexus.com | koharu.to | arca.live
// @description:zh-CN  漫画阅读 + 下载器，注重体验和对站点的负载控制。支持：Support: e-hentai.org | exhentai.org | pixiv.net | 18comic.vip | nhentai.net | hitomi.la | rule34.xxx | danbooru.donmai.us | gelbooru.com | twitter.com | wnacg.com | manhuagui.com | mangacopy.com | yande.re | hentainexus.com | koharu.to | arca.live
// @description:zh-TW  漫畫閱讀 + 下載器，注重體驗和對站點的負載控制。支持：Support: e-hentai.org | exhentai.org | pixiv.net | 18comic.vip | nhentai.net | hitomi.la | rule34.xxx | danbooru.donmai.us | gelbooru.com | twitter.com | wnacg.com | manhuagui.com | mangacopy.com | yande.re | hentainexus.com | koharu.to | arca.live
// @description:ja     サイトのエクスペリエンスと負荷制御に重点を置いたコミック閲覧 + ダウンローダー。サポート：Support: e-hentai.org | exhentai.org | pixiv.net | 18comic.vip | nhentai.net | hitomi.la | rule34.xxx | danbooru.donmai.us | gelbooru.com | twitter.com | wnacg.com | manhuagui.com | mangacopy.com | yande.re | hentainexus.com | koharu.to | arca.live
// @description:ko     만화 읽기 + 다운로더, 유저 경험 및 낮은 사이트 부하에 중점을 둡니다. 지원: Support: e-hentai.org | exhentai.org | pixiv.net | 18comic.vip | nhentai.net | hitomi.la | rule34.xxx | danbooru.donmai.us | gelbooru.com | twitter.com | wnacg.com | manhuagui.com | mangacopy.com | yande.re | hentainexus.com | koharu.to | arca.live
// @description:ru     Manga Viewer + Downloader, Focus on experience and low load on the site. Support: e-hentai | exhentai | pixiv | 18comic | nhentai | hitomi | rule34 | danbooru | gelbooru | twitter | x | wnacg | manhuagui | mangacopy | yande | hentainexus | koharu | arca
// @license            MIT
// @icon               https://exhentai.org/favicon.ico
// @supportURL         https://github.com/MapoMagpie/eh-view-enhance/issues
// @downloadURL        https://github.com/MapoMagpie/eh-view-enhance/raw/master/eh-view-enhance.user.js
// @updateURL          https://github.com/MapoMagpie/eh-view-enhance/raw/master/eh-view-enhance.meta.js
// @match              https://exhentai.org/*
// @match              https://e-hentai.org/*
// @match              http://exhentai55ld2wyap5juskbm67czulomrouspdacjamjeloj7ugjbsad.onion/*
// @match              https://nhentai.net/*
// @match              https://nhentai.xxx/*
// @match              https://steamcommunity.com/id/*/screenshots*
// @match              https://hitomi.la/*
// @match              https://*.pixiv.net/*
// @match              https://yande.re/*
// @match              https://konachan.com/*
// @match              https://rokuhentai.com/*
// @match              https://18comic.org/*
// @match              https://18comic.vip/*
// @match              https://18comic-gura.me/*
// @match              https://rule34.xxx/*
// @match              https://imhentai.xxx/*
// @match              https://danbooru.donmai.us/*
// @match              https://gelbooru.com/*
// @match              https://twitter.com/*
// @match              https://x.com/*
// @match              https://*.wnacg.com/*
// @match              https://*.wn**.cc/*
// @match              https://hentainexus.com/*
// @match              https://koharu.to/*
// @match              https://*.manhuagui.com/*
// @match              https://*.mangacopy.com/*
// @match              https://*.copymanga.tv/*
// @match              https://e621.net/*
// @match              https://arca.live/*
// @match              https://*.artstation.com/*
// @match              https://akuma.moe/*
// @require            https://cdn.jsdelivr.net/npm/@zip.js/zip.js@2.7.44/dist/zip-full.min.js
// @require            https://cdn.jsdelivr.net/npm/file-saver@2.0.5/dist/FileSaver.min.js
// @require            https://cdn.jsdelivr.net/npm/pica@9.0.1/dist/pica.min.js
// @connect            exhentai.org
// @connect            e-hentai.org
// @connect            hath.network
// @connect            exhentai55ld2wyap5juskbm67czulomrouspdacjamjeloj7ugjbsad.onion
// @connect            nhentai.net
// @connect            nhentaimg.com
// @connect            hitomi.la
// @connect            akamaihd.net
// @connect            i.pximg.net
// @connect            ehgt.org
// @connect            yande.re
// @connect            konachan.com
// @connect            18comic.org
// @connect            18comic.vip
// @connect            18comic-gura.me
// @connect            rule34.xxx
// @connect            imhentai.xxx
// @connect            donmai.us
// @connect            gelbooru.com
// @connect            twimg.com
// @connect            qy0.ru
// @connect            wnimg.ru
// @connect            hentainexus.com
// @connect            koharu.to
// @connect            kisakisexo.xyz
// @connect            koharusexo.xyz
// @connect            aronasexo.xyz
// @connect            hamreus.com
// @connect            mangafuna.xyz
// @connect            e621.net
// @connect            namu.la
// @connect            artstation.com
// @connect            akuma.moe
// @connect            *
// @grant              GM_getValue
// @grant              GM_setValue
// @grant              GM_xmlhttpRequest
// ==/UserScript==

(function (fileSaver, pica, zip_js) {
  'use strict';

  var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
  function _interopNamespaceDefault(e) {
    const n = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
    if (e) {
      for (const k in e) {
        if (k !== 'default') {
          const d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    }
    n.default = e;
    return Object.freeze(n);
  }

  const zip_js__namespace = /*#__PURE__*/_interopNamespaceDefault(zip_js);

  // src/native/alias.ts
  var _GM_getValue = /* @__PURE__ */ (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
  var _GM_setValue = /* @__PURE__ */ (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
  var _GM_xmlhttpRequest = /* @__PURE__ */ (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();

  const getI18nIndex = (lang2) => {
    if (lang2.startsWith("zh")) return 1;
    if (lang2.startsWith("ko")) return 2;
    if (lang2.startsWith("es")) return 3;
    return 0;
  };
  const lang = navigator.language;
  const i18nIndex = getI18nIndex(lang);
  class I18nValue extends Array {
    constructor(...value) {
      super(...value);
    }
    get() {
      return this[i18nIndex];
    }
  }
  const keyboardCustom = {
    inMain: {
      "open-full-view-grid": new I18nValue("Enter Read Mode", "进入阅读模式", "읽기 모드 시작", "Entrar en modo de lectura"),
      "start-download": new I18nValue("Start Download", "开始下载", "다운로드 시작", "Iniciar Descarga")
    },
    inBigImageMode: {
      "step-image-prev": new I18nValue(
        "Go Prev Image",
        "切换到上一张图片",
        "이전 이미지",
        "Ir a la imagen anterior"
      ),
      "step-image-next": new I18nValue(
        "Go Next Image",
        "切换到下一张图片",
        "다음 이미지",
        "Ir a la imagen siguiente"
      ),
      "exit-big-image-mode": new I18nValue(
        "Exit Big Image Mode",
        "退出大图模式",
        "이미지 크게 보기 종료",
        "Salir del modo de imagen grande"
      ),
      "step-to-first-image": new I18nValue(
        "Go First Image",
        "跳转到第一张图片",
        "첫 이미지로 이동",
        "Ir a la primera imagen"
      ),
      "step-to-last-image": new I18nValue(
        "Go Last Image",
        "跳转到最后一张图片",
        "마지막 이미지로 이동",
        "Ir a la última imagen"
      ),
      "scale-image-increase": new I18nValue(
        "Increase Image Scale",
        "放大图片",
        "이미지 확대",
        "Aumentar la escala de la imagen"
      ),
      "scale-image-decrease": new I18nValue(
        "Decrease Image Scale",
        "缩小图片",
        "이미지 축소",
        "Disminuir la escala de la imagen"
      ),
      "scroll-image-up": new I18nValue(
        "Scroll Image Up (Please Keep Default Keys)",
        "向上滚动图片 (请保留默认按键)",
        "이미지 위로 스크롤 (기본 키는 그대로 두십시오)",
        "Desplazar la imagen hacia arriba (Por favor, mantener las teclas predeterminadas)"
      ),
      "scroll-image-down": new I18nValue(
        "Scroll Image Down (Please Keep Default Keys)",
        "向下滚动图片 (请保留默认按键)",
        "이미지 아래로 스크롤 (기본 키는 그대로 두십시오)",
        "Desplazar la imagen hacia abajo (Por favor, mantener las teclas predeterminadas)"
      ),
      "toggle-auto-play": new I18nValue(
        "Toggle Auto Play",
        "切换自动播放",
        "자동 재생 시작/중지",
        "Alternar reproducción automática"
      )
    },
    inFullViewGrid: {
      "open-big-image-mode": new I18nValue(
        "Enter Big Image Mode",
        "进入大图阅读模式",
        "이미지 크게 보기",
        "Entrar al modo de imagen grande"
      ),
      "pause-auto-load-temporarily": new I18nValue(
        "Pause Auto Load Temporarily",
        "临时停止自动加载",
        "자동 이미지 로딩 일시 중지",
        "Pausar carga automática temporalmente"
      ),
      "exit-full-view-grid": new I18nValue(
        "Exit Read Mode",
        "退出阅读模式",
        "읽기 모드 종료",
        "Salir del modo de lectura"
      ),
      "columns-increase": new I18nValue(
        "Increase Columns ",
        "增加每行数量",
        "열 수 늘리기",
        "Aumentar columnas"
      ),
      "columns-decrease": new I18nValue(
        "Decrease Columns ",
        "减少每行数量",
        "열 수 줄이기",
        "Disminuir columnas"
      ),
      "toggle-auto-play": new I18nValue(
        "Toggle Auto Play",
        "切换自动播放",
        "자동 재생 시작/중지",
        "Alternar reproducción automática"
      ),
      "retry-fetch-next-page": new I18nValue(
        "Try Fetch Next Page",
        "重新加载下一分页",
        "다음 페이지 로딩 재시도",
        "Intentar cargar la siguiente página"
      )
    }
  };
  const i18n = {
    // page-helper
    imageScale: new I18nValue(
      "SCALE",
      "缩放",
      "배율",
      "Escala"
    ),
    config: new I18nValue(
      "CONF",
      "配置",
      "설정",
      "Ajustes"
    ),
    chapters: new I18nValue(
      "CHAPTERS",
      "章节",
      "챕터",
      "Capítulos"
    ),
    autoPagePlay: new I18nValue(
      "PLAY",
      "播放",
      "재생",
      "Reproducir"
    ),
    autoPagePause: new I18nValue(
      "PAUSE",
      "暂停",
      "일시 중지",
      "Pausar"
    ),
    collapse: new I18nValue(
      "FOLD",
      "收起",
      "접기",
      "Plegar"
    ),
    // config panel number option
    colCount: new I18nValue(
      "Columns",
      "每行数量",
      "열 수",
      "Columnas"
    ),
    threads: new I18nValue(
      "Preload Threads",
      "最大同时加载",
      "동시 로드 수",
      "Hilos de pre-carga"
    ),
    threadsTooltip: new I18nValue(
      "Max Preload Threads",
      "大图浏览时，每次滚动到下一张时，预加载的图片数量，大于1时体现为越看加载的图片越多，将提升浏览体验。",
      "큰 이미지 모드에서 다음 이미지로 이동할 때 미리 로드할 이미지 수입니다.<br>이 값이 1보다 클 경우, 동시에 로드되는 이미지가 더 많아져서 사용 경험이 향상됩니다.",
      "Hilos máximos de pre-carga"
    ),
    downloadThreads: new I18nValue(
      "Download Threads",
      "最大同时下载",
      "최대 동시 다운로드",
      "Hilos de descarga"
    ),
    downloadThreadsTooltip: new I18nValue(
      "Max Download Threads, suggest: <5",
      "下载模式下，同时加载的图片数量，建议小于等于5",
      "다운로드 모드에서 동시에 다운로드할 이미지 수입니다. 5 이하로 설정하는 것이 좋습니다.",
      "Hilos máximos de descarga, sugerido: <5"
    ),
    paginationIMGCount: new I18nValue(
      "Images Per Page",
      "每页图片数量",
      "페이지당 이미지 수",
      "Imágenes por página"
    ),
    paginationIMGCountTooltip: new I18nValue(
      "In Pagination Read mode, the number of images displayed on each page",
      "当阅读模式为翻页模式时，每页展示的图片数量",
      "페이지 넘김 모드에서 각 페이지에 표시될 이미지 수입니다.",
      "En el modo de lectura por paginación, el número de imágenes mostradas en cada página"
    ),
    timeout: new I18nValue(
      "Timeout(second)",
      "超时时间(秒)",
      "이미지 로딩 시도 시간 (초)",
      "Tiempo de espera (segundos)"
    ),
    preventScrollPageTime: new I18nValue(
      "Min Paging Time",
      "最小翻页时间",
      "최소 페이지 넘김 시간",
      "Tiempo mínimo de paginación"
    ),
    preventScrollPageTimeTooltip: new I18nValue(
      "In Pagination read mode, prevent immediate page flipping when scrolling to the bottom/top to improve the reading experience.<br>Set to 0 to disable this feature,<br>If set to less than 0, page-flipping via scrolling is always disabled, except for the spacebar.<br>measured in milliseconds.",
      "当阅读模式为翻页模式时，滚动浏览时，阻止滚动到底部时立即翻页，提升阅读体验。<br>设置为0时则禁用此功能，单位为毫秒。<br>设置小于0时则永远禁止通过滚动的方式翻页。空格键除外。",
      "페이지 넘김 모드에서 아래/위로 스크롤 시 너무 빨리 페이지가 넘어가는 것을 방지하여 읽기 경험을 개선합니다.<br>0으로 설정하면 이 기능이 비활성화됩니다.<br>0보다 작은 값으로 설정하면 단축키를 제외하고 스크롤을 통한 페이지 넘김이 항상 비활성화됩니다. (밀리초 단위)",
      "En el modo de lectura por paginación, evita el cambio inmediato de página al desplazarse hacia el fondo o la parte superior para mejorar la experiencia de lectura.<br>Establezca en 0 para desactivar esta función,<br>Si se establece en menos de 0, el cambio de página mediante desplazamiento siempre está desactivado, excepto para la barra espaciadora.<br>Medido en milisegundos."
    ),
    autoPageSpeed: new I18nValue(
      "Auto Paging Speed",
      "自动翻页速度",
      "자동 페이지 넘김 속도",
      "Velocidad de paginación automática"
    ),
    autoPageSpeedTooltip: new I18nValue(
      "In Pagination read mode, Auto Page Speed means how many seconds it takes to flip the page automatically.<br>In Continuous read mode, Auto Page Speed means the scrolling speed.",
      "当阅读模式为翻页模式时，自动翻页速度表示为多少秒后翻页。<br>当阅读模式为连续模式时，自动翻页速度表示为滚动速度。",
      "페이지 넘김 모드에서 자동 페이지 넘김 속도는 몇 초 후에 자동으로 페이지가 넘어갈지를 의미합니다.<br>연속 읽기 모드에서 자동 페이지 넘김 속도는 자동 스크롤 속도를 의미합니다.",
      "En el modo de lectura por paginación, la velocidad de página automática indica cuántos segundos toma cambiar la página automáticamente.<br>En el modo de lectura continua, la velocidad de página automática indica la velocidad de desplazamiento."
    ),
    scrollingSpeed: new I18nValue(
      "Scrolling Speed",
      "按键滚动速度",
      "스크롤 속도",
      "Velocidad de desplazamiento"
    ),
    scrollingSpeedTooltip: new I18nValue(
      "The scrolling Speed for Custom KeyBoard Keys for scrolling, not Auto Paging|Scrolling Speed",
      "自定义按键的滚动速度，并不是连续阅读模式下的自动翻页的滚动速度。",
      "단축키를 사용한 스크롤 속도입니다. 자동 페이지 넘김 모드의 스크롤 속도가 아닙니다.",
      "La velocidad de desplazamiento para las teclas del teclado personalizadas para desplazamiento, no para la paginación automática|Velocidad de desplazamiento"
    ),
    // config panel boolean option
    fetchOriginal: new I18nValue(
      "Raw Image",
      "最佳质量",
      "원본 이미지",
      "Imagen sin procesar"
    ),
    fetchOriginalTooltip: new I18nValue(
      "enable will download the original source, cost more traffic and quotas",
      "启用后，将加载未经过压缩的原档文件，下载打包后的体积也与画廊所标体积一致。<br>注意：这将消耗更多的流量与配额，请酌情启用。",
      "활성화하면 원본 파일이 다운로드됩니다. 더 많은 트래픽과 할당량이 소비됩니다.",
      "Activar descargará la fuente original, lo que consumirá más tráfico y cuotas"
    ),
    autoLoad: new I18nValue(
      "Auto Load",
      "自动加载",
      "자동 로드",
      "Carga automática"
    ),
    autoLoadTooltip: new I18nValue(
      "",
      "进入本脚本的浏览模式后，即使不浏览也会一张接一张的加载图片。直至所有图片加载完毕。",
      "보기 모드에 진입하면, 사용자가 탐색 중이 아닐 때도 이미지가 하나씩 자동으로 로드됩니다. 모든 이미지가 로드될 때까지 계속됩니다."
    ),
    reversePages: new I18nValue(
      "Reverse Pages",
      "反向翻页",
      "페이지 순서 뒤집기",
      "Revertir páginas"
    ),
    reversePagesTooltip: new I18nValue(
      "Clicking on the side navigation, if enable then reverse paging, which is a reading style similar to Japanese manga where pages are read from right to left.",
      "点击侧边导航时，是否反向翻页，反向翻页类似日本漫画那样的从右到左的阅读方式。",
      "측면 내비게이션을 클릭했을 때 이미지들을 거꾸로 배치할 지 선택합니다. 일본 만화처럼 오른쪽에서 왼쪽으로 읽는 스타일의 이미지에 적용하면 좋습니다.",
      "Hacer clic en la navegación lateral, si está habilitado, revertirá la paginación, que es un estilo de lectura similar al manga japonés, donde las páginas se leen de derecha a izquierda."
    ),
    autoPlay: new I18nValue(
      "Auto Page",
      "自动翻页",
      "자동 페이지 넘김",
      "Paginación automática"
    ),
    autoPlayTooltip: new I18nValue(
      "Auto Page when entering the big image readmode.",
      "当阅读大图时，开启自动播放模式。",
      "이미지 크게 보기 모드에 들어가면 바로 자동 페이지 넘김을 활성화합니다.",
      "Paginación automática al entrar en el modo de lectura de imagen grande."
    ),
    autoLoadInBackground: new I18nValue(
      "Keep Loading",
      "后台加载",
      "백그라운드 로딩",
      "Sigue cargando"
    ),
    autoLoadInBackgroundTooltip: new I18nValue(
      "Keep Auto-Loading after the tab loses focus",
      "当标签页失去焦点后保持自动加载。",
      "사용자가 다른 창을 볼 때도 자동 로딩을 계속합니다.",
      "Mantener la carga automática después de que la pestaña pierda el enfoque"
    ),
    autoOpen: new I18nValue(
      "Auto Open",
      "自动展开",
      "자동 이미지 열기",
      "Abrir automáticamente"
    ),
    autoOpenTooltip: new I18nValue(
      "Automatically open after the gallery page is loaded",
      "进入画廊页面后，自动展开阅读视图。",
      "갤러리 페이지가 로드된 후 첫 페이지를 자동으로 엽니다.",
      "Abrir automáticamente después de que la página de la galería se cargue"
    ),
    autoCollapsePanel: new I18nValue(
      "Auto Fold Control Panel",
      "自动收起控制面板",
      "설정 창 자동으로 닫기",
      "Plegar automáticamente el panel de control"
    ),
    autoCollapsePanelTooltip: new I18nValue(
      "When the mouse is moved out of the control panel, the control panel will automatically fold. If disabled, the display of the control panel can only be toggled through the button on the control bar.",
      "当鼠标移出控制面板时，自动收起控制面板。禁用此选项后，只能通过控制栏上的按钮切换控制面板的显示。",
      "마우스가 설정 창이나 컨트롤 바를 벗어나면 설정 창이 자동으로 닫힙니다. 비활성화된 경우, 컨트롤 바의 버튼을 통해서만 창을 여닫을 수 있습니다.",
      "Cuando el mouse se mueve fuera del panel de control, este se plegará automáticamente. Si está desactivado, la visualización del panel de control solo se puede alternar mediante el botón en la barra de control."
    ),
    magnifier: new I18nValue(
      "Magnifier",
      "放大镜",
      "돋보기",
      "Lupa"
    ),
    magnifierTooltip: new I18nValue(
      "In the pagination reading mode, you can temporarily zoom in on an image by dragging it with the mouse click, and the image will follow the movement of the cursor.",
      "在翻页阅读模式下，你可以通过鼠标左键拖动图片临时放大图片以及图片跟随指针移动。",
      "Pagination 읽기 모드에서 마우스 클릭으로 이미지를 드래그하면 일시적으로 이미지를 확대할 수 있으며, 이미지가 마우스 커서의 움직임을 따라 이동합니다.",
      "En el modo de lectura por paginación, puedes hacer un zoom temporal en una imagen arrastrándola con el clic del mouse, y la imagen seguirá el movimiento del cursor."
    ),
    autoEnterBig: new I18nValue(
      "Auto Big",
      "自动大图",
      "이미지 바로 보기",
      "Auto Grande"
    ),
    autoEnterBigTooltip: new I18nValue(
      "Directly enter the Big image view when the script's entry is clicked or auto-opened",
      "点击脚本入口或自动打开脚本后直接进入大图阅读视图。",
      "이미지 뷰어가 열리면 즉시 큰 이미지 보기 모드로 전환됩니다.",
      "Entrar directamente en la vista de imagen grande cuando se haga clic en la entrada del script o se abra automáticamente"
    ),
    pixivJustCurrPage: new I18nValue(
      "Pixiv Only Load Current Page",
      "Pixiv仅加载当前作品页",
      "Pixiv 현재 페이지만 로드",
      "Pixiv: Cargar solo la página actual"
    ),
    pixivJustCurrPageTooltip: new I18nValue(
      `In Pixiv, if the current page is on a artwork page, only load the images from current page. Disable this option or the current page is on the artist's homepage, all images by that author will be loaded. <br>Note: You can continue loading all the remaining images by the author by scrolling on the page or pressing "Try Fetch Next Page" key after disabling this option.`,
      "在Pixiv中，如果当前页是作品页则只加载当前页中的图片，如果该选项禁用或者当前页是作者主页，则加载该作者所有的作品。<br>注：你可以禁用该选项后，然后通过页面滚动或按下Shift+n来继续加载该作者所有的图片。",
      'Pixiv에서 현재 페이지가 작품 페이지일 경우, 해당 페이지의 이미지들만 로드합니다. 이 옵션을 비활성화하거나 현재 페이지가 작가의 홈 페이지일 경우, 해당 작가의 모든 이미지를 로드합니다. <br>참고: 이 옵션을 비활성화한 후, 페이지를 스크롤하거나 "다음 페이지 로딩 재시도" 키를 눌러 작가의 나머지 이미지를 계속 로드할 수 있습니다.',
      'En Pixiv, si la página actual está en una página de una obra, solo se cargarán las imágenes de la página actual. Desactive esta opción si la página actual está en la página de inicio del artista; en ese caso, se cargarán todas las imágenes de ese autor. <br>Nota: Puedes continuar cargando todas las imágenes restantes del autor desplazándote por la página o presionando la tecla "Intentar cargar la siguiente página" después de desactivar esta opción.'
    ),
    // config panel select option
    readMode: new I18nValue(
      "Read Mode",
      "阅读模式",
      "읽기 모드",
      "Modo de lectura"
    ),
    readModeTooltip: new I18nValue(
      "Switch to the next picture when scrolling, otherwise read continuously",
      "滚动时切换到下一张图片，否则连续阅读",
      "스크롤 시 다음 이미지로 전환하거나, 이미지들을 연속으로 배치합니다.",
      "Cambiar a la siguiente imagen al desplazarse, de lo contrario, leer de manera continua"
    ),
    stickyMouse: new I18nValue(
      "Sticky Mouse",
      "黏糊糊鼠标",
      "마우스 고정",
      "Mouse adhesivo"
    ),
    stickyMouseTooltip: new I18nValue(
      "In pagination reading mode, scroll a single image automatically by moving the mouse.",
      "非连续阅读模式下，通过鼠标移动来自动滚动单张图片。",
      "페이지 읽기 모드에서 마우스 커서를 움직여 하나의 이미지를 자동으로 스크롤합니다.",
      "En el modo de lectura por paginación, desplaza una sola imagen automáticamente moviendo el mouse."
    ),
    minifyPageHelper: new I18nValue(
      "Minify Control Bar",
      "最小化控制栏",
      "컨트롤 바 최소화",
      "Minimizar barra de control"
    ),
    minifyPageHelperTooltip: new I18nValue(
      "Minify Control Bar",
      "最小化控制栏",
      "언제 컨트롤 바를 최소화할지 선택합니다.",
      "Minimizar barra de control"
    ),
    hitomiFormat: new I18nValue(
      "Hitomi Image Format",
      "Hitomi 图片格式",
      "Hitomi 이미지 형식",
      "Formato de imagen de Hitomi"
    ),
    hitomiFormatTooltip: new I18nValue(
      "In Hitomi, Fetch images by the format.<br>if Auto then try Avif > Jxl > Webp, Requires Refresh",
      "在Hitomi中的源图格式。<br>如果是Auto，则优先获取Avif > Jxl > Webp，修改后需要刷新生效。",
      "Hitomi에서 이미지를 어떤 종류의 파일로 가져올 지 선택합니다.<br>Auto 설정 시 Avif > Jxl > Webp 순으로 시도하며, 변경 후 새로고침이 필요합니다.",
      "En Hitomi, obtener imágenes por formato.<br>Si está en automático, intentará Avif > Jxl > Webp. Requiere actualización."
    ),
    ehentaiTitlePrefer: new I18nValue(
      "EHentai Prefer Title",
      "EHentai标题语言",
      "EHentai 선호 제목",
      "Preferir título en EHentai"
    ),
    ehentaiTitlePreferTooltip: new I18nValue(
      "Many galleries have both an English/Romanized title and a title in Japanese script. <br>Which one do you want to use as the archive filename?",
      "许多图库都同时拥有英文/罗马音标题和日文标题，<br>您希望下载时哪个作为文件名？",
      "많은 갤러리가 영어/로마자 제목과 일본어 제목을 모두 가지고 있습니다. <br>어떤 것을 아카이브 파일 이름으로 사용할지 선택할 수 있습니다.",
      "Muchas galerías tienen tanto un título en inglés/romanizado como un título en script japonés.<br>¿Cuál quieres usar como nombre de archivo?"
    ),
    reverseMultipleImagesPost: new I18nValue(
      "Descending Images In Post",
      "反转推文图片顺序",
      "포스트 이미지 내림차순 정렬",
      "Imágenes descendentes en la publicación"
    ),
    reverseMultipleImagesPostTooltip: new I18nValue(
      "Reverse order for post with multiple images attatched",
      "反转推文图片顺序",
      "여러 이미지가 첨부된 포스트 내 이미지들의 순서를 역순으로 정렬합니다.",
      "Orden inverso para publicaciones con múltiples imágenes adjuntas"
    ),
    filenameOrder: new I18nValue(
      "Filename Order",
      "文件名排序",
      "Orden de nombres de archivo"
    ),
    filenameOrderTooltip: new I18nValue(
      `Filename Sorting Rules for Downloaded Files:
<br>  Auto: Detect whether the original filenames are consistent with the reading order under natural sorting (Windows). If consistent, keep the original filenames; otherwise, prepend a number to the original filenames to ensure the correct order.
<br>  Numbers: Ignore the original filenames and rename the files directly according to the reading order.
<br>  Original: Keep only the original filenames without ensuring the reading order, which may result in overwriting files with the same name.
<br>  Alphabetically: Detect whether the original filenames are consistent with the reading order under alphabetical sorting (Linux). If consistent, keep the original filenames; otherwise, prepend a number to the original filenames to ensure the correct order. `,
      `下载文件内的文件名排序规则：
<br>  Auto: 检测原文件名在自然排序(Windows)下是否与阅读顺序一致，如果一致保留原文件名，否则将在原文件名前添加序号以保证顺序。
<br>  Numbers: 忽略原文件名，直接以阅读顺序为文件命名。
<br>  Original: 只保留原文件名，不能保证阅读顺序以及同名文件覆盖。
<br>  Alphabetically: 检测原文件名在字母排序下(Linux)是否与阅读顺序一致，如果一致保留原文件名，否则将在原文件名前添加序号以保证顺序。`,
      `다운로드 파일의 파일명 정렬 규칙:
<br>  Auto: 원본 파일명이 자연 정렬(Windows)에서 읽기 순서와 일치하는지 감지합니다. 일치하는 경우 원본 파일명을 유지하고, 그렇지 않으면 순서를 보장하기 위해 파일명 앞에 번호를 추가합니다.
<br>  Numbers: 원본 파일명을 무시하고 읽기 순서에 따라 파일명을 직접 지정합니다.
<br>  Original: 원본 파일명만 유지하며, 읽기 순서가 보장되지 않으며 동일한 이름의 파일이 덮어쓰일 수 있습니다.
<br>  Alphabetically: 원본 파일명이 알파벳 정렬(Linux)에서 읽기 순서와 일치하는지 감지합니다. 일치하는 경우 원본 파일명을 유지하고, 그렇지 않으면 순서를 보장하기 위해 파일명 앞에 번호를 추가합니다. `,
      `Reglas de ordenamiento de nombres de archivos para archivos descargados:
<br>  Auto: Detecta si los nombres de archivo originales son consistentes con el orden de lectura bajo el ordenamiento natural (Windows). Si son consistentes, conserva los nombres de archivo originales; de lo contrario, antepone un número a los nombres originales para garantizar el orden correcto.
<br>  Numbers: Ignora los nombres de archivo originales y renombra los archivos directamente según el orden de lectura.
<br>  Original: Conserva únicamente los nombres de archivo originales sin garantizar el orden de lectura, lo que puede resultar en sobrescribir archivos con el mismo nombre.
<br>  Alphabetically: Detecta si los nombres de archivo originales son consistentes con el orden de lectura bajo el orden alfabético (Linux). Si son consistentes, conserva los nombres de archivo originales; de lo contrario, antepone un número a los nombres originales para garantizar el orden correcto. `
    ),
    dragToMove: new I18nValue(
      "Drag to Move the control bar",
      "拖动移动",
      "드래그해서 컨트롤 바 이동",
      "Arrastra para mover la barra de control"
    ),
    resetDownloaded: new I18nValue(
      "Reset Downloaded Images",
      "重置已下载的图片",
      "다운로드한 이미지 초기화",
      "Restablecer imágenes descargadas"
    ),
    resetDownloadedConfirm: new I18nValue(
      "You will reset Downloaded Images!",
      "已下载的图片将会被重置为未下载！",
      "이미지들은 다운로드하지 않은 상태로 초기화됩니다!",
      "¡Vas a restablecer las imágenes descargadas!"
    ),
    resetFailed: new I18nValue(
      "Reset Failed Images",
      "重置下载错误的图片",
      "로딩 실패한 이미지 초기화",
      "Restablecer imágenes fallidas"
    ),
    showHelp: new I18nValue(
      "Help",
      "帮助",
      "도움말",
      "Ayuda"
    ),
    showKeyboard: new I18nValue(
      "Keyboard",
      "快捷键",
      "단축키",
      "Teclado"
    ),
    showSiteProfiles: new I18nValue(
      "Site Profiles",
      "站点配置",
      "사이트 설정",
      "Perfiles del sitio"
    ),
    showStyleCustom: new I18nValue(
      "Style",
      "样式",
      "스타일",
      "Estilo"
    ),
    controlBarStyleTooltip: new I18nValue(
      "Click on an item to modify its display text, such as emoji or personalized text. Changes will take effect after restarting.",
      "点击某项后修改其显示文本，比如emoji或个性文字，也许svg，重启后生效。",
      "아이템을 클릭하여 이모티콘이나 텍스트 등을 수정할 수 있습니다. 변경 사항은 재시작 후 적용됩니다."
    ),
    letUsStar: new I18nValue(
      "Let's Star",
      "点星",
      "별 눌러줘",
      "Presiona la estrella"
    ),
    // download panel
    download: new I18nValue(
      "DL",
      "下载",
      "다운로드",
      "Descargar"
    ),
    forceDownload: new I18nValue(
      "Take Loaded",
      "获取已下载的",
      "다운로드된 이미지 가져오기",
      "Tomar cargado"
    ),
    downloadStart: new I18nValue(
      "Start Download",
      "开始下载",
      "다운로드 시작",
      "Comenzar descarga"
    ),
    downloading: new I18nValue(
      "Downloading...",
      "下载中...",
      "다운로드 중...",
      "Descargando..."
    ),
    downloadFailed: new I18nValue(
      "Failed(Retry)",
      "下载失败(重试)",
      "실패(재시도)",
      "Fallido(Reintentar)"
    ),
    downloaded: new I18nValue(
      "Downloaded",
      "下载完成",
      "다운로드 완료",
      "Descargado"
    ),
    packaging: new I18nValue(
      "Packaging...",
      "打包中...",
      "압축 중...",
      "Empaquetando..."
    ),
    status: new I18nValue(
      "Status",
      "状态",
      "상태",
      "Estado"
    ),
    selectChapters: new I18nValue(
      "Select Chapters",
      "章节选择",
      "챕터 선택",
      "Seleccionar capítulos"
    ),
    cherryPick: new I18nValue(
      "Cherry Pick",
      "范围选择",
      "범위 선택",
      "Seleccionar individualmente"
    ),
    enable: new I18nValue(
      "Enable",
      "启用",
      "활성화",
      "Habilitar"
    ),
    enableTooltips: new I18nValue(
      "Enable the script on this site.",
      "在此站点上启用本脚本的功能。",
      "선택된 사이트에서만 스크립트를 활성화합니다.",
      "Habilitar el script en este sitio."
    ),
    enableAutoOpen: new I18nValue(
      "Auto Open",
      "自动打开",
      "자동 크게 보기",
      "Apertura automática"
    ),
    enableAutoOpenTooltips: new I18nValue(
      "Automatically open the interface of this script when entering the corresponding page.",
      "当进入对应的生效页面后，自动打开本脚本界面。",
      "해당 페이지에 들어갈 때 이 스크립트의 인터페이스를 자동으로 엽니다.",
      "Abrir automáticamente la interfaz de este script al ingresar a la página correspondiente."
    ),
    enableFlowVision: new I18nValue(
      "Flow Vision",
      "自适应视图",
      "Flow Vision",
      "Flow Vision"
    ),
    enableFlowVisionTooltips: new I18nValue(
      `Enable a new thumbnail list layout where the images in each row have uniform height, but the number of images per row is automatically adjusted. 
    <br>The overall appearance is more compact and comfortable, suitable for illustration-based websites with irregular image aspect ratios.
    <br>Note: Since some websites cannot retrieve image aspect ratio information, the effect may be impacted.`,
      `启用一种新的缩略图列表布局，使每行的图片高度一致，但自动分配每行的图片数量。
    <br>整体看起来更紧凑舒适，适合图片宽高比不规则的插画类站点。
    <br>注意：由于一些站点无法提取得知图片的宽高比，因此效果可能会受到影响。`,
      `Enable a new thumbnail list layout where the images in each row have uniform height, but the number of images per row is automatically adjusted. 
    <br>The overall appearance is more compact and comfortable, suitable for illustration-based websites with irregular image aspect ratios.
    <br>Note: Since some websites cannot retrieve image aspect ratio information, the effect may be impacted.`,
      `Activar un nuevo diseño de lista de miniaturas donde las imágenes en cada fila tienen altura uniforme, pero el número de imágenes por fila se ajusta automáticamente. 
    <br>La apariencia general es más compacta y cómoda, adecuada para sitios web basados en ilustraciones con relaciones de aspecto de imagen irregulares.
    <br>Nota: Dado que algunos sitios web no pueden recuperar la información de la relación de aspecto de las imágenes, el efecto puede verse afectado.`
    ),
    addRegexp: new I18nValue(
      "Add Work URL Regexp",
      "添加生效地址规则",
      "URL 정규식 추가",
      "Agregar expresión regular de URL"
    ),
    help: new I18nValue(
      `
<h2>[How to Use? Where is the Entry?]</h2>
<p>The script typically activates on gallery homepages or artist homepages. For example, on E-Hentai, it activates on the gallery detail page, or on Twitter, it activates on the user&#39;s homepage or tweets.</p>
<p>When active, a <strong>&lt;🎑&gt;</strong> icon will appear at the bottom left of the page. Click it to enter the script&#39;s reading interface.</p>
<h2>[Can the Script&#39;s Entry Point or Control Bar be Relocated?]</h2>
<p>Yes! At the bottom of the configuration panel, there&#39;s a <strong>Drag to Move</strong> option. Drag the icon to reposition the control bar anywhere on the page.</p>
<h2>[Can the Script Auto-Open When Navigating to the Corresponding Page?]</h2>
<p>Yes! There is an <strong>Auto Open</strong> option in the configuration panel. Enable it to activate this feature.</p>
<h2>[How to Zoom Images?]</h2>
<p>There are several ways to zoom images in big image reading mode:</p>
<ul>
<li>Right-click + mouse wheel</li>
<li>Keyboard shortcuts</li>
<li>Zoom controls on the control bar: click the -/+ buttons, scroll the mouse wheel over the numbers, or drag the numbers left or right.</li>
</ul>
<h2>[How to Open Images from a Specific Page?]</h2>
<p>In the thumbnail list interface, simply type the desired page number on your keyboard (without any prompt) and press Enter or your custom shortcuts.</p>
<h2>[About the Thumbnail List]</h2>
<p>The thumbnail list interface is the script&#39;s most important feature, allowing you to quickly get an overview of the entire gallery.</p>
<p>Thumbnails are also lazy-loaded, typically loading about 20 images, which is comparable to or even fewer requests than normal browsing.</p>
<p>Pagination is also lazy-loaded, meaning not all gallery pages load at once. Only when you scroll near the bottom does the next page load.</p>
<p>Don&#39;t worry about generating a lot of requests by quickly scrolling through the thumbnail list; the script is designed to handle this efficiently.</p>
<h2>[About Auto-Loading and Pre-Loading]</h2>
<p>By default, the script automatically and slowly loads large images one by one.</p>
<p>You can still click any thumbnail to start loading and reading from that point, at which time auto-loading will stop and pre-load 3 images from the reading position.</p>
<p>Just like the thumbnail list, you don&#39;t need to worry about generating a lot of loading requests by fast scrolling.</p>
<h2>[About Downloading]</h2>
<p>Downloading is integrated with large image loading. When you finish browsing a gallery and want to save and download the images, you can click <strong>Start Download</strong> in the download panel. don&#39;t worry about re-downloading already loaded images.</p>
<p>You can also directly click <strong>Start Download</strong> in the download panel without reading.</p>
<p>Alternatively, click the <strong>Take Loaded</strong> button in the download panel if some images consistently fail to load. This will save the images that have already been loaded.</p>
<p>The download panel&#39;s status indicators provide a clear view of image loading progress.</p>
<p><strong>Note:</strong> When the download file size exceeds 1.2GB, split compression will be automatically enabled. If you encounter errors while extracting the files, please update your extraction software or use 7-Zip.</p>
<h2>[Can I Select the Download Range?]</h2>
<p>Yes, the download panel has an option to select the download range(Cherry Pick), which applies to downloading, auto-loading, and pre-loading.</p>
<p>Even if an image is excluded from the download range, you can still click its thumbnail to view it, which will load the corresponding large image.</p>
<h2>[How to Select Images on Some Illustration Sites?]</h2>
<p>In the thumbnail list, you can use some hotkeys to select images:</p>
<ul>
<li><strong>Ctrl + Left Click:</strong> Selects the image. The first selection will exclude all other images.</li>
<li><strong>Ctrl + Shift + Left Click:</strong> Selects the range of images between this image and the last selected image.</li>
<li><strong>Alt + Left Click:</strong> Excludes the image. The first exclusion will select all other images.</li>
<li><strong>Alt + Shift + Left Click:</strong> Excludes the range of images between this image and the last excluded image.</li>
</ul>
<p>In addition, there are several other methods:</p>
<ul>
<li>Middle-click on a thumbnail to open the original image url, then right-click to save the image.</li>
<li>Set the download range to 1 in the download panel. This excludes all images except the first one. Then, click on thumbnails of interest in the list, which will load the corresponding large images. After selecting, clear the download range and click <strong>Take Loaded</strong> to package and download your selected images.</li>
<li>Turn off auto-loading and set pre-loading to 1 in the configuration panel, then proceed as described above.</li>
</ul>
<h2>[Can I Operate the Script via Keyboard?]</h2>
<p>Yes! There&#39;s a <strong>Keyboard</strong> button at the bottom of the configuration panel. Click it to view or configure keyboard operations.</p>
<p>You can even configure it for one-handed full keyboard operation, freeing up your other hand!</p>
<h2>[How to Disable Auto-Open on Certain Sites?]</h2>
<p>There&#39;s a <strong>Site Profiles</strong> button at the bottom of the configuration panel. Click it to exclude certain sites from auto-opening. For example, Twitter or Booru-type sites.</p>
<h2>[How to Disable This Script on Certain Sites?]</h2>
<p>There&#39;s a <strong>Site Profiles</strong> button at the bottom of the configuration panel to exclude specific sites. Once excluded, the script will no longer activate on those sites.</p>
<p>To re-enable a site, you need to do so from a site that hasn&#39;t been excluded.</p>
<h2>[How to Feed the Author]</h2>
<p>Give me a star on <a target="_blank" href="https://github.com/MapoMagpie/eh-view-enhance">Github</a> or a good review on <a target="_blank" href="https://greasyfork.org/scripts/397848-e-hentai-view-enhance">Greasyfork</a>.</p>
<p>Please do not review on Greasyfork, as its notification system cannot track subsequent feedback. Many people leave an issue and never back.
Report issues here: <a target="_blank" href="https://github.com/MapoMagpie/eh-view-enhance/issues">issue</a></p>
<h2>[How to Reopen the Guide?]</h2>
<p>Click the <strong>Help</strong> button at the bottom of the configuration panel.</p>
<h2>[Some Unresolved Issues]</h2>
<ul>
<li>When using Firefox to open Twitter&#39;s homepage in a new tab, then navigating to the user&#39;s homepage, the script doesn&#39;t activate and requires page refresh.</li>
<li>Still Firefox, Download function not working on twitter.com, firefox will not redirect twitter.com to x.com when open in new tab, you should use x.com instead twitter.com.</li>
</ul>
`,
      `
<h2>[如何使用？入口在哪里？]</h2>
<p>脚本一般生效于画廊详情页或画家的主页或作品页。比如在E-Hentai上，生效于画廊详情页，或者在Twitter上，生效于推主的主页或推文。</p>
<p>生效时，在页面的左下方会有一个<strong>&lt;🎑&gt;</strong>图标，点击后即可进入脚本的阅读界面。</p>
<h2>[脚本的入口或控制栏可以更改位置吗？]</h2>
<p>可以！在配置面板的下方，有一个<strong>拖拽移动</strong>的选项，对着图标进行拖动，你可以将控制栏移动到页面上的任意位置。</p>
<h2>[进入对应的页面的，可以自动打开脚本吗？]</h2>
<p>可以！在配置面板中，有一个<strong>自动打开</strong>的选项，启用即可。</p>
<h2>[如何缩放图片？]</h2>
<p>有几种方式可以在大图阅读模式中缩放图片：</p>
<ul>
<li>鼠标右键+滚轮</li>
<li>键盘快捷键</li>
<li>控制栏上的缩放控制，点击-/+按钮，或者在数字上滚动滚轮，或者左右拖动数字。</li>
</ul>
<h2>[如何打开指定页数的图片？]</h2>
<p>在缩略图列表界面中，直接在键盘上输入数字(没有提示)，然后按下回车或自定义的快捷键。</p>
<h2>[关于缩略图列表。]</h2>
<p>缩略图列表是脚本最重要的特性，可以让你快速地了解整个画廊的情况。</p>
<p>并且缩略图也是延迟加载的，通常会加载20张左右，与正常浏览所发出的请求相当，甚至更低。</p>
<p>并且分页也是延迟加载的，并不会一次性加载画廊的所有分页，只有滚动到接近底部时，才会加载下一页。</p>
<p>不用担心因为在缩略图列表中快速滚动而导致发出大量的请求，脚本充分考虑到了这一点。</p>
<h2>[关于自动加载和预加载。]</h2>
<p>默认配置下，脚本会自动且缓慢地一张接一张地加载大图。</p>
<p>你仍然可以点击任意位置的缩略图，并从该处开始加载并阅读，此时会自动加载会停止并从阅读的位置预加载3张图片。</p>
<p>同缩略图列表一样，无需担心因为快速滚动而导致发出大量的加载请求。</p>
<h2>[关于下载。]</h2>
<p>下载与大图加载是一体的，当你浏览完画廊时，突然想起来要保存下载，此时你可以在下载面板中点击<strong>开始下载</strong>，不必担心会重复下载已经加载过的图片。</p>
<p>当然你也可以不浏览，直接在下载面板中点击<strong>开始下载</strong>。</p>
<p>或者点击下载面板中的<strong>获取已下载的</strong>按钮，当一些图片总是加载失败的时候，你可以使用此功能来保存已经加载过的图片。</p>
<p>通过下载面板中的状态可以直观地看到图片加载的情况。</p>
<p><strong>注意：</strong>当下载文件大小超过1.2G后，会自动启用分卷压缩。当使用解压软件解压出错时，请更新解压软件或使用7-Zip。</p>
<h2>[可以选择下载范围吗？]</h2>
<p>可以，在下载面板中有选择下载范围的功能，该功能对下载、自动加载、预加载都生效。</p>
<p>另外，如果一张图片被排除在下载范围之外，你仍然可以点击该图片的缩略图进行浏览，这会加载对应的大图。</p>
<h2>[如何在一些插画网站上挑选图片？]</h2>
<p>在缩略图列表中使用一些快捷键可以进行图片的挑选。</p>
<ul>
<li><strong>Ctrl+鼠标左键：</strong> 选中该图片，当第一次选中时，其他的图片都会被排除。</li>
<li><strong>Ctrl+Shift+鼠标左键：</strong> 选中该图片与上一张选中的图片之间的范围。</li>
<li><strong>Alt+鼠标左键：</strong> 排除该图片，当第一次排除时，其他的图片都会被选中。</li>
<li><strong>Alt+Shift+鼠标左键：</strong> 排除该图片与上一张排除的图片之间的范围。</li>
</ul>
<p>除此之外还有几种方式：</p>
<ul>
<li>在缩略图上按下鼠标中键，即可打开图片的原始地址，之后你可以右键保存图片。</li>
<li>在下载面板中设置下载范围为1，这样会排除第一张图片以外的所有图片，之后在缩略图列表上点击你感兴趣的图片，对应的大图会被加载，最终挑选完毕后，删除掉下载范围并点击<strong>获取已下载的</strong>，这样你挑选的图片会被打包下载。</li>
<li>在配置面板中关闭自动加载，并设置预加载数量为1，之后与上面的方法类似。</li>
</ul>
<h2>[可以通过键盘来操作吗？]</h2>
<p>可以！在配置面板的下方，有一个<strong>快捷键</strong>按钮，点击后可以查看键盘操作，或进行配置。</p>
<p>甚至可以配置为单手全键盘操作，解放另一只手！</p>
<h2>[不想在某些网站启用自动打开功能？]</h2>
<p>在配置面板的下方，有一个<strong>站点配置</strong>按钮，点击后可以对一些不适合自动打开的网站进行排除。比如Twitter或Booru类的网站。</p>
<h2>[不想在某些网站使用这个脚本？]</h2>
<p>在配置面板的下方，有一个<strong>站点配置</strong>的按钮，可对一些站点进行排除，排除后脚本不会再生效。</p>
<p>如果想重新启用该站点，需要在其他未排除的站点中启用被禁用的站点。</p>
<h2>[如何Feed作者。]</h2>
<p>给我<a target="_blank" href="https://github.com/MapoMagpie/eh-view-enhance">Github</a>星星，或者<a target="_blank" href="https://greasyfork.org/scripts/397848-e-hentai-view-enhance">Greasyfork</a>上好评。</p>
<p>请勿在Greasyfork上反馈问题，因为该站点的通知系统无法跟踪后续的反馈。很多人只是留下一个问题，再也没有回来过。
请在此反馈问题: <a target="_blank" href="https://github.com/MapoMagpie/eh-view-enhance/issues">issue</a></p>
<h2>[如何再次打开指南？]</h2>
<p>在配置面板的下方，点击<strong>帮助</strong>按钮。</p>
<h2>[一些未能解决的问题。]</h2>
<ul>
<li>使用Firefox通过新标签页打开Twitter的首页后，然后跳转到推主的主页，脚本无法生效，需要刷新页面。</li>
<li>使用Firefox打开twitter.com这个域名，下载功能会失效，这可能和Firefox不能自动跳转到x.com有关，你需要停止使用twitter.com这个域名。</li>
</ul>
`,
      `
<h2>[사용 방법? 스크립트는 어떻게 실행되나요?]</h2>
<p>이 스크립트는 주로 갤러리 홈페이지나 아티스트 홈페이지에서 활성화됩니다. 예를 들어, E-Hentai에서는 갤러리 상세 페이지에서, Twitter에서는 사용자의 홈 또는 트윗에서, arca.live에서는 작성된 글에서 활성화됩니다.</p>
<p>스크립트가 활성화되면 페이지의 왼쪽 하단에 <strong>&lt;🎑&gt;</strong> 아이콘이 나타납니다. 이 아이콘을 클릭하면 스크립트의 읽기 화면으로 진입할 수 있습니다.</p>

<h2>[스크립트의 진입점 또는 컨트롤 바를 이동할 수 있나요?]</h2>
<p>네! 설정 패널 하단에 <strong>드래그해서 컨트롤 바 이동</strong> 옵션이 있습니다. 이 아이콘을 드래그하여 페이지 내 원하는 위치로 컨트롤 바를 이동할 수 있습니다.</p>

<h2>[해당 페이지로 이동할 때 스크립트가 자동으로 열리게 할 수 있나요?]</h2>
<p>네! 설정 패널에서 <strong>자동으로 이미지 열기</strong> 옵션을 활성화하면 이 기능이 켜집니다.</p>

<h2>[이미지를 확대하려면 어떻게 해야 하나요?]</h2>
<p>큰 이미지 보기 모드에서 이미지를 확대하는 방법은 여러 가지가 있습니다:</p>
<ul>
<li>오른쪽 클릭 + 마우스 휠</li>
<li>키보드 단축키</li>
<li>컨트롤 바의 확대/축소 컨트롤: -/+ 버튼을 클릭하거나, 숫자 위에서 마우스 휠을 스크롤하거나, 숫자를 좌우로 드래그하세요.</li>
</ul>

<h2>[특정 페이지의 이미지를 열려면 어떻게 해야 하나요?]</h2>
<p>썸네일 리스트 화면에서 원하는 페이지 번호를 키보드로 입력하고 Enter 키나 사용자 지정 단축키를 누르세요.</p>

<h2>[썸네일 리스트에 대하여]</h2>
<p>썸네일 리스트 화면은 스크립트의 가장 중요한 기능으로, 전체 갤러리를 빠르게 둘러볼 수 있게 해줍니다.</p>
<p>썸네일은 지연 로딩되며, 일반적으로 약 20개의 이미지를 로드합니다. 이는 일반적인 브라우징보다 요청 수가 적거나 비슷한 정도입니다.</p>
<p>페이징 또한 지연 로딩됩니다. 즉, 모든 갤러리의 페이지가 한 번에 로드되지 않습니다. 하단 근처로 스크롤할 때만 다음 페이지가 로드됩니다.</p>
<p>썸네일 리스트를 빠르게 스크롤해도 괜찮습니다. 이 스크립트는 그런 경우에도 많은 요청이 발생하지 않도록 효율적으로 설계되어 있습니다.</p>

<h2>[자동 로딩 및 사전 로딩에 대하여]</h2>
<p>기본적으로 스크립트는 큰 이미지를 하나씩 자동으로 천천히 로드합니다.</p>
<p>원하는 썸네일을 클릭하여 그 지점에서 로딩 및 읽기를 시작할 수 있으며, 이때 자동 로딩이 중지되고 읽기 위치에서 3개의 이미지를 사전 로딩합니다.</p>
<p>썸네일 리스트와 마찬가지로 빠르게 스크롤해도 많은 로딩 요청이 발생하지 않도록 설계되어 있으니 걱정하지 않으셔도 됩니다.</p>

<h2>[다운로드에 대하여]</h2>
<p>다운로드는 큰 이미지 로딩과 통합되어 있습니다. 갤러리를 모두 본 후 이미지를 저장하고 다운로드하려면 다운로드 패널에서 <strong>다운로드 시작</strong>을 클릭하세요. 이미 로드된 이미지를 다시 다운로드하는 것에 대해서는 걱정 안 하셔도 됩니다.</p>
<p>이미지를 보지 않고 바로 다운로드 패널에서 <strong>다운로드 시작</strong>을 클릭할 수도 있습니다.</p>
<p>또한 일부 이미지가 로드되지 않을 때는 다운로드 패널에서 <strong>이미 다운로드한 이미지 가져오기</strong> 버튼을 클릭하여 이미 로드된 이미지를 저장할 수 있습니다.</p>
<p>다운로드 패널의 상태 표시기를 통해 이미지 로딩 진행 상황을 명확히 볼 수 있습니다.</p>
<p><strong>참고:</strong> 다운로드 파일 크기가 1.2GB를 초과할 경우, 분할 압축이 자동으로 활성화됩니다. 파일을 추출하는 동안 오류가 발생하면 추출 소프트웨어를 업데이트하거나 7-Zip을 사용하세요.</p>

<h2>[다운로드 범위를 선택할 수 있나요?]</h2>
<p>네, 다운로드 패널에는 다운로드 범위를 선택할 수 있는 옵션(Cherry Pick)이 있으며, 이는 다운로드, 자동 로딩 및 사전 로딩에 적용됩니다.</p>
<p>다운로드 범위에서 제외된 이미지라도 썸네일을 클릭하여 해당 큰 이미지를 로드할 수 있습니다.</p>

<h2>[일러스트 사이트에서 이미지를 선택하려면 어떻게 해야 하나요?]</h2>
<p>썸네일 리스트에서 다음 핫키를 사용하여 이미지를 선택할 수 있습니다:</p>
<ul>
<li><strong>Ctrl + 왼쪽 클릭:</strong> 이미지를 선택합니다. 첫 번째 선택은 다른 모든 이미지를 제외합니다.</li>
<li><strong>Ctrl + Shift + 왼쪽 클릭:</strong> 이 이미지와 마지막으로 선택된 이미지 사이의 이미지를 선택합니다.</li>
<li><strong>Alt + 왼쪽 클릭:</strong> 이미지를 제외합니다. 첫 번째 제외는 다른 모든 이미지를 선택합니다.</li>
<li><strong>Alt + Shift + 왼쪽 클릭:</strong> 이 이미지와 마지막으로 제외된 이미지 사이의 이미지를 제외합니다.</li>
</ul>
<p>추가적으로 몇 가지 방법이 더 있습니다:</p>
<ul>
<li>썸네일에서 중간 클릭으로 원본 이미지 URL을 열고, 그 후 오른쪽 클릭하여 이미지를 저장합니다.</li>
<li>다운로드 패널에서 다운로드 범위를 1로 설정하세요. 이는 첫 번째 이미지 이외의 모든 이미지를 제외합니다. 그런 다음 목록에서 관심 있는 썸네일을 클릭하여 해당 큰 이미지를 로드합니다. 선택한 후, 다운로드 범위를 해제하고 <strong>이미 다운로드한 이미지 가져오기</strong>를 클릭하여 선택한 이미지를 패키징하고 다운로드합니다.</li>
<li>자동 로딩을 끄고 설정 패널에서 사전 로딩을 1로 설정한 다음, 위의 방법대로 진행합니다.</li>
</ul>

<h2>[키보드로 스크립트를 조작할 수 있나요?]</h2>
<p>네! 설정 패널 하단에 <strong>단축키</strong> 버튼이 있습니다. 이 버튼을 클릭하여 키보드 조작을 확인하거나 설정할 수 있습니다.</p>
<p>한 손으로 모든 키보드 조작을 할 수 있도록 설정할 수도 있어, 다른 손을 자유롭게 쓸 수 있습니다!</p>

<h2>[특정 사이트에서 자동 열기를 비활성화하려면 어떻게 해야 하나요?]</h2>
<p>설정 패널 하단에 있는 <strong>사이트 설정</strong> 버튼을 클릭하여 특정 사이트에서 자동 열기를 제외할 수 있습니다. 예를 들어, Twitter나 Booru 타입의 사이트를 제외할 수 있습니다.</p>

<h2>[특정 사이트에서 이 스크립트를 비활성화하려면 어떻게 해야 하나요?]</h2>
<p>설정 패널 하단의 <strong>사이트 설정</strong> 버튼을 클릭하여 특정 사이트를 제외할 수 있습니다. 제외된 사이트에서는 더 이상 스크립트가 활성화되지 않습니다.</p>
<p>사이트를 다시 활성화하려면 제외되지 않은 사이트에서 설정해야 합니다.</p>

<h2>[개발자에게 도움을 주고 싶다면?]</h2>
<p><a target="_blank" href="https://github.com/MapoMagpie/eh-view-enhance">Github</a>에 별을 주시거나, <a target="_blank" href="https://greasyfork.org/scripts/397848-e-hentai-view-enhance">Greasyfork</a>에서 좋은 리뷰를 남겨주세요.</p>
<p>단, Greasyfork에 버그 제보 내용의 리뷰를 남기지 마세요. 해당 플랫폼의 알림 시스템이 후속 피드백을 추적할 수 없습니다. 많은 사람들이 문제를 제기하고 다시 돌아오지 않습니다.<br> 문제는 여기에 보고해 주세요: <a target="_blank" href="https://github.com/MapoMagpie/eh-view-enhance/issues">이슈</a></p>

<h2>[가이드를 다시 열려면?]</h2>
<p>설정 패널 하단에 있는 <strong>도움말</strong> 버튼을 클릭하세요.</p>

<h2>[해결되지 않은 문제들]</h2>
<ul>
<li>Firefox를 사용하여 Twitter의 홈페이지를 새 탭에서 연 후 사용자의 홈페이지로 이동하면 스크립트가 활성화되지 않으며 페이지 새로고침이 필요합니다.</li>
<li>Chrome과 Firefox의 프레임내에서 사이트를 여는 것을 방지하는 확장 프로그램을 사용하는 경우, E-Hentai에서 갤러리 내 이미지를 열 수 없게 되며 설정 메뉴 또한 표시되지 않습니다. 이 문제를 해결하려면 확장 프로그램을 비활성화하거나 예외 항목을 추가하세요.</li>
</ul>

<h2>[작동 원리]</h2>
<p>이 스크립트는 단순한 jQuery(구형 스크립트)에서부터 최첨단 Vue.js 프레임워크에 이르기까지 매우 다양한 웹 기술에서 작동합니다. 이 스크립트는 해당 기술들을 해킹하지 않고도 상호작용할 수 있도록 최적화되어 있습니다.</p>
<p>설정 패널의 자동 저장 및 사이트별 설정 기능은 스크립트의 본체 코드에 저장되지 않으며, 스크립트에서 수집하는 정보는 로컬 컴퓨터에만 저장됩니다.</p>
<p>또한 이 스크립트는 많은 이미지를 처리할 수 있도록 효율적으로 설계되었습니다. 이미지 로딩 시점에서는 브라우저에 의존하며, 이미지 관련 데이터는 사용자 시스템의 메모리로 직접 로드됩니다. 이는 데이터 전송량과 서버 요청 수를 줄이면서도 빠르고 유연한 이미징을 가능하게 합니다.</p>

<h2>[스크립트가 작동하지 않는 이유는 무엇인가요?]</h2>
<p>이 스크립트는 웹페이지의 HTML 구조와 상호작용하기 때문에 페이지가 변경될 경우(예: 개발자가 업데이트를 하거나 광고를 삽입할 때) 예상대로 작동하지 않을 수 있습니다. 이 경우, 브라우저 콘솔을 열어 오류 메시지를 확인하세요. 오류 메시지가 표시되면 GitHub 이슈 섹션에 보고해 주세요.</p>

<h2>[기타 정보]</h2>
<p>설정 패널에서 다양한 설정 옵션을 사용할 수 있으며, 각 설정은 사용자 환경을 최적화하는 데 도움이 됩니다. 스크립트가 의도대로 작동하지 않는 경우 GitHub 이슈에서 해결 방법을 찾아보세요.</p>
`,
      `
<h2>¿Cómo se usa? ¿Dónde está la entrada</h2>
<p>El script generalmente se activa en las páginas principales de galerías o en las páginas principales de artistas. Por ejemplo, en E-Hentai, se activa en la página de detalles de la galería, o en Twitter, se activa en la página principal del usuario o en los tweets.p>
<p>Cuando esté activo, aparecerá un ícono de <strong>&lt;🎑&gt;</strong> en la parte inferior izquierda de la página.</p>
<h2>[¿Se puede reubicar el punto de entrada o la barra de control del script?]</h2>
<p>¡Sí! En la parte inferior del panel de configuración, hay una opción de <strong>Arrastrar para mover</strong>. Arrastra el ícono para reposicionar la barra de control en cualquier parte de la página.</p>
<h2>[¿Puede el script abrirse automáticamente al navegar a la página correspondiente?]</h2>
<p>¡Sí! Hay una opción de <strong>Apertura Automática</strong> en el panel de configuración. Actívala para habilitar esta función.</p>
<h2>[¿Cómo hacer zoom en las imágenes?]</h2>
<p>Hay varias formas de hacer zoom en las imágenes en el modo de lectura de imágenes grandes:</p>
<ul>
<li>Clic derecho + rueda del ratón</li>
<li>Atajos de teclado</li>
<li><li>Controles de zoom en la barra de control: haz clic en los botones -/+, desplaza la rueda del ratón sobre los números o arrastra los números hacia la izquierda o derecha.</li>
</li>
</ul>
<h2>[¿Cómo abrir imágenes de una página específica?]</h2>
<p>En la interfaz de lista de miniaturas, simplemente escribe el número de página deseado en tu teclado (sin necesidad de un aviso) y presiona Enter o utiliza tus atajos personalizados.</p>
<h2>[Acerca de la Lista de Miniaturas]</h2>
<p>La interfaz de lista de miniaturas es la característica más importante del script, ya que te permite obtener rápidamente una vista general de toda la galería.</p>
<p>Las miniaturas se cargan de forma diferida, normalmente cargando alrededor de 20 imágenes, lo que es comparable o incluso implica menos solicitudes que la navegación normal.</p>
<p>La paginación también se carga de manera diferida, lo que significa que no todas las páginas de la galería se cargan a la vez. Solo cuando te acercas al final de la página, se carga la siguiente.</p>
<p>No te preocupes por generar muchas solicitudes al desplazarte rápidamente por la lista de miniaturas; el script está diseñado para manejar esto de manera eficiente.</p>
<h2>[Acerca de la Carga Automática y la Carga Anticipada]</h2>
<p>Por defecto, el script carga automáticamente y de manera gradual las imágenes grandes una por una.</p>
<p>Aún puedes hacer clic en cualquier miniatura para comenzar a cargar y leer desde ese punto, momento en el cual la carga automática se detendrá y se pre-cargarán 3 imágenes desde la posición de lectura.</p>
<p>Al igual que con la lista de miniaturas, no necesitas preocuparte por generar muchas solicitudes de carga al desplazarte rápidamente.</p>
<h2>[Acerca de la Descarga]</h2>
<p>La descarga está integrada con la carga de imágenes grandes. Cuando termines de navegar por una galería y quieras guardar y descargar las imágenes, puedes hacer clic en <strong>Iniciar Descarga</strong> en el panel de descargas. No te preocupes por volver a descargar las imágenes ya cargadas.</p>
<p>También puedes hacer clic directamente en <strong>Iniciar Descarga</strong> en el panel de descargas sin necesidad de leer.</p>
<p>Alternativamente, haz clic en el botón <strong>Tomar Cargadas</strong> en el panel de descargas si algunas imágenes no se cargan consistentemente. Esto guardará las imágenes que ya se han cargado.</p>
<p>Los indicadores de estado del panel de descargas proporcionan una visión clara del progreso de la carga de imágenes.</p>
<p><strong>Nota:</strong> Cuando el tamaño del archivo de descarga supere los 1.2 GB, se habilitará automáticamente la compresión dividida. Si encuentras errores al extraer los archivos, por favor actualiza tu software de extracción o usa 7-Zip.</p>
<h2>[¿Puedo seleccionar el rango de descarga?]</h2>
<p>Sí, el panel de descargas tiene una opción para seleccionar el rango de descarga (Cherry Pick), que se aplica a la descarga, carga automática y carga anticipada.</p>
<p>Incluso si una imagen está excluida del rango de descarga, aún puedes hacer clic en su miniatura para verla, lo que cargará la imagen grande correspondiente.</p>
<h2>[¿Cómo seleccionar imágenes en algunos sitios de ilustración?]</h2>
<p>En la lista de miniaturas, puedes usar algunas teclas de acceso rápido para seleccionar imágenes:</p>
<ul>
<li><strong>Ctrl + Clic Izquierdo:</strong> Selecciona la imagen. La primera selección excluirá todas las demás imágenes.</li>
<li><strong>Ctrl + Shift + Clic Izquierdo:</strong> Selecciona el rango de imágenes entre esta imagen y la última imagen seleccionada.</li>
<li><strong>Alt + Clic Izquierdo:</strong> Excluye la imagen. La primera exclusión seleccionará todas las demás imágenes.</li>
<li><strong>Alt + Shift + Clic Izquierdo:</strong> Excluye el rango de imágenes entre esta imagen y la última imagen excluida.</li>
</ul>
<p>Además, hay otros métodos:</p>
<ul>
<li>Haz clic en el botón del medio en una miniatura para abrir la URL de la imagen original, luego haz clic derecho para guardar la imagen.</li>
<li>Establece el rango de descarga en 1 en el panel de descargas. Esto excluirá todas las imágenes excepto la primera. Luego, haz clic en las miniaturas de interés en la lista, lo que cargará las imágenes grandes correspondientes. Después de seleccionar, borra el rango de descarga y haz clic en <strong>Tomar Cargadas</strong> para empaquetar y descargar tus imágenes seleccionadas.</li>
<li>Desactiva la carga automática y establece la carga anticipada en 1 en el panel de configuración, luego procede como se describe anteriormente.</li>
</ul>
<h2>[¿Puedo operar el script mediante el teclado?]</h2>
<p>¡Sí! Hay un botón del <strong>Teclado</strong> en la parte inferior del panel de configuración. Haz clic en él para ver o configurar las operaciones del teclado.</p>
<p>¡Incluso puedes configurarlo para operar con una sola mano, liberando así tu otra mano!</p>
<h2>[¿Cómo desactivar la apertura automática en ciertos sitios?]</h2>
<p>Hay un botón de <strong>Perfiles de Sitio<strong> en la parte inferior del panel de configuración. Haz clic en él para excluir ciertos sitios de la apertura automática. Por ejemplo, sitios como Twitter o de tipo Booru.</p>
<h2>[¿Cómo desactivar este script en ciertos sitios?]</h2>
<p>Hay un botón de <strong>Perfiles de Sitio</strong> en la parte inferior del panel de configuración para excluir sitios específicos. Una vez excluidos, el script ya no se activará en esos sitios.</p>
<p>Para volver a habilitar un sitio, necesitas hacerlo desde un sitio que no haya sido excluido.</p>
<h2>[¿Cómo apoyar al autor?]</h2>
<p>Déjame una estrella en <a target='_blank' href='https://github.com/MapoMagpie/eh-view-enhance'>Github</a> o una buena reseña en <a target='_blank' href='https://greasyfork.org/scripts/397848-e-hentai-view-enhance'>Greasyfork</a>.</p>
<p>Por favor, no dejes reseñas en Greasyfork, ya que su sistema de notificaciones no puede rastrear comentarios posteriores. Muchas personas dejan un problema y nunca vuelven.
Reporta problemas aquí: <a target='_blank' href='https://github.com/MapoMagpie/eh-view-enhance/issues'>issue</a></p>
<h2>[¿Cómo reabrir la guía?]</h2>
<p>Haz clic en el botón de <strong>Ayuda</strong> en la parte inferior del panel de configuración.</p>
<h2>[Algunos problemas no resueltos]</h2>
<ul>
<li>Al usar Firefox para abrir la página principal de Twitter en una nueva pestaña y luego navegar a la página principal del usuario, el script no se activa y requiere actualizar la página.</li>
<li>En Firefox, la función de descarga no funciona en el dominio twitter.com. Firefox no redirige twitter.com a x.com cuando se abre en una nueva pestaña. Debes usar x.com en lugar de twitter.com.</li>
</ul>
`
    ),
    keyboardCustom
  };

  const bookIcon = `📖`;
  const moonViewCeremony = `<🎑>`;
  const sixPointedStar = `🔯`;
  const entryIcon = `⍇⍈`;
  const zoomIcon = `⇱⇲`;
  const icons = {
    bookIcon,
    moonViewCeremony,
    sixPointedStar,
    entryIcon,
    zoomIcon
  };

  function uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0, v = c == "x" ? r : r & 3 | 8;
      return v.toString(16);
    });
  }
  function transactionId() {
    return window.btoa(uuid());
  }
  function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(_match, p1) {
      return String.fromCharCode(parseInt(p1, 16));
    }));
  }

  function defaultConf() {
    const screenWidth = window.screen.width;
    const colCount = screenWidth > 2500 ? 7 : screenWidth > 1900 ? 6 : 5;
    return {
      colCount,
      readMode: "pagination",
      autoLoad: true,
      fetchOriginal: false,
      restartIdleLoader: 2e3,
      threads: 3,
      downloadThreads: 4,
      timeout: 10,
      version: CONF_VERSION,
      debug: true,
      first: true,
      reversePages: false,
      pageHelperAbTop: "unset",
      pageHelperAbLeft: "20px",
      pageHelperAbBottom: "20px",
      pageHelperAbRight: "unset",
      imgScale: 100,
      stickyMouse: "disable",
      autoPageSpeed: 5,
      // pagination readmode = 5, continuous readmode = 1
      autoPlay: false,
      filenameTemplate: "{number}-{title}",
      preventScrollPageTime: 100,
      archiveVolumeSize: 1200,
      pixivConvertTo: "GIF",
      autoCollapsePanel: true,
      minifyPageHelper: "inBigMode",
      keyboards: { inBigImageMode: {}, inFullViewGrid: {}, inMain: {} },
      siteProfiles: defaultSiteProfiles(),
      muted: false,
      volume: 50,
      mcInSites: ["18comic"],
      paginationIMGCount: 1,
      hitomiFormat: "auto",
      autoOpen: false,
      autoLoadInBackground: true,
      reverseMultipleImagesPost: true,
      ehentaiTitlePrefer: "japanese",
      scrollingSpeed: 30,
      id: uuid(),
      configPatchVersion: 0,
      displayText: {},
      customStyle: "",
      magnifier: false,
      autoEnterBig: false,
      pixivJustCurrPage: false,
      filenameOrder: "auto"
    };
  }
  function defaultSiteProfiles() {
    return {
      "e-hentai": { "enable": true, "enableAutoOpen": true, "enableFlowVision": true, workURLs: [] },
      "nhentai": { "enable": true, "enableAutoOpen": true, "enableFlowVision": true, workURLs: [] },
      "nhentai.xxx": { "enable": true, "enableAutoOpen": true, "enableFlowVision": true, workURLs: [] },
      "hitomi": { "enable": true, "enableAutoOpen": true, "enableFlowVision": true, workURLs: [] },
      "Pixiv": { "enable": true, "enableAutoOpen": false, "enableFlowVision": true, workURLs: [] },
      "yande.re": { "enable": true, "enableAutoOpen": false, "enableFlowVision": true, workURLs: [] },
      "Twitter | X": { "enable": true, "enableAutoOpen": false, "enableFlowVision": true, workURLs: [] },
      "Koharu": { "enable": true, "enableAutoOpen": true, "enableFlowVision": true, workURLs: [] },
      "Art Station": { "enable": true, "enableAutoOpen": false, "enableFlowVision": true, workURLs: [] },
      "Steam Screenshots": { "enable": true, "enableAutoOpen": false, "enableFlowVision": false, workURLs: [] },
      "danbooru": { "enable": true, "enableAutoOpen": false, "enableFlowVision": false, workURLs: [] },
      "rule34": { "enable": true, "enableAutoOpen": false, "enableFlowVision": false, workURLs: [] },
      "gelbooru": { "enable": true, "enableAutoOpen": false, "enableFlowVision": false, workURLs: [] },
      "漫画柜": { "enable": true, "enableAutoOpen": false, "enableFlowVision": false, workURLs: [] },
      "拷贝漫画": { "enable": true, "enableAutoOpen": false, "enableFlowVision": false, workURLs: [] },
      "e621": { "enable": true, "enableAutoOpen": false, "enableFlowVision": false, workURLs: [] },
      "Arcalive": { "enable": true, "enableAutoOpen": false, "enableFlowVision": false, workURLs: [] },
      "rokuhentai": { "enable": true, "enableAutoOpen": true, "enableFlowVision": false, workURLs: [] },
      "禁漫": { "enable": true, "enableAutoOpen": false, "enableFlowVision": false, workURLs: [] },
      "konachan": { "enable": true, "enableAutoOpen": true, "enableFlowVision": false, workURLs: [] },
      "im-hentai": { "enable": true, "enableAutoOpen": true, "enableFlowVision": true, workURLs: [] },
      "绅士漫画": { "enable": true, "enableAutoOpen": true, "enableFlowVision": false, workURLs: [] },
      "hentainexus": { "enable": true, "enableAutoOpen": true, "enableFlowVision": false, workURLs: [] }
    };
  }
  const CONF_VERSION = "4.4.0";
  const CONFIG_KEY = "ehvh_cfg_";
  function getStorageMethod() {
    if (typeof _GM_getValue === "function" && typeof _GM_setValue === "function") {
      return {
        setItem: (key, value) => _GM_setValue(key, value),
        getItem: (key) => _GM_getValue(key)
      };
    } else if (typeof localStorage !== "undefined") {
      return {
        setItem: (key, value) => localStorage.setItem(key, value),
        getItem: (key) => localStorage.getItem(key)
      };
    } else {
      throw new Error("No supported storage method found");
    }
  }
  const storage = getStorageMethod();
  function getConf() {
    const cfgStr = storage.getItem(CONFIG_KEY);
    if (cfgStr) {
      const cfg2 = JSON.parse(cfgStr);
      if (cfg2.version === CONF_VERSION) {
        return confHealthCheck(cfg2);
      }
    }
    const cfg = defaultConf();
    saveConf(cfg);
    return cfg;
  }
  function confHealthCheck(cf) {
    let changed = false;
    const defa = defaultConf();
    const defaKeys = Object.keys(defa);
    defaKeys.forEach((key) => {
      if (cf[key] === void 0) {
        cf[key] = defa[key];
        changed = true;
      }
    });
    const cfKeys = Object.keys(cf);
    for (const k of cfKeys) {
      if (!defaKeys.includes(k)) {
        delete cf[k];
        changed = true;
      }
    }
    ["pageHelperAbTop", "pageHelperAbLeft", "pageHelperAbBottom", "pageHelperAbRight"].forEach((key) => {
      if (cf[key] !== "unset") {
        const pos = parseInt(cf[key]);
        const screenLimit = key.endsWith("Right") || key.endsWith("Left") ? window.screen.width : window.screen.height;
        if (isNaN(pos) || pos < 5 || pos > screenLimit) {
          cf[key] = "5px";
          changed = true;
        }
      }
    });
    if (!["pagination", "continuous"].includes(cf.readMode)) {
      cf.readMode = "pagination";
      changed = true;
    }
    const newCf = patchConfig(cf, PATCH_CONFIG);
    if (newCf) {
      cf = newCf;
      changed = true;
    }
    if (changed) {
      saveConf(cf);
    }
    return cf;
  }
  const PATCH_CONFIG = {
    siteProfiles: defaultSiteProfiles()
  };
  const CONFIG_PATCH_VERSION = 7;
  function patchConfig(cf, patch) {
    if (cf.configPatchVersion === CONFIG_PATCH_VERSION) {
      return null;
    }
    cf.configPatchVersion = CONFIG_PATCH_VERSION;
    return { ...cf, ...patch };
  }
  function saveConf(c) {
    storage.setItem(CONFIG_KEY, JSON.stringify(c));
  }
  const conf = getConf();
  const transient = { imgSrcCSP: false, originalPolicy: "" };
  const ConfigItems = [
    { key: "colCount", typ: "number" },
    { key: "threads", typ: "number" },
    { key: "downloadThreads", typ: "number" },
    { key: "paginationIMGCount", typ: "number" },
    { key: "timeout", typ: "number" },
    { key: "preventScrollPageTime", typ: "number" },
    { key: "autoPageSpeed", typ: "number" },
    { key: "scrollingSpeed", typ: "number" },
    { key: "fetchOriginal", typ: "boolean", gridColumnRange: [1, 6] },
    { key: "autoLoad", typ: "boolean", gridColumnRange: [6, 11] },
    { key: "reversePages", typ: "boolean", gridColumnRange: [1, 6] },
    { key: "autoPlay", typ: "boolean", gridColumnRange: [6, 11] },
    { key: "autoLoadInBackground", typ: "boolean", gridColumnRange: [1, 6] },
    { key: "autoOpen", typ: "boolean", gridColumnRange: [6, 11] },
    { key: "magnifier", typ: "boolean", gridColumnRange: [1, 6] },
    { key: "autoEnterBig", typ: "boolean", gridColumnRange: [6, 11] },
    { key: "autoCollapsePanel", typ: "boolean", gridColumnRange: [1, 11] },
    { key: "pixivJustCurrPage", typ: "boolean", gridColumnRange: [1, 11], displayInSite: /pixiv.net/ },
    {
      key: "readMode",
      typ: "select",
      options: [
        { value: "pagination", display: "Pagination" },
        { value: "continuous", display: "Continuous" }
      ]
    },
    {
      key: "stickyMouse",
      typ: "select",
      options: [
        { value: "enable", display: "Enable" },
        { value: "reverse", display: "Reverse" },
        { value: "disable", display: "Disable" }
      ]
    },
    {
      key: "minifyPageHelper",
      typ: "select",
      options: [
        { value: "always", display: "Always" },
        { value: "inBigMode", display: "InBigMode" },
        { value: "never", display: "Never" }
      ]
    },
    { key: "reverseMultipleImagesPost", typ: "boolean", gridColumnRange: [1, 11], displayInSite: /(x.com|twitter.com)\// },
    {
      key: "hitomiFormat",
      typ: "select",
      options: [
        { value: "auto", display: "Auto" },
        { value: "avif", display: "Avif" },
        { value: "webp", display: "Webp" },
        { value: "jxl", display: "Jxl" }
      ],
      displayInSite: /hitomi.la\//
    },
    {
      key: "ehentaiTitlePrefer",
      typ: "select",
      options: [
        { value: "english", display: "English" },
        { value: "japanese", display: "Japanese" }
      ],
      displayInSite: /e[-x]hentai(.*)?.(org|onion)\//
    },
    {
      key: "filenameOrder",
      typ: "select",
      options: [
        { value: "auto", display: "Auto" },
        { value: "numbers", display: "Numbers" },
        { value: "original", display: "Original" },
        { value: "alphabetically", display: "Alphabetically" }
      ]
    }
  ];
  const DEFAULT_DISPLAY_TEXT = {
    entry: icons.moonViewCeremony,
    collapse: i18n.collapse.get(),
    fin: "FIN",
    autoPagePlay: i18n.autoPagePlay.get(),
    autoPagePause: i18n.autoPagePause.get(),
    config: i18n.config.get(),
    download: i18n.download.get(),
    chapters: i18n.chapters.get(),
    pagination: "PAGE",
    continuous: "CONT"
  };
  function getDisplayText() {
    return { ...DEFAULT_DISPLAY_TEXT, ...conf.displayText };
  }
  function presetDisplayText() {
    return {
      entry: "<(✥)>",
      collapse: ".)(.",
      config: "⚙",
      download: "⮋",
      autoPagePause: "------",
      chapters: "🎴",
      autoPagePlay: "▶",
      fin: "⑇",
      pagination: "🗐",
      continuous: "🗏⭭"
    };
  }

  function evLog(level, msg, ...info) {
    if (level === "debug" && !conf.debug) return;
    if (level === "error") {
      console.warn((/* @__PURE__ */ new Date()).toLocaleString(), "EHVP:" + msg, ...info);
    } else {
      console.info((/* @__PURE__ */ new Date()).toLocaleString(), "EHVP:" + msg, ...info);
    }
  }

  class EventManager {
    events;
    constructor() {
      this.events = /* @__PURE__ */ new Map();
    }
    emit(id, ...args) {
      if (!["imf-download-state-change", "imf-check-picked"].includes(id)) {
        evLog("debug", "event bus emitted: ", id);
      }
      const cbs = this.events.get(id);
      let ret;
      if (cbs) {
        cbs.forEach((cb) => ret = cb(...args));
      }
      return ret;
    }
    subscribe(id, cb) {
      evLog("info", "event bus subscribed: ", id);
      const cbs = this.events.get(id);
      if (cbs) {
        cbs.push(cb);
      } else {
        this.events.set(id, [cb]);
      }
    }
    reset() {
      this.events = /* @__PURE__ */ new Map();
    }
  }
  const EBUS = new EventManager();

  class Debouncer {
    tids;
    mode;
    lastExecTime;
    constructor(mode) {
      this.tids = {};
      this.lastExecTime = Date.now();
      this.mode = mode || "debounce";
    }
    addEvent(id, event, timeout) {
      if (this.mode === "throttle") {
        const now = Date.now();
        if (now - this.lastExecTime >= timeout) {
          this.lastExecTime = now;
          event();
        }
      } else if (this.mode === "debounce") {
        window.clearTimeout(this.tids[id]);
        this.tids[id] = window.setTimeout(event, timeout);
      }
    }
  }

  function xhrWapper(url, respType, cb, headers, timeout) {
    return _GM_xmlhttpRequest({
      method: "GET",
      url,
      timeout: timeout || 6e5,
      responseType: respType,
      nocache: false,
      revalidate: false,
      // fetch: false,
      headers: {
        "Referer": window.location.href,
        "Cache-Control": "public, max-age=2592000, immutable",
        ...headers
      },
      ...cb
    })?.abort;
  }
  function fetchImage(url) {
    return new Promise((resolve, reject) => {
      xhrWapper(url, "blob", {
        onload: (response) => resolve(response.response),
        onerror: (error) => reject(error)
      }, {}, 10 * 1e3);
    });
  }
  async function batchFetch(urls, concurrency, respType = "text") {
    const results = new Array(urls.length);
    let i = 0;
    while (i < urls.length) {
      const batch = urls.slice(i, i + concurrency);
      const batchPromises = batch.map(
        (url, index) => window.fetch(url).then((resp) => {
          if (resp.ok) {
            switch (respType) {
              case "text":
                return resp.text();
              case "json":
                return resp.json();
              case "arraybuffer":
                return resp.arrayBuffer();
            }
          }
          throw new Error(`failed to fetch ${url}: ${resp.status} ${resp.statusText}`);
        }).then((raw) => results[index + i] = raw)
      );
      await Promise.all(batchPromises);
      i += concurrency;
    }
    return results;
  }

  var FetchState = /* @__PURE__ */ ((FetchState2) => {
    FetchState2[FetchState2["FAILED"] = 0] = "FAILED";
    FetchState2[FetchState2["URL"] = 1] = "URL";
    FetchState2[FetchState2["DATA"] = 2] = "DATA";
    FetchState2[FetchState2["DONE"] = 3] = "DONE";
    return FetchState2;
  })(FetchState || {});
  class IMGFetcher {
    index;
    node;
    stage = 1 /* URL */;
    tryTimes = 0;
    lock = false;
    rendered = false;
    data;
    contentType;
    downloadState;
    timeoutId;
    matcher;
    chapterIndex;
    randomID;
    failedReason;
    constructor(index, root, matcher, chapterIndex) {
      this.index = index;
      this.node = root;
      this.node.onclick = (event) => {
        if (event.ctrlKey || event.metaKey) {
          EBUS.emit("add-cherry-pick-range", this.chapterIndex, this.index, true, event.shiftKey);
        } else if (event.altKey) {
          EBUS.emit("add-cherry-pick-range", this.chapterIndex, this.index, false, event.shiftKey);
        } else {
          EBUS.emit("imf-on-click", this);
        }
      };
      this.downloadState = { total: 100, loaded: 0, readyState: 0 };
      this.matcher = matcher;
      this.chapterIndex = chapterIndex;
      this.randomID = chapterIndex + Math.random().toString(16).slice(2) + this.node.href;
    }
    create() {
      const element = this.node.create();
      const noEle = document.createElement("div");
      noEle.classList.add("img-node-numtip");
      noEle.innerHTML = `<span>${this.index + 1}</span>`;
      element.firstElementChild.appendChild(noEle);
      return element;
    }
    // 刷新下载状态
    setDownloadState(newState) {
      this.downloadState = { ...this.downloadState, ...newState };
      this.node.progress(this.downloadState);
      EBUS.emit("imf-download-state-change", this);
    }
    async start(index) {
      if (this.lock) return;
      this.lock = true;
      try {
        this.node.changeStyle("fetching");
        await this.fetchImage();
        this.node.changeStyle("fetched");
        EBUS.emit("imf-on-finished", index, true, this);
        this.failedReason = void 0;
      } catch (error) {
        this.failedReason = error.toString();
        this.node.changeStyle("failed", this.failedReason);
        evLog("error", `IMG-FETCHER ERROR:`, error);
        this.stage = 0 /* FAILED */;
        EBUS.emit("imf-on-finished", index, false, this);
      } finally {
        this.lock = false;
      }
    }
    resetStage() {
      this.node.changeStyle("init");
      this.stage = 1 /* URL */;
    }
    async fetchImage() {
      const fetchMachine = async () => {
        try {
          switch (this.stage) {
            case 0 /* FAILED */:
            case 1 /* URL */:
              const meta = await this.fetchOriginMeta();
              this.node.originSrc = meta.url;
              if (meta.title) {
                this.node.title = meta.title;
                if (this.node.imgElement) {
                  this.node.imgElement.title = meta.title;
                }
              }
              this.node.href = meta.href || this.node.href;
              this.stage = 2 /* DATA */;
              return fetchMachine();
            case 2 /* DATA */:
              const ret = await this.fetchImageData();
              [this.data, this.contentType] = ret;
              [this.data, this.contentType] = await this.matcher.processData(this.data, this.contentType, this.node.originSrc);
              if (this.contentType.startsWith("text")) {
                const str = new TextDecoder().decode(this.data);
                evLog("error", "unexpect content:\n", str);
                throw new Error(`expect image data, fetched wrong type: ${this.contentType}, the content is showing up in console(F12 open it).`);
              }
              this.node.blobSrc = transient.imgSrcCSP ? this.node.originSrc : URL.createObjectURL(new Blob([this.data], { type: this.contentType }));
              this.node.mimeType = this.contentType;
              this.node.render((reason) => {
                evLog("error", "render image failed, " + reason);
                this.rendered = false;
              });
              this.stage = 3 /* DONE */;
            case 3 /* DONE */:
              return null;
          }
        } catch (error) {
          this.stage = 0 /* FAILED */;
          return error;
        }
      };
      this.tryTimes = 0;
      let err;
      while (this.tryTimes < 3) {
        err = await fetchMachine();
        if (err === null) return;
        this.tryTimes++;
        evLog("error", `fetch image error, try times: ${this.tryTimes}, error:`, err);
      }
      throw err;
    }
    async fetchOriginMeta() {
      return await this.matcher.fetchOriginMeta(this.node, this.tryTimes > 0 || this.stage === 0 /* FAILED */, this.chapterIndex);
    }
    async fetchImageData() {
      const data = await this.fetchBigImage();
      if (data == null) {
        throw new Error(`fetch image data is empty, image url:${this.node.originSrc}`);
      }
      return data.arrayBuffer().then((buffer) => [new Uint8Array(buffer), data.type]);
    }
    render() {
      const picked = EBUS.emit("imf-check-picked", this.chapterIndex, this.index) ?? this.node.picked;
      const shouldChangeStyle = picked !== this.node.picked;
      this.node.picked = picked;
      if (!this.rendered) {
        this.rendered = true;
        this.node.render((reason) => {
          evLog("error", "render image failed, " + reason);
          this.rendered = false;
        });
        this.node.changeStyle(this.stage === 3 /* DONE */ ? "fetched" : void 0, this.failedReason);
      } else if (shouldChangeStyle) {
        let status;
        switch (this.stage) {
          case 0 /* FAILED */:
            status = "failed";
            break;
          case 1 /* URL */:
            status = "init";
            break;
          case 2 /* DATA */:
            status = "fetching";
            break;
          case 3 /* DONE */:
            status = "fetched";
            break;
        }
        this.node.changeStyle(status, this.failedReason);
      }
    }
    isRender() {
      return this.rendered;
    }
    unrender() {
      if (!this.rendered) return;
      this.rendered = false;
      this.node.unrender();
      this.node.changeStyle("init");
    }
    ratio() {
      if (this.node.rect) {
        return this.node.rect.w / this.node.rect.h;
      } else {
        return void 0;
      }
    }
    async fetchBigImage() {
      if (this.node.originSrc?.startsWith("blob:")) {
        return await fetch(this.node.originSrc).then((resp) => resp.blob());
      }
      const imgFetcher = this;
      return new Promise(async (resolve, reject) => {
        const debouncer = new Debouncer();
        let abort = void 0;
        const timeout = () => {
          debouncer.addEvent("XHR_TIMEOUT", () => {
            reject(new Error("timeout"));
            abort?.();
          }, conf.timeout * 1e3);
        };
        abort = xhrWapper(imgFetcher.node.originSrc, "blob", {
          onload: function(response) {
            const data = response.response;
            try {
              imgFetcher.setDownloadState({ readyState: response.readyState });
            } catch (error) {
              evLog("error", "warn: fetch big image data onload setDownloadState error:", error);
            }
            resolve(data);
          },
          onerror: function(response) {
            reject(new Error(`response status:${response.status}, error:${response.error}, response:${response.response}`));
          },
          onprogress: function(response) {
            imgFetcher.setDownloadState({ total: response.total, loaded: response.loaded, readyState: response.readyState });
            timeout();
          },
          onloadstart: function() {
            imgFetcher.setDownloadState(imgFetcher.downloadState);
          }
        }, this.matcher.headers());
        timeout();
      });
    }
  }

  class Crc32 {
    crc = -1;
    table = this.makeTable();
    makeTable() {
      let i;
      let j;
      let t;
      const table = [];
      for (i = 0; i < 256; i++) {
        t = i;
        for (j = 0; j < 8; j++) {
          t = t & 1 ? t >>> 1 ^ 3988292384 : t >>> 1;
        }
        table[i] = t;
      }
      return table;
    }
    append(data) {
      let crc = this.crc | 0;
      const table = this.table;
      for (let offset = 0, len = data.length | 0; offset < len; offset++) {
        crc = crc >>> 8 ^ table[(crc ^ data[offset]) & 255];
      }
      this.crc = crc;
    }
    get() {
      return ~this.crc;
    }
  }
  class ZipObject {
    level;
    nameBuf;
    comment;
    header;
    offset;
    directory;
    file;
    crc;
    compressedLength;
    uncompressedLength;
    volumeNo;
    constructor(file, volumeNo) {
      this.level = 0;
      const encoder = new TextEncoder();
      this.nameBuf = encoder.encode(file.name.trim());
      this.comment = encoder.encode("");
      this.header = new DataHelper(26);
      this.offset = 0;
      this.directory = false;
      this.file = file;
      this.crc = new Crc32();
      this.compressedLength = 0;
      this.uncompressedLength = 0;
      this.volumeNo = volumeNo;
    }
  }
  class DataHelper {
    array;
    view;
    constructor(byteLength) {
      const uint8 = new Uint8Array(byteLength);
      this.array = uint8;
      this.view = new DataView(uint8.buffer);
    }
  }
  class Zip {
    // default 1.5GB
    volumeSize = 1610612736;
    accumulatedSize = 0;
    volumes = 1;
    currVolumeNo = -1;
    files = [];
    currIndex = -1;
    offset = 0;
    offsetInVolume = 0;
    curr;
    date;
    writer;
    close = false;
    constructor(settings) {
      if (settings?.volumeSize) {
        this.volumeSize = settings.volumeSize;
      }
      this.date = new Date(Date.now());
      this.writer = async () => {
      };
    }
    setWriter(writer) {
      this.writer = writer;
    }
    add(file) {
      const fileSize = file.size();
      this.accumulatedSize += fileSize;
      if (this.accumulatedSize > this.volumeSize) {
        this.volumes++;
        this.accumulatedSize = fileSize;
      }
      this.files.push(new ZipObject(file, this.volumes - 1));
    }
    async next() {
      this.currIndex++;
      this.curr = this.files[this.currIndex];
      if (this.curr) {
        if (this.curr.volumeNo > this.currVolumeNo) {
          this.currIndex--;
          this.offsetInVolume = 0;
          return true;
        }
        this.curr.offset = this.offsetInVolume;
        await this.writeHeader();
        await this.writeContent();
        await this.writeFooter();
        this.offset += this.offsetInVolume - this.curr.offset;
      } else if (!this.close) {
        this.close = true;
        await this.closeZip();
      } else {
        return true;
      }
      return false;
    }
    async writeHeader() {
      if (!this.curr) return;
      const curr = this.curr;
      const data = new DataHelper(30 + curr.nameBuf.length);
      const header = curr.header;
      if (curr.level !== 0 && !curr.directory) {
        header.view.setUint16(4, 2048);
      }
      header.view.setUint32(0, 335546376);
      header.view.setUint16(6, (this.date.getHours() << 6 | this.date.getMinutes()) << 5 | this.date.getSeconds() / 2, true);
      header.view.setUint16(8, (this.date.getFullYear() - 1980 << 4 | this.date.getMonth() + 1) << 5 | this.date.getDate(), true);
      header.view.setUint16(22, curr.nameBuf.length, true);
      data.view.setUint32(0, 1347093252);
      data.array.set(header.array, 4);
      data.array.set(curr.nameBuf, 30);
      this.offsetInVolume += data.array.length;
      await this.writer(data.array);
    }
    async writeContent() {
      const curr = this.curr;
      const reader = (await curr.file.stream()).getReader();
      const writer = this.writer;
      async function pump() {
        const chunk = await reader.read();
        if (chunk.done) {
          return;
        }
        const data = chunk.value;
        curr.crc.append(data);
        curr.uncompressedLength += data.length;
        curr.compressedLength += data.length;
        writer(data);
        return await pump();
      }
      await pump();
    }
    async writeFooter() {
      if (!this.curr) return;
      const curr = this.curr;
      const footer = new DataHelper(16);
      footer.view.setUint32(0, 1347094280);
      if (curr.crc) {
        curr.header.view.setUint32(10, curr.crc.get(), true);
        curr.header.view.setUint32(14, curr.compressedLength, true);
        curr.header.view.setUint32(18, curr.uncompressedLength, true);
        footer.view.setUint32(4, curr.crc.get(), true);
        footer.view.setUint32(8, curr.compressedLength, true);
        footer.view.setUint32(12, curr.uncompressedLength, true);
      }
      await this.writer(footer.array);
      this.offsetInVolume += curr.compressedLength + 16;
      if (curr.compressedLength !== curr.file.size()) {
        evLog("error", "WRAN: read length:", curr.compressedLength, " origin size:", curr.file.size(), ", title: ", curr.file.name);
      }
    }
    async closeZip() {
      const fileCount = this.files.length;
      let centralDirLength = 0;
      let idx = 0;
      for (idx = 0; idx < fileCount; idx++) {
        const file = this.files[idx];
        centralDirLength += 46 + file.nameBuf.length + file.comment.length;
      }
      const data = new DataHelper(centralDirLength + 22);
      let dataOffset = 0;
      for (idx = 0; idx < fileCount; idx++) {
        const file = this.files[idx];
        data.view.setUint32(dataOffset, 1347092738);
        data.view.setUint16(dataOffset + 4, 5120);
        data.array.set(file.header.array, dataOffset + 6);
        data.view.setUint16(dataOffset + 32, file.comment.length, true);
        data.view.setUint16(dataOffset + 34, file.volumeNo, true);
        data.view.setUint32(dataOffset + 42, file.offset, true);
        data.array.set(file.nameBuf, dataOffset + 46);
        data.array.set(file.comment, dataOffset + 46 + file.nameBuf.length);
        dataOffset += 46 + file.nameBuf.length + file.comment.length;
      }
      data.view.setUint32(dataOffset, 1347093766);
      data.view.setUint16(dataOffset + 4, this.currVolumeNo, true);
      data.view.setUint16(dataOffset + 6, this.currVolumeNo, true);
      data.view.setUint16(dataOffset + 8, fileCount, true);
      data.view.setUint16(dataOffset + 10, fileCount, true);
      data.view.setUint32(dataOffset + 12, centralDirLength, true);
      data.view.setUint32(dataOffset + 16, this.offsetInVolume, true);
      await this.writer(data.array);
    }
    nextReadableStream() {
      this.currVolumeNo++;
      if (this.currVolumeNo >= this.volumes) {
        return;
      }
      const zip = this;
      return new ReadableStream({
        start(controller) {
          zip.setWriter(async (chunk) => controller.enqueue(chunk));
        },
        async pull(controller) {
          await zip.next().then((done) => done && controller.close());
        }
      });
    }
  }

  class DownloaderCanvas {
    canvas;
    mousemoveState;
    ctx;
    queue;
    rectSize;
    rectGap;
    columns;
    padding;
    scrollTop;
    scrollSize;
    debouncer;
    onClick;
    cherryPick;
    constructor(canvas, queue, cherryPick) {
      this.queue = queue;
      this.cherryPick = cherryPick;
      if (!canvas) {
        throw new Error("canvas not found");
      }
      this.canvas = canvas;
      this.canvas.addEventListener(
        "wheel",
        (event) => this.onwheel(event.deltaY)
      );
      this.mousemoveState = { x: 0, y: 0 };
      this.canvas.addEventListener("mousemove", (event) => {
        this.mousemoveState = { x: event.offsetX, y: event.offsetY };
        this.drawDebouce();
      });
      this.canvas.addEventListener("click", (event) => {
        this.mousemoveState = { x: event.offsetX, y: event.offsetY };
        const index = this.computeDrawList()?.find(
          (state) => state.selected
        )?.index;
        if (index !== void 0) {
          EBUS.emit("downloader-canvas-on-click", index);
        }
      });
      this.ctx = this.canvas.getContext("2d");
      this.rectSize = 12;
      this.rectGap = 6;
      this.columns = 15;
      this.padding = 7;
      this.scrollTop = 0;
      this.scrollSize = 10;
      this.debouncer = new Debouncer();
      EBUS.subscribe("imf-download-state-change", () => this.drawDebouce());
      EBUS.subscribe("downloader-canvas-resize", () => this.resize());
    }
    resize(parent) {
      parent = parent || this.canvas.parentElement;
      this.canvas.width = Math.floor(parent.offsetWidth);
      this.canvas.height = Math.floor(parent.offsetHeight);
      this.columns = Math.ceil((this.canvas.width - this.padding * 2 - this.rectGap) / (this.rectSize + this.rectGap));
      this.draw();
    }
    onwheel(deltaY) {
      const [_, h] = this.getWH();
      const clientHeight = this.computeClientHeight();
      if (clientHeight > h) {
        deltaY = deltaY >> 1;
        this.scrollTop += deltaY;
        if (this.scrollTop < 0) this.scrollTop = 0;
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
      const picked = this.cherryPick();
      const [_, h] = this.getWH();
      const startX = this.computeStartX();
      const startY = -this.scrollTop + this.padding;
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
        list.push({
          index: i,
          x: atX,
          y: atY,
          selected: this.isSelected(atX, atY),
          disabled: !picked.picked(i)
        });
      }
      return list;
    }
    // this function should be called by drawDebouce
    draw() {
      const [w, h] = this.getWH();
      this.ctx.clearRect(0, 0, w, h);
      const drawList = this.computeDrawList();
      for (const node of drawList) {
        this.drawSmallRect(
          node.x,
          node.y,
          this.queue[node.index],
          node.index === this.queue.currIndex,
          node.selected,
          node.disabled
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
      const drawW = (this.rectSize + this.rectGap) * this.columns - this.rectGap;
      const startX = w - drawW >> 1;
      return startX;
    }
    drawSmallRect(x, y, imgFetcher, isCurr, isSelected, disabled) {
      if (disabled) {
        this.ctx.fillStyle = "rgba(20, 20, 20, 1)";
      } else {
        switch (imgFetcher.stage) {
          case FetchState.FAILED:
            this.ctx.fillStyle = "rgba(250, 50, 20, 0.9)";
            break;
          case FetchState.URL:
            this.ctx.fillStyle = "rgba(200, 200, 200, 0.6)";
            break;
          case FetchState.DATA:
            const percent = imgFetcher.downloadState.loaded / imgFetcher.downloadState.total;
            this.ctx.fillStyle = `rgba(${200 + Math.ceil((110 - 200) * percent)}, ${200 + Math.ceil((200 - 200) * percent)}, ${200 + Math.ceil((120 - 200) * percent)}, ${0.6 + Math.ceil((1 - 0.6) * percent)})`;
            break;
          case FetchState.DONE:
            this.ctx.fillStyle = "rgb(110, 200, 120)";
            break;
        }
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

  const FILENAME_INVALIDCHAR = /[\\/:*?"<>|\n]/g;
  class Downloader {
    meta;
    title;
    downloading;
    queue;
    idleLoader;
    pageFetcher;
    done = false;
    selectedChapters = [];
    filenames = /* @__PURE__ */ new Set();
    panel;
    canvas;
    cherryPicks = [new CherryPick()];
    constructor(HTML, queue, idleLoader, pageFetcher, matcher) {
      this.panel = HTML.downloader;
      this.panel.initTabs();
      this.initEvents(this.panel);
      this.panel.initCherryPick(
        (chapterIndex, range) => {
          if (this.cherryPicks[chapterIndex] === void 0) {
            this.cherryPicks[chapterIndex] = new CherryPick();
          }
          const ret = this.cherryPicks[chapterIndex].add(range);
          EBUS.emit("cherry-pick-changed", chapterIndex, this.cherryPicks[chapterIndex]);
          return ret;
        },
        (chapterIndex, id) => {
          if (this.cherryPicks[chapterIndex] === void 0) {
            this.cherryPicks[chapterIndex] = new CherryPick();
          }
          const ret = this.cherryPicks[chapterIndex].remove(id);
          EBUS.emit("cherry-pick-changed", chapterIndex, this.cherryPicks[chapterIndex]);
          return ret;
        },
        (chapterIndex) => {
          if (this.cherryPicks[chapterIndex] === void 0) {
            this.cherryPicks[chapterIndex] = new CherryPick();
          }
          this.cherryPicks[chapterIndex].reset();
          EBUS.emit("cherry-pick-changed", chapterIndex, this.cherryPicks[chapterIndex]);
        },
        (chapterIndex) => {
          if (this.cherryPicks[chapterIndex] === void 0) {
            this.cherryPicks[chapterIndex] = new CherryPick();
          }
          return this.cherryPicks[chapterIndex].values;
        }
      );
      this.panel.initNotice([
        {
          btn: i18n.resetDownloaded.get(),
          cb: () => {
            if (confirm(i18n.resetDownloadedConfirm.get())) this.queue.forEach((imf) => imf.stage === FetchState.DONE && imf.resetStage());
          }
        },
        {
          btn: i18n.resetFailed.get(),
          cb: () => {
            this.queue.forEach((imf) => imf.stage === FetchState.FAILED && imf.resetStage());
            if (!this.downloading) this.idleLoader.abort(0, 100);
          }
        }
      ]);
      this.queue = queue;
      this.queue.cherryPick = () => this.cherryPicks[this.queue.chapterIndex] || new CherryPick();
      this.idleLoader = idleLoader;
      this.idleLoader.cherryPick = () => this.cherryPicks[this.queue.chapterIndex] || new CherryPick();
      this.canvas = new DownloaderCanvas(this.panel.canvas, queue, () => this.cherryPicks[this.queue.chapterIndex] || new CherryPick());
      this.pageFetcher = pageFetcher;
      this.meta = (ch) => matcher.galleryMeta(document, ch);
      this.title = () => matcher.title(document);
      this.downloading = false;
      this.queue.downloading = () => this.downloading;
      EBUS.subscribe("ifq-on-finished-report", (_, queue2) => {
        if (queue2.isFinished()) {
          const sel = this.selectedChapters.find((sel2) => sel2.index === queue2.chapterIndex);
          if (sel) {
            sel.done = true;
            sel.resolve(true);
          }
          if (!this.downloading && !this.done) {
            this.panel.noticeableBTN();
          }
        }
      });
      EBUS.subscribe("imf-check-picked", (chapterIndex, index) => this.cherryPicks[chapterIndex]?.picked(index));
    }
    initEvents(panel) {
      panel.forceBTN.addEventListener("click", () => this.download(this.pageFetcher.chapters));
      panel.startBTN.addEventListener("click", () => {
        if (this.downloading) {
          this.abort("downloadStart");
        } else {
          this.start();
        }
      });
    }
    needNumberTitle(queue) {
      if (conf.filenameOrder === "numbers") return true;
      if (conf.filenameOrder === "original") return false;
      let comparer;
      if (conf.filenameOrder === "alphabetically") {
        comparer = (a, before) => a < before;
      } else {
        comparer = (a, before) => a.localeCompare(before, void 0, { numeric: true, sensitivity: "base" }) < 0;
      }
      let lastTitle = "";
      for (const fetcher of queue) {
        if (lastTitle && comparer(fetcher.node.title, lastTitle)) {
          return true;
        }
        lastTitle = fetcher.node.title;
      }
      return false;
    }
    // check > start > download
    check() {
      if (this.downloading) return;
      setTimeout(() => EBUS.emit("downloader-canvas-resize"), 110);
      this.panel.createChapterSelectList(this.pageFetcher.chapters, this.selectedChapters);
      if (this.queue.length > 0) {
        this.panel.switchTab("status");
      } else if (this.pageFetcher.chapters.length > 1) {
        this.panel.switchTab("chapters");
      }
    }
    checkSelectedChapters() {
      this.selectedChapters.length = 0;
      const idSet = this.panel.selectedChapters();
      if (idSet.size === 0) {
        this.selectedChapters.push({ index: 0, done: false, ...promiseWithResolveAndReject() });
      } else {
        this.pageFetcher.chapters.forEach((c, i) => idSet.has(c.id) && this.selectedChapters.push({ index: i, done: false, ...promiseWithResolveAndReject() }));
      }
      return this.selectedChapters;
    }
    async start() {
      if (this.downloading) return;
      this.panel.flushUI("downloading");
      this.downloading = true;
      this.idleLoader.autoLoad = true;
      this.checkSelectedChapters();
      try {
        for (const sel of this.selectedChapters) {
          if (!this.downloading) return;
          await this.pageFetcher.changeChapter(sel.index);
          this.queue.forEach((imf) => imf.stage === FetchState.FAILED && imf.resetStage());
          if (this.queue.isFinished()) {
            sel.done = true;
            sel.resolve(true);
          } else {
            this.idleLoader.processingIndexList = this.queue.map((imgFetcher, index) => !imgFetcher.lock && imgFetcher.stage === FetchState.URL ? index : -1).filter((index) => index >= 0).splice(0, conf.downloadThreads);
            this.idleLoader.onFailed(() => sel.reject("download failed or canceled"));
            this.idleLoader.checkProcessingIndex();
            this.idleLoader.start();
          }
          await sel.promise;
        }
        if (this.downloading) await this.download(this.selectedChapters.filter((sel) => sel.done).map((sel) => this.pageFetcher.chapters[sel.index]));
      } catch (error) {
        if ("abort" === error) return;
        this.abort("downloadFailed");
        evLog("error", "download failed: ", error);
      } finally {
        this.downloading = false;
      }
    }
    mapToFileLikes(chapter, picked, directory) {
      if (!chapter || chapter.queue.length === 0) return [];
      let checkTitle;
      const needNumberTitle = this.needNumberTitle(chapter.queue);
      if (needNumberTitle) {
        const digits = chapter.queue.length.toString().length;
        if (conf.filenameOrder === "numbers") {
          checkTitle = (title, index) => `${index + 1}`.padStart(digits, "0") + "." + title.split(".").pop();
        } else {
          checkTitle = (title, index) => `${index + 1}`.padStart(digits, "0") + "_" + title.replaceAll(FILENAME_INVALIDCHAR, "_");
        }
      } else {
        this.filenames.clear();
        checkTitle = (title) => deduplicate(this.filenames, title.replaceAll(FILENAME_INVALIDCHAR, "_"));
      }
      const ret = chapter.queue.filter((imf, i) => picked.picked(i) && imf.stage === FetchState.DONE && imf.data).map((imf, index) => {
        return {
          stream: () => Promise.resolve(uint8ArrayToReadableStream(imf.data)),
          size: () => imf.data.byteLength,
          name: directory + checkTitle(imf.node.title, index)
        };
      });
      const meta = new TextEncoder().encode(JSON.stringify(this.meta(chapter), null, 2));
      ret.push({
        stream: () => Promise.resolve(uint8ArrayToReadableStream(meta)),
        size: () => meta.byteLength,
        name: directory + "meta.json"
      });
      return ret;
    }
    async download(chapters) {
      try {
        const archiveName = this.title().replaceAll(FILENAME_INVALIDCHAR, "_");
        const separator = navigator.userAgent.indexOf("Win") !== -1 ? "\\" : "/";
        const singleChapter = chapters.length === 1;
        this.panel.flushUI("packaging");
        const dirnameSet = /* @__PURE__ */ new Set();
        const files = [];
        for (let i = 0; i < chapters.length; i++) {
          const chapter = chapters[i];
          const picked = this.cherryPicks[i] || new CherryPick();
          let directory = (() => {
            if (singleChapter) return "";
            if (chapter.title instanceof Array) {
              return chapter.title.join("_").replaceAll(FILENAME_INVALIDCHAR, "_") + separator;
            } else {
              return chapter.title.replaceAll(FILENAME_INVALIDCHAR, "_") + separator;
            }
          })();
          directory = shrinkFilename(directory, 200);
          directory = deduplicate(dirnameSet, directory);
          const ret = this.mapToFileLikes(chapter, picked, directory);
          files.push(...ret);
        }
        const zip = new Zip({ volumeSize: 1024 * 1024 * (conf.archiveVolumeSize || 1500) });
        files.forEach((file) => zip.add(file));
        const save = async () => {
          let readable;
          while (readable = zip.nextReadableStream()) {
            const blob = await new Response(readable).blob();
            const ext = zip.currVolumeNo === zip.volumes - 1 ? "zip" : "z" + (zip.currVolumeNo + 1).toString().padStart(2, "0");
            fileSaver.saveAs(blob, `${archiveName}.${ext}`);
          }
        };
        await save();
        this.done = true;
      } catch (error) {
        EBUS.emit("notify-message", "error", `packaging failed, ${error.toString()}`);
        throw error;
      } finally {
        this.abort(this.done ? "downloaded" : "downloadFailed");
      }
    }
    abort(stage) {
      this.downloading = false;
      this.panel.abort(stage);
      this.idleLoader.abort();
      this.selectedChapters.forEach((sel) => sel.reject("abort"));
    }
  }
  function shrinkFilename(str, limit) {
    const encoder = new TextEncoder();
    const byteLen = (s) => encoder.encode(s).byteLength;
    const bLen = byteLen(str);
    if (bLen <= limit) return str;
    const sliceRange = [str.length >> 1, (str.length >> 1) + 1];
    let left = true;
    while (true) {
      if (bLen - byteLen(str.slice(...sliceRange)) <= limit) {
        return str.slice(0, sliceRange[0]) + ",,," + str.slice(sliceRange[1]);
      }
      if (left && sliceRange[0] > 3) {
        sliceRange[0] -= 1;
        left = false;
        continue;
      }
      if (sliceRange[1] < str.length - 3) {
        sliceRange[1] += 1;
        left = true;
        continue;
      }
      break;
    }
    return str.slice(0, limit);
  }
  function deduplicate(set, title) {
    let newTitle = title;
    if (set.has(newTitle)) {
      const splits = newTitle.split(".");
      const ext = splits.pop();
      const prefix = splits.join(".");
      const num = parseInt(prefix.match(/_(\d+)$/)?.[1] || "");
      if (isNaN(num)) {
        newTitle = `${prefix}_1.${ext}`;
      } else {
        newTitle = `${prefix.replace(/\d+$/, (num + 1).toString())}.${ext}`;
      }
      return deduplicate(set, newTitle);
    } else {
      set.add(newTitle);
      return newTitle;
    }
  }
  function uint8ArrayToReadableStream(arr) {
    return new ReadableStream({
      pull(controller) {
        controller.enqueue(arr);
        controller.close();
      }
    });
  }
  function promiseWithResolveAndReject() {
    let resolve;
    let reject;
    const promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    return { resolve, reject, promise };
  }
  class CherryPick {
    values = [];
    positive = false;
    // if values has positive picked, ignore exclude
    sieve = [];
    reset() {
      this.values = [];
      this.positive = false;
      this.sieve = [];
    }
    add(range) {
      if (this.values.length === 0) {
        this.positive = range.positive;
        this.values.push(range);
        this.setSieve(range);
        return this.values;
      }
      const exists = this.values.find((v) => v.id === range.id);
      if (exists) return null;
      const newR = range.range();
      const remIdSet = /* @__PURE__ */ new Set();
      const addIdSet = /* @__PURE__ */ new Set();
      const addList = [];
      let equalsOld = false;
      for (let i = 0; i < this.values.length; i++) {
        const old = this.values[i];
        const oldR = old.range();
        if (newR[0] >= oldR[0] && newR[1] <= oldR[1]) {
          if (range.positive !== this.positive) {
            remIdSet.add(old.id);
            if (oldR[0] < newR[0]) {
              addList.push(new CherryPickRange([oldR[0], newR[0] - 1], old.positive));
            }
            if (oldR[1] > newR[1]) {
              addList.push(new CherryPickRange([newR[1] + 1, oldR[1]], old.positive));
            }
            equalsOld = newR[0] === newR[1] && newR[0] === oldR[0] && newR[1] === oldR[1];
          }
          break;
        }
        if (newR[0] <= oldR[0] && newR[1] >= oldR[1]) {
          remIdSet.add(old.id);
        } else if (newR[0] <= oldR[0] && newR[1] >= oldR[0] && newR[1] <= oldR[1]) {
          old.reset([newR[1] + 1, oldR[1]]);
        } else if (newR[0] >= oldR[0] && newR[0] <= oldR[1] && newR[1] >= oldR[1]) {
          old.reset([oldR[0], newR[0] - 1]);
        }
        if (range.positive === this.positive) {
          if (!addIdSet.has(range.id)) {
            addIdSet.add(range.id);
            addList.push(range);
          }
        }
      }
      if (remIdSet.size > 0) {
        this.values = this.values.filter((v) => !remIdSet.has(v.id));
      }
      if (addList.length > 0) {
        this.values.push(...addList);
      }
      if (this.values.length === 0) {
        this.reset();
        if (equalsOld) {
          return this.values;
        }
        this.positive = range.positive;
        this.values.push(range);
      } else {
        this.concat();
      }
      this.setSieve(range);
      return this.values;
    }
    setSieve(range) {
      const newR = range.range();
      for (let i = newR[0] - 1; i < newR[1]; i++) {
        this.sieve[i] = range.positive === this.positive;
      }
    }
    concat() {
      if (this.values.length < 2) return;
      this.values.sort((v1, v2) => v1.range()[0] - v2.range()[0]);
      let i = 0, j = 1;
      const skip = [];
      while (i < this.values.length && j < this.values.length) {
        const r1 = this.values[i];
        const r2 = this.values[j];
        const r1v = r1.range();
        const r2v = r2.range();
        if (r1v[1] + 1 === r2v[0]) {
          r1.reset([r1v[0], r2v[1]]);
          skip.push(j);
          j++;
        } else {
          do {
            i++;
          } while (skip.includes(i));
          j = i + 1;
        }
      }
      this.values = this.values.filter((_, i2) => !skip.includes(i2));
    }
    remove(id) {
      const index = this.values.findIndex((v) => v.id === id);
      if (index === -1) return;
      const range = this.values.splice(index, 1)[0];
      const r = range.range();
      for (let i = r[0] - 1; i < r[1]; i++) {
        this.sieve[i] = false;
      }
      if (this.values.length === 0) {
        this.sieve = [];
        this.positive = false;
      }
    }
    picked(index) {
      return Boolean(this.positive ? this.sieve[index] : !this.sieve[index]);
    }
  }
  class CherryPickRange {
    value;
    positive;
    id;
    constructor(value, positive) {
      this.positive = positive;
      this.value = value.sort((a, b) => a - b);
      this.id = CherryPickRange.rangeToString(this.value, this.positive);
    }
    toString() {
      return CherryPickRange.rangeToString(this.value, this.positive);
    }
    reset(newRange) {
      this.value = newRange.sort((a, b) => a - b);
      this.id = CherryPickRange.rangeToString(this.value, this.positive);
    }
    range() {
      return this.value;
    }
    static rangeToString(value, positive) {
      let str = "";
      if (value[0] === value[1]) {
        str = value[0].toString();
      } else {
        str = value.map((v) => v.toString()).join("-");
      }
      return positive ? str : "!" + str;
    }
    static from(value) {
      value = value?.trim();
      if (!value) return null;
      value = value.replace(/!+/, "!");
      const exclude = value.startsWith("!");
      if (/^!?\d+$/.test(value)) {
        const index = parseInt(value.replace("!", ""));
        return new CherryPickRange([index, index], !exclude);
      }
      if (/^!?\d+-\d+$/.test(value)) {
        const splits = value.replace("!", "").split("-").map((v) => parseInt(v));
        return new CherryPickRange([splits[0], splits[1]], !exclude);
      }
      return null;
    }
  }

  class IMGFetcherQueue extends Array {
    executableQueue;
    currIndex;
    finishedIndex = /* @__PURE__ */ new Set();
    debouncer;
    downloading;
    dataSize = 0;
    chapterIndex = 0;
    cherryPick;
    clear() {
      this.length = 0;
      this.executableQueue = [];
      this.currIndex = 0;
      this.finishedIndex.clear();
    }
    restore(chapterIndex, imfs) {
      this.clear();
      this.chapterIndex = chapterIndex;
      imfs.forEach((imf, i) => imf.stage === FetchState.DONE && this.finishedIndex.add(i));
      this.push(...imfs);
    }
    static newQueue() {
      const queue = new IMGFetcherQueue();
      EBUS.subscribe("imf-on-finished", (index, success, imf) => queue.chapterIndex === imf.chapterIndex && queue.finishedReport(index, success, imf));
      EBUS.subscribe("ifq-do", (index, imf, oriented) => {
        if (imf.chapterIndex !== queue.chapterIndex) return;
        queue.do(index, oriented);
      });
      EBUS.subscribe("pf-change-chapter", () => queue.forEach((imf) => imf.unrender()));
      return queue;
    }
    constructor() {
      super();
      this.executableQueue = [];
      this.currIndex = 0;
      this.debouncer = new Debouncer();
    }
    isFinished() {
      const picked = this.cherryPick?.(this.chapterIndex);
      if (picked && picked.values.length > 0) {
        for (let index = 0; index < this.length; index++) {
          if (picked.picked(index) && !this.finishedIndex.has(index)) {
            return false;
          }
        }
        return true;
      } else {
        return this.finishedIndex.size === this.length;
      }
    }
    do(start, oriented) {
      oriented = oriented || "next";
      this.currIndex = this.fixIndex(start);
      EBUS.emit("ifq-on-do", this.currIndex, this, this.downloading?.() || false);
      if (this.downloading?.()) return;
      if (!this.pushInExecutableQueue(oriented)) return;
      this.debouncer.addEvent("IFQ-EXECUTABLE", () => {
        console.log("IFQ-EXECUTABLE: ", this.executableQueue);
        Promise.all(this.executableQueue.splice(0, conf.paginationIMGCount).map((imfIndex) => this[imfIndex].start(imfIndex))).then(() => {
          const picked = this.cherryPick?.(this.chapterIndex);
          this.executableQueue.filter((i) => !picked || picked.picked(i)).forEach((imfIndex) => this[imfIndex].start(imfIndex));
        });
      }, 300);
    }
    //等待图片获取器执行成功后的上报，如果该图片获取器上报自身所在的索引和执行队列的currIndex一致，则改变大图
    finishedReport(index, success, imf) {
      if (this.length === 0) return;
      if (!success || imf.stage !== FetchState.DONE) return;
      this.finishedIndex.add(index);
      if (this.dataSize < 1e9) {
        this.dataSize += imf.data?.byteLength || 0;
      }
      EBUS.emit("ifq-on-finished-report", index, this);
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
      for (let count = 0, index = this.currIndex; this.checkOutbounds(index, oriented, count); oriented === "next" ? ++index : --index) {
        if (this[index].stage === FetchState.DONE) continue;
        this.executableQueue.push(index);
        count++;
      }
      return this.executableQueue.length > 0;
    }
    // 如果索引已到达边界且添加数量在配置最大同时获取数量的范围内
    checkOutbounds(index, oriented, count) {
      let ret = false;
      if (oriented === "next") ret = index < this.length;
      if (oriented === "prev") ret = index > -1;
      if (!ret) return false;
      if (count < conf.threads + conf.paginationIMGCount - 1) return true;
      return false;
    }
    findImgIndex(ele) {
      for (let index = 0; index < this.length; index++) {
        if (this[index].node.equal(ele)) {
          return index;
        }
      }
      return 0;
    }
  }

  class IdleLoader {
    queue;
    processingIndexList;
    restartId;
    maxWaitMS;
    minWaitMS;
    onFailedCallback;
    autoLoad = false;
    debouncer;
    cherryPick;
    constructor(queue) {
      this.queue = queue;
      this.processingIndexList = [0];
      this.maxWaitMS = 1e3;
      this.minWaitMS = 300;
      this.autoLoad = conf.autoLoad;
      this.debouncer = new Debouncer();
      EBUS.subscribe("ifq-on-do", (currIndex, _, downloading) => !downloading && this.abort(currIndex));
      EBUS.subscribe("imf-on-finished", (index) => {
        if (!this.processingIndexList.includes(index)) return;
        this.wait().then(() => {
          this.checkProcessingIndex();
          this.start();
        });
      });
      EBUS.subscribe("pf-change-chapter", (index) => !this.queue.downloading?.() && this.abort(index > 0 ? 0 : void 0));
      window.addEventListener("focus", () => {
        if (conf.autoLoadInBackground) return;
        this.debouncer.addEvent("Idle-Load-on-focus", () => {
          console.log("[ IdleLoader ] window focus, document.hidden:", document.hidden);
          if (document.hidden) return;
          this.abort(0, 10);
        }, 100);
      });
      EBUS.subscribe("pf-on-appended", (_total, _nodes, _chapterIndex, done) => {
        if (done || this.processingIndexList.length > 0) return;
        this.abort(this.queue.currIndex, 100);
      });
    }
    onFailed(cb) {
      this.onFailedCallback = cb;
    }
    start() {
      if (!this.autoLoad) return;
      if (document.hidden && !conf.autoLoadInBackground) return;
      if (this.processingIndexList.length === 0) return;
      if (this.queue.length === 0) return;
      evLog("info", "Idle Loader start at:" + this.processingIndexList.toString());
      for (const processingIndex of this.processingIndexList) {
        this.queue[processingIndex].start(processingIndex);
      }
    }
    checkProcessingIndex() {
      if (this.queue.length === 0) {
        return;
      }
      const picked = this.cherryPick?.() || new CherryPick();
      const foundFetcherIndex = /* @__PURE__ */ new Set();
      let hasFailed = false;
      for (let i = 0; i < this.processingIndexList.length; i++) {
        const processingIndex = this.processingIndexList[i];
        const imf = this.queue[processingIndex];
        if (imf.stage === FetchState.FAILED) {
          hasFailed = true;
        }
        if (imf.lock || imf.stage === FetchState.URL) {
          continue;
        }
        for (let j = Math.min(processingIndex + 1, this.queue.length - 1), limit = this.queue.length; j < limit; j++) {
          if (picked.picked(j)) {
            const imf2 = this.queue[j];
            if (!imf2.lock && imf2.stage === FetchState.URL && !foundFetcherIndex.has(j)) {
              foundFetcherIndex.add(j);
              this.processingIndexList[i] = j;
              break;
            }
            if (imf2.stage === FetchState.FAILED) {
              hasFailed = true;
            }
          }
          if (j >= this.queue.length - 1) {
            limit = processingIndex;
            j = 0;
          }
        }
        if (foundFetcherIndex.size === 0) {
          this.processingIndexList.length = 0;
          if (hasFailed && this.onFailedCallback) {
            this.onFailedCallback();
            this.onFailedCallback = void 0;
          }
          return;
        }
      }
    }
    async wait() {
      const { maxWaitMS, minWaitMS } = this;
      return new Promise(function(resolve) {
        const time = Math.floor(Math.random() * maxWaitMS + minWaitMS);
        window.setTimeout(() => resolve(true), time);
      });
    }
    abort(newIndex, delayRestart) {
      this.processingIndexList = [];
      this.debouncer.addEvent("IDLE-LOAD-ABORT", () => {
        if (!this.autoLoad) return;
        if (newIndex === void 0) return;
        if (this.queue.downloading?.()) return;
        this.processingIndexList = [newIndex];
        this.checkProcessingIndex();
        this.start();
      }, delayRestart || conf.restartIdleLoader);
    }
  }

  class PageFetcher {
    chapters = [];
    chapterIndex = 0;
    queue;
    matcher;
    beforeInit;
    afterInit;
    appendPageLock = false;
    abortb = false;
    constructor(queue, matcher) {
      this.queue = queue;
      this.matcher = matcher;
      const debouncer = new Debouncer();
      EBUS.subscribe("ifq-on-finished-report", (index) => debouncer.addEvent("APPEND-NEXT-PAGES", () => this.appendPages(index), 5));
      EBUS.subscribe("pf-try-extend", () => debouncer.addEvent("APPEND-NEXT-PAGES", () => !this.queue.downloading?.() && this.appendNextPage(), 5));
      EBUS.subscribe("pf-init", (cb) => this.init().then(cb));
    }
    appendToView(total, nodes, chapterIndex, done) {
      EBUS.emit("pf-on-appended", total, nodes, chapterIndex, done);
    }
    abort() {
      this.abortb = true;
    }
    async init() {
      this.chapters = await this.matcher.fetchChapters().catch((reason) => EBUS.emit("notify-message", "error", reason) || []);
      this.chapters.forEach((c) => {
        c.sourceIter = this.matcher.fetchPagesSource(c);
        c.onclick = (index) => {
          EBUS.emit("pf-change-chapter", index, c);
          if (this.chapters[index].queue) {
            this.appendToView(this.chapters[index].queue.length, this.chapters[index].queue, index, this.chapters[index].done);
          }
          if (!this.queue.downloading?.()) {
            this.beforeInit?.();
            this.changeChapter(index).then(this.afterInit).catch(this.onFailed);
          }
        };
      });
      EBUS.emit("pf-update-chapters", this.chapters);
      if (this.chapters.length === 1) {
        this.beforeInit?.();
        EBUS.emit("pf-change-chapter", 0, this.chapters[0]);
        await this.changeChapter(0).then(this.afterInit).catch(this.onFailed);
      }
    }
    /// start the chapter by index
    async changeChapter(index) {
      this.chapterIndex = index;
      const chapter = this.chapters[this.chapterIndex];
      this.queue.restore(index, chapter.queue);
      if (!chapter.sourceIter) {
        evLog("error", "chapter sourceIter is not set!");
        return;
      }
      const first = await chapter.sourceIter.next();
      if (!first.done) {
        await this.appendImages(first.value);
      }
      this.appendPages(this.queue.length);
    }
    // append next page until the queue length is 60 more than finished
    async appendPages(appendedCount) {
      while (true) {
        if (appendedCount + 60 < this.queue.length) break;
        if (!await this.appendNextPage()) break;
      }
    }
    async appendNextPage() {
      if (this.appendPageLock) return false;
      try {
        this.appendPageLock = true;
        const chapter = this.chapters[this.chapterIndex];
        if (chapter.done || this.abortb) return false;
        const next = await chapter.sourceIter.next();
        if (next.done) {
          chapter.done = true;
          this.appendToView(this.queue.length, [], this.chapterIndex, true);
          return false;
        } else {
          return await this.appendImages(next.value);
        }
      } catch (error) {
        evLog("error", "PageFetcher:appendNextPage error: ", error);
        this.onFailed?.(error);
        return false;
      } finally {
        this.appendPageLock = false;
      }
    }
    async appendImages(page) {
      try {
        const nodes = await this.obtainImageNodeList(page);
        if (this.abortb) return false;
        if (nodes.length === 0) return false;
        const len = this.queue.length;
        const IFs = nodes.map(
          (imgNode, index) => new IMGFetcher(index + len, imgNode, this.matcher, this.chapterIndex)
        );
        this.queue.push(...IFs);
        this.chapters[this.chapterIndex].queue.push(...IFs);
        this.appendToView(this.queue.length, IFs, this.chapterIndex);
        return true;
      } catch (error) {
        evLog("error", `page fetcher append images error: `, error);
        this.onFailed?.(error);
        return false;
      }
    }
    //从文档的字符串中创建缩略图元素列表
    async obtainImageNodeList(page) {
      let tryTimes = 0;
      let err;
      while (tryTimes < 3) {
        try {
          return await this.matcher.parseImgNodes(page, this.chapters[this.chapterIndex].id);
        } catch (error) {
          evLog("error", "warn: parse image nodes failed, retrying: ", error);
          tryTimes++;
          err = error;
        }
      }
      evLog("error", "warn: parse image nodes failed: reached max try times!");
      throw err;
    }
    //通过地址请求该页的文档
    async fetchDocument(pageURL) {
      return await window.fetch(pageURL).then((response) => response.text());
    }
    onFailed(reason) {
      EBUS.emit("notify-message", "error", reason.toString());
    }
  }

  class GalleryMeta {
    url;
    title;
    originTitle;
    downloader;
    tags;
    constructor(url, title) {
      this.url = url;
      this.title = title;
      this.tags = {};
      this.downloader = "https://github.com/MapoMagpie/eh-view-enhance";
    }
  }

  const PICA = new pica({ features: ["js", "wasm"] });
  const PICA_OPTION = { filter: "box" };
  async function resizing(from, to) {
    return PICA.resize(from, to, PICA_OPTION).then();
  }

  const DEFAULT_THUMBNAIL = "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
  const DEFAULT_NODE_TEMPLATE = document.createElement("div");
  DEFAULT_NODE_TEMPLATE.classList.add("img-node");
  DEFAULT_NODE_TEMPLATE.innerHTML = `
<a>
  <img decoding="async" loading="eager" title="untitle.jpg" src="" style="display: none;" />
  <canvas id="sample-canvas" width="100" height="100"></canvas>
</a>`;
  const OVERLAY_TIP = document.createElement("div");
  OVERLAY_TIP.classList.add("overlay-tip");
  OVERLAY_TIP.innerHTML = `<span>GIF</span>`;
  class ImageNode {
    root;
    thumbnailSrc;
    href;
    title;
    onclick;
    imgElement;
    canvasElement;
    canvasCtx;
    delaySRC;
    originSrc;
    blobSrc;
    mimeType;
    downloadBar;
    picked = true;
    debouncer = new Debouncer();
    rect;
    constructor(thumbnailSrc, href, title, delaySRC, originSrc, wh) {
      this.thumbnailSrc = thumbnailSrc;
      this.href = href;
      this.title = title;
      this.delaySRC = delaySRC;
      this.originSrc = originSrc;
      this.rect = wh;
    }
    create() {
      this.root = DEFAULT_NODE_TEMPLATE.cloneNode(true);
      const anchor = this.root.firstElementChild;
      anchor.href = this.href;
      anchor.target = "_blank";
      this.imgElement = anchor.firstElementChild;
      this.canvasElement = anchor.lastElementChild;
      this.imgElement.setAttribute("title", this.title);
      this.canvasElement.id = "canvas-" + this.title.replaceAll(/[^\w]/g, "_");
      if (this.rect) {
        this.canvasElement.width = 512;
        this.canvasElement.height = Math.floor(512 * (this.rect.h / this.rect.w));
      }
      this.canvasCtx = this.canvasElement.getContext("2d");
      this.canvasCtx.fillStyle = "#aaa";
      this.canvasCtx.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);
      if (this.onclick) {
        anchor.addEventListener("click", (event) => {
          event.preventDefault();
          this.onclick(event);
        });
      }
      return this.root;
    }
    resize(onfailed) {
      if (!this.root || !this.imgElement || !this.canvasElement) return onfailed("undefined elements");
      if (!this.imgElement.src || this.imgElement.src === DEFAULT_THUMBNAIL) return onfailed("empty or default src");
      if (this.root.offsetWidth <= 1) return onfailed("element too small");
      this.imgElement.onload = null;
      this.imgElement.onerror = null;
      const newRatio = this.imgElement.naturalHeight / this.imgElement.naturalWidth;
      const oldRatio = this.canvasElement.height / this.canvasElement.width;
      const flowVision = this.root.parentElement?.classList.contains("fvg-sub-container");
      const resize = flowVision ? this.root.offsetHeight !== this.canvasElement.height : this.root.offsetWidth !== this.canvasElement.width;
      if (resize || Math.abs(newRatio - oldRatio) > 1.07) {
        if (flowVision) {
          this.canvasElement.height = this.root.offsetHeight;
          this.canvasElement.width = Math.floor(this.root.offsetHeight / newRatio);
        } else {
          this.canvasElement.width = this.root.offsetWidth;
          this.canvasElement.height = Math.floor(this.root.offsetWidth * newRatio);
        }
      }
      if (this.imgElement.src === this.thumbnailSrc) {
        this.canvasCtx?.drawImage(this.imgElement, 0, 0, this.canvasElement.width, this.canvasElement.height);
        this.imgElement.src = "";
      } else {
        resizing(this.imgElement, this.canvasElement).then(() => window.setTimeout(() => this.imgElement.src = "", 100)).catch(() => this.imgElement.src = this.canvasCtx?.drawImage(this.imgElement, 0, 0, this.canvasElement.width, this.canvasElement.height) || "");
      }
    }
    render(onfailed) {
      this.debouncer.addEvent("IMG-RENDER", () => {
        if (!this.imgElement) return onfailed("element undefined");
        let justThumbnail = !this.blobSrc;
        if (this.mimeType === "image/gif" || this.mimeType?.startsWith("video")) {
          const tip = OVERLAY_TIP.cloneNode(true);
          tip.firstChild.textContent = this.mimeType.split("/")[1].toUpperCase();
          this.root?.appendChild(tip);
          justThumbnail = true;
        }
        this.imgElement.onload = () => this.resize(onfailed);
        this.imgElement.onerror = () => onfailed("img load error");
        if (justThumbnail) {
          const delaySRC = this.delaySRC;
          this.delaySRC = void 0;
          if (delaySRC) {
            delaySRC.then((src) => (this.thumbnailSrc = src) && this.render(onfailed)).catch(onfailed);
          } else {
            this.imgElement.src = this.thumbnailSrc || this.blobSrc || DEFAULT_THUMBNAIL;
          }
        } else {
          this.imgElement.src = this.blobSrc || this.thumbnailSrc || DEFAULT_THUMBNAIL;
        }
      }, 30);
    }
    unrender() {
      if (!this.imgElement) return;
      this.imgElement.src = "";
    }
    progress(state) {
      if (!this.root) return;
      if (state.readyState === 4) {
        if (this.downloadBar && this.downloadBar.parentNode) {
          this.downloadBar.parentNode.removeChild(this.downloadBar);
        }
        return;
      }
      if (!this.downloadBar) {
        const downloadBar = document.createElement("div");
        downloadBar.classList.add("download-bar");
        downloadBar.innerHTML = `<div style="width: 0%"></div>`;
        this.downloadBar = downloadBar;
        this.root.firstElementChild.appendChild(this.downloadBar);
      }
      if (this.downloadBar) {
        this.downloadBar.firstElementChild.style.width = state.loaded / state.total * 100 + "%";
      }
    }
    changeStyle(fetchStatus, failedReason) {
      if (!this.root) return;
      const clearClass = () => this.root.classList.forEach((cls) => ["img-excluded", "img-fetching", "img-fetched", "img-fetch-failed"].includes(cls) && this.root?.classList.remove(cls));
      if (!this.picked) {
        clearClass();
        this.root.classList.add("img-excluded");
      } else {
        switch (fetchStatus) {
          case "fetching":
            clearClass();
            this.root.classList.add("img-fetching");
            break;
          case "fetched":
            clearClass();
            this.root.classList.add("img-fetched");
            break;
          case "failed":
            clearClass();
            this.root.classList.add("img-fetch-failed");
            break;
          case "init":
            clearClass();
            break;
        }
      }
      this.root.querySelector(".img-node-error-hint")?.remove();
      if (failedReason) {
        const errorHintElement = document.createElement("div");
        errorHintElement.classList.add("img-node-error-hint");
        errorHintElement.innerHTML = `<span>${failedReason}</span><br><span style="color: white;">You can click here retry again,<br>Or press mouse middle button to open origin image url</span>`;
        this.root.firstElementChild.appendChild(errorHintElement);
      }
    }
    equal(ele) {
      if (ele === this.root) {
        return true;
      }
      if (ele === this.root?.firstElementChild) {
        return true;
      }
      if (ele === this.canvasElement || ele === this.imgElement) {
        return true;
      }
      return false;
    }
  }

  class BaseMatcher {
    async fetchChapters() {
      return [{
        id: 1,
        title: "Default",
        source: window.location.href,
        queue: []
      }];
    }
    title(doc) {
      const meta = this.galleryMeta(doc);
      return meta.originTitle || meta.title || "unknown";
    }
    galleryMeta(doc, _chapter) {
      return new GalleryMeta(window.location.href, doc.title || "unknown");
    }
    workURLs() {
      return [this.workURL()];
    }
    async processData(data, contentType, _url) {
      return [data, contentType];
    }
    headers() {
      return {};
    }
  }

  function toMD5(s) {
    return md5(s);
  }
  function get_num(gid, page) {
    gid = window.atob(gid);
    page = window.atob(page);
    let n = toMD5(gid + page).slice(-1).charCodeAt(0);
    if (gid >= window.atob("MjY4ODUw") && gid <= window.atob("NDIxOTI1")) {
      n %= 10;
    } else if (gid >= window.atob("NDIxOTI2")) {
      n %= 8;
    }
    if (n < 10) {
      return 2 + 2 * n;
    } else {
      return 10;
    }
  }
  function drawImage(ctx, e, gid, page) {
    const width = e.width;
    const height = e.height;
    const s = get_num(window.btoa(gid), window.btoa(page));
    const l = parseInt((height % s).toString());
    const r = width;
    for (let m = 0; m < s; m++) {
      let c = Math.floor(height / s);
      let g = c * m;
      const w = height - c * (m + 1) - l;
      0 == m ? c += l : g += l, ctx.drawImage(e, 0, w, r, c, 0, g, r, c);
    }
  }
  class Comic18Matcher extends BaseMatcher {
    name() {
      return "禁漫";
    }
    meta;
    async fetchChapters() {
      const ret = [];
      const thumb = document.querySelector(".thumb-overlay > img");
      const chapters = Array.from(document.querySelectorAll(".visible-lg .episode > ul > a"));
      if (chapters.length > 0) {
        chapters.forEach((ch, i) => {
          const title = Array.from(ch.querySelector("li")?.childNodes || []).map((n) => n.textContent?.trim()).filter(Boolean).map((n) => n);
          const url = new URL(ch.href);
          url.searchParams.set("read_mode", "read-by-page");
          ret.push({
            id: i,
            title,
            source: url.href,
            queue: [],
            thumbimg: thumb?.src
          });
        });
      } else {
        const first = document.querySelector(".visible-lg .read-block")?.firstElementChild;
        if (first === void 0) throw new Error("No page found");
        let href = "";
        if (first instanceof HTMLAnchorElement) {
          href = first.href;
        } else {
          href = first.getAttribute("href") || "";
        }
        if (!href || href.startsWith("javascript")) throw new Error("未能找到阅读按钮！");
        if (href.startsWith("#coinbuycomic")) throw new Error("此漫画需要硬币解锁！请点击开始阅读按钮进行解锁。");
        const url = new URL(href);
        url.searchParams.set("read_mode", "read-by-page");
        ret.push({
          id: 0,
          title: "Default",
          source: url.href,
          queue: []
        });
      }
      return ret;
    }
    async *fetchPagesSource(chapter) {
      yield chapter.source;
    }
    async parseImgNodes(source) {
      const list = [];
      const raw = await window.fetch(source).then((resp) => resp.text());
      const document2 = new DOMParser().parseFromString(raw, "text/html");
      const elements = Array.from(document2.querySelectorAll(".owl-carousel-page > .center > img"));
      for (const element of elements) {
        const src = element.getAttribute("data-src");
        if (!src) {
          evLog("error", "warn: cannot find img src", element);
          continue;
        }
        const title = src.split("/").pop();
        list.push(new ImageNode("", src, title, void 0, src));
      }
      return list;
    }
    async processData(data, contentType, url) {
      const reg = /(\d+)\/(\d+)\.(\w+)/;
      const matches = url.match(reg);
      const gid = matches[1];
      const scrambleID = 220980;
      if (Number(gid) < scrambleID) return [data, contentType];
      const page = matches[2];
      const ext = matches[3];
      if (ext === "gif") return [data, contentType];
      const img = await createImageBitmap(new Blob([data], { type: contentType }));
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      drawImage(ctx, img, gid, page);
      return new Promise(
        (resolve) => canvas.toBlob(
          (blob) => blob?.arrayBuffer().then((buf) => resolve([new Uint8Array(buf), blob.type])).finally(() => canvas.remove()),
          contentType
        )
      );
    }
    workURL() {
      return /18comic(-gura)?.(vip|org|me)\/album\/\d+/;
    }
    galleryMeta(doc) {
      if (this.meta) return this.meta;
      const title = doc.querySelector(".panel-heading h1")?.textContent || "UNTITLE";
      this.meta = new GalleryMeta(window.location.href, title);
      this.meta.originTitle = title;
      const tagTrList = doc.querySelectorAll("div.tag-block > span");
      const tags = {};
      tagTrList.forEach((tr) => {
        const cat = tr.getAttribute("data-type")?.trim();
        if (cat) {
          const values = Array.from(tr.querySelectorAll("a")).map((a) => a.textContent).filter(Boolean);
          if (values.length > 0) {
            tags[cat] = values;
          }
        }
      });
      this.meta.tags = tags;
      return this.meta;
    }
    // https://cdn-msp.18comic.org/media/photos/529221/00004.gif
    async fetchOriginMeta(node) {
      return { url: node.originSrc };
    }
  }

  class AkumaMatcher extends BaseMatcher {
    originImages;
    index = 0;
    meta;
    name() {
      return "Akuma.moe";
    }
    title() {
      return this.galleryMeta(document).title;
    }
    galleryMeta(doc) {
      if (!this.meta) {
        this.meta = this.initGalleryMeta(doc);
      }
      return this.meta;
    }
    initGalleryMeta(doc) {
      const title = doc.querySelector("header.entry-header > h1")?.textContent ?? doc.title;
      const meta = new GalleryMeta(window.location.href, title);
      meta.originTitle = doc.querySelector("header.entry-header > span")?.textContent || void 0;
      meta.tags = Array.from(doc.querySelectorAll("ul.info-list > li.meta-data")).reduce((prev, curr) => {
        const cat = curr.querySelector("span.data")?.textContent?.replace(":", "").toLowerCase().trim();
        if (cat) {
          prev[cat] = Array.from(curr.querySelectorAll("span.value")).map((v) => v.textContent?.trim()).filter(Boolean);
        }
        return prev;
      }, {});
      return meta;
    }
    async *fetchPagesSource() {
      const csrf = document.querySelector("meta[name='csrf-token'][content]")?.content;
      if (!csrf) throw new Error("cannot get csrf token form this page");
      this.originImages = await window.fetch(window.location.href, {
        headers: { "X-CSRF-TOKEN": csrf, "X-Requested-With": "XMLHttpRequest", "Sec-Fetch-Dest": "empty" },
        method: "POST"
      }).then((res) => res.json());
      const pagRaw = Array.from(document.querySelectorAll("body > script")).find((s) => s.textContent?.trimStart().startsWith("var ajx"))?.textContent?.match(/pag = (\{.*?\}),/s)?.[1];
      if (!pagRaw) throw new Error("cannot get page info");
      const pag = JSON.parse(pagRaw.replaceAll(/(\w+) :/g, '"$1":'));
      let idx = pag.idx;
      yield document;
      while (idx * pag.stp < pag.cnt) {
        const res = await window.fetch(pag.act, {
          headers: {
            "X-CSRF-TOKEN": csrf,
            "X-Requested-With": "XMLHttpRequest",
            "Sec-Fetch-Dest": "empty",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          },
          method: "POST",
          body: `index=${idx}`
        });
        if (!res.ok) throw new Error(`fetch thumbnails failed, status: ${res.statusText}`);
        idx++;
        yield res.text().then((text) => new DOMParser().parseFromString(text, "text/html"));
      }
    }
    async parseImgNodes(page) {
      const doc = page;
      const items = Array.from(doc.querySelectorAll("li > a.page-item"));
      if (items.length === 0) throw new Error("cannot find thumbnails");
      const ret = [];
      const digits = this.originImages.length.toString().length;
      for (const item of items) {
        const origin = this.originImages[this.index];
        const href = item.href;
        const thumb = item.firstElementChild.src;
        const ext = origin.split(".").pop() ?? "jpg";
        const originSrc = thumb.slice(0, thumb.indexOf("tbn")) + origin;
        const title = (this.index + 1).toString().padStart(digits, "0");
        ret.push(new ImageNode(thumb, href, `${title}.${ext}`, void 0, originSrc));
        this.index++;
      }
      return ret;
    }
    async fetchOriginMeta(node) {
      return { url: node.originSrc };
    }
    workURL() {
      return /akuma.moe\/g\/\w+\/?$/;
    }
  }

  class ArcaMatcher extends BaseMatcher {
    name() {
      return "Arcalive";
    }
    async *fetchPagesSource() {
      yield document;
    }
    async parseImgNodes(page) {
      const doc = page;
      const imageString = ".article-content img:not(.arca-emoticon):not(.twemoji)";
      const videoString = ".article-content video:not(.arca-emoticon)";
      const elements = Array.from(doc.querySelectorAll(`${imageString}, ${videoString}`));
      const nodes = [];
      const digits = elements.length.toString().length;
      elements.forEach((element, i) => {
        if (element.tagName.toLowerCase() === "img") {
          const img = element;
          if (img.src && img.style.width !== "0px") {
            const src = img.src;
            const href = new URL(src);
            const ext = href.pathname.split(".").pop();
            href.searchParams.set("type", "orig");
            const title = (i + 1).toString().padStart(digits, "0") + "." + ext;
            nodes.push(new ImageNode(src, href.href, title, void 0, href.href));
          }
        } else if (element.tagName.toLowerCase() === "video") {
          const video = element;
          if (video.src) {
            const src = video.src;
            const href = new URL(src);
            const ext = href.pathname.split(".").pop();
            href.searchParams.set("type", "orig");
            const title = (i + 1).toString().padStart(digits, "0") + "." + ext;
            const poster = video.poster || "";
            nodes.push(new ImageNode(poster, href.href, title, void 0, href.href));
          }
        }
      });
      return nodes;
    }
    async fetchOriginMeta(node) {
      return { url: node.href };
    }
    workURL() {
      return /arca.live\/b\/\w*\/\d+/;
    }
  }

  class ArtStationMatcher extends BaseMatcher {
    pageData = /* @__PURE__ */ new Map();
    info = { username: "", projects: 0, assets: 0 };
    tags = {};
    name() {
      return "Art Station";
    }
    galleryMeta() {
      const meta = new GalleryMeta(window.location.href, `artstaion-${this.info.username}-w${this.info.projects}-p${this.info.assets}`);
      meta.tags = this.tags;
      return meta;
    }
    async *fetchPagesSource() {
      const { id, username } = await this.fetchArtistInfo();
      this.info.username = username;
      let page = 0;
      while (true) {
        page++;
        const projects = await this.fetchProjects(username, id.toString(), page);
        if (!projects || projects.length === 0) break;
        this.pageData.set(page.toString(), projects);
        yield page.toString();
      }
    }
    async parseImgNodes(pageNo) {
      const projects = this.pageData.get(pageNo);
      if (!projects) throw new Error("cannot get projects form page data");
      const projectURLs = projects.map((p) => `https://www.artstation.com/projects/${p.hash_id}.json`);
      const assets = await batchFetch(projectURLs, 10, "json");
      const ret = [];
      for (const asset of assets) {
        this.info.projects++;
        this.tags[asset.slug] = asset.tags;
        for (let i = 0; i < asset.assets.length; i++) {
          const a = asset.assets[i];
          if (a.asset_type === "cover") continue;
          const thumb = a.image_url.replace("/large/", "/small/");
          const ext = a.image_url.match(/\.(\w+)\?\d+$/)?.[1] ?? "jpg";
          const title = `${asset.slug}-${i + 1}.${ext}`;
          let originSrc = a.image_url;
          if (a.has_embedded_player && a.player_embedded) {
            if (a.player_embedded.includes("youtube")) continue;
            originSrc = a.player_embedded;
          }
          this.info.assets++;
          ret.push(new ImageNode(thumb, asset.permalink, title, void 0, originSrc, { w: a.width, h: a.height }));
        }
      }
      return ret;
    }
    async fetchOriginMeta(node) {
      if (node.originSrc?.startsWith("<iframe")) {
        const iframe = node.originSrc.match(/src=['"](.*?)['"]\s/)?.[1];
        if (!iframe) throw new Error("cannot match video clip url");
        const doc = await window.fetch(iframe).then((res) => res.text()).then((text) => new DOMParser().parseFromString(text, "text/html"));
        const source = doc.querySelector("video > source");
        if (!source) throw new Error("cannot find video element");
        return { url: source.src };
      }
      return { url: node.originSrc };
    }
    async processData(data, contentType) {
      if (contentType.startsWith("binary") || contentType.startsWith("text")) {
        return [data, "video/mp4"];
      }
      return [data, contentType];
    }
    workURL() {
      return /artstation.com\/[-\w]+(\/albums\/\d+)?$/;
    }
    async fetchArtistInfo() {
      const user = window.location.pathname.slice(1).split("/").shift();
      if (!user) throw new Error("cannot match artist's username");
      const info = await window.fetch(`https://www.artstation.com/users/${user}/quick.json`).then((res) => res.json());
      return info;
    }
    async fetchProjects(user, id, page) {
      const url = `https://www.artstation.com/users/${user}/projects.json?user_id=${id}&page=${page}`;
      const project = await window.fetch(url).then((res) => res.json());
      return project.data;
    }
  }

  class DanbooruMatcher extends BaseMatcher {
    tags = {};
    blacklistTags = [];
    count = 0;
    name() {
      return this.site();
    }
    async *fetchPagesSource() {
      let doc = document;
      this.blacklistTags = this.getBlacklist(doc);
      yield doc;
      let tryTimes = 0;
      while (true) {
        const url = this.nextPage(doc);
        if (!url) break;
        try {
          doc = await window.fetch(url).then((res) => res.text()).then((text) => new DOMParser().parseFromString(text, "text/html"));
        } catch (e) {
          tryTimes++;
          if (tryTimes > 3) throw new Error(`fetch next page failed, ${e}`);
          continue;
        }
        tryTimes = 0;
        yield doc;
      }
    }
    async fetchOriginMeta(node) {
      const cached = this.cachedOriginMeta(node.href);
      if (cached) return cached;
      let url = null;
      const doc = await window.fetch(node.href).then((res) => res.text()).then((text) => new DOMParser().parseFromString(text, "text/html"));
      if (conf.fetchOriginal) {
        url = this.getOriginalURL(doc);
      }
      if (!url) {
        url = this.getNormalURL(doc);
      }
      if (!url) throw new Error("Cannot find origin image or video url");
      let title;
      const ext = url.split(".").pop()?.match(/^\w+/)?.[0];
      const id = this.extractIDFromHref(node.href);
      if (ext && id) {
        title = `${id}.${ext}`;
      }
      return { url, title };
    }
    cachedOriginMeta(_href) {
      return null;
    }
    async parseImgNodes(source) {
      const list = [];
      const doc = source;
      this.queryList(doc).forEach((ele) => {
        const [imgNode, tags] = this.toImgNode(ele);
        if (!imgNode) return;
        this.count++;
        if (tags !== "") {
          const tagList = tags.trim().replaceAll(": ", ":").split(" ").map((v) => v.trim()).filter((v) => v !== "");
          if (this.blacklistTags.findIndex((t) => tagList.includes(t)) >= 0) return;
          this.tags[imgNode.title.split(".")[0]] = tagList;
        }
        list.push(imgNode);
      });
      return list;
    }
    galleryMeta() {
      const url = new URL(window.location.href);
      const tags = url.searchParams.get("tags")?.trim();
      const meta = new GalleryMeta(window.location.href, `${this.site().toLowerCase().replace(" ", "-")}_${tags}_${this.count}`);
      meta.tags = this.tags;
      return meta;
    }
  }
  class DanbooruDonmaiMatcher extends DanbooruMatcher {
    site() {
      return "danbooru";
    }
    workURL() {
      return /danbooru.donmai.us\/(posts(?!\/)|$)/;
    }
    nextPage(doc) {
      return doc.querySelector(".paginator a.paginator-next")?.href || null;
    }
    queryList(doc) {
      return Array.from(doc.querySelectorAll(".posts-container > article"));
    }
    getBlacklist(doc) {
      return doc.querySelector("meta[name='blacklisted-tags']")?.getAttribute("content")?.split(",") || [];
    }
    toImgNode(ele) {
      const anchor = ele.querySelector("a");
      if (!anchor) {
        evLog("error", "warn: cannot find anchor element", anchor);
        return [null, ""];
      }
      const img = anchor.querySelector("img");
      if (!img) {
        evLog("error", "warn: cannot find img element", img);
        return [null, ""];
      }
      const href = anchor.getAttribute("href");
      if (!href) {
        evLog("error", "warn: cannot find href", anchor);
        return [null, ""];
      }
      return [new ImageNode(img.src, href, `${ele.getAttribute("data-id") || ele.id}.jpg`), ele.getAttribute("data-tags") || ""];
    }
    getOriginalURL(doc) {
      return doc.querySelector("#image-resize-notice > a")?.href || null;
    }
    getNormalURL(doc) {
      return doc.querySelector("#image")?.getAttribute("src") || null;
    }
    extractIDFromHref(href) {
      return href.match(/posts\/(\d+)/)?.[1];
    }
  }
  class Rule34Matcher extends DanbooruMatcher {
    site() {
      return "rule34";
    }
    workURL() {
      return /rule34.xxx\/index.php\?page=post&s=list/;
    }
    nextPage(doc) {
      return doc.querySelector(".pagination a[alt=next]")?.href || null;
    }
    queryList(doc) {
      return Array.from(doc.querySelectorAll(".image-list > .thumb:not(.blacklisted-image) > a"));
    }
    getBlacklist(doc) {
      return doc.querySelector("meta[name='blacklisted-tags']")?.getAttribute("content")?.split(",") || [];
    }
    toImgNode(ele) {
      const img = ele.querySelector("img");
      if (!img) {
        evLog("error", "warn: cannot find img element", img);
        return [null, ""];
      }
      const href = ele.getAttribute("href");
      if (!href) {
        evLog("error", "warn: cannot find href", ele);
        return [null, ""];
      }
      return [new ImageNode(img.src, href, `${ele.id}.jpg`), img.getAttribute("alt") || ""];
    }
    getOriginalURL(doc) {
      const raw = doc.querySelector("#note-container + script")?.textContent?.trim().replace("image = ", "").replace(";", "").replaceAll("'", '"');
      try {
        if (raw) {
          const info = JSON.parse(raw);
          return `${info.domain}/${info.base_dir}/${info.dir}/${info.img}`;
        }
      } catch (error) {
        evLog("error", "get original url failed", error);
      }
      return null;
    }
    getNormalURL(doc) {
      const element = doc.querySelector("#image,#gelcomVideoPlayer > source");
      return element?.getAttribute("src") || element?.getAttribute("data-cfsrc") || null;
    }
    extractIDFromHref(href) {
      return href.match(/id=(\d+)/)?.[1];
    }
  }
  const POST_INFO_REGEX = /Post\.register\((.*)\)/g;
  class YandereMatcher extends BaseMatcher {
    name() {
      return "yande.re";
    }
    infos = {};
    count = 0;
    workURL() {
      return /yande.re\/post(?!\/show\/.*)/;
    }
    async *fetchPagesSource() {
      let doc = document;
      yield doc;
      let tryTimes = 0;
      while (true) {
        const url = doc.querySelector("#paginator a.next_page")?.href;
        if (!url) break;
        try {
          doc = await window.fetch(url).then((res) => res.text()).then((text) => new DOMParser().parseFromString(text, "text/html"));
        } catch (e) {
          tryTimes++;
          if (tryTimes > 3) throw new Error(`fetch next page failed, ${e}`);
          continue;
        }
        tryTimes = 0;
        yield doc;
      }
    }
    async parseImgNodes(source) {
      const doc = source;
      const raw = doc.querySelector("body > form + script")?.textContent;
      if (!raw) throw new Error("cannot find post list from script");
      const matches = raw.matchAll(POST_INFO_REGEX);
      const ret = [];
      for (const match of matches) {
        if (!match || match.length < 2) continue;
        try {
          const info = JSON.parse(match[1]);
          this.infos[info.id.toString()] = info;
          this.count++;
          ret.push(new ImageNode(info.preview_url, `${window.location.origin}/post/show/${info.id}`, `${info.id}.${info.file_ext}`, void 0, void 0, { w: info.width, h: info.height }));
        } catch (error) {
          evLog("error", "parse post info failed", error);
          continue;
        }
      }
      return ret;
    }
    async fetchOriginMeta(node) {
      const id = node.href.split("/").pop();
      if (!id) {
        throw new Error(`cannot find id from ${node.href}`);
      }
      let url;
      if (conf.fetchOriginal) {
        url = this.infos[id]?.file_url;
      } else {
        url = this.infos[id]?.sample_url;
      }
      if (!url) {
        throw new Error(`cannot find url for id ${id}`);
      }
      return { url };
    }
    galleryMeta() {
      const url = new URL(window.location.href);
      const tags = url.searchParams.get("tags")?.trim();
      const meta = new GalleryMeta(window.location.href, `yande_${tags || "post"}_${this.count}`);
      meta["infos"] = this.infos;
      return meta;
    }
  }
  class KonachanMatcher extends BaseMatcher {
    name() {
      return "konachan";
    }
    infos = {};
    count = 0;
    workURL() {
      return /konachan.com\/post(?!\/show\/.*)/;
    }
    async *fetchPagesSource() {
      let doc = document;
      yield doc;
      let tryTimes = 0;
      while (true) {
        const url = doc.querySelector("#paginator a.next_page")?.href;
        if (!url) break;
        try {
          doc = await window.fetch(url).then((res) => res.text()).then((text) => new DOMParser().parseFromString(text, "text/html"));
        } catch (e) {
          tryTimes++;
          if (tryTimes > 3) throw new Error(`fetch next page failed, ${e}`);
          continue;
        }
        tryTimes = 0;
        yield doc;
      }
    }
    async parseImgNodes(source) {
      const doc = source;
      const raw = doc.querySelector("body > script + script")?.textContent;
      if (!raw) throw new Error("cannot find post list from script");
      const matches = raw.matchAll(POST_INFO_REGEX);
      const ret = [];
      for (const match of matches) {
        if (!match || match.length < 2) continue;
        try {
          const info = JSON.parse(match[1]);
          this.infos[info.id.toString()] = info;
          this.count++;
          const ext = info.file_ext || info.file_url.split(".").pop();
          ret.push(new ImageNode(info.preview_url, `${window.location.origin}/post/show/${info.id}`, `${info.id}.${ext}`));
        } catch (error) {
          evLog("error", "parse post info failed", error);
          continue;
        }
      }
      return ret;
    }
    async fetchOriginMeta(node) {
      const id = node.href.split("/").pop();
      if (!id) {
        throw new Error(`cannot find id from ${node.href}`);
      }
      let url;
      if (conf.fetchOriginal) {
        url = this.infos[id]?.file_url;
      } else {
        url = this.infos[id]?.sample_url;
      }
      if (!url) {
        throw new Error(`cannot find url for id ${id}`);
      }
      return { url };
    }
    galleryMeta() {
      const url = new URL(window.location.href);
      const tags = url.searchParams.get("tags")?.trim();
      const meta = new GalleryMeta(window.location.href, `konachan_${tags}_${this.count}`);
      meta["infos"] = this.infos;
      return meta;
    }
  }
  class GelBooruMatcher extends DanbooruMatcher {
    site() {
      return "gelbooru";
    }
    workURL() {
      return /gelbooru.com\/index.php\?page=post&s=list/;
    }
    nextPage(doc) {
      const href = doc.querySelector("#paginator a[alt=next]")?.href;
      if (href) return href;
      return doc.querySelector("#paginator b + a")?.href || null;
    }
    queryList(doc) {
      return Array.from(doc.querySelectorAll(".thumbnail-container > article.thumbnail-preview:not(.blacklisted-image) > a"));
    }
    getBlacklist(doc) {
      return doc.querySelector("meta[name='blacklisted-tags']")?.getAttribute("content")?.split(",") || [];
    }
    toImgNode(ele) {
      const img = ele.querySelector("img");
      if (!img) {
        evLog("error", "warn: cannot find img element", img);
        return [null, ""];
      }
      const href = ele.getAttribute("href");
      if (!href) {
        evLog("error", "warn: cannot find href", ele);
        return [null, ""];
      }
      return [new ImageNode(img.src, href, `${ele.id}.jpg`), img.getAttribute("alt") || ""];
    }
    getOriginalURL(doc) {
      return doc.querySelector("head > meta[property='og:image']")?.getAttribute("content") || null;
    }
    getNormalURL(doc) {
      const img = doc.querySelector("#image");
      if (img?.src) return img.src;
      const vidSources = Array.from(doc.querySelectorAll("#gelcomVideoPlayer > source"));
      if (vidSources.length === 0) return null;
      return vidSources.find((s) => s.type.endsWith("mp4"))?.src || vidSources[0].src;
    }
    extractIDFromHref(href) {
      return href.match(/id=(\d+)/)?.[1];
    }
  }
  class E621Matcher extends DanbooruMatcher {
    cache = /* @__PURE__ */ new Map();
    nextPage(doc) {
      return doc.querySelector(".paginator #paginator-next")?.href ?? null;
    }
    getOriginalURL() {
      throw new Error("Method not implemented.");
    }
    getNormalURL() {
      throw new Error("Method not implemented.");
    }
    extractIDFromHref() {
      throw new Error("Method not implemented.");
    }
    getBlacklist(doc) {
      const content = doc.querySelector("meta[name='blacklisted-tags']")?.getAttribute("content");
      if (!content) return [];
      return content.slice(1, -1).split(",").map((s) => s.slice(1, -1));
    }
    queryList(doc) {
      transient.imgSrcCSP = true;
      return Array.from(doc.querySelectorAll("#posts-container > article"));
    }
    toImgNode(ele) {
      const src = ele.getAttribute("data-preview-url");
      if (!src) return [null, ""];
      const href = `${window.location.origin}/posts/${ele.getAttribute("data-id")}`;
      const tags = ele.getAttribute("data-tags");
      const id = ele.getAttribute("data-id");
      const normal = ele.getAttribute("data-large-url");
      const original = ele.getAttribute("data-file-url");
      const fileExt = ele.getAttribute("data-file-ext") || void 0;
      if (!normal || !original || !id) return [null, ""];
      const width = ele.getAttribute("data-width");
      const height = ele.getAttribute("data-height");
      let wh = void 0;
      if (width && height) {
        wh = { w: parseInt(width), h: parseInt(height) };
      }
      this.cache.set(href, { normal, original, id, fileExt });
      return [new ImageNode(src, href, `${id}.jpg`, void 0, void 0, wh), tags || ""];
    }
    cachedOriginMeta(href) {
      const cached = this.cache.get(href);
      if (!cached) throw new Error("miss origin meta: " + href);
      if (["webm", "webp", "mp4"].includes(cached.fileExt ?? "bbb") || conf.fetchOriginal) {
        return { url: cached.original, title: `${cached.id}.${cached.fileExt}` };
      }
      return { url: cached.normal, title: `${cached.id}.${cached.normal.split(".").pop()}` };
    }
    site() {
      return "e621";
    }
    workURL() {
      return /e621.net\/(posts(?!\/)|$)/;
    }
  }

  function parseImagePositions(styles) {
    return styles.map((st) => {
      const [x, y] = st.backgroundPosition.split(" ").map((v) => Math.abs(parseInt(v)));
      return { x, y, width: parseInt(st.width), height: parseInt(st.height) };
    });
  }
  function splitSpriteImage(image, positions) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const result = [];
    for (const pos of positions) {
      canvas.width = pos.width;
      canvas.height = pos.height;
      ctx.drawImage(image, pos.x, pos.y, pos.width, pos.height, 0, 0, pos.width, pos.height);
      result.push(canvas.toDataURL());
    }
    canvas.remove();
    return result;
  }
  async function splitImagesFromUrl(url, positions) {
    let data;
    for (let i = 0; i < 3; i++) {
      try {
        data = await fetchImage(url);
        break;
      } catch (err) {
      }
    }
    if (!data) throw new Error("load sprite image error");
    url = URL.createObjectURL(data);
    const img = await new Promise((resolve, reject) => {
      const img2 = new Image();
      img2.onload = () => resolve(img2);
      img2.onerror = () => reject(new Error("load sprite image error"));
      img2.src = url;
    });
    URL.revokeObjectURL(url);
    return splitSpriteImage(img, positions);
  }

  const regulars = {
    /** 有压缩的大图地址 */
    normal: /\<img\sid=\"img\"\ssrc=\"(.*?)\"\sstyle/,
    /** 原图地址 */
    original: /\<a\shref=\"(http[s]?:\/\/e[x-]?hentai(55ld2wyap5juskbm67czulomrouspdacjamjeloj7ugjbsad)?\.(org|onion)\/fullimg?[^"\\]*)\"\>/,
    /** 大图重载地址 */
    nlValue: /\<a\shref=\"\#\"\sid=\"loadfail\"\sonclick=\"return\snl\(\'(.*)\'\)\"\>/,
    /** 是否开启自动多页查看器 */
    isMPV: /https?:\/\/e[-x]hentai(55ld2wyap5juskbm67czulomrouspdacjamjeloj7ugjbsad)?\.(org|onion)\/mpv\/\w+\/\w+\/#page\w/,
    /** 多页查看器图片列表提取 */
    mpvImageList: /\{"n":"(.*?)","k":"(\w+)","t":"(.*?)".*?\}/g,
    /** 精灵图地址提取 */
    sprite: /url\((.*?)\)/
  };
  class EHMatcher extends BaseMatcher {
    name() {
      return "e-hentai";
    }
    meta;
    // "http://exhentai55ld2wyap5juskbm67czulomrouspdacjamjeloj7ugjbsad.onion/*",
    workURL() {
      return /e[-x]hentai(.*)?.(org|onion)\/g\/\w+/;
    }
    title(doc) {
      const meta = this.meta || this.galleryMeta(doc);
      if (conf.ehentaiTitlePrefer === "japanese") {
        return meta.originTitle || meta.title || "UNTITLE";
      } else {
        return meta.title || meta.originTitle || "UNTITLE";
      }
    }
    galleryMeta(doc) {
      if (this.meta) return this.meta;
      const titleList = doc.querySelectorAll("#gd2 h1");
      let title;
      let originTitle;
      if (titleList && titleList.length > 0) {
        title = titleList[0].textContent || void 0;
        if (titleList.length > 1) {
          originTitle = titleList[1].textContent || void 0;
        }
      }
      this.meta = new GalleryMeta(window.location.href, title || "UNTITLE");
      this.meta.originTitle = originTitle;
      const tagTrList = doc.querySelectorAll("#taglist tr");
      const tags = {};
      tagTrList.forEach((tr) => {
        const tds = tr.childNodes;
        const cat = tds[0].textContent;
        if (cat) {
          const list = [];
          tds[1].childNodes.forEach((ele) => {
            if (ele.textContent) list.push(ele.textContent);
          });
          tags[cat.replace(":", "")] = list;
        }
      });
      this.meta.tags = tags;
      return this.meta;
    }
    async parseImgNodes(source) {
      const list = [];
      const doc = await (async () => {
        if (source instanceof Document) {
          return source;
        } else {
          const raw = await window.fetch(source).then((response) => response.text());
          if (!raw) return null;
          const domParser = new DOMParser();
          return domParser.parseFromString(raw, "text/html");
        }
      })();
      if (!doc) {
        throw new Error("warn: eh matcher failed to get document from source page!");
      }
      let isSprite = true;
      let query = doc.querySelectorAll("#gdt .gdtm > div");
      if (!query || query.length == 0) {
        isSprite = false;
        query = doc.querySelectorAll("#gdt .gdtl");
      }
      if (!query || query.length == 0) {
        throw new Error("warn: failed query image nodes!");
      }
      const nodes = Array.from(query);
      const n0 = nodes[0].firstElementChild;
      if (regulars.isMPV.test(n0.href)) {
        const mpvDoc = await window.fetch(n0.href).then((response) => response.text());
        const matchs = mpvDoc.matchAll(regulars.mpvImageList);
        const gid = location.pathname.split("/")[2];
        let i = 0;
        for (const match of matchs) {
          i++;
          const src = match[3].replaceAll("\\", "");
          const node = new ImageNode(
            src,
            `${location.origin}/s/${match[2]}/${gid}-${i}`,
            match[1].replace(/Page\s\d+[:_]\s*/, ""),
            void 0,
            void 0,
            extractRectFromSrc(src)
          );
          list.push(node);
        }
        return list;
      }
      let srcs = [];
      const delayURLs = [];
      if (isSprite) {
        const spriteURLs = [];
        for (let i = 0; i < nodes.length; i++) {
          const nodeStyles = nodes[i].style;
          const url = nodeStyles.background.match(regulars.sprite)?.[1]?.replaceAll('"', "");
          if (!url) break;
          if (spriteURLs.length === 0 || spriteURLs[spriteURLs.length - 1].url !== url) {
            spriteURLs.push({ url, range: [{ index: i, style: nodeStyles }] });
          } else {
            spriteURLs[spriteURLs.length - 1].range.push({ index: i, style: nodeStyles });
          }
        }
        spriteURLs.forEach(({ url, range }) => {
          const resolvers = [];
          const rejects = [];
          for (let i = 0; i < range.length; i++) {
            srcs.push("");
            delayURLs.push(new Promise((resolve, reject) => {
              resolvers.push(resolve);
              rejects.push(reject);
            }));
          }
          if (!url.startsWith("http")) {
            url = window.location.origin + url;
          }
          splitImagesFromUrl(url, parseImagePositions(range.map((n) => n.style))).then((ret) => {
            for (let k = 0; k < ret.length; k++) {
              resolvers[k](ret[k]);
            }
          }).catch((err) => {
            rejects.forEach((r) => r(err));
          });
        });
      } else {
        if (srcs.length == 0) {
          srcs = nodes.map((n) => n.firstElementChild.firstElementChild.src);
        }
      }
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const src = srcs[i];
        const [w, h] = [node.style.width, node.style.height];
        let wh = void 0;
        if (w && h) {
          wh = { w: parseInt(w), h: parseInt(h) };
        } else {
          wh = extractRectFromSrc(src);
        }
        list.push(new ImageNode(
          src,
          node.querySelector("a").href,
          node.querySelector("img").getAttribute("title")?.replace(/Page\s\d+[:_]\s*/, "") || "untitle.jpg",
          delayURLs[i],
          void 0,
          wh
        ));
      }
      return list;
    }
    async *fetchPagesSource() {
      const doc = document;
      const fristImageHref = doc.querySelector("#gdt a")?.getAttribute("href");
      if (fristImageHref && regulars.isMPV.test(fristImageHref)) {
        yield window.location.href;
        return;
      }
      const pages = Array.from(doc.querySelectorAll(".gtb td a")).filter((a) => a.getAttribute("href")).map((a) => a.getAttribute("href"));
      if (pages.length === 0) {
        throw new Error("未获取到分页元素！");
      }
      let lastPage = 0;
      let url;
      for (const page of pages) {
        const u = new URL(page);
        const num = parseInt(u.searchParams.get("p") || "0");
        if (num >= lastPage) {
          lastPage = num;
          url = u;
        }
      }
      if (!url) {
        throw new Error("未获取到分页元素！x2");
      }
      url.searchParams.delete("p");
      yield url.href;
      for (let p = 1; p < lastPage + 1; p++) {
        url.searchParams.set("p", p.toString());
        yield url.href;
      }
    }
    async fetchOriginMeta(node, retry) {
      const text = await window.fetch(node.href).then((resp) => resp.text()).catch((reason) => new Error(reason));
      if (text instanceof Error || !text) throw new Error(`fetch source page error, ${text.toString()}`);
      let src;
      if (conf.fetchOriginal) {
        src = regulars.original.exec(text)?.[1].replace(/&amp;/g, "&");
        const nl = node.href.split("?").pop();
        if (src && nl) {
          src += "?" + nl;
        }
      }
      if (!src) src = regulars.normal.exec(text)?.[1];
      if (retry) {
        const nlValue = regulars.nlValue.exec(text)?.[1];
        if (nlValue) {
          node.href = node.href + (node.href.includes("?") ? "&" : "?") + "nl=" + nlValue;
          evLog("info", `IMG-FETCHER retry url:${node.href}`);
          const newMeta = await this.fetchOriginMeta(node, false);
          src = newMeta.url;
        } else {
          evLog("error", `Cannot matching the nlValue, content: ${text}`);
        }
      }
      if (!src) {
        evLog("error", "cannot matching the image url from content:\n", text);
        throw new Error(`cannot matching the image url from content. (the content is showing up in console(F12 open it)`);
      }
      if (!src.startsWith("http")) {
        src = window.location.origin + src;
      }
      if (src.endsWith("509.gif")) {
        throw new Error("509, Image limits Exceeded, Please reset your Quota!");
      }
      return { url: src, href: node.href };
    }
    async processData(data, contentType) {
      if (contentType.startsWith("text")) {
        if (data.byteLength === 1329) {
          throw new Error('fetching the raw image requires being logged in, please try logging in or disable "raw image"');
        }
        contentType = "image/jpeg";
      }
      return [data, contentType];
    }
  }
  function extractRectFromSrc(src) {
    if (!src) return void 0;
    const matches = src.match(/\/\w+-\d+-(\d+)-(\d+)-/);
    if (matches && matches.length === 3) {
      return { w: parseInt(matches[1]), h: parseInt(matches[2]) };
    } else {
      return void 0;
    }
  }

  const REGEXP_EXTRACT_INIT_ARGUMENTS = /initReader\("(.*?)\",\s?"(.*?)",\s?(.*?)\)/;
  const REGEXP_EXTRACT_HASH = /read\/\d+\/(\d+)$/;
  class HentaiNexusMatcher extends BaseMatcher {
    name() {
      return "hentainexus";
    }
    meta;
    baseURL;
    readerData;
    // readDirection?: string;
    async *fetchPagesSource() {
      this.meta = this.pasrseGalleryMeta(document);
      yield document;
    }
    async parseImgNodes(page) {
      const doc = page;
      const result = [];
      const list = Array.from(doc.querySelectorAll(".section .container + .container > .box > .columns > .column a"));
      list.forEach((li, i) => {
        const img = li.querySelector("img");
        if (!img) return;
        const num = li.href.split("/").pop() || i.toString();
        const ext = img.src.split(".").pop();
        const title = num + "." + ext;
        result.push(new ImageNode(img.src, li.href, title));
      });
      return result;
    }
    async fetchOriginMeta(node) {
      if (!this.readerData) {
        const doc = await window.fetch(node.href).then((res) => res.text()).then((text) => new DOMParser().parseFromString(text, "text/html"));
        const args = doc.querySelector("body > script")?.textContent?.match(REGEXP_EXTRACT_INIT_ARGUMENTS)?.slice(1);
        if (!args || args.length !== 3) throw new Error("cannot find reader data");
        try {
          this.initReader(args[0], args[1]);
        } catch (_error) {
          throw new Error("hentainexus updated decryption function");
        }
      }
      if (!this.readerData) throw new Error("cannot find reader data");
      const hash = node.href.match(REGEXP_EXTRACT_HASH)?.[1] || "001";
      const url = this.readerData.find((d) => d.url_label === hash)?.image;
      if (!url) throw new Error("cannot find image url");
      const ext = url.split(".").pop();
      return { url, title: hash + "." + ext };
    }
    workURL() {
      return /hentainexus.com\/view\/\d+/;
    }
    galleryMeta(doc) {
      return this.meta || super.galleryMeta(doc);
    }
    pasrseGalleryMeta(doc) {
      const title = doc.querySelector("h1.title")?.textContent || "UNTITLED";
      const meta = new GalleryMeta(this.baseURL || window.location.href, title);
      doc.querySelectorAll(".view-page-details tr").forEach((tr) => {
        const category = tr.querySelector(".viewcolumn")?.textContent?.trim();
        if (!category) return;
        let values = Array.from(tr.querySelector(".viewcolumn + td")?.childNodes || []).map((c) => c?.textContent?.trim()).filter(Boolean);
        if (values.length === 0) return;
        if (category === "Tags") {
          values = values.map((v) => v.replace(/\s?\([0-9,]*\)$/, ""));
        }
        meta.tags[category] = values;
      });
      return meta;
    }
    initReader(data, originTitle) {
      if (this.meta) {
        this.meta.originTitle = originTitle.replace(/::\s?HentaiNexus/, "");
      }
      const hostname = window.location.hostname.split("");
      const hostnameLen = Math.min(hostname.length, 64);
      const rawSplits = window.atob(data).split("");
      for (let i = 0; i < hostnameLen; i++) {
        rawSplits[i] = String.fromCharCode(
          rawSplits[i].charCodeAt(0) ^ hostname[i].charCodeAt(0)
        );
      }
      const decoded = rawSplits.join("");
      const poses = [];
      const list = [];
      for (let step2 = 2; list.length < 16; ++step2) {
        if (!poses[step2]) {
          list.push(step2);
          for (let j = step2 << 1; j <= 256; j += step2) {
            poses[j] = !![];
          }
        }
      }
      let a = 0;
      for (let step2 = 0; step2 < 64; step2++) {
        a = a ^ decoded.charCodeAt(step2);
        for (let i = 0; i < 8; i++) {
          a = a & 1 ? a >>> 1 ^ 12 : a >>> 1;
        }
      }
      a = a & 7;
      const step = new Uint8Array(256);
      for (let i = 0; i < 256; i++) {
        step[i] = i;
      }
      let raw = "";
      let c = 0;
      for (let i = 0, b = 0; i < 256; i++) {
        b = (b + step[i] + decoded.charCodeAt(i % 64)) % 256;
        c = step[i];
        step[i] = step[b];
        step[b] = c;
      }
      for (let d = list[a], e = 0, f = 0, j = 0, k = 0, i = 0; i + 64 < decoded.length; i++) {
        j = (j + d) % 256;
        k = (f + step[(k + step[j]) % 256]) % 256;
        f = (f + j + step[j]) % 256;
        c = step[j];
        step[j] = step[k];
        step[k] = c;
        e = step[(k + step[(j + step[(e + f) % 256]) % 256]) % 256];
        raw += String.fromCharCode(decoded.charCodeAt(i + 64) ^ e);
      }
      this.readerData = JSON.parse(raw);
    }
  }

  class HitomiGG {
    base = "a";
    b;
    m;
    constructor(b, m) {
      this.b = b;
      this.m = new Function("g", m);
    }
    real_full_path_from_hash(hash) {
      return hash.replace(/^.*(..)(.)$/, "$2/$1/" + hash);
    }
    s(h) {
      const m = /(..)(.)$/.exec(h);
      return parseInt(m[2] + m[1], 16).toString(10);
    }
    subdomain_from_url(url, base) {
      let retval = "b";
      if (base) {
        retval = base;
      }
      const b = 16;
      const r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
      const m = r.exec(url);
      if (!m) {
        return "a";
      }
      const g = parseInt(m[2] + m[1], b);
      if (!isNaN(g)) {
        retval = String.fromCharCode(97 + this.m(g)) + retval;
      }
      return retval;
    }
    thumbURL(hash) {
      hash = hash.replace(/^.*(..)(.)$/, "$2/$1/" + hash);
      const url = "https://a.hitomi.la/webpsmalltn/" + hash + ".webp";
      return url.replace(/\/\/..?\.hitomi\.la\//, "//" + this.subdomain_from_url(url, "tn") + ".hitomi.la/");
    }
    originURL(hash, ext) {
      let url = "https://a.hitomi.la/" + ext + "/" + this.b + this.s(hash) + "/" + hash + "." + ext;
      url = url.replace(/\/\/..?\.hitomi\.la\//, "//" + this.subdomain_from_url(url, this.base) + ".hitomi.la/");
      return url;
    }
  }
  const GG_M_REGEX = /m:\sfunction\(g\)\s{(.*?return.*?;)/s;
  const GG_B_REGEX = /b:\s'(\d*\/)'/;
  class HitomiMather extends BaseMatcher {
    name() {
      return "hitomi";
    }
    gg;
    meta = {};
    infoRecord = {};
    formats = ["avif", "jxl", "webp"];
    formatIndex = 0;
    workURL() {
      return /hitomi.la\/(?!reader)\w+\/.*\d+\.html/;
    }
    async fetchChapters() {
      this.formatIndex = conf.hitomiFormat === "auto" ? 0 : this.formats.indexOf(conf.hitomiFormat);
      if (this.formatIndex === -1) {
        throw new Error("invalid hitomi format: " + conf.hitomiFormat);
      }
      const ggRaw = await window.fetch("https://ltn.hitomi.la/gg.js").then((resp) => resp.text());
      this.gg = new HitomiGG(GG_B_REGEX.exec(ggRaw)[1], GG_M_REGEX.exec(ggRaw)[1]);
      const ret = [];
      ret.push({
        id: 0,
        title: document.querySelector("#gallery-brand")?.textContent || "default",
        source: window.location.href,
        queue: [],
        thumbimg: document.querySelector(".content > .cover-column > .cover img")?.src
      });
      if (conf.mcInSites?.indexOf("hitomi") === -1) {
        return ret;
      }
      document.querySelectorAll("#related-content > div").forEach((element, i) => {
        const a = element.querySelector("h1.lillie > a");
        if (a) {
          ret.push({
            id: i + 1,
            title: a.textContent || "default-" + (i + 1),
            source: a.href,
            queue: [],
            thumbimg: element.querySelector("img")?.src
          });
        }
      });
      return ret;
    }
    async *fetchPagesSource(chapter) {
      const url = chapter.source;
      const galleryID = url.match(/([0-9]+)(?:\.html)/)?.[1];
      if (!galleryID) {
        throw new Error("cannot query hitomi gallery id");
      }
      const infoRaw = await window.fetch(`https://ltn.hitomi.la/galleries/${galleryID}.js`).then((resp) => resp.text()).then((text) => text.replace("var galleryinfo = ", ""));
      if (!infoRaw) {
        throw new Error("cannot query hitomi gallery info");
      }
      const info = JSON.parse(infoRaw);
      this.setGalleryMeta(info, galleryID, chapter);
      const doc = await window.fetch(url).then((resp) => resp.text()).then((text) => new DOMParser().parseFromString(text, "text/html"));
      yield doc;
    }
    async parseImgNodes(_page, chapterID) {
      if (!this.infoRecord[chapterID]) throw new Error("warn: hitomi gallery info is null!");
      const files = this.infoRecord[chapterID].files;
      const list = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const ext = this.formats.slice(this.formatIndex).find((format) => file["has" + format] === 1);
        if (!ext) {
          evLog("error", "no format found: ", files[i]);
          continue;
        }
        const title = file.name.replace(/\.\w+$/, "");
        const src = this.gg.originURL(file.hash, ext);
        const { width, height } = file;
        list.push(new ImageNode(this.gg.thumbURL(files[i].hash), src, title + "." + ext, void 0, src, width && height ? { w: width, h: height } : void 0));
      }
      return list;
    }
    async fetchOriginMeta(node) {
      return { url: node.originSrc };
    }
    setGalleryMeta(info, galleryID, chapter) {
      this.infoRecord[chapter.id] = info;
      this.meta[chapter.id] = new GalleryMeta(chapter.source, info.title || "hitomi-" + galleryID);
      this.meta[chapter.id].originTitle = info.japanese_title || void 0;
      const excludes = ["scene_indexes", "files"];
      for (const key in info) {
        if (excludes.indexOf(key) > -1) {
          continue;
        }
        this.meta[chapter.id].tags[key] = info[key];
      }
    }
    galleryMeta(_, chapter) {
      return this.meta[chapter.id];
    }
    title() {
      const entries = Object.entries(this.infoRecord);
      if (entries.length === 0) return "hitomi-unknown";
      if (entries.length === 1) {
        return entries[0][1].japanese_title || entries[0][1].title || "hitomi-unknown";
      } else {
        return "hitomi-multiple" + entries.map((entry) => entry[1].id).join("_");
      }
    }
  }

  function q(selector, parent) {
    const element = parent.querySelector(selector);
    if (!element) {
      throw new Error(`Can't find element: ${selector}`);
    }
    return element;
  }

  class IMHentaiMatcher extends BaseMatcher {
    name() {
      return "im-hentai";
    }
    data;
    gth;
    async fetchOriginMeta(node, _) {
      return { url: node.originSrc };
    }
    async parseImgNodes() {
      if (!this.data || !this.gth) {
        throw new Error("impossibility");
      }
      const ret = [];
      const digits = this.data.total.toString().length;
      for (let i = 1; i <= this.data.total; i++) {
        const url = `https://m${this.data.server}.imhentai.xxx/${this.data.imgDir}/${this.data.gid}/${i}t.jpg`;
        const href = `https://imhentai.xxx/view/${this.data.uid}/${i}/`;
        const ext = imParseExt(this.gth[i.toString()]);
        const originSrc = `https://m${this.data.server}.imhentai.xxx/${this.data.imgDir}/${this.data.gid}/${i}.${ext}`;
        let wh = void 0;
        const splits = this.gth[i.toString()].split(",");
        if (splits.length === 3) {
          wh = { w: parseInt(splits[1]), h: parseInt(splits[2]) };
        }
        const node = new ImageNode(url, href, `${i.toString().padStart(digits, "0")}.${ext}`, void 0, originSrc, wh);
        ret.push(node);
      }
      return ret;
    }
    async *fetchPagesSource() {
      const server = q("#load_server", document).value;
      const uid = q("#gallery_id", document).value;
      const gid = q("#load_id", document).value;
      const imgDir = q("#load_dir", document).value;
      const total = q("#load_pages", document).value;
      this.data = { server, uid, gid, imgDir, total: Number(total) };
      const gthRaw = Array.from(document.querySelectorAll("script")).find((s) => s.textContent?.trimStart().startsWith("var g_th"))?.textContent?.match(/\('(\{.*?\})'\)/)?.[1];
      if (!gthRaw) throw new Error("cannot match gallery images info");
      this.gth = JSON.parse(gthRaw);
      yield document;
    }
    galleryMeta(doc) {
      const title = doc.querySelector(".right_details > h1")?.textContent || void 0;
      const originTitle = doc.querySelector(".right_details > p.subtitle")?.textContent || void 0;
      const meta = new GalleryMeta(window.location.href, title || "UNTITLE");
      meta.originTitle = originTitle;
      meta.tags = {};
      const list = Array.from(doc.querySelectorAll(".galleries_info > li"));
      for (const li of list) {
        let cat = li.querySelector(".tags_text")?.textContent;
        if (!cat) continue;
        cat = cat.replace(":", "").trim();
        if (!cat) continue;
        const tags = Array.from(li.querySelectorAll("a.tag")).map((a) => a.firstChild?.textContent?.trim()).filter((v) => Boolean(v));
        meta.tags[cat] = tags;
      }
      return meta;
    }
    workURL() {
      return /imhentai.xxx\/gallery\/\d+\//;
    }
  }
  function imParseExt(str) {
    switch (str.slice(0, 1)) {
      case "j":
        return "jpg";
      case "g":
        return "gif";
      case "p":
        return "png";
      case "w":
        return "webp";
      case "a":
        return "avif";
      case "m":
        return "mp4";
      default:
        throw new Error("cannot parse image extension from info: " + str);
    }
  }

  const REGEXP_EXTRACT_GALLERY_ID = /koharu.to\/\w+\/(\d+\/\w+)/;
  const NAMESPACE_MAP = {
    0: "misc",
    1: "artist",
    2: "circle",
    7: "uploader",
    8: "male",
    9: "female",
    10: "mixed",
    11: "language"
  };
  class KoharuMatcher extends BaseMatcher {
    name() {
      return "Koharu";
    }
    meta;
    galleryMeta() {
      return this.meta || new GalleryMeta(window.location.href, "koharu-unknows");
    }
    async *fetchPagesSource(source) {
      yield source.source;
    }
    createMeta(detail) {
      const tags = detail.tags.reduce((map, tag) => {
        const category = NAMESPACE_MAP[tag.namespace || 0] || "misc";
        if (!map[category]) map[category] = [];
        map[category].push(tag.name);
        return map;
      }, {});
      this.meta = new GalleryMeta(window.location.href, detail.title);
      this.meta.tags = tags;
    }
    async parseImgNodes(page) {
      const matches = page.match(REGEXP_EXTRACT_GALLERY_ID);
      if (!matches || matches.length < 2) {
        throw new Error("invaild url: " + page);
      }
      const galleryID = matches[1];
      const detailAPI = `https://api.koharu.to/books/detail/${galleryID}`;
      const detail = await window.fetch(detailAPI).then((res) => res.json()).then((j) => j).catch((reason) => new Error(reason.toString()));
      if (detail instanceof Error) {
        throw detail;
      }
      this.createMeta(detail);
      const [w, data] = Object.entries(detail.data).sort((a, b) => b[1].size - a[1].size).find(([_, v]) => v.id !== void 0 && v.public_key !== void 0) ?? [void 0, void 0];
      if (w === void 0 && data === void 0) throw new Error("cannot find resolution from gallery detail");
      const dataAPI = `https://api.koharu.to/books/data/${galleryID}/${data.id}/${data.public_key}?v=${detail.updated_at ?? detail.created_at}&w=${w}`;
      const items = await window.fetch(dataAPI).then((res) => res.json()).then((j) => j).catch((reason) => new Error(reason.toString()));
      if (items instanceof Error) {
        throw new Error(`koharu updated their api, ${items.toString()}`);
      }
      if (items.entries.length !== detail.thumbnails.entries.length) {
        throw new Error("thumbnails length not match");
      }
      const thumbs = detail.thumbnails.entries;
      const thumbBase = detail.thumbnails.base;
      const itemBase = items.base;
      const pad = items.entries.length.toString().length;
      return items.entries.map((item, i) => {
        const href = `${window.location.origin}/reader/${galleryID}/${i + 1}`;
        const title = (i + 1).toString().padStart(pad, "0") + "." + item.path.split(".").pop();
        const src = itemBase + item.path + "?w=" + w;
        return new ImageNode(thumbBase + thumbs[i].path, href, title, void 0, src, { w: item.dimensions[0], h: item.dimensions[1] });
      });
    }
    async fetchOriginMeta(node) {
      return { url: node.originSrc };
    }
    workURL() {
      return /koharu.to\/(g|reader)\/\d+\/\w+/;
    }
    headers() {
      return {
        "Referer": "https://koharu.to/",
        "Origin": window.location.origin
        // "TE": "trailers",
      };
    }
  }

  class MangaCopyMatcher extends BaseMatcher {
    name() {
      return "拷贝漫画";
    }
    update_date;
    chapterCount = 0;
    meta;
    galleryMeta() {
      if (this.meta) return this.meta;
      let title = document.querySelector(".comicParticulars-title-right > ul > li > h6")?.textContent ?? document.title;
      document.querySelectorAll(".comicParticulars-title-right > ul > li > span.comicParticulars-right-txt").forEach((ele) => {
        if (/^\d{4}-\d{2}-\d{2}$/.test(ele.textContent?.trim() || "")) {
          this.update_date = ele.textContent?.trim();
        }
      });
      title += "-c" + this.chapterCount + (this.update_date ? "-" + this.update_date : "");
      this.meta = new GalleryMeta(window.location.href, title);
      return this.meta;
    }
    async *fetchPagesSource(source) {
      yield source.source;
    }
    async parseImgNodes(page) {
      const raw = await window.fetch(page).then((resp) => resp.text());
      const doc = new DOMParser().parseFromString(raw, "text/html");
      const contentKey = doc.querySelector(".imageData[contentKey]")?.getAttribute("contentKey");
      if (!contentKey) throw new Error("cannot find content key");
      try {
        const decryption = decrypt(contentKey);
        const images = JSON.parse(decryption);
        const digits = images.length.toString().length;
        return images.map((img, i) => {
          return new ImageNode("", page, (i + 1).toString().padStart(digits, "0") + ".webp", void 0, img.url);
        });
      } catch (error) {
        throw new Error("cannot decrypt contentKey: " + error.toString() + "\n" + contentKey);
      }
    }
    async fetchOriginMeta(node) {
      return { url: node.originSrc };
    }
    workURL() {
      return /(mangacopy|copymanga).*?\/comic\/[^\/]*\/?$/;
    }
    async fetchChapters() {
      const thumbimg = document.querySelector(".comicParticulars-left-img > img[data-src]")?.getAttribute("data-src") || void 0;
      const pathWord = window.location.href.match(PATH_WORD_REGEX)?.[1];
      if (!pathWord) throw new Error("cannot match comic id");
      const url = `${window.location.origin}/comicdetail/${pathWord}/chapters`;
      const data = await window.fetch(url).then((res) => res.json()).catch((reason) => new Error(reason.toString()));
      if (data instanceof Error) throw new Error("fetch chapter detail error: " + data.toString());
      if (data.code !== 200) throw new Error("fetch chater detail error: " + data.message);
      let details;
      try {
        const decryption = decrypt(data.results);
        details = JSON.parse(decryption);
      } catch (error) {
        throw new Error("parse chapter details error: " + error.toString());
      }
      const origin = window.location.origin;
      return [...details.groups.default.chapters, ...details.groups.tankobon?.chapters ?? []].map((ch, i) => {
        this.chapterCount++;
        return {
          id: i + 1,
          title: ch.name,
          source: `${origin}/comic/${pathWord}/chapter/${ch.id}`,
          queue: [],
          thumbimg
        };
      });
    }
  }
  const PATH_WORD_REGEX = /\/comic\/(\w*)/;
  function initCypto() {
    const c = [];
    function r(i) {
      if (c[i]) return c[i].exports;
      c[i] = {
        i,
        l: false,
        exports: {}
      };
      const e = c[i];
      const wj = webpackJsonp;
      return wj[0][1][i].call(e.exports, e, e.exports, r), e.l = true, e.exports;
    }
    return r(6);
  }
  function decrypt(raw) {
    const dio = "xxxmanga.woo.key";
    const cypto = initCypto();
    const str = raw;
    const header = str.substring(0, 16);
    const body = str.substring(16, str.length);
    const dioEn = cypto.enc.Utf8["parse"](dio);
    const headerEn = cypto.enc.Utf8["parse"](header);
    const bodyDe = function(b) {
      const bHex = cypto.enc.Hex.parse(b);
      const b64 = cypto.enc.Base64.stringify(bHex);
      return cypto.AES.decrypt(b64, dioEn, {
        iv: headerEn,
        mode: cypto.mode["CBC"],
        padding: cypto.pad.Pkcs7
      }).toString(cypto["enc"].Utf8).toString();
    }(body);
    return bodyDe;
  }

  class MHGMatcher extends BaseMatcher {
    name() {
      return "漫画柜";
    }
    meta;
    chapterCount = 0;
    galleryMeta() {
      if (this.meta) return this.meta;
      let title = document.querySelector(".book-title > h1")?.textContent ?? document.title;
      title += "-c" + this.chapterCount;
      const matches = document.querySelector(".detail-list .status")?.textContent?.match(STATUS_REGEX);
      const date = matches?.[1];
      title += date ? "-" + date : "";
      const last = matches?.[2];
      title += last ? "-" + last.trim() : "";
      this.meta = new GalleryMeta(window.location.href, title);
      return this.meta;
    }
    async *fetchPagesSource(source) {
      yield source.source;
    }
    async parseImgNodes(page, _chapterID) {
      const docRaw = await window.fetch(page).then((res) => res.text());
      const matches = docRaw.match(IMG_DATA_PARAM_REGEX);
      if (!matches || matches.length < 5) throw new Error("cannot match image data");
      let data;
      try {
        data = parseImgData(matches[1], parseInt(matches[2]), parseInt(matches[3]), matches[4]);
      } catch (error) {
        throw new Error("cannot parse image data: " + error.toString());
      }
      const server = getServer();
      return data.files.map((f, i) => {
        const src = `${server}/${data.path}/${f}?e=${data.sl.e}&m=${data.sl.m}}`;
        const href = `https://www.manhuagui.com/comic/${data.bid}/${data.cid}.html#p=${i + 1}`;
        return new ImageNode("", href, f, void 0, src);
      });
    }
    async fetchOriginMeta(node) {
      return { url: node.originSrc };
    }
    workURL() {
      return /manhuagui.com\/comic\/\d+\/?$/;
    }
    async fetchChapters() {
      const thumbimg = document.querySelector(".book-cover img")?.src;
      const chapters = [];
      document.querySelectorAll(".chapter-list").forEach((element) => {
        let prefix = findSibling(element, "prev", (e) => e.tagName.toLowerCase() === "h4")?.firstElementChild?.textContent ?? void 0;
        prefix = prefix ? prefix + "-" : "";
        element.querySelectorAll("ul").forEach((ul) => {
          const ret = Array.from(ul.querySelectorAll("li > a")).reverse().map((element2) => {
            return {
              id: 0,
              title: prefix + element2.title,
              source: element2.href,
              queue: [],
              thumbimg
            };
          });
          chapters.push(...ret);
        });
      });
      chapters.forEach((ch, i) => ch.id = i + 1);
      return chapters;
    }
  }
  function findSibling(element, dir, eq) {
    const sibling = (e2) => e2.previousElementSibling ;
    let e = element;
    while (e = sibling(e)) {
      if (eq(e)) return e;
    }
    return null;
  }
  const MHG_SERVERS = [
    {
      name: "自动",
      hosts: [
        {
          h: "i",
          w: 0.1
        },
        {
          h: "eu",
          w: 5
        },
        {
          h: "eu1",
          w: 5
        },
        {
          h: "us",
          w: 1
        },
        {
          h: "us1",
          w: 1
        },
        {
          h: "us2",
          w: 1
        },
        {
          h: "us3",
          w: 1
        }
      ]
    },
    {
      name: "电信",
      hosts: [
        {
          h: "eu",
          w: 1
        },
        {
          h: "eu1",
          w: 1
        }
      ]
    },
    {
      name: "联通",
      hosts: [
        {
          h: "us",
          w: 1
        },
        {
          h: "us1",
          w: 1
        },
        {
          h: "us2",
          w: 1
        },
        {
          h: "us3",
          w: 1
        }
      ]
    }
  ];
  function getServer() {
    const serv = parseInt(window.localStorage.getItem("") ?? "0");
    const host = parseInt(window.localStorage.getItem("") ?? "0");
    const prefix = MHG_SERVERS[serv]?.hosts[host]?.h ?? "us1";
    return `https://${prefix}.hamreus.com`;
  }
  const STATUS_REGEX = /\[(\d{4}-\d{2}-\d{2})\].*?\[(.*?)\]/;
  const IMG_DATA_PARAM_REGEX = /\('\w+\.\w+\((.*?)\).*?,(\d+),(\d+),'(.*?)'\[/;
  function decompressFromBase64(input) {
    return LZString.decompressFromBase64(input);
  }
  function parseImgData(tamplate, a, c, raw) {
    const keys = decompressFromBase64(raw).split("|");
    const d = {};
    function e(n) {
      const aa = n < a ? "" : e(Math.floor(n / a)).toString();
      const bb = (n = n % a) > 35 ? String.fromCharCode(n + 29) : n.toString(36);
      return aa + bb;
    }
    while (c--) {
      d[e(c)] = keys[c] || e(c);
    }
    const dataStr = tamplate.replace(new RegExp("\\b\\w+\\b", "g"), (key) => d[key]);
    return JSON.parse(dataStr);
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function nhParseExt(str) {
    switch (str.slice(0, 1)) {
      case "j":
        return "jpg";
      case "g":
        return "gif";
      case "p":
        return "png";
      case "w":
        return "webp";
      case "a":
        return "avif";
      case "m":
        return "mp4";
      default:
        throw new Error("cannot parse image extension from info: " + str);
    }
  }
  class NHMatcher extends BaseMatcher {
    meta;
    name() {
      return "nhentai";
    }
    workURL() {
      return /nhentai.net\/g\/\d+\/?$/;
    }
    galleryMeta() {
      return this.meta;
    }
    parseInfo() {
      const mediaServer = Array.from(document.querySelectorAll("body > script")).find((ele) => ele.textContent?.trim()?.startsWith("window._n_app"))?.textContent?.match(/media_server:\s?(\d+)/)?.[1];
      if (!mediaServer) throw new Error("cannot find media server");
      const raw = Array.from(document.querySelectorAll("body > script")).find((ele) => ele.textContent?.trim()?.startsWith("window._gallery"))?.textContent?.match(/parse\((.*)\);/)?.[1];
      if (!raw) throw new Error("cannot find images info");
      const info = JSON.parse(JSON.parse(raw));
      const meta = new GalleryMeta(window.location.href, info.title.english);
      meta.originTitle = info.title.japanese;
      meta.tags = info.tags.reduce((prev, curr) => {
        if (!prev[curr.type]) {
          prev[curr.type] = [];
        }
        prev[curr.type].push(curr.name);
        return prev;
      }, {});
      this.meta = meta;
      return { info, mediaServer };
    }
    async fetchOriginMeta(node) {
      return { url: node.originSrc };
    }
    async parseImgNodes(source) {
      await sleep(200);
      const nodes = Array.from(source.querySelectorAll(".thumb-container > .gallerythumb") ?? []);
      if (nodes.length == 0) throw new Error("cannot find image nodes");
      const { info, mediaServer } = this.parseInfo();
      const mediaID = info.media_id;
      const digits = nodes.length.toString().length;
      const ret = [];
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const thumbSrc = node.querySelector("img")?.getAttribute("data-src") ?? "";
        const title = (i + 1).toString().padStart(digits, "0");
        const ext = nhParseExt(info.images.pages[i].t);
        const href = location.origin + node.getAttribute("href");
        const originSrc = `${window.location.origin.replace("//", "//i" + mediaServer + ".")}/galleries/${mediaID}/${i + 1}.${ext}`;
        const wh = { w: info.images.pages[i].w, h: info.images.pages[i].h };
        ret.push(new ImageNode(thumbSrc, href, title + "." + ext, void 0, originSrc, wh));
      }
      return ret;
    }
    async *fetchPagesSource() {
      yield document;
    }
  }
  class NHxxxMatcher extends BaseMatcher {
    meta;
    galleryMeta() {
      return this.meta;
    }
    name() {
      return "nhentai.xxx";
    }
    parseMeta() {
      const title = document.querySelector(".info h1")?.textContent;
      const originTItle = document.querySelector(".info h2")?.textContent;
      const meta = new GalleryMeta(window.location.href, title ?? document.title);
      meta.originTitle = originTItle ?? void 0;
      Array.from(document.querySelectorAll(".info > ul > li.tags")).forEach((ele) => {
        let cat = ele.querySelector("span.text")?.textContent ?? "misc";
        cat = cat.trim().replace(":", "");
        const tags = Array.from(ele.querySelectorAll("a.tag_btn > .tag_name")).map((t) => t.textContent?.trim()).filter(Boolean);
        meta.tags[cat] = tags;
      });
      this.meta = meta;
    }
    async *fetchPagesSource() {
      this.parseMeta();
      yield document;
    }
    async parseImgNodes(page) {
      const doc = page;
      await sleep(200);
      const [files, thumbs] = this.parseInfo(doc);
      if (files.length !== thumbs.length) throw new Error("thumbs length not eq images length");
      const cover = doc.querySelector(".cover img")?.src;
      if (!cover) throw new Error("cannot find cover src");
      const base = cover.slice(0, cover.lastIndexOf("/") + 1);
      const ret = [];
      const digits = files.length.toString().length;
      let href = window.location.href;
      if (href.endsWith("/")) href = href.slice(0, -1);
      for (let i = 0; i < files.length; i++) {
        const title = (i + 1).toString().padStart(digits, "0");
        const thumb = thumbs[i];
        const thumbSrc = base + thumb[0] + "." + nhParseExt(thumb[1]);
        const file = files[i];
        const originSrc = base + file[0] + "." + nhParseExt(file[1]);
        const splits = file[1].split(",");
        let wh = void 0;
        if (splits.length === 3) {
          wh = { w: parseInt(splits[1].trim()), h: parseInt(splits[2].trim()) };
        }
        ret.push(new ImageNode(thumbSrc, href + "/" + (i + 1), title + "." + nhParseExt(file[1]), void 0, originSrc, wh));
      }
      return ret;
    }
    parseInfo(doc) {
      const matches = Array.from(doc.querySelectorAll("script[type]")).find((ele) => ele.textContent?.trimStart().startsWith("var g_th"))?.textContent?.match(/\('(.*)'\);/);
      if (!matches || matches.length !== 2) throw new Error("cannot find images info from script");
      const info = JSON.parse(matches[1]);
      const files = Object.entries(info.fl);
      const thumbs = Object.entries(info.th);
      return [files, thumbs];
    }
    async fetchOriginMeta(node) {
      return { url: node.originSrc };
    }
    workURL() {
      return /nhentai.xxx\/g\/\d+\/?$/;
    }
  }

  const class_worker_raw = "/// <reference no-default-lib=\"true\" />\n/// <reference lib=\"esnext\" />\n/// <reference lib=\"webworker\" />\nconst MIME_TYPE_JAVASCRIPT = \"text/javascript\";\nconst MIME_TYPE_WASM = \"application/wasm\";\nconst CORE_VERSION = \"0.12.6\";\nconst CORE_URL = `https://unpkg.com/@ffmpeg/core@${CORE_VERSION}/dist/umd/ffmpeg-core.js`;\nvar FFMessageType;\n(function(FFMessageType) {\n  FFMessageType[\"LOAD\"] = \"LOAD\";\n  FFMessageType[\"EXEC\"] = \"EXEC\";\n  FFMessageType[\"WRITE_FILE\"] = \"WRITE_FILE\";\n  FFMessageType[\"READ_FILE\"] = \"READ_FILE\";\n  FFMessageType[\"DELETE_FILE\"] = \"DELETE_FILE\";\n  FFMessageType[\"RENAME\"] = \"RENAME\";\n  FFMessageType[\"CREATE_DIR\"] = \"CREATE_DIR\";\n  FFMessageType[\"LIST_DIR\"] = \"LIST_DIR\";\n  FFMessageType[\"DELETE_DIR\"] = \"DELETE_DIR\";\n  FFMessageType[\"ERROR\"] = \"ERROR\";\n  FFMessageType[\"DOWNLOAD\"] = \"DOWNLOAD\";\n  FFMessageType[\"PROGRESS\"] = \"PROGRESS\";\n  FFMessageType[\"LOG\"] = \"LOG\";\n  FFMessageType[\"MOUNT\"] = \"MOUNT\";\n  FFMessageType[\"UNMOUNT\"] = \"UNMOUNT\";\n})(FFMessageType || (FFMessageType = {}));\n\n\nconst ERROR_UNKNOWN_MESSAGE_TYPE = new Error(\"unknown message type\");\nconst ERROR_NOT_LOADED = new Error(\"ffmpeg is not loaded, call `await ffmpeg.load()` first\");\nconst ERROR_TERMINATED = new Error(\"called FFmpeg.terminate()\");\nconst ERROR_IMPORT_FAILURE = new Error(\"failed to import ffmpeg-core.js\");\n\nlet ffmpeg;\nconst load = async ({ coreURL: _coreURL, wasmURL: _wasmURL, workerURL: _workerURL, }) => {\n  const first = !ffmpeg;\n  try {\n    if (!_coreURL)\n      _coreURL = CORE_URL;\n    // when web worker type is `classic`.\n    importScripts(_coreURL);\n  }\n  catch {\n    if (!_coreURL)\n      _coreURL = CORE_URL.replace('/umd/', '/esm/');\n    // when web worker type is `module`.\n    self.createFFmpegCore = (await import(\n        /* webpackIgnore: true */ /* @vite-ignore */ _coreURL)).default;\n    if (!self.createFFmpegCore) {\n      throw ERROR_IMPORT_FAILURE;\n    }\n  }\n  const coreURL = _coreURL;\n  const wasmURL = _wasmURL ? _wasmURL : _coreURL.replace(/.js$/g, \".wasm\");\n  const workerURL = _workerURL\n    ? _workerURL\n    : _coreURL.replace(/.js$/g, \".worker.js\");\n  ffmpeg = await self.createFFmpegCore({\n    // Fix `Overload resolution failed.` when using multi-threaded ffmpeg-core.\n    // Encoded wasmURL and workerURL in the URL as a hack to fix locateFile issue.\n    mainScriptUrlOrBlob: `${coreURL}#${btoa(JSON.stringify({ wasmURL, workerURL }))}`,\n  });\n  ffmpeg.setLogger((data) => self.postMessage({ type: FFMessageType.LOG, data }));\n  ffmpeg.setProgress((data) => self.postMessage({\n    type: FFMessageType.PROGRESS,\n    data,\n  }));\n  return first;\n};\nconst exec = ({ args, timeout = -1 }) => {\n  ffmpeg.setTimeout(timeout);\n  ffmpeg.exec(...args);\n  const ret = ffmpeg.ret;\n  ffmpeg.reset();\n  return ret;\n};\nconst writeFile = ({ path, data }) => {\n  ffmpeg.FS.writeFile(path, data);\n  return true;\n};\nconst readFile = ({ path, encoding }) => ffmpeg.FS.readFile(path, { encoding });\n// TODO: check if deletion works.\nconst deleteFile = ({ path }) => {\n  ffmpeg.FS.unlink(path);\n  return true;\n};\nconst rename = ({ oldPath, newPath }) => {\n  ffmpeg.FS.rename(oldPath, newPath);\n  return true;\n};\n// TODO: check if creation works.\nconst createDir = ({ path }) => {\n  ffmpeg.FS.mkdir(path);\n  return true;\n};\nconst listDir = ({ path }) => {\n  const names = ffmpeg.FS.readdir(path);\n  const nodes = [];\n  for (const name of names) {\n    const stat = ffmpeg.FS.stat(`${path}/${name}`);\n    const isDir = ffmpeg.FS.isDir(stat.mode);\n    nodes.push({ name, isDir });\n  }\n  return nodes;\n};\n// TODO: check if deletion works.\nconst deleteDir = ({ path }) => {\n  ffmpeg.FS.rmdir(path);\n  return true;\n};\nconst mount = ({ fsType, options, mountPoint }) => {\n  const str = fsType;\n  const fs = ffmpeg.FS.filesystems[str];\n  if (!fs)\n    return false;\n  ffmpeg.FS.mount(fs, options, mountPoint);\n  return true;\n};\nconst unmount = ({ mountPoint }) => {\n  ffmpeg.FS.unmount(mountPoint);\n  return true;\n};\nself.onmessage = async ({ data: { id, type, data: _data }, }) => {\n  const trans = [];\n  let data;\n  try {\n    if (type !== FFMessageType.LOAD && !ffmpeg)\n      throw ERROR_NOT_LOADED; // eslint-disable-line\n    switch (type) {\n      case FFMessageType.LOAD:\n        data = await load(_data);\n        break;\n      case FFMessageType.EXEC:\n        data = exec(_data);\n        break;\n      case FFMessageType.WRITE_FILE:\n        data = writeFile(_data);\n        break;\n      case FFMessageType.READ_FILE:\n        data = readFile(_data);\n        break;\n      case FFMessageType.DELETE_FILE:\n        data = deleteFile(_data);\n        break;\n      case FFMessageType.RENAME:\n        data = rename(_data);\n        break;\n      case FFMessageType.CREATE_DIR:\n        data = createDir(_data);\n        break;\n      case FFMessageType.LIST_DIR:\n        data = listDir(_data);\n        break;\n      case FFMessageType.DELETE_DIR:\n        data = deleteDir(_data);\n        break;\n      case FFMessageType.MOUNT:\n        data = mount(_data);\n        break;\n      case FFMessageType.UNMOUNT:\n        data = unmount(_data);\n        break;\n      default:\n        throw ERROR_UNKNOWN_MESSAGE_TYPE;\n    }\n  }\n  catch (e) {\n    self.postMessage({\n      id,\n      type: FFMessageType.ERROR,\n      data: e.toString(),\n    });\n    return;\n  }\n  if (data instanceof Uint8Array) {\n    trans.push(data.buffer);\n  }\n  self.postMessage({ id, type, data }, trans);\n};\n\n";

  const core_raw = "\nvar createFFmpegCore = (() => {\n  var _scriptDir = import.meta.url;\n  \n  return (\nasync function(createFFmpegCore = {})  {\n\nvar Module=typeof createFFmpegCore!=\"undefined\"?createFFmpegCore:{};var readyPromiseResolve,readyPromiseReject;Module[\"ready\"]=new Promise((resolve,reject)=>{readyPromiseResolve=resolve;readyPromiseReject=reject});const NULL=0;const SIZE_I32=Uint32Array.BYTES_PER_ELEMENT;const DEFAULT_ARGS=[\"./ffmpeg\",\"-nostdin\",\"-y\"];Module[\"NULL\"]=NULL;Module[\"SIZE_I32\"]=SIZE_I32;Module[\"DEFAULT_ARGS\"]=DEFAULT_ARGS;Module[\"ret\"]=-1;Module[\"timeout\"]=-1;Module[\"logger\"]=()=>{};Module[\"progress\"]=()=>{};function stringToPtr(str){const len=Module[\"lengthBytesUTF8\"](str)+1;const ptr=Module[\"_malloc\"](len);Module[\"stringToUTF8\"](str,ptr,len);return ptr}function stringsToPtr(strs){const len=strs.length;const ptr=Module[\"_malloc\"](len*SIZE_I32);for(let i=0;i<len;i++){Module[\"setValue\"](ptr+SIZE_I32*i,stringToPtr(strs[i]),\"i32\")}return ptr}function print(message){Module[\"logger\"]({type:\"stdout\",message:message})}function printErr(message){if(!message.startsWith(\"Aborted(native code called abort())\"))Module[\"logger\"]({type:\"stderr\",message:message})}function exec(..._args){const args=[...Module[\"DEFAULT_ARGS\"],..._args];try{Module[\"_ffmpeg\"](args.length,stringsToPtr(args))}catch(e){if(!e.message.startsWith(\"Aborted\")){throw e}}return Module[\"ret\"]}function setLogger(logger){Module[\"logger\"]=logger}function setTimeout(timeout){Module[\"timeout\"]=timeout}function setProgress(handler){Module[\"progress\"]=handler}function receiveProgress(progress,time){Module[\"progress\"]({progress:progress,time:time})}function reset(){Module[\"ret\"]=-1;Module[\"timeout\"]=-1}function _locateFile(path,prefix){const mainScriptUrlOrBlob=Module[\"mainScriptUrlOrBlob\"];if(mainScriptUrlOrBlob){const{wasmURL:wasmURL,workerURL:workerURL}=JSON.parse(atob(mainScriptUrlOrBlob.slice(mainScriptUrlOrBlob.lastIndexOf(\"#\")+1)));if(path.endsWith(\".wasm\"))return wasmURL;if(path.endsWith(\".worker.js\"))return workerURL}return prefix+path}Module[\"stringToPtr\"]=stringToPtr;Module[\"stringsToPtr\"]=stringsToPtr;Module[\"print\"]=print;Module[\"printErr\"]=printErr;Module[\"locateFile\"]=_locateFile;Module[\"exec\"]=exec;Module[\"setLogger\"]=setLogger;Module[\"setTimeout\"]=setTimeout;Module[\"setProgress\"]=setProgress;Module[\"reset\"]=reset;Module[\"receiveProgress\"]=receiveProgress;var moduleOverrides=Object.assign({},Module);var arguments_=[];var thisProgram=\"./this.program\";var quit_=(status,toThrow)=>{throw toThrow};var ENVIRONMENT_IS_WEB=typeof window==\"object\";var ENVIRONMENT_IS_WORKER=typeof importScripts==\"function\";var ENVIRONMENT_IS_NODE=typeof process==\"object\"&&typeof process.versions==\"object\"&&typeof process.versions.node==\"string\";var scriptDirectory=\"\";function locateFile(path){if(Module[\"locateFile\"]){return Module[\"locateFile\"](path,scriptDirectory)}return scriptDirectory+path}var read_,readAsync,readBinary,setWindowTitle;if(ENVIRONMENT_IS_NODE){const{createRequire:createRequire}=await import(\"module\");var require=createRequire(import.meta.url);var fs=require(\"fs\");var nodePath=require(\"path\");if(ENVIRONMENT_IS_WORKER){scriptDirectory=nodePath.dirname(scriptDirectory)+\"/\"}else{scriptDirectory=require(\"url\").fileURLToPath(new URL(\"./\",import.meta.url))}read_=(filename,binary)=>{filename=isFileURI(filename)?new URL(filename):nodePath.normalize(filename);return fs.readFileSync(filename,binary?undefined:\"utf8\")};readBinary=filename=>{var ret=read_(filename,true);if(!ret.buffer){ret=new Uint8Array(ret)}return ret};readAsync=(filename,onload,onerror,binary=true)=>{filename=isFileURI(filename)?new URL(filename):nodePath.normalize(filename);fs.readFile(filename,binary?undefined:\"utf8\",(err,data)=>{if(err)onerror(err);else onload(binary?data.buffer:data)})};if(!Module[\"thisProgram\"]&&process.argv.length>1){thisProgram=process.argv[1].replace(/\\\\/g,\"/\")}arguments_=process.argv.slice(2);quit_=(status,toThrow)=>{process.exitCode=status;throw toThrow};Module[\"inspect\"]=()=>\"[Emscripten Module object]\"}else if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){if(ENVIRONMENT_IS_WORKER){scriptDirectory=self.location.href}else if(typeof document!=\"undefined\"&&document.currentScript){scriptDirectory=document.currentScript.src}if(_scriptDir){scriptDirectory=_scriptDir}if(scriptDirectory.indexOf(\"blob:\")!==0){scriptDirectory=scriptDirectory.substr(0,scriptDirectory.replace(/[?#].*/,\"\").lastIndexOf(\"/\")+1)}else{scriptDirectory=\"\"}{read_=url=>{var xhr=new XMLHttpRequest;xhr.open(\"GET\",url,false);xhr.send(null);return xhr.responseText};if(ENVIRONMENT_IS_WORKER){readBinary=url=>{var xhr=new XMLHttpRequest;xhr.open(\"GET\",url,false);xhr.responseType=\"arraybuffer\";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=(url,onload,onerror)=>{var xhr=new XMLHttpRequest;xhr.open(\"GET\",url,true);xhr.responseType=\"arraybuffer\";xhr.onload=()=>{if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response);return}onerror()};xhr.onerror=onerror;xhr.send(null)}}setWindowTitle=title=>document.title=title}else{}var out=Module[\"print\"]||console.log.bind(console);var err=Module[\"printErr\"]||console.error.bind(console);Object.assign(Module,moduleOverrides);moduleOverrides=null;if(Module[\"arguments\"])arguments_=Module[\"arguments\"];if(Module[\"thisProgram\"])thisProgram=Module[\"thisProgram\"];if(Module[\"quit\"])quit_=Module[\"quit\"];var wasmBinary;if(Module[\"wasmBinary\"])wasmBinary=Module[\"wasmBinary\"];var noExitRuntime=Module[\"noExitRuntime\"]||true;if(typeof WebAssembly!=\"object\"){abort(\"no native wasm support detected\")}var wasmMemory;var ABORT=false;var EXITSTATUS;function assert(condition,text){if(!condition){abort(text)}}var HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAP64,HEAPU64,HEAPF64;function updateMemoryViews(){var b=wasmMemory.buffer;Module[\"HEAP8\"]=HEAP8=new Int8Array(b);Module[\"HEAP16\"]=HEAP16=new Int16Array(b);Module[\"HEAP32\"]=HEAP32=new Int32Array(b);Module[\"HEAPU8\"]=HEAPU8=new Uint8Array(b);Module[\"HEAPU16\"]=HEAPU16=new Uint16Array(b);Module[\"HEAPU32\"]=HEAPU32=new Uint32Array(b);Module[\"HEAPF32\"]=HEAPF32=new Float32Array(b);Module[\"HEAPF64\"]=HEAPF64=new Float64Array(b);Module[\"HEAP64\"]=HEAP64=new BigInt64Array(b);Module[\"HEAPU64\"]=HEAPU64=new BigUint64Array(b)}var wasmTable;var __ATPRERUN__=[];var __ATINIT__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;var runtimeKeepaliveCounter=0;function keepRuntimeAlive(){return noExitRuntime||runtimeKeepaliveCounter>0}function preRun(){if(Module[\"preRun\"]){if(typeof Module[\"preRun\"]==\"function\")Module[\"preRun\"]=[Module[\"preRun\"]];while(Module[\"preRun\"].length){addOnPreRun(Module[\"preRun\"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function initRuntime(){runtimeInitialized=true;if(!Module[\"noFSInit\"]&&!FS.init.initialized)FS.init();FS.ignorePermissions=false;TTY.init();SOCKFS.root=FS.mount(SOCKFS,{},null);callRuntimeCallbacks(__ATINIT__)}function postRun(){if(Module[\"postRun\"]){if(typeof Module[\"postRun\"]==\"function\")Module[\"postRun\"]=[Module[\"postRun\"]];while(Module[\"postRun\"].length){addOnPostRun(Module[\"postRun\"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}function addOnInit(cb){__ATINIT__.unshift(cb)}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function getUniqueRunDependency(id){return id}function addRunDependency(id){runDependencies++;if(Module[\"monitorRunDependencies\"]){Module[\"monitorRunDependencies\"](runDependencies)}}function removeRunDependency(id){runDependencies--;if(Module[\"monitorRunDependencies\"]){Module[\"monitorRunDependencies\"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}function abort(what){if(Module[\"onAbort\"]){Module[\"onAbort\"](what)}what=\"Aborted(\"+what+\")\";err(what);ABORT=true;EXITSTATUS=1;what+=\". Build with -sASSERTIONS for more info.\";var e=new WebAssembly.RuntimeError(what);readyPromiseReject(e);throw e}var dataURIPrefix=\"data:application/octet-stream;base64,\";function isDataURI(filename){return filename.startsWith(dataURIPrefix)}function isFileURI(filename){return filename.startsWith(\"file://\")}var wasmBinaryFile;if(Module[\"locateFile\"]){wasmBinaryFile=\"ffmpeg-core.wasm\";if(!isDataURI(wasmBinaryFile)){wasmBinaryFile=locateFile(wasmBinaryFile)}}else{wasmBinaryFile=new URL(\"ffmpeg-core.wasm\",import.meta.url).href}function getBinary(file){try{if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(file)}throw\"both async and sync fetching of the wasm failed\"}catch(err){abort(err)}}function getBinaryPromise(binaryFile){if(!wasmBinary&&(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)){if(typeof fetch==\"function\"&&!isFileURI(binaryFile)){return fetch(binaryFile,{credentials:\"same-origin\"}).then(response=>{if(!response[\"ok\"]){throw\"failed to load wasm binary file at '\"+binaryFile+\"'\"}return response[\"arrayBuffer\"]()}).catch(()=>getBinary(binaryFile))}else{if(readAsync){return new Promise((resolve,reject)=>{readAsync(binaryFile,response=>resolve(new Uint8Array(response)),reject)})}}}return Promise.resolve().then(()=>getBinary(binaryFile))}function instantiateArrayBuffer(binaryFile,imports,receiver){return getBinaryPromise(binaryFile).then(binary=>{return WebAssembly.instantiate(binary,imports)}).then(instance=>{return instance}).then(receiver,reason=>{err(\"failed to asynchronously prepare wasm: \"+reason);abort(reason)})}function instantiateAsync(binary,binaryFile,imports,callback){if(!binary&&typeof WebAssembly.instantiateStreaming==\"function\"&&!isDataURI(binaryFile)&&!isFileURI(binaryFile)&&!ENVIRONMENT_IS_NODE&&typeof fetch==\"function\"){return fetch(binaryFile,{credentials:\"same-origin\"}).then(response=>{var result=WebAssembly.instantiateStreaming(response,imports);return result.then(callback,function(reason){err(\"wasm streaming compile failed: \"+reason);err(\"falling back to ArrayBuffer instantiation\");return instantiateArrayBuffer(binaryFile,imports,callback)})})}else{return instantiateArrayBuffer(binaryFile,imports,callback)}}function createWasm(){var info={\"a\":wasmImports};function receiveInstance(instance,module){var exports=instance.exports;Module[\"asm\"]=exports;wasmMemory=Module[\"asm\"][\"ra\"];updateMemoryViews();wasmTable=Module[\"asm\"][\"ua\"];addOnInit(Module[\"asm\"][\"sa\"]);removeRunDependency(\"wasm-instantiate\");return exports}addRunDependency(\"wasm-instantiate\");function receiveInstantiationResult(result){receiveInstance(result[\"instance\"])}if(Module[\"instantiateWasm\"]){try{return Module[\"instantiateWasm\"](info,receiveInstance)}catch(e){err(\"Module.instantiateWasm callback failed with error: \"+e);readyPromiseReject(e)}}instantiateAsync(wasmBinary,wasmBinaryFile,info,receiveInstantiationResult).catch(readyPromiseReject);return{}}var ASM_CONSTS={6059608:$0=>{Module.ret=$0}};function send_progress(progress,time){Module.receiveProgress(progress,time)}function is_timeout(diff){if(Module.timeout===-1)return 0;else{return Module.timeout<=diff}}function ExitStatus(status){this.name=\"ExitStatus\";this.message=`Program terminated with exit(${status})`;this.status=status}function callRuntimeCallbacks(callbacks){while(callbacks.length>0){callbacks.shift()(Module)}}var wasmTableMirror=[];function getWasmTableEntry(funcPtr){var func=wasmTableMirror[funcPtr];if(!func){if(funcPtr>=wasmTableMirror.length)wasmTableMirror.length=funcPtr+1;wasmTableMirror[funcPtr]=func=wasmTable.get(funcPtr)}return func}function getValue(ptr,type=\"i8\"){if(type.endsWith(\"*\"))type=\"*\";switch(type){case\"i1\":return HEAP8[ptr>>0];case\"i8\":return HEAP8[ptr>>0];case\"i16\":return HEAP16[ptr>>1];case\"i32\":return HEAP32[ptr>>2];case\"i64\":return HEAP64[ptr>>3];case\"float\":return HEAPF32[ptr>>2];case\"double\":return HEAPF64[ptr>>3];case\"*\":return HEAPU32[ptr>>2];default:abort(`invalid type for getValue: ${type}`)}}function setValue(ptr,value,type=\"i8\"){if(type.endsWith(\"*\"))type=\"*\";switch(type){case\"i1\":HEAP8[ptr>>0]=value;break;case\"i8\":HEAP8[ptr>>0]=value;break;case\"i16\":HEAP16[ptr>>1]=value;break;case\"i32\":HEAP32[ptr>>2]=value;break;case\"i64\":HEAP64[ptr>>3]=BigInt(value);break;case\"float\":HEAPF32[ptr>>2]=value;break;case\"double\":HEAPF64[ptr>>3]=value;break;case\"*\":HEAPU32[ptr>>2]=value;break;default:abort(`invalid type for setValue: ${type}`)}}var UTF8Decoder=typeof TextDecoder!=\"undefined\"?new TextDecoder(\"utf8\"):undefined;function UTF8ArrayToString(heapOrArray,idx,maxBytesToRead){var endIdx=idx+maxBytesToRead;var endPtr=idx;while(heapOrArray[endPtr]&&!(endPtr>=endIdx))++endPtr;if(endPtr-idx>16&&heapOrArray.buffer&&UTF8Decoder){return UTF8Decoder.decode(heapOrArray.subarray(idx,endPtr))}var str=\"\";while(idx<endPtr){var u0=heapOrArray[idx++];if(!(u0&128)){str+=String.fromCharCode(u0);continue}var u1=heapOrArray[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}var u2=heapOrArray[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u0=(u0&7)<<18|u1<<12|u2<<6|heapOrArray[idx++]&63}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}return str}function UTF8ToString(ptr,maxBytesToRead){return ptr?UTF8ArrayToString(HEAPU8,ptr,maxBytesToRead):\"\"}function ___assert_fail(condition,filename,line,func){abort(`Assertion failed: ${UTF8ToString(condition)}, at: `+[filename?UTF8ToString(filename):\"unknown filename\",line,func?UTF8ToString(func):\"unknown function\"])}function ExceptionInfo(excPtr){this.excPtr=excPtr;this.ptr=excPtr-24;this.set_type=function(type){HEAPU32[this.ptr+4>>2]=type};this.get_type=function(){return HEAPU32[this.ptr+4>>2]};this.set_destructor=function(destructor){HEAPU32[this.ptr+8>>2]=destructor};this.get_destructor=function(){return HEAPU32[this.ptr+8>>2]};this.set_caught=function(caught){caught=caught?1:0;HEAP8[this.ptr+12>>0]=caught};this.get_caught=function(){return HEAP8[this.ptr+12>>0]!=0};this.set_rethrown=function(rethrown){rethrown=rethrown?1:0;HEAP8[this.ptr+13>>0]=rethrown};this.get_rethrown=function(){return HEAP8[this.ptr+13>>0]!=0};this.init=function(type,destructor){this.set_adjusted_ptr(0);this.set_type(type);this.set_destructor(destructor)};this.set_adjusted_ptr=function(adjustedPtr){HEAPU32[this.ptr+16>>2]=adjustedPtr};this.get_adjusted_ptr=function(){return HEAPU32[this.ptr+16>>2]};this.get_exception_ptr=function(){var isPointer=___cxa_is_pointer_type(this.get_type());if(isPointer){return HEAPU32[this.excPtr>>2]}var adjusted=this.get_adjusted_ptr();if(adjusted!==0)return adjusted;return this.excPtr}}var exceptionLast=0;var uncaughtExceptionCount=0;function ___cxa_throw(ptr,type,destructor){var info=new ExceptionInfo(ptr);info.init(type,destructor);exceptionLast=ptr;uncaughtExceptionCount++;throw exceptionLast}var dlopenMissingError=\"To use dlopen, you need enable dynamic linking, see https://emscripten.org/docs/compiling/Dynamic-Linking.html\";function ___dlsym(handle,symbol){abort(dlopenMissingError)}var PATH={isAbs:path=>path.charAt(0)===\"/\",splitPath:filename=>{var splitPathRe=/^(\\/?|)([\\s\\S]*?)((?:\\.{1,2}|[^\\/]+?|)(\\.[^.\\/]*|))(?:[\\/]*)$/;return splitPathRe.exec(filename).slice(1)},normalizeArray:(parts,allowAboveRoot)=>{var up=0;for(var i=parts.length-1;i>=0;i--){var last=parts[i];if(last===\".\"){parts.splice(i,1)}else if(last===\"..\"){parts.splice(i,1);up++}else if(up){parts.splice(i,1);up--}}if(allowAboveRoot){for(;up;up--){parts.unshift(\"..\")}}return parts},normalize:path=>{var isAbsolute=PATH.isAbs(path),trailingSlash=path.substr(-1)===\"/\";path=PATH.normalizeArray(path.split(\"/\").filter(p=>!!p),!isAbsolute).join(\"/\");if(!path&&!isAbsolute){path=\".\"}if(path&&trailingSlash){path+=\"/\"}return(isAbsolute?\"/\":\"\")+path},dirname:path=>{var result=PATH.splitPath(path),root=result[0],dir=result[1];if(!root&&!dir){return\".\"}if(dir){dir=dir.substr(0,dir.length-1)}return root+dir},basename:path=>{if(path===\"/\")return\"/\";path=PATH.normalize(path);path=path.replace(/\\/$/,\"\");var lastSlash=path.lastIndexOf(\"/\");if(lastSlash===-1)return path;return path.substr(lastSlash+1)},join:function(){var paths=Array.prototype.slice.call(arguments);return PATH.normalize(paths.join(\"/\"))},join2:(l,r)=>{return PATH.normalize(l+\"/\"+r)}};function initRandomFill(){if(typeof crypto==\"object\"&&typeof crypto[\"getRandomValues\"]==\"function\"){return view=>crypto.getRandomValues(view)}else if(ENVIRONMENT_IS_NODE){try{var crypto_module=require(\"crypto\");var randomFillSync=crypto_module[\"randomFillSync\"];if(randomFillSync){return view=>crypto_module[\"randomFillSync\"](view)}var randomBytes=crypto_module[\"randomBytes\"];return view=>(view.set(randomBytes(view.byteLength)),view)}catch(e){}}abort(\"initRandomDevice\")}function randomFill(view){return(randomFill=initRandomFill())(view)}var PATH_FS={resolve:function(){var resolvedPath=\"\",resolvedAbsolute=false;for(var i=arguments.length-1;i>=-1&&!resolvedAbsolute;i--){var path=i>=0?arguments[i]:FS.cwd();if(typeof path!=\"string\"){throw new TypeError(\"Arguments to path.resolve must be strings\")}else if(!path){return\"\"}resolvedPath=path+\"/\"+resolvedPath;resolvedAbsolute=PATH.isAbs(path)}resolvedPath=PATH.normalizeArray(resolvedPath.split(\"/\").filter(p=>!!p),!resolvedAbsolute).join(\"/\");return(resolvedAbsolute?\"/\":\"\")+resolvedPath||\".\"},relative:(from,to)=>{from=PATH_FS.resolve(from).substr(1);to=PATH_FS.resolve(to).substr(1);function trim(arr){var start=0;for(;start<arr.length;start++){if(arr[start]!==\"\")break}var end=arr.length-1;for(;end>=0;end--){if(arr[end]!==\"\")break}if(start>end)return[];return arr.slice(start,end-start+1)}var fromParts=trim(from.split(\"/\"));var toParts=trim(to.split(\"/\"));var length=Math.min(fromParts.length,toParts.length);var samePartsLength=length;for(var i=0;i<length;i++){if(fromParts[i]!==toParts[i]){samePartsLength=i;break}}var outputParts=[];for(var i=samePartsLength;i<fromParts.length;i++){outputParts.push(\"..\")}outputParts=outputParts.concat(toParts.slice(samePartsLength));return outputParts.join(\"/\")}};function lengthBytesUTF8(str){var len=0;for(var i=0;i<str.length;++i){var c=str.charCodeAt(i);if(c<=127){len++}else if(c<=2047){len+=2}else if(c>=55296&&c<=57343){len+=4;++i}else{len+=3}}return len}function stringToUTF8Array(str,heap,outIdx,maxBytesToWrite){if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343){var u1=str.charCodeAt(++i);u=65536+((u&1023)<<10)|u1&1023}if(u<=127){if(outIdx>=endIdx)break;heap[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;heap[outIdx++]=192|u>>6;heap[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;heap[outIdx++]=224|u>>12;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}else{if(outIdx+3>=endIdx)break;heap[outIdx++]=240|u>>18;heap[outIdx++]=128|u>>12&63;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}}heap[outIdx]=0;return outIdx-startIdx}function intArrayFromString(stringy,dontAddNull,length){var len=length>0?length:lengthBytesUTF8(stringy)+1;var u8array=new Array(len);var numBytesWritten=stringToUTF8Array(stringy,u8array,0,u8array.length);if(dontAddNull)u8array.length=numBytesWritten;return u8array}var TTY={ttys:[],init:function(){},shutdown:function(){},register:function(dev,ops){TTY.ttys[dev]={input:[],output:[],ops:ops};FS.registerDevice(dev,TTY.stream_ops)},stream_ops:{open:function(stream){var tty=TTY.ttys[stream.node.rdev];if(!tty){throw new FS.ErrnoError(43)}stream.tty=tty;stream.seekable=false},close:function(stream){stream.tty.ops.fsync(stream.tty)},fsync:function(stream){stream.tty.ops.fsync(stream.tty)},read:function(stream,buffer,offset,length,pos){if(!stream.tty||!stream.tty.ops.get_char){throw new FS.ErrnoError(60)}var bytesRead=0;for(var i=0;i<length;i++){var result;try{result=stream.tty.ops.get_char(stream.tty)}catch(e){throw new FS.ErrnoError(29)}if(result===undefined&&bytesRead===0){throw new FS.ErrnoError(6)}if(result===null||result===undefined)break;bytesRead++;buffer[offset+i]=result}if(bytesRead){stream.node.timestamp=Date.now()}return bytesRead},write:function(stream,buffer,offset,length,pos){if(!stream.tty||!stream.tty.ops.put_char){throw new FS.ErrnoError(60)}try{for(var i=0;i<length;i++){stream.tty.ops.put_char(stream.tty,buffer[offset+i])}}catch(e){throw new FS.ErrnoError(29)}if(length){stream.node.timestamp=Date.now()}return i}},default_tty_ops:{get_char:function(tty){if(!tty.input.length){var result=null;if(ENVIRONMENT_IS_NODE){var BUFSIZE=256;var buf=Buffer.alloc(BUFSIZE);var bytesRead=0;try{bytesRead=fs.readSync(process.stdin.fd,buf,0,BUFSIZE,-1)}catch(e){if(e.toString().includes(\"EOF\"))bytesRead=0;else throw e}if(bytesRead>0){result=buf.slice(0,bytesRead).toString(\"utf-8\")}else{result=null}}else if(typeof window!=\"undefined\"&&typeof window.prompt==\"function\"){result=window.prompt(\"Input: \");if(result!==null){result+=\"\\n\"}}else if(typeof readline==\"function\"){result=readline();if(result!==null){result+=\"\\n\"}}if(!result){return null}tty.input=intArrayFromString(result,true)}return tty.input.shift()},put_char:function(tty,val){if(val===null||val===10){out(UTF8ArrayToString(tty.output,0));tty.output=[]}else{if(val!=0)tty.output.push(val)}},fsync:function(tty){if(tty.output&&tty.output.length>0){out(UTF8ArrayToString(tty.output,0));tty.output=[]}}},default_tty1_ops:{put_char:function(tty,val){if(val===null||val===10){err(UTF8ArrayToString(tty.output,0));tty.output=[]}else{if(val!=0)tty.output.push(val)}},fsync:function(tty){if(tty.output&&tty.output.length>0){err(UTF8ArrayToString(tty.output,0));tty.output=[]}}}};function zeroMemory(address,size){HEAPU8.fill(0,address,address+size);return address}function alignMemory(size,alignment){return Math.ceil(size/alignment)*alignment}function mmapAlloc(size){size=alignMemory(size,65536);var ptr=_emscripten_builtin_memalign(65536,size);if(!ptr)return 0;return zeroMemory(ptr,size)}var MEMFS={ops_table:null,mount:function(mount){return MEMFS.createNode(null,\"/\",16384|511,0)},createNode:function(parent,name,mode,dev){if(FS.isBlkdev(mode)||FS.isFIFO(mode)){throw new FS.ErrnoError(63)}if(!MEMFS.ops_table){MEMFS.ops_table={dir:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr,lookup:MEMFS.node_ops.lookup,mknod:MEMFS.node_ops.mknod,rename:MEMFS.node_ops.rename,unlink:MEMFS.node_ops.unlink,rmdir:MEMFS.node_ops.rmdir,readdir:MEMFS.node_ops.readdir,symlink:MEMFS.node_ops.symlink},stream:{llseek:MEMFS.stream_ops.llseek}},file:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr},stream:{llseek:MEMFS.stream_ops.llseek,read:MEMFS.stream_ops.read,write:MEMFS.stream_ops.write,allocate:MEMFS.stream_ops.allocate,mmap:MEMFS.stream_ops.mmap,msync:MEMFS.stream_ops.msync}},link:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr,readlink:MEMFS.node_ops.readlink},stream:{}},chrdev:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr},stream:FS.chrdev_stream_ops}}}var node=FS.createNode(parent,name,mode,dev);if(FS.isDir(node.mode)){node.node_ops=MEMFS.ops_table.dir.node;node.stream_ops=MEMFS.ops_table.dir.stream;node.contents={}}else if(FS.isFile(node.mode)){node.node_ops=MEMFS.ops_table.file.node;node.stream_ops=MEMFS.ops_table.file.stream;node.usedBytes=0;node.contents=null}else if(FS.isLink(node.mode)){node.node_ops=MEMFS.ops_table.link.node;node.stream_ops=MEMFS.ops_table.link.stream}else if(FS.isChrdev(node.mode)){node.node_ops=MEMFS.ops_table.chrdev.node;node.stream_ops=MEMFS.ops_table.chrdev.stream}node.timestamp=Date.now();if(parent){parent.contents[name]=node;parent.timestamp=node.timestamp}return node},getFileDataAsTypedArray:function(node){if(!node.contents)return new Uint8Array(0);if(node.contents.subarray)return node.contents.subarray(0,node.usedBytes);return new Uint8Array(node.contents)},expandFileStorage:function(node,newCapacity){var prevCapacity=node.contents?node.contents.length:0;if(prevCapacity>=newCapacity)return;var CAPACITY_DOUBLING_MAX=1024*1024;newCapacity=Math.max(newCapacity,prevCapacity*(prevCapacity<CAPACITY_DOUBLING_MAX?2:1.125)>>>0);if(prevCapacity!=0)newCapacity=Math.max(newCapacity,256);var oldContents=node.contents;node.contents=new Uint8Array(newCapacity);if(node.usedBytes>0)node.contents.set(oldContents.subarray(0,node.usedBytes),0)},resizeFileStorage:function(node,newSize){if(node.usedBytes==newSize)return;if(newSize==0){node.contents=null;node.usedBytes=0}else{var oldContents=node.contents;node.contents=new Uint8Array(newSize);if(oldContents){node.contents.set(oldContents.subarray(0,Math.min(newSize,node.usedBytes)))}node.usedBytes=newSize}},node_ops:{getattr:function(node){var attr={};attr.dev=FS.isChrdev(node.mode)?node.id:1;attr.ino=node.id;attr.mode=node.mode;attr.nlink=1;attr.uid=0;attr.gid=0;attr.rdev=node.rdev;if(FS.isDir(node.mode)){attr.size=4096}else if(FS.isFile(node.mode)){attr.size=node.usedBytes}else if(FS.isLink(node.mode)){attr.size=node.link.length}else{attr.size=0}attr.atime=new Date(node.timestamp);attr.mtime=new Date(node.timestamp);attr.ctime=new Date(node.timestamp);attr.blksize=4096;attr.blocks=Math.ceil(attr.size/attr.blksize);return attr},setattr:function(node,attr){if(attr.mode!==undefined){node.mode=attr.mode}if(attr.timestamp!==undefined){node.timestamp=attr.timestamp}if(attr.size!==undefined){MEMFS.resizeFileStorage(node,attr.size)}},lookup:function(parent,name){throw FS.genericErrors[44]},mknod:function(parent,name,mode,dev){return MEMFS.createNode(parent,name,mode,dev)},rename:function(old_node,new_dir,new_name){if(FS.isDir(old_node.mode)){var new_node;try{new_node=FS.lookupNode(new_dir,new_name)}catch(e){}if(new_node){for(var i in new_node.contents){throw new FS.ErrnoError(55)}}}delete old_node.parent.contents[old_node.name];old_node.parent.timestamp=Date.now();old_node.name=new_name;new_dir.contents[new_name]=old_node;new_dir.timestamp=old_node.parent.timestamp;old_node.parent=new_dir},unlink:function(parent,name){delete parent.contents[name];parent.timestamp=Date.now()},rmdir:function(parent,name){var node=FS.lookupNode(parent,name);for(var i in node.contents){throw new FS.ErrnoError(55)}delete parent.contents[name];parent.timestamp=Date.now()},readdir:function(node){var entries=[\".\",\"..\"];for(var key in node.contents){if(!node.contents.hasOwnProperty(key)){continue}entries.push(key)}return entries},symlink:function(parent,newname,oldpath){var node=MEMFS.createNode(parent,newname,511|40960,0);node.link=oldpath;return node},readlink:function(node){if(!FS.isLink(node.mode)){throw new FS.ErrnoError(28)}return node.link}},stream_ops:{read:function(stream,buffer,offset,length,position){var contents=stream.node.contents;if(position>=stream.node.usedBytes)return 0;var size=Math.min(stream.node.usedBytes-position,length);if(size>8&&contents.subarray){buffer.set(contents.subarray(position,position+size),offset)}else{for(var i=0;i<size;i++)buffer[offset+i]=contents[position+i]}return size},write:function(stream,buffer,offset,length,position,canOwn){if(buffer.buffer===HEAP8.buffer){canOwn=false}if(!length)return 0;var node=stream.node;node.timestamp=Date.now();if(buffer.subarray&&(!node.contents||node.contents.subarray)){if(canOwn){node.contents=buffer.subarray(offset,offset+length);node.usedBytes=length;return length}else if(node.usedBytes===0&&position===0){node.contents=buffer.slice(offset,offset+length);node.usedBytes=length;return length}else if(position+length<=node.usedBytes){node.contents.set(buffer.subarray(offset,offset+length),position);return length}}MEMFS.expandFileStorage(node,position+length);if(node.contents.subarray&&buffer.subarray){node.contents.set(buffer.subarray(offset,offset+length),position)}else{for(var i=0;i<length;i++){node.contents[position+i]=buffer[offset+i]}}node.usedBytes=Math.max(node.usedBytes,position+length);return length},llseek:function(stream,offset,whence){var position=offset;if(whence===1){position+=stream.position}else if(whence===2){if(FS.isFile(stream.node.mode)){position+=stream.node.usedBytes}}if(position<0){throw new FS.ErrnoError(28)}return position},allocate:function(stream,offset,length){MEMFS.expandFileStorage(stream.node,offset+length);stream.node.usedBytes=Math.max(stream.node.usedBytes,offset+length)},mmap:function(stream,length,position,prot,flags){if(!FS.isFile(stream.node.mode)){throw new FS.ErrnoError(43)}var ptr;var allocated;var contents=stream.node.contents;if(!(flags&2)&&contents.buffer===HEAP8.buffer){allocated=false;ptr=contents.byteOffset}else{if(position>0||position+length<contents.length){if(contents.subarray){contents=contents.subarray(position,position+length)}else{contents=Array.prototype.slice.call(contents,position,position+length)}}allocated=true;ptr=mmapAlloc(length);if(!ptr){throw new FS.ErrnoError(48)}HEAP8.set(contents,ptr)}return{ptr:ptr,allocated:allocated}},msync:function(stream,buffer,offset,length,mmapFlags){MEMFS.stream_ops.write(stream,buffer,0,length,offset,false);return 0}}};function asyncLoad(url,onload,onerror,noRunDep){var dep=!noRunDep?getUniqueRunDependency(`al ${url}`):\"\";readAsync(url,arrayBuffer=>{assert(arrayBuffer,`Loading data file \"${url}\" failed (no arrayBuffer).`);onload(new Uint8Array(arrayBuffer));if(dep)removeRunDependency(dep)},event=>{if(onerror){onerror()}else{throw`Loading data file \"${url}\" failed.`}});if(dep)addRunDependency(dep)}var preloadPlugins=Module[\"preloadPlugins\"]||[];function FS_handledByPreloadPlugin(byteArray,fullname,finish,onerror){if(typeof Browser!=\"undefined\")Browser.init();var handled=false;preloadPlugins.forEach(function(plugin){if(handled)return;if(plugin[\"canHandle\"](fullname)){plugin[\"handle\"](byteArray,fullname,finish,onerror);handled=true}});return handled}function FS_createPreloadedFile(parent,name,url,canRead,canWrite,onload,onerror,dontCreateFile,canOwn,preFinish){var fullname=name?PATH_FS.resolve(PATH.join2(parent,name)):parent;var dep=getUniqueRunDependency(`cp ${fullname}`);function processData(byteArray){function finish(byteArray){if(preFinish)preFinish();if(!dontCreateFile){FS.createDataFile(parent,name,byteArray,canRead,canWrite,canOwn)}if(onload)onload();removeRunDependency(dep)}if(FS_handledByPreloadPlugin(byteArray,fullname,finish,()=>{if(onerror)onerror();removeRunDependency(dep)})){return}finish(byteArray)}addRunDependency(dep);if(typeof url==\"string\"){asyncLoad(url,byteArray=>processData(byteArray),onerror)}else{processData(url)}}function FS_modeStringToFlags(str){var flagModes={\"r\":0,\"r+\":2,\"w\":512|64|1,\"w+\":512|64|2,\"a\":1024|64|1,\"a+\":1024|64|2};var flags=flagModes[str];if(typeof flags==\"undefined\"){throw new Error(`Unknown file open mode: ${str}`)}return flags}function FS_getMode(canRead,canWrite){var mode=0;if(canRead)mode|=292|73;if(canWrite)mode|=146;return mode}var WORKERFS={DIR_MODE:16895,FILE_MODE:33279,reader:null,mount:function(mount){assert(ENVIRONMENT_IS_WORKER);if(!WORKERFS.reader)WORKERFS.reader=new FileReaderSync;var root=WORKERFS.createNode(null,\"/\",WORKERFS.DIR_MODE,0);var createdParents={};function ensureParent(path){var parts=path.split(\"/\");var parent=root;for(var i=0;i<parts.length-1;i++){var curr=parts.slice(0,i+1).join(\"/\");if(!createdParents[curr]){createdParents[curr]=WORKERFS.createNode(parent,parts[i],WORKERFS.DIR_MODE,0)}parent=createdParents[curr]}return parent}function base(path){var parts=path.split(\"/\");return parts[parts.length-1]}Array.prototype.forEach.call(mount.opts[\"files\"]||[],function(file){WORKERFS.createNode(ensureParent(file.name),base(file.name),WORKERFS.FILE_MODE,0,file,file.lastModifiedDate)});(mount.opts[\"blobs\"]||[]).forEach(function(obj){WORKERFS.createNode(ensureParent(obj[\"name\"]),base(obj[\"name\"]),WORKERFS.FILE_MODE,0,obj[\"data\"])});(mount.opts[\"packages\"]||[]).forEach(function(pack){pack[\"metadata\"].files.forEach(function(file){var name=file.filename.substr(1);WORKERFS.createNode(ensureParent(name),base(name),WORKERFS.FILE_MODE,0,pack[\"blob\"].slice(file.start,file.end))})});return root},createNode:function(parent,name,mode,dev,contents,mtime){var node=FS.createNode(parent,name,mode);node.mode=mode;node.node_ops=WORKERFS.node_ops;node.stream_ops=WORKERFS.stream_ops;node.timestamp=(mtime||new Date).getTime();assert(WORKERFS.FILE_MODE!==WORKERFS.DIR_MODE);if(mode===WORKERFS.FILE_MODE){node.size=contents.size;node.contents=contents}else{node.size=4096;node.contents={}}if(parent){parent.contents[name]=node}return node},node_ops:{getattr:function(node){return{dev:1,ino:node.id,mode:node.mode,nlink:1,uid:0,gid:0,rdev:undefined,size:node.size,atime:new Date(node.timestamp),mtime:new Date(node.timestamp),ctime:new Date(node.timestamp),blksize:4096,blocks:Math.ceil(node.size/4096)}},setattr:function(node,attr){if(attr.mode!==undefined){node.mode=attr.mode}if(attr.timestamp!==undefined){node.timestamp=attr.timestamp}},lookup:function(parent,name){throw new FS.ErrnoError(44)},mknod:function(parent,name,mode,dev){throw new FS.ErrnoError(63)},rename:function(oldNode,newDir,newName){throw new FS.ErrnoError(63)},unlink:function(parent,name){throw new FS.ErrnoError(63)},rmdir:function(parent,name){throw new FS.ErrnoError(63)},readdir:function(node){var entries=[\".\",\"..\"];for(var key in node.contents){if(!node.contents.hasOwnProperty(key)){continue}entries.push(key)}return entries},symlink:function(parent,newName,oldPath){throw new FS.ErrnoError(63)}},stream_ops:{read:function(stream,buffer,offset,length,position){if(position>=stream.node.size)return 0;var chunk=stream.node.contents.slice(position,position+length);var ab=WORKERFS.reader.readAsArrayBuffer(chunk);buffer.set(new Uint8Array(ab),offset);return chunk.size},write:function(stream,buffer,offset,length,position){throw new FS.ErrnoError(29)},llseek:function(stream,offset,whence){var position=offset;if(whence===1){position+=stream.position}else if(whence===2){if(FS.isFile(stream.node.mode)){position+=stream.node.size}}if(position<0){throw new FS.ErrnoError(28)}return position}}};var FS={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:\"/\",initialized:false,ignorePermissions:true,ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,lookupPath:(path,opts={})=>{path=PATH_FS.resolve(path);if(!path)return{path:\"\",node:null};var defaults={follow_mount:true,recurse_count:0};opts=Object.assign(defaults,opts);if(opts.recurse_count>8){throw new FS.ErrnoError(32)}var parts=path.split(\"/\").filter(p=>!!p);var current=FS.root;var current_path=\"/\";for(var i=0;i<parts.length;i++){var islast=i===parts.length-1;if(islast&&opts.parent){break}current=FS.lookupNode(current,parts[i]);current_path=PATH.join2(current_path,parts[i]);if(FS.isMountpoint(current)){if(!islast||islast&&opts.follow_mount){current=current.mounted.root}}if(!islast||opts.follow){var count=0;while(FS.isLink(current.mode)){var link=FS.readlink(current_path);current_path=PATH_FS.resolve(PATH.dirname(current_path),link);var lookup=FS.lookupPath(current_path,{recurse_count:opts.recurse_count+1});current=lookup.node;if(count++>40){throw new FS.ErrnoError(32)}}}}return{path:current_path,node:current}},getPath:node=>{var path;while(true){if(FS.isRoot(node)){var mount=node.mount.mountpoint;if(!path)return mount;return mount[mount.length-1]!==\"/\"?`${mount}/${path}`:mount+path}path=path?`${node.name}/${path}`:node.name;node=node.parent}},hashName:(parentid,name)=>{var hash=0;for(var i=0;i<name.length;i++){hash=(hash<<5)-hash+name.charCodeAt(i)|0}return(parentid+hash>>>0)%FS.nameTable.length},hashAddNode:node=>{var hash=FS.hashName(node.parent.id,node.name);node.name_next=FS.nameTable[hash];FS.nameTable[hash]=node},hashRemoveNode:node=>{var hash=FS.hashName(node.parent.id,node.name);if(FS.nameTable[hash]===node){FS.nameTable[hash]=node.name_next}else{var current=FS.nameTable[hash];while(current){if(current.name_next===node){current.name_next=node.name_next;break}current=current.name_next}}},lookupNode:(parent,name)=>{var errCode=FS.mayLookup(parent);if(errCode){throw new FS.ErrnoError(errCode,parent)}var hash=FS.hashName(parent.id,name);for(var node=FS.nameTable[hash];node;node=node.name_next){var nodeName=node.name;if(node.parent.id===parent.id&&nodeName===name){return node}}return FS.lookup(parent,name)},createNode:(parent,name,mode,rdev)=>{var node=new FS.FSNode(parent,name,mode,rdev);FS.hashAddNode(node);return node},destroyNode:node=>{FS.hashRemoveNode(node)},isRoot:node=>{return node===node.parent},isMountpoint:node=>{return!!node.mounted},isFile:mode=>{return(mode&61440)===32768},isDir:mode=>{return(mode&61440)===16384},isLink:mode=>{return(mode&61440)===40960},isChrdev:mode=>{return(mode&61440)===8192},isBlkdev:mode=>{return(mode&61440)===24576},isFIFO:mode=>{return(mode&61440)===4096},isSocket:mode=>{return(mode&49152)===49152},flagsToPermissionString:flag=>{var perms=[\"r\",\"w\",\"rw\"][flag&3];if(flag&512){perms+=\"w\"}return perms},nodePermissions:(node,perms)=>{if(FS.ignorePermissions){return 0}if(perms.includes(\"r\")&&!(node.mode&292)){return 2}else if(perms.includes(\"w\")&&!(node.mode&146)){return 2}else if(perms.includes(\"x\")&&!(node.mode&73)){return 2}return 0},mayLookup:dir=>{var errCode=FS.nodePermissions(dir,\"x\");if(errCode)return errCode;if(!dir.node_ops.lookup)return 2;return 0},mayCreate:(dir,name)=>{try{var node=FS.lookupNode(dir,name);return 20}catch(e){}return FS.nodePermissions(dir,\"wx\")},mayDelete:(dir,name,isdir)=>{var node;try{node=FS.lookupNode(dir,name)}catch(e){return e.errno}var errCode=FS.nodePermissions(dir,\"wx\");if(errCode){return errCode}if(isdir){if(!FS.isDir(node.mode)){return 54}if(FS.isRoot(node)||FS.getPath(node)===FS.cwd()){return 10}}else{if(FS.isDir(node.mode)){return 31}}return 0},mayOpen:(node,flags)=>{if(!node){return 44}if(FS.isLink(node.mode)){return 32}else if(FS.isDir(node.mode)){if(FS.flagsToPermissionString(flags)!==\"r\"||flags&512){return 31}}return FS.nodePermissions(node,FS.flagsToPermissionString(flags))},MAX_OPEN_FDS:4096,nextfd:()=>{for(var fd=0;fd<=FS.MAX_OPEN_FDS;fd++){if(!FS.streams[fd]){return fd}}throw new FS.ErrnoError(33)},getStream:fd=>FS.streams[fd],createStream:(stream,fd=-1)=>{if(!FS.FSStream){FS.FSStream=function(){this.shared={}};FS.FSStream.prototype={};Object.defineProperties(FS.FSStream.prototype,{object:{get:function(){return this.node},set:function(val){this.node=val}},isRead:{get:function(){return(this.flags&2097155)!==1}},isWrite:{get:function(){return(this.flags&2097155)!==0}},isAppend:{get:function(){return this.flags&1024}},flags:{get:function(){return this.shared.flags},set:function(val){this.shared.flags=val}},position:{get:function(){return this.shared.position},set:function(val){this.shared.position=val}}})}stream=Object.assign(new FS.FSStream,stream);if(fd==-1){fd=FS.nextfd()}stream.fd=fd;FS.streams[fd]=stream;return stream},closeStream:fd=>{FS.streams[fd]=null},chrdev_stream_ops:{open:stream=>{var device=FS.getDevice(stream.node.rdev);stream.stream_ops=device.stream_ops;if(stream.stream_ops.open){stream.stream_ops.open(stream)}},llseek:()=>{throw new FS.ErrnoError(70)}},major:dev=>dev>>8,minor:dev=>dev&255,makedev:(ma,mi)=>ma<<8|mi,registerDevice:(dev,ops)=>{FS.devices[dev]={stream_ops:ops}},getDevice:dev=>FS.devices[dev],getMounts:mount=>{var mounts=[];var check=[mount];while(check.length){var m=check.pop();mounts.push(m);check.push.apply(check,m.mounts)}return mounts},syncfs:(populate,callback)=>{if(typeof populate==\"function\"){callback=populate;populate=false}FS.syncFSRequests++;if(FS.syncFSRequests>1){err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`)}var mounts=FS.getMounts(FS.root.mount);var completed=0;function doCallback(errCode){FS.syncFSRequests--;return callback(errCode)}function done(errCode){if(errCode){if(!done.errored){done.errored=true;return doCallback(errCode)}return}if(++completed>=mounts.length){doCallback(null)}}mounts.forEach(mount=>{if(!mount.type.syncfs){return done(null)}mount.type.syncfs(mount,populate,done)})},mount:(type,opts,mountpoint)=>{var root=mountpoint===\"/\";var pseudo=!mountpoint;var node;if(root&&FS.root){throw new FS.ErrnoError(10)}else if(!root&&!pseudo){var lookup=FS.lookupPath(mountpoint,{follow_mount:false});mountpoint=lookup.path;node=lookup.node;if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}if(!FS.isDir(node.mode)){throw new FS.ErrnoError(54)}}var mount={type:type,opts:opts,mountpoint:mountpoint,mounts:[]};var mountRoot=type.mount(mount);mountRoot.mount=mount;mount.root=mountRoot;if(root){FS.root=mountRoot}else if(node){node.mounted=mount;if(node.mount){node.mount.mounts.push(mount)}}return mountRoot},unmount:mountpoint=>{var lookup=FS.lookupPath(mountpoint,{follow_mount:false});if(!FS.isMountpoint(lookup.node)){throw new FS.ErrnoError(28)}var node=lookup.node;var mount=node.mounted;var mounts=FS.getMounts(mount);Object.keys(FS.nameTable).forEach(hash=>{var current=FS.nameTable[hash];while(current){var next=current.name_next;if(mounts.includes(current.mount)){FS.destroyNode(current)}current=next}});node.mounted=null;var idx=node.mount.mounts.indexOf(mount);node.mount.mounts.splice(idx,1)},lookup:(parent,name)=>{return parent.node_ops.lookup(parent,name)},mknod:(path,mode,dev)=>{var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;var name=PATH.basename(path);if(!name||name===\".\"||name===\"..\"){throw new FS.ErrnoError(28)}var errCode=FS.mayCreate(parent,name);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.mknod){throw new FS.ErrnoError(63)}return parent.node_ops.mknod(parent,name,mode,dev)},create:(path,mode)=>{mode=mode!==undefined?mode:438;mode&=4095;mode|=32768;return FS.mknod(path,mode,0)},mkdir:(path,mode)=>{mode=mode!==undefined?mode:511;mode&=511|512;mode|=16384;return FS.mknod(path,mode,0)},mkdirTree:(path,mode)=>{var dirs=path.split(\"/\");var d=\"\";for(var i=0;i<dirs.length;++i){if(!dirs[i])continue;d+=\"/\"+dirs[i];try{FS.mkdir(d,mode)}catch(e){if(e.errno!=20)throw e}}},mkdev:(path,mode,dev)=>{if(typeof dev==\"undefined\"){dev=mode;mode=438}mode|=8192;return FS.mknod(path,mode,dev)},symlink:(oldpath,newpath)=>{if(!PATH_FS.resolve(oldpath)){throw new FS.ErrnoError(44)}var lookup=FS.lookupPath(newpath,{parent:true});var parent=lookup.node;if(!parent){throw new FS.ErrnoError(44)}var newname=PATH.basename(newpath);var errCode=FS.mayCreate(parent,newname);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.symlink){throw new FS.ErrnoError(63)}return parent.node_ops.symlink(parent,newname,oldpath)},rename:(old_path,new_path)=>{var old_dirname=PATH.dirname(old_path);var new_dirname=PATH.dirname(new_path);var old_name=PATH.basename(old_path);var new_name=PATH.basename(new_path);var lookup,old_dir,new_dir;lookup=FS.lookupPath(old_path,{parent:true});old_dir=lookup.node;lookup=FS.lookupPath(new_path,{parent:true});new_dir=lookup.node;if(!old_dir||!new_dir)throw new FS.ErrnoError(44);if(old_dir.mount!==new_dir.mount){throw new FS.ErrnoError(75)}var old_node=FS.lookupNode(old_dir,old_name);var relative=PATH_FS.relative(old_path,new_dirname);if(relative.charAt(0)!==\".\"){throw new FS.ErrnoError(28)}relative=PATH_FS.relative(new_path,old_dirname);if(relative.charAt(0)!==\".\"){throw new FS.ErrnoError(55)}var new_node;try{new_node=FS.lookupNode(new_dir,new_name)}catch(e){}if(old_node===new_node){return}var isdir=FS.isDir(old_node.mode);var errCode=FS.mayDelete(old_dir,old_name,isdir);if(errCode){throw new FS.ErrnoError(errCode)}errCode=new_node?FS.mayDelete(new_dir,new_name,isdir):FS.mayCreate(new_dir,new_name);if(errCode){throw new FS.ErrnoError(errCode)}if(!old_dir.node_ops.rename){throw new FS.ErrnoError(63)}if(FS.isMountpoint(old_node)||new_node&&FS.isMountpoint(new_node)){throw new FS.ErrnoError(10)}if(new_dir!==old_dir){errCode=FS.nodePermissions(old_dir,\"w\");if(errCode){throw new FS.ErrnoError(errCode)}}FS.hashRemoveNode(old_node);try{old_dir.node_ops.rename(old_node,new_dir,new_name)}catch(e){throw e}finally{FS.hashAddNode(old_node)}},rmdir:path=>{var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;var name=PATH.basename(path);var node=FS.lookupNode(parent,name);var errCode=FS.mayDelete(parent,name,true);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.rmdir){throw new FS.ErrnoError(63)}if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}parent.node_ops.rmdir(parent,name);FS.destroyNode(node)},readdir:path=>{var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;if(!node.node_ops.readdir){throw new FS.ErrnoError(54)}return node.node_ops.readdir(node)},unlink:path=>{var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;if(!parent){throw new FS.ErrnoError(44)}var name=PATH.basename(path);var node=FS.lookupNode(parent,name);var errCode=FS.mayDelete(parent,name,false);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.unlink){throw new FS.ErrnoError(63)}if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}parent.node_ops.unlink(parent,name);FS.destroyNode(node)},readlink:path=>{var lookup=FS.lookupPath(path);var link=lookup.node;if(!link){throw new FS.ErrnoError(44)}if(!link.node_ops.readlink){throw new FS.ErrnoError(28)}return PATH_FS.resolve(FS.getPath(link.parent),link.node_ops.readlink(link))},stat:(path,dontFollow)=>{var lookup=FS.lookupPath(path,{follow:!dontFollow});var node=lookup.node;if(!node){throw new FS.ErrnoError(44)}if(!node.node_ops.getattr){throw new FS.ErrnoError(63)}return node.node_ops.getattr(node)},lstat:path=>{return FS.stat(path,true)},chmod:(path,mode,dontFollow)=>{var node;if(typeof path==\"string\"){var lookup=FS.lookupPath(path,{follow:!dontFollow});node=lookup.node}else{node=path}if(!node.node_ops.setattr){throw new FS.ErrnoError(63)}node.node_ops.setattr(node,{mode:mode&4095|node.mode&~4095,timestamp:Date.now()})},lchmod:(path,mode)=>{FS.chmod(path,mode,true)},fchmod:(fd,mode)=>{var stream=FS.getStream(fd);if(!stream){throw new FS.ErrnoError(8)}FS.chmod(stream.node,mode)},chown:(path,uid,gid,dontFollow)=>{var node;if(typeof path==\"string\"){var lookup=FS.lookupPath(path,{follow:!dontFollow});node=lookup.node}else{node=path}if(!node.node_ops.setattr){throw new FS.ErrnoError(63)}node.node_ops.setattr(node,{timestamp:Date.now()})},lchown:(path,uid,gid)=>{FS.chown(path,uid,gid,true)},fchown:(fd,uid,gid)=>{var stream=FS.getStream(fd);if(!stream){throw new FS.ErrnoError(8)}FS.chown(stream.node,uid,gid)},truncate:(path,len)=>{if(len<0){throw new FS.ErrnoError(28)}var node;if(typeof path==\"string\"){var lookup=FS.lookupPath(path,{follow:true});node=lookup.node}else{node=path}if(!node.node_ops.setattr){throw new FS.ErrnoError(63)}if(FS.isDir(node.mode)){throw new FS.ErrnoError(31)}if(!FS.isFile(node.mode)){throw new FS.ErrnoError(28)}var errCode=FS.nodePermissions(node,\"w\");if(errCode){throw new FS.ErrnoError(errCode)}node.node_ops.setattr(node,{size:len,timestamp:Date.now()})},ftruncate:(fd,len)=>{var stream=FS.getStream(fd);if(!stream){throw new FS.ErrnoError(8)}if((stream.flags&2097155)===0){throw new FS.ErrnoError(28)}FS.truncate(stream.node,len)},utime:(path,atime,mtime)=>{var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;node.node_ops.setattr(node,{timestamp:Math.max(atime,mtime)})},open:(path,flags,mode)=>{if(path===\"\"){throw new FS.ErrnoError(44)}flags=typeof flags==\"string\"?FS_modeStringToFlags(flags):flags;mode=typeof mode==\"undefined\"?438:mode;if(flags&64){mode=mode&4095|32768}else{mode=0}var node;if(typeof path==\"object\"){node=path}else{path=PATH.normalize(path);try{var lookup=FS.lookupPath(path,{follow:!(flags&131072)});node=lookup.node}catch(e){}}var created=false;if(flags&64){if(node){if(flags&128){throw new FS.ErrnoError(20)}}else{node=FS.mknod(path,mode,0);created=true}}if(!node){throw new FS.ErrnoError(44)}if(FS.isChrdev(node.mode)){flags&=~512}if(flags&65536&&!FS.isDir(node.mode)){throw new FS.ErrnoError(54)}if(!created){var errCode=FS.mayOpen(node,flags);if(errCode){throw new FS.ErrnoError(errCode)}}if(flags&512&&!created){FS.truncate(node,0)}flags&=~(128|512|131072);var stream=FS.createStream({node:node,path:FS.getPath(node),flags:flags,seekable:true,position:0,stream_ops:node.stream_ops,ungotten:[],error:false});if(stream.stream_ops.open){stream.stream_ops.open(stream)}if(Module[\"logReadFiles\"]&&!(flags&1)){if(!FS.readFiles)FS.readFiles={};if(!(path in FS.readFiles)){FS.readFiles[path]=1}}return stream},close:stream=>{if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if(stream.getdents)stream.getdents=null;try{if(stream.stream_ops.close){stream.stream_ops.close(stream)}}catch(e){throw e}finally{FS.closeStream(stream.fd)}stream.fd=null},isClosed:stream=>{return stream.fd===null},llseek:(stream,offset,whence)=>{if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if(!stream.seekable||!stream.stream_ops.llseek){throw new FS.ErrnoError(70)}if(whence!=0&&whence!=1&&whence!=2){throw new FS.ErrnoError(28)}stream.position=stream.stream_ops.llseek(stream,offset,whence);stream.ungotten=[];return stream.position},read:(stream,buffer,offset,length,position)=>{if(length<0||position<0){throw new FS.ErrnoError(28)}if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if((stream.flags&2097155)===1){throw new FS.ErrnoError(8)}if(FS.isDir(stream.node.mode)){throw new FS.ErrnoError(31)}if(!stream.stream_ops.read){throw new FS.ErrnoError(28)}var seeking=typeof position!=\"undefined\";if(!seeking){position=stream.position}else if(!stream.seekable){throw new FS.ErrnoError(70)}var bytesRead=stream.stream_ops.read(stream,buffer,offset,length,position);if(!seeking)stream.position+=bytesRead;return bytesRead},write:(stream,buffer,offset,length,position,canOwn)=>{if(length<0||position<0){throw new FS.ErrnoError(28)}if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if((stream.flags&2097155)===0){throw new FS.ErrnoError(8)}if(FS.isDir(stream.node.mode)){throw new FS.ErrnoError(31)}if(!stream.stream_ops.write){throw new FS.ErrnoError(28)}if(stream.seekable&&stream.flags&1024){FS.llseek(stream,0,2)}var seeking=typeof position!=\"undefined\";if(!seeking){position=stream.position}else if(!stream.seekable){throw new FS.ErrnoError(70)}var bytesWritten=stream.stream_ops.write(stream,buffer,offset,length,position,canOwn);if(!seeking)stream.position+=bytesWritten;return bytesWritten},allocate:(stream,offset,length)=>{if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if(offset<0||length<=0){throw new FS.ErrnoError(28)}if((stream.flags&2097155)===0){throw new FS.ErrnoError(8)}if(!FS.isFile(stream.node.mode)&&!FS.isDir(stream.node.mode)){throw new FS.ErrnoError(43)}if(!stream.stream_ops.allocate){throw new FS.ErrnoError(138)}stream.stream_ops.allocate(stream,offset,length)},mmap:(stream,length,position,prot,flags)=>{if((prot&2)!==0&&(flags&2)===0&&(stream.flags&2097155)!==2){throw new FS.ErrnoError(2)}if((stream.flags&2097155)===1){throw new FS.ErrnoError(2)}if(!stream.stream_ops.mmap){throw new FS.ErrnoError(43)}return stream.stream_ops.mmap(stream,length,position,prot,flags)},msync:(stream,buffer,offset,length,mmapFlags)=>{if(!stream.stream_ops.msync){return 0}return stream.stream_ops.msync(stream,buffer,offset,length,mmapFlags)},munmap:stream=>0,ioctl:(stream,cmd,arg)=>{if(!stream.stream_ops.ioctl){throw new FS.ErrnoError(59)}return stream.stream_ops.ioctl(stream,cmd,arg)},readFile:(path,opts={})=>{opts.flags=opts.flags||0;opts.encoding=opts.encoding||\"binary\";if(opts.encoding!==\"utf8\"&&opts.encoding!==\"binary\"){throw new Error(`Invalid encoding type \"${opts.encoding}\"`)}var ret;var stream=FS.open(path,opts.flags);var stat=FS.stat(path);var length=stat.size;var buf=new Uint8Array(length);FS.read(stream,buf,0,length,0);if(opts.encoding===\"utf8\"){ret=UTF8ArrayToString(buf,0)}else if(opts.encoding===\"binary\"){ret=buf}FS.close(stream);return ret},writeFile:(path,data,opts={})=>{opts.flags=opts.flags||577;var stream=FS.open(path,opts.flags,opts.mode);if(typeof data==\"string\"){var buf=new Uint8Array(lengthBytesUTF8(data)+1);var actualNumBytes=stringToUTF8Array(data,buf,0,buf.length);FS.write(stream,buf,0,actualNumBytes,undefined,opts.canOwn)}else if(ArrayBuffer.isView(data)){FS.write(stream,data,0,data.byteLength,undefined,opts.canOwn)}else{throw new Error(\"Unsupported data type\")}FS.close(stream)},cwd:()=>FS.currentPath,chdir:path=>{var lookup=FS.lookupPath(path,{follow:true});if(lookup.node===null){throw new FS.ErrnoError(44)}if(!FS.isDir(lookup.node.mode)){throw new FS.ErrnoError(54)}var errCode=FS.nodePermissions(lookup.node,\"x\");if(errCode){throw new FS.ErrnoError(errCode)}FS.currentPath=lookup.path},createDefaultDirectories:()=>{FS.mkdir(\"/tmp\");FS.mkdir(\"/home\");FS.mkdir(\"/home/web_user\")},createDefaultDevices:()=>{FS.mkdir(\"/dev\");FS.registerDevice(FS.makedev(1,3),{read:()=>0,write:(stream,buffer,offset,length,pos)=>length});FS.mkdev(\"/dev/null\",FS.makedev(1,3));TTY.register(FS.makedev(5,0),TTY.default_tty_ops);TTY.register(FS.makedev(6,0),TTY.default_tty1_ops);FS.mkdev(\"/dev/tty\",FS.makedev(5,0));FS.mkdev(\"/dev/tty1\",FS.makedev(6,0));var randomBuffer=new Uint8Array(1024),randomLeft=0;var randomByte=()=>{if(randomLeft===0){randomLeft=randomFill(randomBuffer).byteLength}return randomBuffer[--randomLeft]};FS.createDevice(\"/dev\",\"random\",randomByte);FS.createDevice(\"/dev\",\"urandom\",randomByte);FS.mkdir(\"/dev/shm\");FS.mkdir(\"/dev/shm/tmp\")},createSpecialDirectories:()=>{FS.mkdir(\"/proc\");var proc_self=FS.mkdir(\"/proc/self\");FS.mkdir(\"/proc/self/fd\");FS.mount({mount:()=>{var node=FS.createNode(proc_self,\"fd\",16384|511,73);node.node_ops={lookup:(parent,name)=>{var fd=+name;var stream=FS.getStream(fd);if(!stream)throw new FS.ErrnoError(8);var ret={parent:null,mount:{mountpoint:\"fake\"},node_ops:{readlink:()=>stream.path}};ret.parent=ret;return ret}};return node}},{},\"/proc/self/fd\")},createStandardStreams:()=>{if(Module[\"stdin\"]){FS.createDevice(\"/dev\",\"stdin\",Module[\"stdin\"])}else{FS.symlink(\"/dev/tty\",\"/dev/stdin\")}if(Module[\"stdout\"]){FS.createDevice(\"/dev\",\"stdout\",null,Module[\"stdout\"])}else{FS.symlink(\"/dev/tty\",\"/dev/stdout\")}if(Module[\"stderr\"]){FS.createDevice(\"/dev\",\"stderr\",null,Module[\"stderr\"])}else{FS.symlink(\"/dev/tty1\",\"/dev/stderr\")}var stdin=FS.open(\"/dev/stdin\",0);var stdout=FS.open(\"/dev/stdout\",1);var stderr=FS.open(\"/dev/stderr\",1)},ensureErrnoError:()=>{if(FS.ErrnoError)return;FS.ErrnoError=function ErrnoError(errno,node){this.name=\"ErrnoError\";this.node=node;this.setErrno=function(errno){this.errno=errno};this.setErrno(errno);this.message=\"FS error\"};FS.ErrnoError.prototype=new Error;FS.ErrnoError.prototype.constructor=FS.ErrnoError;[44].forEach(code=>{FS.genericErrors[code]=new FS.ErrnoError(code);FS.genericErrors[code].stack=\"<generic error, no stack>\"})},staticInit:()=>{FS.ensureErrnoError();FS.nameTable=new Array(4096);FS.mount(MEMFS,{},\"/\");FS.createDefaultDirectories();FS.createDefaultDevices();FS.createSpecialDirectories();FS.filesystems={\"MEMFS\":MEMFS,\"WORKERFS\":WORKERFS}},init:(input,output,error)=>{FS.init.initialized=true;FS.ensureErrnoError();Module[\"stdin\"]=input||Module[\"stdin\"];Module[\"stdout\"]=output||Module[\"stdout\"];Module[\"stderr\"]=error||Module[\"stderr\"];FS.createStandardStreams()},quit:()=>{FS.init.initialized=false;for(var i=0;i<FS.streams.length;i++){var stream=FS.streams[i];if(!stream){continue}FS.close(stream)}},findObject:(path,dontResolveLastLink)=>{var ret=FS.analyzePath(path,dontResolveLastLink);if(!ret.exists){return null}return ret.object},analyzePath:(path,dontResolveLastLink)=>{try{var lookup=FS.lookupPath(path,{follow:!dontResolveLastLink});path=lookup.path}catch(e){}var ret={isRoot:false,exists:false,error:0,name:null,path:null,object:null,parentExists:false,parentPath:null,parentObject:null};try{var lookup=FS.lookupPath(path,{parent:true});ret.parentExists=true;ret.parentPath=lookup.path;ret.parentObject=lookup.node;ret.name=PATH.basename(path);lookup=FS.lookupPath(path,{follow:!dontResolveLastLink});ret.exists=true;ret.path=lookup.path;ret.object=lookup.node;ret.name=lookup.node.name;ret.isRoot=lookup.path===\"/\"}catch(e){ret.error=e.errno}return ret},createPath:(parent,path,canRead,canWrite)=>{parent=typeof parent==\"string\"?parent:FS.getPath(parent);var parts=path.split(\"/\").reverse();while(parts.length){var part=parts.pop();if(!part)continue;var current=PATH.join2(parent,part);try{FS.mkdir(current)}catch(e){}parent=current}return current},createFile:(parent,name,properties,canRead,canWrite)=>{var path=PATH.join2(typeof parent==\"string\"?parent:FS.getPath(parent),name);var mode=FS_getMode(canRead,canWrite);return FS.create(path,mode)},createDataFile:(parent,name,data,canRead,canWrite,canOwn)=>{var path=name;if(parent){parent=typeof parent==\"string\"?parent:FS.getPath(parent);path=name?PATH.join2(parent,name):parent}var mode=FS_getMode(canRead,canWrite);var node=FS.create(path,mode);if(data){if(typeof data==\"string\"){var arr=new Array(data.length);for(var i=0,len=data.length;i<len;++i)arr[i]=data.charCodeAt(i);data=arr}FS.chmod(node,mode|146);var stream=FS.open(node,577);FS.write(stream,data,0,data.length,0,canOwn);FS.close(stream);FS.chmod(node,mode)}return node},createDevice:(parent,name,input,output)=>{var path=PATH.join2(typeof parent==\"string\"?parent:FS.getPath(parent),name);var mode=FS_getMode(!!input,!!output);if(!FS.createDevice.major)FS.createDevice.major=64;var dev=FS.makedev(FS.createDevice.major++,0);FS.registerDevice(dev,{open:stream=>{stream.seekable=false},close:stream=>{if(output&&output.buffer&&output.buffer.length){output(10)}},read:(stream,buffer,offset,length,pos)=>{var bytesRead=0;for(var i=0;i<length;i++){var result;try{result=input()}catch(e){throw new FS.ErrnoError(29)}if(result===undefined&&bytesRead===0){throw new FS.ErrnoError(6)}if(result===null||result===undefined)break;bytesRead++;buffer[offset+i]=result}if(bytesRead){stream.node.timestamp=Date.now()}return bytesRead},write:(stream,buffer,offset,length,pos)=>{for(var i=0;i<length;i++){try{output(buffer[offset+i])}catch(e){throw new FS.ErrnoError(29)}}if(length){stream.node.timestamp=Date.now()}return i}});return FS.mkdev(path,mode,dev)},forceLoadFile:obj=>{if(obj.isDevice||obj.isFolder||obj.link||obj.contents)return true;if(typeof XMLHttpRequest!=\"undefined\"){throw new Error(\"Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.\")}else if(read_){try{obj.contents=intArrayFromString(read_(obj.url),true);obj.usedBytes=obj.contents.length}catch(e){throw new FS.ErrnoError(29)}}else{throw new Error(\"Cannot load without read() or XMLHttpRequest.\")}},createLazyFile:(parent,name,url,canRead,canWrite)=>{function LazyUint8Array(){this.lengthKnown=false;this.chunks=[]}LazyUint8Array.prototype.get=function LazyUint8Array_get(idx){if(idx>this.length-1||idx<0){return undefined}var chunkOffset=idx%this.chunkSize;var chunkNum=idx/this.chunkSize|0;return this.getter(chunkNum)[chunkOffset]};LazyUint8Array.prototype.setDataGetter=function LazyUint8Array_setDataGetter(getter){this.getter=getter};LazyUint8Array.prototype.cacheLength=function LazyUint8Array_cacheLength(){var xhr=new XMLHttpRequest;xhr.open(\"HEAD\",url,false);xhr.send(null);if(!(xhr.status>=200&&xhr.status<300||xhr.status===304))throw new Error(\"Couldn't load \"+url+\". Status: \"+xhr.status);var datalength=Number(xhr.getResponseHeader(\"Content-length\"));var header;var hasByteServing=(header=xhr.getResponseHeader(\"Accept-Ranges\"))&&header===\"bytes\";var usesGzip=(header=xhr.getResponseHeader(\"Content-Encoding\"))&&header===\"gzip\";var chunkSize=1024*1024;if(!hasByteServing)chunkSize=datalength;var doXHR=(from,to)=>{if(from>to)throw new Error(\"invalid range (\"+from+\", \"+to+\") or no bytes requested!\");if(to>datalength-1)throw new Error(\"only \"+datalength+\" bytes available! programmer error!\");var xhr=new XMLHttpRequest;xhr.open(\"GET\",url,false);if(datalength!==chunkSize)xhr.setRequestHeader(\"Range\",\"bytes=\"+from+\"-\"+to);xhr.responseType=\"arraybuffer\";if(xhr.overrideMimeType){xhr.overrideMimeType(\"text/plain; charset=x-user-defined\")}xhr.send(null);if(!(xhr.status>=200&&xhr.status<300||xhr.status===304))throw new Error(\"Couldn't load \"+url+\". Status: \"+xhr.status);if(xhr.response!==undefined){return new Uint8Array(xhr.response||[])}return intArrayFromString(xhr.responseText||\"\",true)};var lazyArray=this;lazyArray.setDataGetter(chunkNum=>{var start=chunkNum*chunkSize;var end=(chunkNum+1)*chunkSize-1;end=Math.min(end,datalength-1);if(typeof lazyArray.chunks[chunkNum]==\"undefined\"){lazyArray.chunks[chunkNum]=doXHR(start,end)}if(typeof lazyArray.chunks[chunkNum]==\"undefined\")throw new Error(\"doXHR failed!\");return lazyArray.chunks[chunkNum]});if(usesGzip||!datalength){chunkSize=datalength=1;datalength=this.getter(0).length;chunkSize=datalength;out(\"LazyFiles on gzip forces download of the whole file when length is accessed\")}this._length=datalength;this._chunkSize=chunkSize;this.lengthKnown=true};if(typeof XMLHttpRequest!=\"undefined\"){if(!ENVIRONMENT_IS_WORKER)throw\"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc\";var lazyArray=new LazyUint8Array;Object.defineProperties(lazyArray,{length:{get:function(){if(!this.lengthKnown){this.cacheLength()}return this._length}},chunkSize:{get:function(){if(!this.lengthKnown){this.cacheLength()}return this._chunkSize}}});var properties={isDevice:false,contents:lazyArray}}else{var properties={isDevice:false,url:url}}var node=FS.createFile(parent,name,properties,canRead,canWrite);if(properties.contents){node.contents=properties.contents}else if(properties.url){node.contents=null;node.url=properties.url}Object.defineProperties(node,{usedBytes:{get:function(){return this.contents.length}}});var stream_ops={};var keys=Object.keys(node.stream_ops);keys.forEach(key=>{var fn=node.stream_ops[key];stream_ops[key]=function forceLoadLazyFile(){FS.forceLoadFile(node);return fn.apply(null,arguments)}});function writeChunks(stream,buffer,offset,length,position){var contents=stream.node.contents;if(position>=contents.length)return 0;var size=Math.min(contents.length-position,length);if(contents.slice){for(var i=0;i<size;i++){buffer[offset+i]=contents[position+i]}}else{for(var i=0;i<size;i++){buffer[offset+i]=contents.get(position+i)}}return size}stream_ops.read=(stream,buffer,offset,length,position)=>{FS.forceLoadFile(node);return writeChunks(stream,buffer,offset,length,position)};stream_ops.mmap=(stream,length,position,prot,flags)=>{FS.forceLoadFile(node);var ptr=mmapAlloc(length);if(!ptr){throw new FS.ErrnoError(48)}writeChunks(stream,HEAP8,ptr,length,position);return{ptr:ptr,allocated:true}};node.stream_ops=stream_ops;return node}};var SYSCALLS={DEFAULT_POLLMASK:5,calculateAt:function(dirfd,path,allowEmpty){if(PATH.isAbs(path)){return path}var dir;if(dirfd===-100){dir=FS.cwd()}else{var dirstream=SYSCALLS.getStreamFromFD(dirfd);dir=dirstream.path}if(path.length==0){if(!allowEmpty){throw new FS.ErrnoError(44)}return dir}return PATH.join2(dir,path)},doStat:function(func,path,buf){try{var stat=func(path)}catch(e){if(e&&e.node&&PATH.normalize(path)!==PATH.normalize(FS.getPath(e.node))){return-54}throw e}HEAP32[buf>>2]=stat.dev;HEAP32[buf+8>>2]=stat.ino;HEAP32[buf+12>>2]=stat.mode;HEAPU32[buf+16>>2]=stat.nlink;HEAP32[buf+20>>2]=stat.uid;HEAP32[buf+24>>2]=stat.gid;HEAP32[buf+28>>2]=stat.rdev;HEAP64[buf+40>>3]=BigInt(stat.size);HEAP32[buf+48>>2]=4096;HEAP32[buf+52>>2]=stat.blocks;var atime=stat.atime.getTime();var mtime=stat.mtime.getTime();var ctime=stat.ctime.getTime();HEAP64[buf+56>>3]=BigInt(Math.floor(atime/1e3));HEAPU32[buf+64>>2]=atime%1e3*1e3;HEAP64[buf+72>>3]=BigInt(Math.floor(mtime/1e3));HEAPU32[buf+80>>2]=mtime%1e3*1e3;HEAP64[buf+88>>3]=BigInt(Math.floor(ctime/1e3));HEAPU32[buf+96>>2]=ctime%1e3*1e3;HEAP64[buf+104>>3]=BigInt(stat.ino);return 0},doMsync:function(addr,stream,len,flags,offset){if(!FS.isFile(stream.node.mode)){throw new FS.ErrnoError(43)}if(flags&2){return 0}var buffer=HEAPU8.slice(addr,addr+len);FS.msync(stream,buffer,offset,len,flags)},varargs:undefined,get:function(){SYSCALLS.varargs+=4;var ret=HEAP32[SYSCALLS.varargs-4>>2];return ret},getStr:function(ptr){var ret=UTF8ToString(ptr);return ret},getStreamFromFD:function(fd){var stream=FS.getStream(fd);if(!stream)throw new FS.ErrnoError(8);return stream}};function ___syscall__newselect(nfds,readfds,writefds,exceptfds,timeout){try{var total=0;var srcReadLow=readfds?HEAP32[readfds>>2]:0,srcReadHigh=readfds?HEAP32[readfds+4>>2]:0;var srcWriteLow=writefds?HEAP32[writefds>>2]:0,srcWriteHigh=writefds?HEAP32[writefds+4>>2]:0;var srcExceptLow=exceptfds?HEAP32[exceptfds>>2]:0,srcExceptHigh=exceptfds?HEAP32[exceptfds+4>>2]:0;var dstReadLow=0,dstReadHigh=0;var dstWriteLow=0,dstWriteHigh=0;var dstExceptLow=0,dstExceptHigh=0;var allLow=(readfds?HEAP32[readfds>>2]:0)|(writefds?HEAP32[writefds>>2]:0)|(exceptfds?HEAP32[exceptfds>>2]:0);var allHigh=(readfds?HEAP32[readfds+4>>2]:0)|(writefds?HEAP32[writefds+4>>2]:0)|(exceptfds?HEAP32[exceptfds+4>>2]:0);var check=function(fd,low,high,val){return fd<32?low&val:high&val};for(var fd=0;fd<nfds;fd++){var mask=1<<fd%32;if(!check(fd,allLow,allHigh,mask)){continue}var stream=SYSCALLS.getStreamFromFD(fd);var flags=SYSCALLS.DEFAULT_POLLMASK;if(stream.stream_ops.poll){flags=stream.stream_ops.poll(stream)}if(flags&1&&check(fd,srcReadLow,srcReadHigh,mask)){fd<32?dstReadLow=dstReadLow|mask:dstReadHigh=dstReadHigh|mask;total++}if(flags&4&&check(fd,srcWriteLow,srcWriteHigh,mask)){fd<32?dstWriteLow=dstWriteLow|mask:dstWriteHigh=dstWriteHigh|mask;total++}if(flags&2&&check(fd,srcExceptLow,srcExceptHigh,mask)){fd<32?dstExceptLow=dstExceptLow|mask:dstExceptHigh=dstExceptHigh|mask;total++}}if(readfds){HEAP32[readfds>>2]=dstReadLow;HEAP32[readfds+4>>2]=dstReadHigh}if(writefds){HEAP32[writefds>>2]=dstWriteLow;HEAP32[writefds+4>>2]=dstWriteHigh}if(exceptfds){HEAP32[exceptfds>>2]=dstExceptLow;HEAP32[exceptfds+4>>2]=dstExceptHigh}return total}catch(e){if(typeof FS==\"undefined\"||!(e.name===\"ErrnoError\"))throw e;return-e.errno}}var SOCKFS={mount:function(mount){Module[\"websocket\"]=Module[\"websocket\"]&&\"object\"===typeof Module[\"websocket\"]?Module[\"websocket\"]:{};Module[\"websocket\"]._callbacks={};Module[\"websocket\"][\"on\"]=function(event,callback){if(\"function\"===typeof callback){this._callbacks[event]=callback}return this};Module[\"websocket\"].emit=function(event,param){if(\"function\"===typeof this._callbacks[event]){this._callbacks[event].call(this,param)}};return FS.createNode(null,\"/\",16384|511,0)},createSocket:function(family,type,protocol){type&=~526336;var streaming=type==1;if(streaming&&protocol&&protocol!=6){throw new FS.ErrnoError(66)}var sock={family:family,type:type,protocol:protocol,server:null,error:null,peers:{},pending:[],recv_queue:[],sock_ops:SOCKFS.websocket_sock_ops};var name=SOCKFS.nextname();var node=FS.createNode(SOCKFS.root,name,49152,0);node.sock=sock;var stream=FS.createStream({path:name,node:node,flags:2,seekable:false,stream_ops:SOCKFS.stream_ops});sock.stream=stream;return sock},getSocket:function(fd){var stream=FS.getStream(fd);if(!stream||!FS.isSocket(stream.node.mode)){return null}return stream.node.sock},stream_ops:{poll:function(stream){var sock=stream.node.sock;return sock.sock_ops.poll(sock)},ioctl:function(stream,request,varargs){var sock=stream.node.sock;return sock.sock_ops.ioctl(sock,request,varargs)},read:function(stream,buffer,offset,length,position){var sock=stream.node.sock;var msg=sock.sock_ops.recvmsg(sock,length);if(!msg){return 0}buffer.set(msg.buffer,offset);return msg.buffer.length},write:function(stream,buffer,offset,length,position){var sock=stream.node.sock;return sock.sock_ops.sendmsg(sock,buffer,offset,length)},close:function(stream){var sock=stream.node.sock;sock.sock_ops.close(sock)}},nextname:function(){if(!SOCKFS.nextname.current){SOCKFS.nextname.current=0}return\"socket[\"+SOCKFS.nextname.current+++\"]\"},websocket_sock_ops:{createPeer:function(sock,addr,port){var ws;if(typeof addr==\"object\"){ws=addr;addr=null;port=null}if(ws){if(ws._socket){addr=ws._socket.remoteAddress;port=ws._socket.remotePort}else{var result=/ws[s]?:\\/\\/([^:]+):(\\d+)/.exec(ws.url);if(!result){throw new Error(\"WebSocket URL must be in the format ws(s)://address:port\")}addr=result[1];port=parseInt(result[2],10)}}else{try{var runtimeConfig=Module[\"websocket\"]&&\"object\"===typeof Module[\"websocket\"];var url=\"ws:#\".replace(\"#\",\"//\");if(runtimeConfig){if(\"string\"===typeof Module[\"websocket\"][\"url\"]){url=Module[\"websocket\"][\"url\"]}}if(url===\"ws://\"||url===\"wss://\"){var parts=addr.split(\"/\");url=url+parts[0]+\":\"+port+\"/\"+parts.slice(1).join(\"/\")}var subProtocols=\"binary\";if(runtimeConfig){if(\"string\"===typeof Module[\"websocket\"][\"subprotocol\"]){subProtocols=Module[\"websocket\"][\"subprotocol\"]}}var opts=undefined;if(subProtocols!==\"null\"){subProtocols=subProtocols.replace(/^ +| +$/g,\"\").split(/ *, */);opts=subProtocols}if(runtimeConfig&&null===Module[\"websocket\"][\"subprotocol\"]){subProtocols=\"null\";opts=undefined}var WebSocketConstructor;if(ENVIRONMENT_IS_NODE){WebSocketConstructor=require(\"ws\")}else{WebSocketConstructor=WebSocket}ws=new WebSocketConstructor(url,opts);ws.binaryType=\"arraybuffer\"}catch(e){throw new FS.ErrnoError(23)}}var peer={addr:addr,port:port,socket:ws,dgram_send_queue:[]};SOCKFS.websocket_sock_ops.addPeer(sock,peer);SOCKFS.websocket_sock_ops.handlePeerEvents(sock,peer);if(sock.type===2&&typeof sock.sport!=\"undefined\"){peer.dgram_send_queue.push(new Uint8Array([255,255,255,255,\"p\".charCodeAt(0),\"o\".charCodeAt(0),\"r\".charCodeAt(0),\"t\".charCodeAt(0),(sock.sport&65280)>>8,sock.sport&255]))}return peer},getPeer:function(sock,addr,port){return sock.peers[addr+\":\"+port]},addPeer:function(sock,peer){sock.peers[peer.addr+\":\"+peer.port]=peer},removePeer:function(sock,peer){delete sock.peers[peer.addr+\":\"+peer.port]},handlePeerEvents:function(sock,peer){var first=true;var handleOpen=function(){Module[\"websocket\"].emit(\"open\",sock.stream.fd);try{var queued=peer.dgram_send_queue.shift();while(queued){peer.socket.send(queued);queued=peer.dgram_send_queue.shift()}}catch(e){peer.socket.close()}};function handleMessage(data){if(typeof data==\"string\"){var encoder=new TextEncoder;data=encoder.encode(data)}else{assert(data.byteLength!==undefined);if(data.byteLength==0){return}data=new Uint8Array(data)}var wasfirst=first;first=false;if(wasfirst&&data.length===10&&data[0]===255&&data[1]===255&&data[2]===255&&data[3]===255&&data[4]===\"p\".charCodeAt(0)&&data[5]===\"o\".charCodeAt(0)&&data[6]===\"r\".charCodeAt(0)&&data[7]===\"t\".charCodeAt(0)){var newport=data[8]<<8|data[9];SOCKFS.websocket_sock_ops.removePeer(sock,peer);peer.port=newport;SOCKFS.websocket_sock_ops.addPeer(sock,peer);return}sock.recv_queue.push({addr:peer.addr,port:peer.port,data:data});Module[\"websocket\"].emit(\"message\",sock.stream.fd)}if(ENVIRONMENT_IS_NODE){peer.socket.on(\"open\",handleOpen);peer.socket.on(\"message\",function(data,isBinary){if(!isBinary){return}handleMessage(new Uint8Array(data).buffer)});peer.socket.on(\"close\",function(){Module[\"websocket\"].emit(\"close\",sock.stream.fd)});peer.socket.on(\"error\",function(error){sock.error=14;Module[\"websocket\"].emit(\"error\",[sock.stream.fd,sock.error,\"ECONNREFUSED: Connection refused\"])})}else{peer.socket.onopen=handleOpen;peer.socket.onclose=function(){Module[\"websocket\"].emit(\"close\",sock.stream.fd)};peer.socket.onmessage=function peer_socket_onmessage(event){handleMessage(event.data)};peer.socket.onerror=function(error){sock.error=14;Module[\"websocket\"].emit(\"error\",[sock.stream.fd,sock.error,\"ECONNREFUSED: Connection refused\"])}}},poll:function(sock){if(sock.type===1&&sock.server){return sock.pending.length?64|1:0}var mask=0;var dest=sock.type===1?SOCKFS.websocket_sock_ops.getPeer(sock,sock.daddr,sock.dport):null;if(sock.recv_queue.length||!dest||dest&&dest.socket.readyState===dest.socket.CLOSING||dest&&dest.socket.readyState===dest.socket.CLOSED){mask|=64|1}if(!dest||dest&&dest.socket.readyState===dest.socket.OPEN){mask|=4}if(dest&&dest.socket.readyState===dest.socket.CLOSING||dest&&dest.socket.readyState===dest.socket.CLOSED){mask|=16}return mask},ioctl:function(sock,request,arg){switch(request){case 21531:var bytes=0;if(sock.recv_queue.length){bytes=sock.recv_queue[0].data.length}HEAP32[arg>>2]=bytes;return 0;default:return 28}},close:function(sock){if(sock.server){try{sock.server.close()}catch(e){}sock.server=null}var peers=Object.keys(sock.peers);for(var i=0;i<peers.length;i++){var peer=sock.peers[peers[i]];try{peer.socket.close()}catch(e){}SOCKFS.websocket_sock_ops.removePeer(sock,peer)}return 0},bind:function(sock,addr,port){if(typeof sock.saddr!=\"undefined\"||typeof sock.sport!=\"undefined\"){throw new FS.ErrnoError(28)}sock.saddr=addr;sock.sport=port;if(sock.type===2){if(sock.server){sock.server.close();sock.server=null}try{sock.sock_ops.listen(sock,0)}catch(e){if(!(e.name===\"ErrnoError\"))throw e;if(e.errno!==138)throw e}}},connect:function(sock,addr,port){if(sock.server){throw new FS.ErrnoError(138)}if(typeof sock.daddr!=\"undefined\"&&typeof sock.dport!=\"undefined\"){var dest=SOCKFS.websocket_sock_ops.getPeer(sock,sock.daddr,sock.dport);if(dest){if(dest.socket.readyState===dest.socket.CONNECTING){throw new FS.ErrnoError(7)}else{throw new FS.ErrnoError(30)}}}var peer=SOCKFS.websocket_sock_ops.createPeer(sock,addr,port);sock.daddr=peer.addr;sock.dport=peer.port;throw new FS.ErrnoError(26)},listen:function(sock,backlog){if(!ENVIRONMENT_IS_NODE){throw new FS.ErrnoError(138)}if(sock.server){throw new FS.ErrnoError(28)}var WebSocketServer=require(\"ws\").Server;var host=sock.saddr;sock.server=new WebSocketServer({host:host,port:sock.sport});Module[\"websocket\"].emit(\"listen\",sock.stream.fd);sock.server.on(\"connection\",function(ws){if(sock.type===1){var newsock=SOCKFS.createSocket(sock.family,sock.type,sock.protocol);var peer=SOCKFS.websocket_sock_ops.createPeer(newsock,ws);newsock.daddr=peer.addr;newsock.dport=peer.port;sock.pending.push(newsock);Module[\"websocket\"].emit(\"connection\",newsock.stream.fd)}else{SOCKFS.websocket_sock_ops.createPeer(sock,ws);Module[\"websocket\"].emit(\"connection\",sock.stream.fd)}});sock.server.on(\"close\",function(){Module[\"websocket\"].emit(\"close\",sock.stream.fd);sock.server=null});sock.server.on(\"error\",function(error){sock.error=23;Module[\"websocket\"].emit(\"error\",[sock.stream.fd,sock.error,\"EHOSTUNREACH: Host is unreachable\"])})},accept:function(listensock){if(!listensock.server||!listensock.pending.length){throw new FS.ErrnoError(28)}var newsock=listensock.pending.shift();newsock.stream.flags=listensock.stream.flags;return newsock},getname:function(sock,peer){var addr,port;if(peer){if(sock.daddr===undefined||sock.dport===undefined){throw new FS.ErrnoError(53)}addr=sock.daddr;port=sock.dport}else{addr=sock.saddr||0;port=sock.sport||0}return{addr:addr,port:port}},sendmsg:function(sock,buffer,offset,length,addr,port){if(sock.type===2){if(addr===undefined||port===undefined){addr=sock.daddr;port=sock.dport}if(addr===undefined||port===undefined){throw new FS.ErrnoError(17)}}else{addr=sock.daddr;port=sock.dport}var dest=SOCKFS.websocket_sock_ops.getPeer(sock,addr,port);if(sock.type===1){if(!dest||dest.socket.readyState===dest.socket.CLOSING||dest.socket.readyState===dest.socket.CLOSED){throw new FS.ErrnoError(53)}else if(dest.socket.readyState===dest.socket.CONNECTING){throw new FS.ErrnoError(6)}}if(ArrayBuffer.isView(buffer)){offset+=buffer.byteOffset;buffer=buffer.buffer}var data;data=buffer.slice(offset,offset+length);if(sock.type===2){if(!dest||dest.socket.readyState!==dest.socket.OPEN){if(!dest||dest.socket.readyState===dest.socket.CLOSING||dest.socket.readyState===dest.socket.CLOSED){dest=SOCKFS.websocket_sock_ops.createPeer(sock,addr,port)}dest.dgram_send_queue.push(data);return length}}try{dest.socket.send(data);return length}catch(e){throw new FS.ErrnoError(28)}},recvmsg:function(sock,length){if(sock.type===1&&sock.server){throw new FS.ErrnoError(53)}var queued=sock.recv_queue.shift();if(!queued){if(sock.type===1){var dest=SOCKFS.websocket_sock_ops.getPeer(sock,sock.daddr,sock.dport);if(!dest){throw new FS.ErrnoError(53)}if(dest.socket.readyState===dest.socket.CLOSING||dest.socket.readyState===dest.socket.CLOSED){return null}throw new FS.ErrnoError(6)}throw new FS.ErrnoError(6)}var queuedLength=queued.data.byteLength||queued.data.length;var queuedOffset=queued.data.byteOffset||0;var queuedBuffer=queued.data.buffer||queued.data;var bytesRead=Math.min(length,queuedLength);var res={buffer:new Uint8Array(queuedBuffer,queuedOffset,bytesRead),addr:queued.addr,port:queued.port};if(sock.type===1&&bytesRead<queuedLength){var bytesRemaining=queuedLength-bytesRead;queued.data=new Uint8Array(queuedBuffer,queuedOffset+bytesRead,bytesRemaining);sock.recv_queue.unshift(queued)}return res}}};function getSocketFromFD(fd){var socket=SOCKFS.getSocket(fd);if(!socket)throw new FS.ErrnoError(8);return socket}function setErrNo(value){HEAP32[___errno_location()>>2]=value;return value}function inetPton4(str){var b=str.split(\".\");for(var i=0;i<4;i++){var tmp=Number(b[i]);if(isNaN(tmp))return null;b[i]=tmp}return(b[0]|b[1]<<8|b[2]<<16|b[3]<<24)>>>0}function jstoi_q(str){return parseInt(str)}function inetPton6(str){var words;var w,offset,z;var valid6regx=/^((?=.*::)(?!.*::.+::)(::)?([\\dA-F]{1,4}:(:|\\b)|){5}|([\\dA-F]{1,4}:){6})((([\\dA-F]{1,4}((?!\\3)::|:\\b|$))|(?!\\2\\3)){2}|(((2[0-4]|1\\d|[1-9])?\\d|25[0-5])\\.?\\b){4})$/i;var parts=[];if(!valid6regx.test(str)){return null}if(str===\"::\"){return[0,0,0,0,0,0,0,0]}if(str.startsWith(\"::\")){str=str.replace(\"::\",\"Z:\")}else{str=str.replace(\"::\",\":Z:\")}if(str.indexOf(\".\")>0){str=str.replace(new RegExp(\"[.]\",\"g\"),\":\");words=str.split(\":\");words[words.length-4]=jstoi_q(words[words.length-4])+jstoi_q(words[words.length-3])*256;words[words.length-3]=jstoi_q(words[words.length-2])+jstoi_q(words[words.length-1])*256;words=words.slice(0,words.length-2)}else{words=str.split(\":\")}offset=0;z=0;for(w=0;w<words.length;w++){if(typeof words[w]==\"string\"){if(words[w]===\"Z\"){for(z=0;z<8-words.length+1;z++){parts[w+z]=0}offset=z-1}else{parts[w+offset]=_htons(parseInt(words[w],16))}}else{parts[w+offset]=words[w]}}return[parts[1]<<16|parts[0],parts[3]<<16|parts[2],parts[5]<<16|parts[4],parts[7]<<16|parts[6]]}function writeSockaddr(sa,family,addr,port,addrlen){switch(family){case 2:addr=inetPton4(addr);zeroMemory(sa,16);if(addrlen){HEAP32[addrlen>>2]=16}HEAP16[sa>>1]=family;HEAP32[sa+4>>2]=addr;HEAP16[sa+2>>1]=_htons(port);break;case 10:addr=inetPton6(addr);zeroMemory(sa,28);if(addrlen){HEAP32[addrlen>>2]=28}HEAP32[sa>>2]=family;HEAP32[sa+8>>2]=addr[0];HEAP32[sa+12>>2]=addr[1];HEAP32[sa+16>>2]=addr[2];HEAP32[sa+20>>2]=addr[3];HEAP16[sa+2>>1]=_htons(port);break;default:return 5}return 0}var DNS={address_map:{id:1,addrs:{},names:{}},lookup_name:function(name){var res=inetPton4(name);if(res!==null){return name}res=inetPton6(name);if(res!==null){return name}var addr;if(DNS.address_map.addrs[name]){addr=DNS.address_map.addrs[name]}else{var id=DNS.address_map.id++;assert(id<65535,\"exceeded max address mappings of 65535\");addr=\"172.29.\"+(id&255)+\".\"+(id&65280);DNS.address_map.names[addr]=name;DNS.address_map.addrs[name]=addr}return addr},lookup_addr:function(addr){if(DNS.address_map.names[addr]){return DNS.address_map.names[addr]}return null}};function ___syscall_accept4(fd,addr,addrlen,flags,d1,d2){try{var sock=getSocketFromFD(fd);var newsock=sock.sock_ops.accept(sock);if(addr){var errno=writeSockaddr(addr,newsock.family,DNS.lookup_name(newsock.daddr),newsock.dport,addrlen)}return newsock.stream.fd}catch(e){if(typeof FS==\"undefined\"||!(e.name===\"ErrnoError\"))throw e;return-e.errno}}function inetNtop4(addr){return(addr&255)+\".\"+(addr>>8&255)+\".\"+(addr>>16&255)+\".\"+(addr>>24&255)}function inetNtop6(ints){var str=\"\";var word=0;var longest=0;var lastzero=0;var zstart=0;var len=0;var i=0;var parts=[ints[0]&65535,ints[0]>>16,ints[1]&65535,ints[1]>>16,ints[2]&65535,ints[2]>>16,ints[3]&65535,ints[3]>>16];var hasipv4=true;var v4part=\"\";for(i=0;i<5;i++){if(parts[i]!==0){hasipv4=false;break}}if(hasipv4){v4part=inetNtop4(parts[6]|parts[7]<<16);if(parts[5]===-1){str=\"::ffff:\";str+=v4part;return str}if(parts[5]===0){str=\"::\";if(v4part===\"0.0.0.0\")v4part=\"\";if(v4part===\"0.0.0.1\")v4part=\"1\";str+=v4part;return str}}for(word=0;word<8;word++){if(parts[word]===0){if(word-lastzero>1){len=0}lastzero=word;len++}if(len>longest){longest=len;zstart=word-longest+1}}for(word=0;word<8;word++){if(longest>1){if(parts[word]===0&&word>=zstart&&word<zstart+longest){if(word===zstart){str+=\":\";if(zstart===0)str+=\":\"}continue}}str+=Number(_ntohs(parts[word]&65535)).toString(16);str+=word<7?\":\":\"\"}return str}function readSockaddr(sa,salen){var family=HEAP16[sa>>1];var port=_ntohs(HEAPU16[sa+2>>1]);var addr;switch(family){case 2:if(salen!==16){return{errno:28}}addr=HEAP32[sa+4>>2];addr=inetNtop4(addr);break;case 10:if(salen!==28){return{errno:28}}addr=[HEAP32[sa+8>>2],HEAP32[sa+12>>2],HEAP32[sa+16>>2],HEAP32[sa+20>>2]];addr=inetNtop6(addr);break;default:return{errno:5}}return{family:family,addr:addr,port:port}}function getSocketAddress(addrp,addrlen,allowNull){if(allowNull&&addrp===0)return null;var info=readSockaddr(addrp,addrlen);if(info.errno)throw new FS.ErrnoError(info.errno);info.addr=DNS.lookup_addr(info.addr)||info.addr;return info}function ___syscall_bind(fd,addr,addrlen,d1,d2,d3){try{var sock=getSocketFromFD(fd);var info=getSocketAddress(addr,addrlen);sock.sock_ops.bind(sock,info.addr,info.port);return 0}catch(e){if(typeof FS==\"undefined\"||!(e.name===\"ErrnoError\"))throw e;return-e.errno}}function ___syscall_connect(fd,addr,addrlen,d1,d2,d3){try{var sock=getSocketFromFD(fd);var info=getSocketAddress(addr,addrlen);sock.sock_ops.connect(sock,info.addr,info.port);return 0}catch(e){if(typeof FS==\"undefined\"||!(e.name===\"ErrnoError\"))throw e;return-e.errno}}function ___syscall_faccessat(dirfd,path,amode,flags){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);if(amode&~7){return-28}var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;if(!node){return-44}var perms=\"\";if(amode&4)perms+=\"r\";if(amode&2)perms+=\"w\";if(amode&1)perms+=\"x\";if(perms&&FS.nodePermissions(node,perms)){return-2}return 0}catch(e){if(typeof FS==\"undefined\"||!(e.name===\"ErrnoError\"))throw e;return-e.errno}}function ___syscall_fcntl64(fd,cmd,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD(fd);switch(cmd){case 0:{var arg=SYSCALLS.get();if(arg<0){return-28}var newStream;newStream=FS.createStream(stream,arg);return newStream.fd}case 1:case 2:return 0;case 3:return stream.flags;case 4:{var arg=SYSCALLS.get();stream.flags|=arg;return 0}case 5:{var arg=SYSCALLS.get();var offset=0;HEAP16[arg+offset>>1]=2;return 0}case 6:case 7:return 0;case 16:case 8:return-28;case 9:setErrNo(28);return-1;default:{return-28}}}catch(e){if(typeof FS==\"undefined\"||!(e.name===\"ErrnoError\"))throw e;return-e.errno}}function ___syscall_fstat64(fd,buf){try{var stream=SYSCALLS.getStreamFromFD(fd);return SYSCALLS.doStat(FS.stat,stream.path,buf)}catch(e){if(typeof FS==\"undefined\"||!(e.name===\"ErrnoError\"))throw e;return-e.errno}}function stringToUTF8(str,outPtr,maxBytesToWrite){return stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite)}function ___syscall_getdents64(fd,dirp,count){try{var stream=SYSCALLS.getStreamFromFD(fd);if(!stream.getdents){stream.getdents=FS.readdir(stream.path)}var struct_size=280;var pos=0;var off=FS.llseek(stream,0,1);var idx=Math.floor(off/struct_size);while(idx<stream.getdents.length&&pos+struct_size<=count){var id;var type;var name=stream.getdents[idx];if(name===\".\"){id=stream.node.id;type=4}else if(name===\"..\"){var lookup=FS.lookupPath(stream.path,{parent:true});id=lookup.node.id;type=4}else{var child=FS.lookupNode(stream.node,name);id=child.id;type=FS.isChrdev(child.mode)?2:FS.isDir(child.mode)?4:FS.isLink(child.mode)?10:8}HEAP64[dirp+pos>>3]=BigInt(id);HEAP64[dirp+pos+8>>3]=BigInt((idx+1)*struct_size);HEAP16[dirp+pos+16>>1]=280;HEAP8[dirp+pos+18>>0]=type;stringToUTF8(name,dirp+pos+19,256);pos+=struct_size;idx+=1}FS.llseek(stream,idx*struct_size,0);return pos}catch(e){if(typeof FS==\"undefined\"||!(e.name===\"ErrnoError\"))throw e;return-e.errno}}function ___syscall_getpeername(fd,addr,addrlen,d1,d2,d3){try{var sock=getSocketFromFD(fd);if(!sock.daddr){return-53}var errno=writeSockaddr(addr,sock.family,DNS.lookup_name(sock.daddr),sock.dport,addrlen);return 0}catch(e){if(typeof FS==\"undefined\"||!(e.name===\"ErrnoError\"))throw e;return-e.errno}}function ___syscall_getsockname(fd,addr,addrlen,d1,d2,d3){try{var sock=getSocketFromFD(fd);var errno=writeSockaddr(addr,sock.family,DNS.lookup_name(sock.saddr||\"0.0.0.0\"),sock.sport,addrlen);return 0}catch(e){if(typeof FS==\"undefined\"||!(e.name===\"ErrnoError\"))throw e;return-e.errno}}function ___syscall_getsockopt(fd,level,optname,optval,optlen,d1){try{var sock=getSocketFromFD(fd);if(level===1){if(optname===4){HEAP32[optval>>2]=sock.error;HEAP32[optlen>>2]=4;sock.error=null;return 0}}return-50}catch(e){if(typeof FS==\"undefined\"||!(e.name===\"ErrnoError\"))throw e;return-e.errno}}function ___syscall_ioctl(fd,op,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD(fd);switch(op){case 21509:case 21505:{if(!stream.tty)return-59;return 0}case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:{if(!stream.tty)return-59;return 0}case 21519:{if(!stream.tty)return-59;var argp=SYSCALLS.get();HEAP32[argp>>2]=0;return 0}case 21520:{if(!stream.tty)return-59;return-28}case 21531:{var argp=SYSCALLS.get();return FS.ioctl(stream,op,argp)}case 21523:{if(!stream.tty)return-59;return 0}case 21524:{if(!stream.tty)return-59;return 0}default:return-28}}catch(e){if(typeof FS==\"undefined\"||!(e.name===\"ErrnoError\"))throw e;return-e.errno}}function ___syscall_listen(fd,backlog){try{var sock=getSocketFromFD(fd);sock.sock_ops.listen(sock,backlog);return 0}catch(e){if(typeof FS==\"undefined\"||!(e.name===\"ErrnoError\"))throw e;return-e.errno}}function ___syscall_lstat64(path,buf){try{path=SYSCALLS.getStr(path);return SYSCALLS.doStat(FS.lstat,path,buf)}catch(e){if(typeof FS==\"undefined\"||!(e.name===\"ErrnoError\"))throw e;return-e.errno}}function ___syscall_mkdirat(dirfd,path,mode){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);path=PATH.normalize(path);if(path[path.length-1]===\"/\")path=path.substr(0,path.length-1);FS.mkdir(path,mode,0);return 0}catch(e){if(typeof FS==\"undefined\"||!(e.name===\"ErrnoError\"))throw e;return-e.errno}}function ___syscall_newfstatat(dirfd,path,buf,flags){try{path=SYSCALLS.getStr(path);var nofollow=flags&256;var allowEmpty=flags&4096;flags=flags&~6400;path=SYSCALLS.calculateAt(dirfd,path,allowEmpty);return SYSCALLS.doStat(nofollow?FS.lstat:FS.stat,path,buf)}catch(e){if(typeof FS==\"undefined\"||!(e.name===\"ErrnoError\"))throw e;return-e.errno}}function ___syscall_openat(dirfd,path,flags,varargs){SYSCALLS.varargs=varargs;try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);var mode=varargs?SYSCALLS.get():0;return FS.open(path,flags,mode).fd}catch(e){if(typeof FS==\"undefined\"||!(e.name===\"ErrnoError\"))throw e;return-e.errno}}function ___syscall_poll(fds,nfds,timeout){try{var nonzero=0;for(var i=0;i<nfds;i++){var pollfd=fds+8*i;var fd=HEAP32[pollfd>>2];var events=HEAP16[pollfd+4>>1];var mask=32;var stream=FS.getStream(fd);if(stream){mask=SYSCALLS.DEFAULT_POLLMASK;if(stream.stream_ops.poll){mask=stream.stream_ops.poll(stream)}}mask&=events|8|16;if(mask)nonzero++;HEAP16[pollfd+6>>1]=mask}return nonzero}catch(e){if(typeof FS==\"undefined\"||!(e.name===\"ErrnoError\"))throw e;return-e.errno}}function ___syscall_recvfrom(fd,buf,len,flags,addr,addrlen){try{var sock=getSocketFromFD(fd);var msg=sock.sock_ops.recvmsg(sock,len);if(!msg)return 0;if(addr){var errno=writeSockaddr(addr,sock.family,DNS.lookup_name(msg.addr),msg.port,addrlen)}HEAPU8.set(msg.buffer,buf);return msg.buffer.byteLength}catch(e){if(typeof FS==\"undefined\"||!(e.name===\"ErrnoError\"))throw e;return-e.errno}}function ___syscall_renameat(olddirfd,oldpath,newdirfd,newpath){try{oldpath=SYSCALLS.getStr(oldpath);newpath=SYSCALLS.getStr(newpath);oldpath=SYSCALLS.calculateAt(olddirfd,oldpath);newpath=SYSCALLS.calculateAt(newdirfd,newpath);FS.rename(oldpath,newpath);return 0}catch(e){if(typeof FS==\"undefined\"||!(e.name===\"ErrnoError\"))throw e;return-e.errno}}function ___syscall_rmdir(path){try{path=SYSCALLS.getStr(path);FS.rmdir(path);return 0}catch(e){if(typeof FS==\"undefined\"||!(e.name===\"ErrnoError\"))throw e;return-e.errno}}function ___syscall_sendto(fd,message,length,flags,addr,addr_len){try{var sock=getSocketFromFD(fd);var dest=getSocketAddress(addr,addr_len,true);if(!dest){return FS.write(sock.stream,HEAP8,message,length)}return sock.sock_ops.sendmsg(sock,HEAP8,message,length,dest.addr,dest.port)}catch(e){if(typeof FS==\"undefined\"||!(e.name===\"ErrnoError\"))throw e;return-e.errno}}function ___syscall_socket(domain,type,protocol){try{var sock=SOCKFS.createSocket(domain,type,protocol);return sock.stream.fd}catch(e){if(typeof FS==\"undefined\"||!(e.name===\"ErrnoError\"))throw e;return-e.errno}}function ___syscall_stat64(path,buf){try{path=SYSCALLS.getStr(path);return SYSCALLS.doStat(FS.stat,path,buf)}catch(e){if(typeof FS==\"undefined\"||!(e.name===\"ErrnoError\"))throw e;return-e.errno}}function ___syscall_unlinkat(dirfd,path,flags){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);if(flags===0){FS.unlink(path)}else if(flags===512){FS.rmdir(path)}else{abort(\"Invalid flags passed to unlinkat\")}return 0}catch(e){if(typeof FS==\"undefined\"||!(e.name===\"ErrnoError\"))throw e;return-e.errno}}var nowIsMonotonic=true;function __emscripten_get_now_is_monotonic(){return nowIsMonotonic}function __emscripten_throw_longjmp(){throw Infinity}function readI53FromI64(ptr){return HEAPU32[ptr>>2]+HEAP32[ptr+4>>2]*4294967296}function __gmtime_js(time,tmPtr){var date=new Date(readI53FromI64(time)*1e3);HEAP32[tmPtr>>2]=date.getUTCSeconds();HEAP32[tmPtr+4>>2]=date.getUTCMinutes();HEAP32[tmPtr+8>>2]=date.getUTCHours();HEAP32[tmPtr+12>>2]=date.getUTCDate();HEAP32[tmPtr+16>>2]=date.getUTCMonth();HEAP32[tmPtr+20>>2]=date.getUTCFullYear()-1900;HEAP32[tmPtr+24>>2]=date.getUTCDay();var start=Date.UTC(date.getUTCFullYear(),0,1,0,0,0,0);var yday=(date.getTime()-start)/(1e3*60*60*24)|0;HEAP32[tmPtr+28>>2]=yday}function isLeapYear(year){return year%4===0&&(year%100!==0||year%400===0)}var MONTH_DAYS_LEAP_CUMULATIVE=[0,31,60,91,121,152,182,213,244,274,305,335];var MONTH_DAYS_REGULAR_CUMULATIVE=[0,31,59,90,120,151,181,212,243,273,304,334];function ydayFromDate(date){var leap=isLeapYear(date.getFullYear());var monthDaysCumulative=leap?MONTH_DAYS_LEAP_CUMULATIVE:MONTH_DAYS_REGULAR_CUMULATIVE;var yday=monthDaysCumulative[date.getMonth()]+date.getDate()-1;return yday}function __localtime_js(time,tmPtr){var date=new Date(readI53FromI64(time)*1e3);HEAP32[tmPtr>>2]=date.getSeconds();HEAP32[tmPtr+4>>2]=date.getMinutes();HEAP32[tmPtr+8>>2]=date.getHours();HEAP32[tmPtr+12>>2]=date.getDate();HEAP32[tmPtr+16>>2]=date.getMonth();HEAP32[tmPtr+20>>2]=date.getFullYear()-1900;HEAP32[tmPtr+24>>2]=date.getDay();var yday=ydayFromDate(date)|0;HEAP32[tmPtr+28>>2]=yday;HEAP32[tmPtr+36>>2]=-(date.getTimezoneOffset()*60);var start=new Date(date.getFullYear(),0,1);var summerOffset=new Date(date.getFullYear(),6,1).getTimezoneOffset();var winterOffset=start.getTimezoneOffset();var dst=(summerOffset!=winterOffset&&date.getTimezoneOffset()==Math.min(winterOffset,summerOffset))|0;HEAP32[tmPtr+32>>2]=dst}function __mktime_js(tmPtr){var date=new Date(HEAP32[tmPtr+20>>2]+1900,HEAP32[tmPtr+16>>2],HEAP32[tmPtr+12>>2],HEAP32[tmPtr+8>>2],HEAP32[tmPtr+4>>2],HEAP32[tmPtr>>2],0);var dst=HEAP32[tmPtr+32>>2];var guessedOffset=date.getTimezoneOffset();var start=new Date(date.getFullYear(),0,1);var summerOffset=new Date(date.getFullYear(),6,1).getTimezoneOffset();var winterOffset=start.getTimezoneOffset();var dstOffset=Math.min(winterOffset,summerOffset);if(dst<0){HEAP32[tmPtr+32>>2]=Number(summerOffset!=winterOffset&&dstOffset==guessedOffset)}else if(dst>0!=(dstOffset==guessedOffset)){var nonDstOffset=Math.max(winterOffset,summerOffset);var trueOffset=dst>0?dstOffset:nonDstOffset;date.setTime(date.getTime()+(trueOffset-guessedOffset)*6e4)}HEAP32[tmPtr+24>>2]=date.getDay();var yday=ydayFromDate(date)|0;HEAP32[tmPtr+28>>2]=yday;HEAP32[tmPtr>>2]=date.getSeconds();HEAP32[tmPtr+4>>2]=date.getMinutes();HEAP32[tmPtr+8>>2]=date.getHours();HEAP32[tmPtr+12>>2]=date.getDate();HEAP32[tmPtr+16>>2]=date.getMonth();HEAP32[tmPtr+20>>2]=date.getYear();return date.getTime()/1e3|0}function __mmap_js(len,prot,flags,fd,off,allocated,addr){try{var stream=SYSCALLS.getStreamFromFD(fd);var res=FS.mmap(stream,len,off,prot,flags);var ptr=res.ptr;HEAP32[allocated>>2]=res.allocated;HEAPU32[addr>>2]=ptr;return 0}catch(e){if(typeof FS==\"undefined\"||!(e.name===\"ErrnoError\"))throw e;return-e.errno}}function __munmap_js(addr,len,prot,flags,fd,offset){try{var stream=SYSCALLS.getStreamFromFD(fd);if(prot&2){SYSCALLS.doMsync(addr,stream,len,flags,offset)}FS.munmap(stream)}catch(e){if(typeof FS==\"undefined\"||!(e.name===\"ErrnoError\"))throw e;return-e.errno}}function stringToNewUTF8(str){var size=lengthBytesUTF8(str)+1;var ret=_malloc(size);if(ret)stringToUTF8(str,ret,size);return ret}function __tzset_js(timezone,daylight,tzname){var currentYear=(new Date).getFullYear();var winter=new Date(currentYear,0,1);var summer=new Date(currentYear,6,1);var winterOffset=winter.getTimezoneOffset();var summerOffset=summer.getTimezoneOffset();var stdTimezoneOffset=Math.max(winterOffset,summerOffset);HEAPU32[timezone>>2]=stdTimezoneOffset*60;HEAP32[daylight>>2]=Number(winterOffset!=summerOffset);function extractZone(date){var match=date.toTimeString().match(/\\(([A-Za-z ]+)\\)$/);return match?match[1]:\"GMT\"}var winterName=extractZone(winter);var summerName=extractZone(summer);var winterNamePtr=stringToNewUTF8(winterName);var summerNamePtr=stringToNewUTF8(summerName);if(summerOffset<winterOffset){HEAPU32[tzname>>2]=winterNamePtr;HEAPU32[tzname+4>>2]=summerNamePtr}else{HEAPU32[tzname>>2]=summerNamePtr;HEAPU32[tzname+4>>2]=winterNamePtr}}function _abort(){abort(\"\")}Module[\"_abort\"]=_abort;function _dlopen(handle){abort(dlopenMissingError)}var readEmAsmArgsArray=[];function readEmAsmArgs(sigPtr,buf){readEmAsmArgsArray.length=0;var ch;buf>>=2;while(ch=HEAPU8[sigPtr++]){buf+=ch!=105&buf;readEmAsmArgsArray.push(ch==105?HEAP32[buf]:(ch==106?HEAP64:HEAPF64)[buf++>>1]);++buf}return readEmAsmArgsArray}function runEmAsmFunction(code,sigPtr,argbuf){var args=readEmAsmArgs(sigPtr,argbuf);return ASM_CONSTS[code].apply(null,args)}function _emscripten_asm_const_int(code,sigPtr,argbuf){return runEmAsmFunction(code,sigPtr,argbuf)}function _emscripten_date_now(){return Date.now()}function getHeapMax(){return 2147483648}function _emscripten_get_heap_max(){return getHeapMax()}var _emscripten_get_now;if(ENVIRONMENT_IS_NODE){global.performance=require(\"perf_hooks\").performance}_emscripten_get_now=()=>performance.now();function _emscripten_memcpy_big(dest,src,num){HEAPU8.copyWithin(dest,src,src+num)}function emscripten_realloc_buffer(size){var b=wasmMemory.buffer;try{wasmMemory.grow(size-b.byteLength+65535>>>16);updateMemoryViews();return 1}catch(e){}}function _emscripten_resize_heap(requestedSize){var oldSize=HEAPU8.length;requestedSize=requestedSize>>>0;var maxHeapSize=getHeapMax();if(requestedSize>maxHeapSize){return false}var alignUp=(x,multiple)=>x+(multiple-x%multiple)%multiple;for(var cutDown=1;cutDown<=4;cutDown*=2){var overGrownHeapSize=oldSize*(1+.2/cutDown);overGrownHeapSize=Math.min(overGrownHeapSize,requestedSize+100663296);var newSize=Math.min(maxHeapSize,alignUp(Math.max(requestedSize,overGrownHeapSize),65536));var replacement=emscripten_realloc_buffer(newSize);if(replacement){return true}}return false}var ENV={};function getExecutableName(){return thisProgram||\"./this.program\"}function getEnvStrings(){if(!getEnvStrings.strings){var lang=(typeof navigator==\"object\"&&navigator.languages&&navigator.languages[0]||\"C\").replace(\"-\",\"_\")+\".UTF-8\";var env={\"USER\":\"web_user\",\"LOGNAME\":\"web_user\",\"PATH\":\"/\",\"PWD\":\"/\",\"HOME\":\"/home/web_user\",\"LANG\":lang,\"_\":getExecutableName()};for(var x in ENV){if(ENV[x]===undefined)delete env[x];else env[x]=ENV[x]}var strings=[];for(var x in env){strings.push(`${x}=${env[x]}`)}getEnvStrings.strings=strings}return getEnvStrings.strings}function stringToAscii(str,buffer){for(var i=0;i<str.length;++i){HEAP8[buffer++>>0]=str.charCodeAt(i)}HEAP8[buffer>>0]=0}function _environ_get(__environ,environ_buf){var bufSize=0;getEnvStrings().forEach(function(string,i){var ptr=environ_buf+bufSize;HEAPU32[__environ+i*4>>2]=ptr;stringToAscii(string,ptr);bufSize+=string.length+1});return 0}function _environ_sizes_get(penviron_count,penviron_buf_size){var strings=getEnvStrings();HEAPU32[penviron_count>>2]=strings.length;var bufSize=0;strings.forEach(function(string){bufSize+=string.length+1});HEAPU32[penviron_buf_size>>2]=bufSize;return 0}function _proc_exit(code){EXITSTATUS=code;if(!keepRuntimeAlive()){if(Module[\"onExit\"])Module[\"onExit\"](code);ABORT=true}quit_(code,new ExitStatus(code))}function exitJS(status,implicit){EXITSTATUS=status;_proc_exit(status)}var _exit=exitJS;function _fd_close(fd){try{var stream=SYSCALLS.getStreamFromFD(fd);FS.close(stream);return 0}catch(e){if(typeof FS==\"undefined\"||!(e.name===\"ErrnoError\"))throw e;return e.errno}}function _fd_fdstat_get(fd,pbuf){try{var rightsBase=0;var rightsInheriting=0;var flags=0;{var stream=SYSCALLS.getStreamFromFD(fd);var type=stream.tty?2:FS.isDir(stream.mode)?3:FS.isLink(stream.mode)?7:4}HEAP8[pbuf>>0]=type;HEAP16[pbuf+2>>1]=flags;HEAP64[pbuf+8>>3]=BigInt(rightsBase);HEAP64[pbuf+16>>3]=BigInt(rightsInheriting);return 0}catch(e){if(typeof FS==\"undefined\"||!(e.name===\"ErrnoError\"))throw e;return e.errno}}function doReadv(stream,iov,iovcnt,offset){var ret=0;for(var i=0;i<iovcnt;i++){var ptr=HEAPU32[iov>>2];var len=HEAPU32[iov+4>>2];iov+=8;var curr=FS.read(stream,HEAP8,ptr,len,offset);if(curr<0)return-1;ret+=curr;if(curr<len)break;if(typeof offset!==\"undefined\"){offset+=curr}}return ret}function _fd_read(fd,iov,iovcnt,pnum){try{var stream=SYSCALLS.getStreamFromFD(fd);var num=doReadv(stream,iov,iovcnt);HEAPU32[pnum>>2]=num;return 0}catch(e){if(typeof FS==\"undefined\"||!(e.name===\"ErrnoError\"))throw e;return e.errno}}var MAX_INT53=9007199254740992;var MIN_INT53=-9007199254740992;function bigintToI53Checked(num){return num<MIN_INT53||num>MAX_INT53?NaN:Number(num)}function _fd_seek(fd,offset,whence,newOffset){try{offset=bigintToI53Checked(offset);if(isNaN(offset))return 61;var stream=SYSCALLS.getStreamFromFD(fd);FS.llseek(stream,offset,whence);HEAP64[newOffset>>3]=BigInt(stream.position);if(stream.getdents&&offset===0&&whence===0)stream.getdents=null;return 0}catch(e){if(typeof FS==\"undefined\"||!(e.name===\"ErrnoError\"))throw e;return e.errno}}function doWritev(stream,iov,iovcnt,offset){var ret=0;for(var i=0;i<iovcnt;i++){var ptr=HEAPU32[iov>>2];var len=HEAPU32[iov+4>>2];iov+=8;var curr=FS.write(stream,HEAP8,ptr,len,offset);if(curr<0)return-1;ret+=curr;if(typeof offset!==\"undefined\"){offset+=curr}}return ret}function _fd_write(fd,iov,iovcnt,pnum){try{var stream=SYSCALLS.getStreamFromFD(fd);var num=doWritev(stream,iov,iovcnt);HEAPU32[pnum>>2]=num;return 0}catch(e){if(typeof FS==\"undefined\"||!(e.name===\"ErrnoError\"))throw e;return e.errno}}function _getaddrinfo(node,service,hint,out){var addr=0;var port=0;var flags=0;var family=0;var type=0;var proto=0;var ai;function allocaddrinfo(family,type,proto,canon,addr,port){var sa,salen,ai;var errno;salen=family===10?28:16;addr=family===10?inetNtop6(addr):inetNtop4(addr);sa=_malloc(salen);errno=writeSockaddr(sa,family,addr,port);assert(!errno);ai=_malloc(32);HEAP32[ai+4>>2]=family;HEAP32[ai+8>>2]=type;HEAP32[ai+12>>2]=proto;HEAPU32[ai+24>>2]=canon;HEAPU32[ai+20>>2]=sa;if(family===10){HEAP32[ai+16>>2]=28}else{HEAP32[ai+16>>2]=16}HEAP32[ai+28>>2]=0;return ai}if(hint){flags=HEAP32[hint>>2];family=HEAP32[hint+4>>2];type=HEAP32[hint+8>>2];proto=HEAP32[hint+12>>2]}if(type&&!proto){proto=type===2?17:6}if(!type&&proto){type=proto===17?2:1}if(proto===0){proto=6}if(type===0){type=1}if(!node&&!service){return-2}if(flags&~(1|2|4|1024|8|16|32)){return-1}if(hint!==0&&HEAP32[hint>>2]&2&&!node){return-1}if(flags&32){return-2}if(type!==0&&type!==1&&type!==2){return-7}if(family!==0&&family!==2&&family!==10){return-6}if(service){service=UTF8ToString(service);port=parseInt(service,10);if(isNaN(port)){if(flags&1024){return-2}return-8}}if(!node){if(family===0){family=2}if((flags&1)===0){if(family===2){addr=_htonl(2130706433)}else{addr=[0,0,0,1]}}ai=allocaddrinfo(family,type,proto,null,addr,port);HEAPU32[out>>2]=ai;return 0}node=UTF8ToString(node);addr=inetPton4(node);if(addr!==null){if(family===0||family===2){family=2}else if(family===10&&flags&8){addr=[0,0,_htonl(65535),addr];family=10}else{return-2}}else{addr=inetPton6(node);if(addr!==null){if(family===0||family===10){family=10}else{return-2}}}if(addr!=null){ai=allocaddrinfo(family,type,proto,node,addr,port);HEAPU32[out>>2]=ai;return 0}if(flags&4){return-2}node=DNS.lookup_name(node);addr=inetPton4(node);if(family===0){family=2}else if(family===10){addr=[0,0,_htonl(65535),addr]}ai=allocaddrinfo(family,type,proto,null,addr,port);HEAPU32[out>>2]=ai;return 0}function _getnameinfo(sa,salen,node,nodelen,serv,servlen,flags){var info=readSockaddr(sa,salen);if(info.errno){return-6}var port=info.port;var addr=info.addr;var overflowed=false;if(node&&nodelen){var lookup;if(flags&1||!(lookup=DNS.lookup_addr(addr))){if(flags&8){return-2}}else{addr=lookup}var numBytesWrittenExclNull=stringToUTF8(addr,node,nodelen);if(numBytesWrittenExclNull+1>=nodelen){overflowed=true}}if(serv&&servlen){port=\"\"+port;var numBytesWrittenExclNull=stringToUTF8(port,serv,servlen);if(numBytesWrittenExclNull+1>=servlen){overflowed=true}}if(overflowed){return-12}return 0}function arraySum(array,index){var sum=0;for(var i=0;i<=index;sum+=array[i++]){}return sum}var MONTH_DAYS_LEAP=[31,29,31,30,31,30,31,31,30,31,30,31];var MONTH_DAYS_REGULAR=[31,28,31,30,31,30,31,31,30,31,30,31];function addDays(date,days){var newDate=new Date(date.getTime());while(days>0){var leap=isLeapYear(newDate.getFullYear());var currentMonth=newDate.getMonth();var daysInCurrentMonth=(leap?MONTH_DAYS_LEAP:MONTH_DAYS_REGULAR)[currentMonth];if(days>daysInCurrentMonth-newDate.getDate()){days-=daysInCurrentMonth-newDate.getDate()+1;newDate.setDate(1);if(currentMonth<11){newDate.setMonth(currentMonth+1)}else{newDate.setMonth(0);newDate.setFullYear(newDate.getFullYear()+1)}}else{newDate.setDate(newDate.getDate()+days);return newDate}}return newDate}function writeArrayToMemory(array,buffer){HEAP8.set(array,buffer)}function _strftime(s,maxsize,format,tm){var tm_zone=HEAP32[tm+40>>2];var date={tm_sec:HEAP32[tm>>2],tm_min:HEAP32[tm+4>>2],tm_hour:HEAP32[tm+8>>2],tm_mday:HEAP32[tm+12>>2],tm_mon:HEAP32[tm+16>>2],tm_year:HEAP32[tm+20>>2],tm_wday:HEAP32[tm+24>>2],tm_yday:HEAP32[tm+28>>2],tm_isdst:HEAP32[tm+32>>2],tm_gmtoff:HEAP32[tm+36>>2],tm_zone:tm_zone?UTF8ToString(tm_zone):\"\"};var pattern=UTF8ToString(format);var EXPANSION_RULES_1={\"%c\":\"%a %b %d %H:%M:%S %Y\",\"%D\":\"%m/%d/%y\",\"%F\":\"%Y-%m-%d\",\"%h\":\"%b\",\"%r\":\"%I:%M:%S %p\",\"%R\":\"%H:%M\",\"%T\":\"%H:%M:%S\",\"%x\":\"%m/%d/%y\",\"%X\":\"%H:%M:%S\",\"%Ec\":\"%c\",\"%EC\":\"%C\",\"%Ex\":\"%m/%d/%y\",\"%EX\":\"%H:%M:%S\",\"%Ey\":\"%y\",\"%EY\":\"%Y\",\"%Od\":\"%d\",\"%Oe\":\"%e\",\"%OH\":\"%H\",\"%OI\":\"%I\",\"%Om\":\"%m\",\"%OM\":\"%M\",\"%OS\":\"%S\",\"%Ou\":\"%u\",\"%OU\":\"%U\",\"%OV\":\"%V\",\"%Ow\":\"%w\",\"%OW\":\"%W\",\"%Oy\":\"%y\"};for(var rule in EXPANSION_RULES_1){pattern=pattern.replace(new RegExp(rule,\"g\"),EXPANSION_RULES_1[rule])}var WEEKDAYS=[\"Sunday\",\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\"];var MONTHS=[\"January\",\"February\",\"March\",\"April\",\"May\",\"June\",\"July\",\"August\",\"September\",\"October\",\"November\",\"December\"];function leadingSomething(value,digits,character){var str=typeof value==\"number\"?value.toString():value||\"\";while(str.length<digits){str=character[0]+str}return str}function leadingNulls(value,digits){return leadingSomething(value,digits,\"0\")}function compareByDay(date1,date2){function sgn(value){return value<0?-1:value>0?1:0}var compare;if((compare=sgn(date1.getFullYear()-date2.getFullYear()))===0){if((compare=sgn(date1.getMonth()-date2.getMonth()))===0){compare=sgn(date1.getDate()-date2.getDate())}}return compare}function getFirstWeekStartDate(janFourth){switch(janFourth.getDay()){case 0:return new Date(janFourth.getFullYear()-1,11,29);case 1:return janFourth;case 2:return new Date(janFourth.getFullYear(),0,3);case 3:return new Date(janFourth.getFullYear(),0,2);case 4:return new Date(janFourth.getFullYear(),0,1);case 5:return new Date(janFourth.getFullYear()-1,11,31);case 6:return new Date(janFourth.getFullYear()-1,11,30)}}function getWeekBasedYear(date){var thisDate=addDays(new Date(date.tm_year+1900,0,1),date.tm_yday);var janFourthThisYear=new Date(thisDate.getFullYear(),0,4);var janFourthNextYear=new Date(thisDate.getFullYear()+1,0,4);var firstWeekStartThisYear=getFirstWeekStartDate(janFourthThisYear);var firstWeekStartNextYear=getFirstWeekStartDate(janFourthNextYear);if(compareByDay(firstWeekStartThisYear,thisDate)<=0){if(compareByDay(firstWeekStartNextYear,thisDate)<=0){return thisDate.getFullYear()+1}return thisDate.getFullYear()}return thisDate.getFullYear()-1}var EXPANSION_RULES_2={\"%a\":function(date){return WEEKDAYS[date.tm_wday].substring(0,3)},\"%A\":function(date){return WEEKDAYS[date.tm_wday]},\"%b\":function(date){return MONTHS[date.tm_mon].substring(0,3)},\"%B\":function(date){return MONTHS[date.tm_mon]},\"%C\":function(date){var year=date.tm_year+1900;return leadingNulls(year/100|0,2)},\"%d\":function(date){return leadingNulls(date.tm_mday,2)},\"%e\":function(date){return leadingSomething(date.tm_mday,2,\" \")},\"%g\":function(date){return getWeekBasedYear(date).toString().substring(2)},\"%G\":function(date){return getWeekBasedYear(date)},\"%H\":function(date){return leadingNulls(date.tm_hour,2)},\"%I\":function(date){var twelveHour=date.tm_hour;if(twelveHour==0)twelveHour=12;else if(twelveHour>12)twelveHour-=12;return leadingNulls(twelveHour,2)},\"%j\":function(date){return leadingNulls(date.tm_mday+arraySum(isLeapYear(date.tm_year+1900)?MONTH_DAYS_LEAP:MONTH_DAYS_REGULAR,date.tm_mon-1),3)},\"%m\":function(date){return leadingNulls(date.tm_mon+1,2)},\"%M\":function(date){return leadingNulls(date.tm_min,2)},\"%n\":function(){return\"\\n\"},\"%p\":function(date){if(date.tm_hour>=0&&date.tm_hour<12){return\"AM\"}return\"PM\"},\"%S\":function(date){return leadingNulls(date.tm_sec,2)},\"%t\":function(){return\"\\t\"},\"%u\":function(date){return date.tm_wday||7},\"%U\":function(date){var days=date.tm_yday+7-date.tm_wday;return leadingNulls(Math.floor(days/7),2)},\"%V\":function(date){var val=Math.floor((date.tm_yday+7-(date.tm_wday+6)%7)/7);if((date.tm_wday+371-date.tm_yday-2)%7<=2){val++}if(!val){val=52;var dec31=(date.tm_wday+7-date.tm_yday-1)%7;if(dec31==4||dec31==5&&isLeapYear(date.tm_year%400-1)){val++}}else if(val==53){var jan1=(date.tm_wday+371-date.tm_yday)%7;if(jan1!=4&&(jan1!=3||!isLeapYear(date.tm_year)))val=1}return leadingNulls(val,2)},\"%w\":function(date){return date.tm_wday},\"%W\":function(date){var days=date.tm_yday+7-(date.tm_wday+6)%7;return leadingNulls(Math.floor(days/7),2)},\"%y\":function(date){return(date.tm_year+1900).toString().substring(2)},\"%Y\":function(date){return date.tm_year+1900},\"%z\":function(date){var off=date.tm_gmtoff;var ahead=off>=0;off=Math.abs(off)/60;off=off/60*100+off%60;return(ahead?\"+\":\"-\")+String(\"0000\"+off).slice(-4)},\"%Z\":function(date){return date.tm_zone},\"%%\":function(){return\"%\"}};pattern=pattern.replace(/%%/g,\"\\0\\0\");for(var rule in EXPANSION_RULES_2){if(pattern.includes(rule)){pattern=pattern.replace(new RegExp(rule,\"g\"),EXPANSION_RULES_2[rule](date))}}pattern=pattern.replace(/\\0\\0/g,\"%\");var bytes=intArrayFromString(pattern,false);if(bytes.length>maxsize){return 0}writeArrayToMemory(bytes,s);return bytes.length-1}var FSNode=function(parent,name,mode,rdev){if(!parent){parent=this}this.parent=parent;this.mount=parent.mount;this.mounted=null;this.id=FS.nextInode++;this.name=name;this.mode=mode;this.node_ops={};this.stream_ops={};this.rdev=rdev};var readMode=292|73;var writeMode=146;Object.defineProperties(FSNode.prototype,{read:{get:function(){return(this.mode&readMode)===readMode},set:function(val){val?this.mode|=readMode:this.mode&=~readMode}},write:{get:function(){return(this.mode&writeMode)===writeMode},set:function(val){val?this.mode|=writeMode:this.mode&=~writeMode}},isFolder:{get:function(){return FS.isDir(this.mode)}},isDevice:{get:function(){return FS.isChrdev(this.mode)}}});FS.FSNode=FSNode;FS.createPreloadedFile=FS_createPreloadedFile;FS.staticInit();var wasmImports={\"b\":___assert_fail,\"f\":___cxa_throw,\"ka\":___dlsym,\"R\":___syscall__newselect,\"L\":___syscall_accept4,\"K\":___syscall_bind,\"J\":___syscall_connect,\"la\":___syscall_faccessat,\"g\":___syscall_fcntl64,\"ha\":___syscall_fstat64,\"U\":___syscall_getdents64,\"I\":___syscall_getpeername,\"H\":___syscall_getsockname,\"G\":___syscall_getsockopt,\"y\":___syscall_ioctl,\"F\":___syscall_listen,\"ea\":___syscall_lstat64,\"$\":___syscall_mkdirat,\"fa\":___syscall_newfstatat,\"w\":___syscall_openat,\"V\":___syscall_poll,\"E\":___syscall_recvfrom,\"T\":___syscall_renameat,\"S\":___syscall_rmdir,\"D\":___syscall_sendto,\"v\":___syscall_socket,\"ga\":___syscall_stat64,\"O\":___syscall_unlinkat,\"ia\":__emscripten_get_now_is_monotonic,\"M\":__emscripten_throw_longjmp,\"Y\":__gmtime_js,\"Z\":__localtime_js,\"_\":__mktime_js,\"W\":__mmap_js,\"X\":__munmap_js,\"P\":__tzset_js,\"a\":_abort,\"t\":_dlopen,\"oa\":_emscripten_asm_const_int,\"l\":_emscripten_date_now,\"Q\":_emscripten_get_heap_max,\"p\":_emscripten_get_now,\"ja\":_emscripten_memcpy_big,\"N\":_emscripten_resize_heap,\"ca\":_environ_get,\"da\":_environ_sizes_get,\"o\":_exit,\"m\":_fd_close,\"ba\":_fd_fdstat_get,\"x\":_fd_read,\"aa\":_fd_seek,\"q\":_fd_write,\"k\":_getaddrinfo,\"i\":_getnameinfo,\"pa\":invoke_i,\"na\":invoke_ii,\"c\":invoke_iii,\"n\":invoke_iiii,\"s\":invoke_iiiii,\"z\":invoke_iiiiii,\"r\":invoke_iiiiiiiii,\"B\":invoke_iiiijj,\"qa\":invoke_iij,\"h\":invoke_vi,\"j\":invoke_vii,\"d\":invoke_viiii,\"ma\":invoke_viiiiii,\"A\":invoke_viiiiiiii,\"C\":is_timeout,\"u\":send_progress,\"e\":_strftime};var asm=createWasm();var ___wasm_call_ctors=function(){return(___wasm_call_ctors=Module[\"asm\"][\"sa\"]).apply(null,arguments)};var _malloc=Module[\"_malloc\"]=function(){return(_malloc=Module[\"_malloc\"]=Module[\"asm\"][\"ta\"]).apply(null,arguments)};var ___errno_location=function(){return(___errno_location=Module[\"asm\"][\"va\"]).apply(null,arguments)};var _ntohs=function(){return(_ntohs=Module[\"asm\"][\"wa\"]).apply(null,arguments)};var _htons=function(){return(_htons=Module[\"asm\"][\"xa\"]).apply(null,arguments)};var _ffmpeg=Module[\"_ffmpeg\"]=function(){return(_ffmpeg=Module[\"_ffmpeg\"]=Module[\"asm\"][\"ya\"]).apply(null,arguments)};var _htonl=function(){return(_htonl=Module[\"asm\"][\"za\"]).apply(null,arguments)};var _emscripten_builtin_memalign=function(){return(_emscripten_builtin_memalign=Module[\"asm\"][\"Aa\"]).apply(null,arguments)};var _setThrew=function(){return(_setThrew=Module[\"asm\"][\"Ba\"]).apply(null,arguments)};var stackSave=function(){return(stackSave=Module[\"asm\"][\"Ca\"]).apply(null,arguments)};var stackRestore=function(){return(stackRestore=Module[\"asm\"][\"Da\"]).apply(null,arguments)};var ___cxa_is_pointer_type=function(){return(___cxa_is_pointer_type=Module[\"asm\"][\"Ea\"]).apply(null,arguments)};var _ff_h264_cabac_tables=Module[\"_ff_h264_cabac_tables\"]=1537004;var ___start_em_js=Module[\"___start_em_js\"]=6059629;var ___stop_em_js=Module[\"___stop_em_js\"]=6059806;function invoke_iiiii(index,a1,a2,a3,a4){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0)}}function invoke_vii(index,a1,a2){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0)}}function invoke_iii(index,a1,a2){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0)}}function invoke_iiiijj(index,a1,a2,a3,a4,a5){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0)}}function invoke_iiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0)}}function invoke_vi(index,a1){var sp=stackSave();try{getWasmTableEntry(index)(a1)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0)}}function invoke_viiii(index,a1,a2,a3,a4){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0)}}function invoke_iiii(index,a1,a2,a3){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0)}}function invoke_iij(index,a1,a2){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0)}}function invoke_i(index){var sp=stackSave();try{return getWasmTableEntry(index)()}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0)}}function invoke_ii(index,a1){var sp=stackSave();try{return getWasmTableEntry(index)(a1)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0)}}function invoke_viiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0)}}function invoke_iiiiii(index,a1,a2,a3,a4,a5){var sp=stackSave();try{return getWasmTableEntry(index)(a1,a2,a3,a4,a5)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0)}}function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6){var sp=stackSave();try{getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6)}catch(e){stackRestore(sp);if(e!==e+0)throw e;_setThrew(1,0)}}Module[\"setValue\"]=setValue;Module[\"getValue\"]=getValue;Module[\"UTF8ToString\"]=UTF8ToString;Module[\"stringToUTF8\"]=stringToUTF8;Module[\"lengthBytesUTF8\"]=lengthBytesUTF8;Module[\"FS\"]=FS;var calledRun;dependenciesFulfilled=function runCaller(){if(!calledRun)run();if(!calledRun)dependenciesFulfilled=runCaller};function run(){if(runDependencies>0){return}preRun();if(runDependencies>0){return}function doRun(){if(calledRun)return;calledRun=true;Module[\"calledRun\"]=true;if(ABORT)return;initRuntime();readyPromiseResolve(Module);if(Module[\"onRuntimeInitialized\"])Module[\"onRuntimeInitialized\"]();postRun()}if(Module[\"setStatus\"]){Module[\"setStatus\"](\"Running...\");setTimeout(function(){setTimeout(function(){Module[\"setStatus\"](\"\")},1);doRun()},1)}else{doRun()}}if(Module[\"preInit\"]){if(typeof Module[\"preInit\"]==\"function\")Module[\"preInit\"]=[Module[\"preInit\"]];while(Module[\"preInit\"].length>0){Module[\"preInit\"].pop()()}}run();\n\n\n  return createFFmpegCore.ready\n}\n\n);\n})();\nexport default createFFmpegCore;";

  var FFMessageType;
  (function (FFMessageType) {
      FFMessageType["LOAD"] = "LOAD";
      FFMessageType["EXEC"] = "EXEC";
      FFMessageType["WRITE_FILE"] = "WRITE_FILE";
      FFMessageType["READ_FILE"] = "READ_FILE";
      FFMessageType["DELETE_FILE"] = "DELETE_FILE";
      FFMessageType["RENAME"] = "RENAME";
      FFMessageType["CREATE_DIR"] = "CREATE_DIR";
      FFMessageType["LIST_DIR"] = "LIST_DIR";
      FFMessageType["DELETE_DIR"] = "DELETE_DIR";
      FFMessageType["ERROR"] = "ERROR";
      FFMessageType["DOWNLOAD"] = "DOWNLOAD";
      FFMessageType["PROGRESS"] = "PROGRESS";
      FFMessageType["LOG"] = "LOG";
      FFMessageType["MOUNT"] = "MOUNT";
      FFMessageType["UNMOUNT"] = "UNMOUNT";
  })(FFMessageType || (FFMessageType = {}));

  /**
   * Generate an unique message ID.
   */
  const getMessageID = (() => {
      let messageID = 0;
      return () => messageID++;
  })();

  const ERROR_NOT_LOADED = new Error("ffmpeg is not loaded, call `await ffmpeg.load()` first");
  const ERROR_TERMINATED = new Error("called FFmpeg.terminate()");

  /**
   * Provides APIs to interact with ffmpeg web worker.
   *
   * @example
   * ```ts
   * const ffmpeg = new FFmpeg();
   * ```
   */
  class FFmpeg {
      #worker = null;
      /**
       * #resolves and #rejects tracks Promise resolves and rejects to
       * be called when we receive message from web worker.
       */
      #resolves = {};
      #rejects = {};
      #logEventCallbacks = [];
      #progressEventCallbacks = [];
      loaded = false;
      /**
       * register worker message event handlers.
       */
      #registerHandlers = () => {
          if (this.#worker) {
              this.#worker.onmessage = ({ data: { id, type, data }, }) => {
                  switch (type) {
                      case FFMessageType.LOAD:
                          this.loaded = true;
                          this.#resolves[id](data);
                          break;
                      case FFMessageType.MOUNT:
                      case FFMessageType.UNMOUNT:
                      case FFMessageType.EXEC:
                      case FFMessageType.WRITE_FILE:
                      case FFMessageType.READ_FILE:
                      case FFMessageType.DELETE_FILE:
                      case FFMessageType.RENAME:
                      case FFMessageType.CREATE_DIR:
                      case FFMessageType.LIST_DIR:
                      case FFMessageType.DELETE_DIR:
                          this.#resolves[id](data);
                          break;
                      case FFMessageType.LOG:
                          this.#logEventCallbacks.forEach((f) => f(data));
                          break;
                      case FFMessageType.PROGRESS:
                          this.#progressEventCallbacks.forEach((f) => f(data));
                          break;
                      case FFMessageType.ERROR:
                          this.#rejects[id](data);
                          break;
                  }
                  delete this.#resolves[id];
                  delete this.#rejects[id];
              };
          }
      };
      /**
       * Generic function to send messages to web worker.
       */
      #send = ({ type, data }, trans = [], signal) => {
          if (!this.#worker) {
              return Promise.reject(ERROR_NOT_LOADED);
          }
          return new Promise((resolve, reject) => {
              const id = getMessageID();
              this.#worker && this.#worker.postMessage({ id, type, data }, trans);
              this.#resolves[id] = resolve;
              this.#rejects[id] = reject;
              signal?.addEventListener("abort", () => {
                  reject(new DOMException(`Message # ${id} was aborted`, "AbortError"));
              }, { once: true });
          });
      };
      on(event, callback) {
          if (event === "log") {
              this.#logEventCallbacks.push(callback);
          }
          else if (event === "progress") {
              this.#progressEventCallbacks.push(callback);
          }
      }
      off(event, callback) {
          if (event === "log") {
              this.#logEventCallbacks = this.#logEventCallbacks.filter((f) => f !== callback);
          }
          else if (event === "progress") {
              this.#progressEventCallbacks = this.#progressEventCallbacks.filter((f) => f !== callback);
          }
      }
      /**
       * Loads ffmpeg-core inside web worker. It is required to call this method first
       * as it initializes WebAssembly and other essential variables.
       *
       * @category FFmpeg
       * @returns `true` if ffmpeg core is loaded for the first time.
       */
      load = ({ classWorkerURL, ...config } = {}, { signal } = {}) => {
          if (!this.#worker) {
              this.#worker = classWorkerURL ?
                  new Worker(new URL(classWorkerURL, (_documentCurrentScript && _documentCurrentScript.src || new URL('__entry.js', document.baseURI).href)), {
                      type: "module",
                  }) :
                  // We need to duplicated the code here to enable webpack
                  // to bundle worekr.js here.
                  new Worker(new URL(/* @vite-ignore */ "/assets/worker-CRu_gK8D-6gzAI2qN.js", (_documentCurrentScript && _documentCurrentScript.src || new URL('__entry.js', document.baseURI).href)), {
                      type: "module",
                  });
              this.#registerHandlers();
          }
          return this.#send({
              type: FFMessageType.LOAD,
              data: config,
          }, undefined, signal);
      };
      /**
       * Execute ffmpeg command.
       *
       * @remarks
       * To avoid common I/O issues, ["-nostdin", "-y"] are prepended to the args
       * by default.
       *
       * @example
       * ```ts
       * const ffmpeg = new FFmpeg();
       * await ffmpeg.load();
       * await ffmpeg.writeFile("video.avi", ...);
       * // ffmpeg -i video.avi video.mp4
       * await ffmpeg.exec(["-i", "video.avi", "video.mp4"]);
       * const data = ffmpeg.readFile("video.mp4");
       * ```
       *
       * @returns `0` if no error, `!= 0` if timeout (1) or error.
       * @category FFmpeg
       */
      exec = (
      /** ffmpeg command line args */
      args, 
      /**
       * milliseconds to wait before stopping the command execution.
       *
       * @defaultValue -1
       */
      timeout = -1, { signal } = {}) => this.#send({
          type: FFMessageType.EXEC,
          data: { args, timeout },
      }, undefined, signal);
      /**
       * Terminate all ongoing API calls and terminate web worker.
       * `FFmpeg.load()` must be called again before calling any other APIs.
       *
       * @category FFmpeg
       */
      terminate = () => {
          const ids = Object.keys(this.#rejects);
          // rejects all incomplete Promises.
          for (const id of ids) {
              this.#rejects[id](ERROR_TERMINATED);
              delete this.#rejects[id];
              delete this.#resolves[id];
          }
          if (this.#worker) {
              this.#worker.terminate();
              this.#worker = null;
              this.loaded = false;
          }
      };
      /**
       * Write data to ffmpeg.wasm.
       *
       * @example
       * ```ts
       * const ffmpeg = new FFmpeg();
       * await ffmpeg.load();
       * await ffmpeg.writeFile("video.avi", await fetchFile("../video.avi"));
       * await ffmpeg.writeFile("text.txt", "hello world");
       * ```
       *
       * @category File System
       */
      writeFile = (path, data, { signal } = {}) => {
          const trans = [];
          if (data instanceof Uint8Array) {
              trans.push(data.buffer);
          }
          return this.#send({
              type: FFMessageType.WRITE_FILE,
              data: { path, data },
          }, trans, signal);
      };
      mount = (fsType, options, mountPoint) => {
          const trans = [];
          return this.#send({
              type: FFMessageType.MOUNT,
              data: { fsType, options, mountPoint },
          }, trans);
      };
      unmount = (mountPoint) => {
          const trans = [];
          return this.#send({
              type: FFMessageType.UNMOUNT,
              data: { mountPoint },
          }, trans);
      };
      /**
       * Read data from ffmpeg.wasm.
       *
       * @example
       * ```ts
       * const ffmpeg = new FFmpeg();
       * await ffmpeg.load();
       * const data = await ffmpeg.readFile("video.mp4");
       * ```
       *
       * @category File System
       */
      readFile = (path, 
      /**
       * File content encoding, supports two encodings:
       * - utf8: read file as text file, return data in string type.
       * - binary: read file as binary file, return data in Uint8Array type.
       *
       * @defaultValue binary
       */
      encoding = "binary", { signal } = {}) => this.#send({
          type: FFMessageType.READ_FILE,
          data: { path, encoding },
      }, undefined, signal);
      /**
       * Delete a file.
       *
       * @category File System
       */
      deleteFile = (path, { signal } = {}) => this.#send({
          type: FFMessageType.DELETE_FILE,
          data: { path },
      }, undefined, signal);
      /**
       * Rename a file or directory.
       *
       * @category File System
       */
      rename = (oldPath, newPath, { signal } = {}) => this.#send({
          type: FFMessageType.RENAME,
          data: { oldPath, newPath },
      }, undefined, signal);
      /**
       * Create a directory.
       *
       * @category File System
       */
      createDir = (path, { signal } = {}) => this.#send({
          type: FFMessageType.CREATE_DIR,
          data: { path },
      }, undefined, signal);
      /**
       * List directory contents.
       *
       * @category File System
       */
      listDir = (path, { signal } = {}) => this.#send({
          type: FFMessageType.LIST_DIR,
          data: { path },
      }, undefined, signal);
      /**
       * Delete an empty directory.
       *
       * @category File System
       */
      deleteDir = (path, { signal } = {}) => this.#send({
          type: FFMessageType.DELETE_DIR,
          data: { path },
      }, undefined, signal);
  }

  const ERROR_RESPONSE_BODY_READER = new Error("failed to get response body reader");
  const ERROR_INCOMPLETED_DOWNLOAD = new Error("failed to complete download");

  const HeaderContentLength = "Content-Length";

  /**
   * Download content of a URL with progress.
   *
   * Progress only works when Content-Length is provided by the server.
   *
   */
  const downloadWithProgress = async (url, cb) => {
      const resp = await fetch(url);
      let buf;
      try {
          // Set total to -1 to indicate that there is not Content-Type Header.
          const total = parseInt(resp.headers.get(HeaderContentLength) || "-1");
          const reader = resp.body?.getReader();
          if (!reader)
              throw ERROR_RESPONSE_BODY_READER;
          const chunks = [];
          let received = 0;
          for (;;) {
              const { done, value } = await reader.read();
              const delta = value ? value.length : 0;
              if (done) {
                  if (total != -1 && total !== received)
                      throw ERROR_INCOMPLETED_DOWNLOAD;
                  cb && cb({ url, total, received, delta, done });
                  break;
              }
              chunks.push(value);
              received += delta;
              cb && cb({ url, total, received, delta, done });
          }
          const data = new Uint8Array(received);
          let position = 0;
          for (const chunk of chunks) {
              data.set(chunk, position);
              position += chunk.length;
          }
          buf = data.buffer;
      }
      catch (e) {
          console.log(`failed to send download progress event: `, e);
          // Fetch arrayBuffer directly when it is not possible to get progress.
          buf = await resp.arrayBuffer();
      }
      return buf;
  };
  /**
   * toBlobURL fetches data from an URL and return a blob URL.
   *
   * Example:
   *
   * ```ts
   * await toBlobURL("http://localhost:3000/ffmpeg.js", "text/javascript");
   * ```
   */
  const toBlobURL = async (url, mimeType, progress = false, cb) => {
      const buf = progress
          ? await downloadWithProgress(url, cb)
          : await (await fetch(url)).arrayBuffer();
      const blob = new Blob([buf], { type: mimeType });
      return URL.createObjectURL(blob);
  };

  class FFmpegConvertor {
    coreURL;
    wasmURL;
    classWorkerURL;
    ffmpeg;
    size = 0;
    /// 140MB, don't know why, but it's the limit, if execced, ffmpeg throw index out of bounds error
    maxSize = 14e7;
    taskCount = 0;
    reloadLock = false;
    async init() {
      const en = new TextEncoder();
      this.coreURL = URL.createObjectURL(new Blob([en.encode(core_raw)], { type: "text/javascript" }));
      this.classWorkerURL = URL.createObjectURL(new Blob([en.encode(class_worker_raw)], { type: "text/javascript" }));
      this.wasmURL = await toBlobURL("https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm/ffmpeg-core.wasm", "application/wasm");
      this.ffmpeg = new FFmpeg();
      await this.load();
      return this;
    }
    async load() {
      await this.ffmpeg.load(
        {
          coreURL: this.coreURL,
          wasmURL: this.wasmURL,
          classWorkerURL: this.classWorkerURL
        }
      );
    }
    async check() {
      if (!this.coreURL || !this.wasmURL || !this.classWorkerURL || !this.ffmpeg) {
        throw new Error("FFmpegConvertor not init");
      }
      if (this.size > this.maxSize) {
        const verLock = this.reloadLock;
        await this.waitForTaskZero();
        if (!this.reloadLock) {
          this.reloadLock = true;
          try {
            evLog("info", "FFmpegConvertor: size limit exceeded, terminate ffmpeg, verLock: ", verLock);
            this.ffmpeg.terminate();
            await this.load();
            this.size = 0;
            this.taskCount = 0;
          } finally {
            this.reloadLock = false;
          }
        } else {
          await this.waitForReloadLock();
        }
      }
    }
    async writeFiles(files, randomPrefix) {
      const ffmpeg = this.ffmpeg;
      await Promise.all(
        files.map(async (f) => {
          this.size += f.data.byteLength;
          await ffmpeg.writeFile(randomPrefix + f.name, f.data);
        })
      );
    }
    async readOutputFile(file) {
      const result = await this.ffmpeg.readFile(file);
      this.size += result.length;
      return result;
    }
    // TODO: find a way to reduce time cost; to mp4 30MB takes 50s; to gif 30MB takes 26s
    async convertTo(files, format, meta) {
      await this.check();
      this.taskCount++;
      try {
        const ffmpeg = this.ffmpeg;
        const randomPrefix = Math.random().toString(36).substring(7);
        await this.writeFiles(files, randomPrefix);
        let metaStr;
        if (meta) {
          metaStr = meta.map((m) => `file '${randomPrefix}${m.file}'
duration ${m.delay / 1e3}`).join("\n");
        } else {
          metaStr = files.map((f) => `file '${randomPrefix}${f.name}'
duration 0.04`).join("\n");
        }
        await ffmpeg.writeFile(randomPrefix + "meta.txt", metaStr);
        let resultFile;
        let mimeType;
        switch (format) {
          case "GIF":
            resultFile = randomPrefix + "output.gif";
            mimeType = "image/gif";
            await ffmpeg.exec(["-f", "concat", "-safe", "0", "-i", randomPrefix + "meta.txt", "-vf", "split[a][b];[a]palettegen=stats_mode=diff[p];[b][p]paletteuse=dither=bayer:bayer_scale=2", resultFile]);
            break;
          case "MP4":
            resultFile = randomPrefix + "output.mp4";
            mimeType = "video/mp4";
            await ffmpeg.exec(["-f", "concat", "-safe", "0", "-i", randomPrefix + "meta.txt", "-c:v", "h264", "-pix_fmt", "yuv420p", resultFile]);
            break;
        }
        const result = await this.readOutputFile(resultFile);
        const deletePromise = files.map((f) => ffmpeg.deleteFile(randomPrefix + f.name));
        if (meta) {
          deletePromise.push(ffmpeg.deleteFile(randomPrefix + "meta.txt"));
        }
        deletePromise.push(ffmpeg.deleteFile(resultFile));
        await Promise.all(deletePromise);
        return new Blob([result], { type: mimeType });
      } finally {
        this.taskCount--;
      }
    }
    async waitForTaskZero() {
      while (this.taskCount > 0) {
        await new Promise((r) => setTimeout(r, 100));
      }
      await new Promise((r) => setTimeout(r, Math.random() * 100 + 10));
    }
    async waitForReloadLock() {
      while (this.reloadLock) {
        await new Promise((r) => setTimeout(r, 100));
      }
      await new Promise((r) => setTimeout(r, Math.random() * 100 + 10));
    }
  }

  const PID_EXTRACT = /\/(\d+)_([a-z]+)\d*\.\w*$/;
  class PixivMatcher extends BaseMatcher {
    name() {
      return "Pixiv";
    }
    authorID;
    meta;
    pidList = [];
    pageCount = 0;
    works = {};
    ugoiraMetas = {};
    pageSize = {};
    convertor;
    first;
    constructor() {
      super();
      this.meta = new GalleryMeta(window.location.href, "UNTITLE");
    }
    async processData(data, contentType, url) {
      const meta = this.ugoiraMetas[url];
      if (!meta) return [data, contentType];
      const zipReader = new zip_js__namespace.ZipReader(new zip_js__namespace.Uint8ArrayReader(data));
      const start = performance.now();
      if (!this.convertor) this.convertor = await new FFmpegConvertor().init();
      const initConvertorEnd = performance.now();
      const promises = await zipReader.getEntries().then(
        (entries) => entries.map(
          (e) => e.getData?.(new zip_js__namespace.Uint8ArrayWriter()).then((data2) => ({ name: e.filename, data: data2 }))
        )
      );
      const files = await Promise.all(promises).then((entries) => entries.filter((f) => f && f.data.length > 0).map((f) => f));
      const unpackUgoira = performance.now();
      if (files.length !== meta.body.frames.length) {
        throw new Error("unpack ugoira file error: file count not equal to meta");
      }
      const blob = await this.convertor.convertTo(files, conf.pixivConvertTo, meta.body.frames);
      const convertEnd = performance.now();
      evLog("debug", `convert ugoira to ${conf.pixivConvertTo}
init convertor cost: ${initConvertorEnd - start}ms
unpack ugoira  cost: ${unpackUgoira - initConvertorEnd}ms
ffmpeg convert cost: ${convertEnd - unpackUgoira}ms
total cost: ${(convertEnd - start) / 1e3}s
size: ${blob.size / 1e3} KB, original size: ${data.byteLength / 1e3} KB
before contentType: ${contentType}, after contentType: ${blob.type}
`);
      return blob.arrayBuffer().then((buffer) => [new Uint8Array(buffer), blob.type]);
    }
    workURL() {
      return /pixiv.net\/(\w*\/)?(artworks|users)\/.*/;
    }
    galleryMeta() {
      this.meta.title = `pixiv_${this.authorID ?? this.first}_w${this.pidList.length}_p${this.pageCount}` || "UNTITLE";
      if (this.first) {
        const title = document.querySelector("meta[property='twitter:title']")?.getAttribute("content");
        if (title) {
          this.meta.title = `pixiv_${title}`;
        }
      }
      const tags = Object.values(this.works).map((w) => w.tags).flat();
      this.meta.tags = { "author": [this.authorID || "UNTITLE"], "all": [...new Set(tags)], "pids": this.pidList, "works": Object.values(this.works) };
      return this.meta;
    }
    async fetchOriginMeta(node) {
      const matches = node.href.match(PID_EXTRACT);
      if (!matches || matches.length < 2) {
        return { url: node.originSrc };
      }
      const pid = matches[1];
      const p = matches[2];
      if (this.works[pid]?.illustType === 2 || p === "ugoira") {
        const meta = await window.fetch(`https://www.pixiv.net/ajax/illust/${pid}/ugoira_meta?lang=en`).then((resp) => resp.json());
        this.ugoiraMetas[meta.body.src] = meta;
        return { url: meta.body.src };
      } else {
        return { url: node.originSrc };
      }
    }
    async fetchTagsByPids(pids) {
      try {
        const raw = await window.fetch(`https://www.pixiv.net/ajax/user/${this.authorID}/profile/illusts?ids[]=${pids.join("&ids[]=")}&work_category=illustManga&is_first_page=0&lang=en`).then((resp) => resp.json());
        const data = raw;
        if (!data.error) {
          const works = {};
          Object.entries(data.body.works).forEach(([k, w]) => {
            works[k] = {
              id: w.id,
              title: w.title,
              alt: w.alt,
              illustType: w.illustType,
              description: w.description,
              tags: w.tags,
              pageCount: w.pageCount
            };
          });
          this.works = { ...this.works, ...works };
        } else {
          evLog("error", "WARN: fetch tags by pids error: ", data.message);
        }
      } catch (error) {
        evLog("error", "ERROR: fetch tags by pids error: ", error);
      }
    }
    async parseImgNodes(source) {
      const list = [];
      if (source === "") return list;
      const pidList = JSON.parse(source);
      this.fetchTagsByPids(pidList);
      const pageListData = await batchFetch(pidList.map((p) => `https://www.pixiv.net/ajax/illust/${p}/pages?lang=en`), 5, "json");
      for (let i = 0; i < pidList.length; i++) {
        const pid = pidList[i];
        const data = pageListData[i];
        if (data.error) {
          throw new Error(`Fetch page list error: ${data.message}`);
        }
        this.pageCount += data.body.length;
        const digits = data.body.length.toString().length;
        let j = -1;
        for (const p of data.body) {
          this.pageSize[p.urls.original] = [p.width, p.height];
          let title = p.urls.original.split("/").pop() || `${pid}_p${j.toString().padStart(digits)}.jpg`;
          const matches = p.urls.original.match(PID_EXTRACT);
          if (matches && matches.length > 2 && matches[2] && matches[2] === "ugoira") {
            title = title.replace(/\.\w+$/, ".gif");
          }
          j++;
          const node = new ImageNode(p.urls.small, p.urls.original, title, void 0, p.urls.original, { w: p.width, h: p.height });
          list.push(node);
        }
      }
      return list;
    }
    async *fetchPagesSource() {
      this.first = window.location.href.match(/artworks\/(\d+)$/)?.[1];
      if (this.first) {
        yield JSON.stringify([this.first]);
        while (conf.pixivJustCurrPage) {
          yield "";
        }
      }
      const u = document.querySelector("a[data-gtm-value][href*='/users/']")?.href || document.querySelector("a.user-details-icon[href*='/users/']")?.href || window.location.href;
      const author = /users\/(\d+)/.exec(u)?.[1];
      if (!author) {
        throw new Error("Cannot find author id!");
      }
      this.authorID = author;
      const res = await window.fetch(`https://www.pixiv.net/ajax/user/${author}/profile/all`).then((resp) => resp.json());
      if (res.error) {
        throw new Error(`Fetch illust list error: ${res.message}`);
      }
      let pidList = [...Object.keys(res.body.illusts), ...Object.keys(res.body.manga)];
      this.pidList = [...pidList];
      pidList = pidList.sort((a, b) => parseInt(b) - parseInt(a));
      if (this.first) {
        const index = pidList.indexOf(this.first);
        if (index > -1) pidList.splice(index, 1);
      }
      while (pidList.length > 0) {
        const pids = pidList.splice(0, 20);
        yield JSON.stringify(pids);
      }
    }
  }

  class RokuHentaiMatcher extends BaseMatcher {
    name() {
      return "rokuhentai";
    }
    sprites = [];
    fetchedThumbnail = [];
    galleryId = "";
    imgCount = 0;
    workURL() {
      return /rokuhentai.com\/\w+$/;
    }
    galleryMeta(doc) {
      const title = doc.querySelector(".site-manga-info__title-text")?.textContent || "UNTITLE";
      const meta = new GalleryMeta(window.location.href, title);
      meta.originTitle = title;
      const tagTrList = doc.querySelectorAll("div.mdc-chip .site-tag-count");
      const tags = {};
      tagTrList.forEach((tr) => {
        const splits = tr.getAttribute("data-tag")?.trim().split(":");
        if (splits === void 0 || splits.length === 0) return;
        const cat = splits[0];
        if (tags[cat] === void 0) tags[cat] = [];
        tags[cat].push(splits[1].replaceAll('"', ""));
      });
      meta.tags = tags;
      return meta;
    }
    async fetchOriginMeta(node) {
      return { url: node.originSrc };
    }
    async parseImgNodes(source) {
      const range = source.split("-").map(Number);
      const list = [];
      const digits = this.imgCount.toString().length;
      for (let i = range[0]; i < range[1]; i++) {
        let thumbnail = `https://rokuhentai.com/_images/page-thumbnails/${this.galleryId}/${i}.jpg`;
        if (this.sprites[i]) {
          thumbnail = await this.fetchThumbnail(i);
        }
        const src = `https://rokuhentai.com/_images/pages/${this.galleryId}/${i}.jpg`;
        list.push(new ImageNode(thumbnail, src, i.toString().padStart(digits, "0") + ".jpg", void 0, src));
      }
      return list;
    }
    async *fetchPagesSource() {
      const doc = document;
      const imgCount = parseInt(doc.querySelector(".mdc-typography--caption")?.textContent || "");
      if (isNaN(imgCount)) {
        throw new Error("error: failed query image count!");
      }
      this.imgCount = imgCount;
      this.galleryId = window.location.href.split("/").pop();
      const images = Array.from(doc.querySelectorAll(".mdc-layout-grid__cell .site-page-card__media"));
      for (const img of images) {
        this.fetchedThumbnail.push(void 0);
        const x = parseInt(img.getAttribute("data-offset-x") || "");
        const y = parseInt(img.getAttribute("data-offset-y") || "");
        const width = parseInt(img.getAttribute("data-width") || "");
        const height = parseInt(img.getAttribute("data-height") || "");
        if (isNaN(x) || isNaN(y) || isNaN(width) || isNaN(height)) {
          this.sprites.push(void 0);
          continue;
        }
        const src = img.getAttribute("data-src");
        this.sprites.push({ src, pos: { x, y, width, height } });
      }
      for (let i = 0; i < this.imgCount; i += 20) {
        yield `${i}-${Math.min(i + 20, this.imgCount)}`;
      }
    }
    async fetchThumbnail(index) {
      if (this.fetchedThumbnail[index]) {
        return this.fetchedThumbnail[index];
      } else {
        const src = this.sprites[index].src;
        const positions = [];
        for (let i = index; i < this.imgCount; i++) {
          if (src === this.sprites[i]?.src) {
            positions.push(this.sprites[i].pos);
          } else {
            break;
          }
        }
        const urls = await splitImagesFromUrl(src, positions);
        for (let i = index; i < index + urls.length; i++) {
          this.fetchedThumbnail[i] = urls[i - index];
        }
        return this.fetchedThumbnail[index];
      }
    }
    async processData(data) {
      return [data, "image/jpeg"];
    }
  }

  const STEAM_THUMB_IMG_URL_REGEX = /background-image:\surl\(.*?(h.*\/).*?\)/;
  class SteamMatcher extends BaseMatcher {
    name() {
      return "Steam Screenshots";
    }
    workURL() {
      return /steamcommunity.com\/id\/[^/]+\/screenshots.*/;
    }
    async fetchOriginMeta(node) {
      let raw = "";
      try {
        raw = await window.fetch(node.href).then((resp) => resp.text());
        if (!raw) throw new Error("[text] is empty");
      } catch (error) {
        throw new Error(`Fetch source page error, expected [text]！ ${error}`);
      }
      const domParser = new DOMParser();
      const doc = domParser.parseFromString(raw, "text/html");
      const imgURL = doc.querySelector(".actualmediactn > a")?.getAttribute("href");
      if (!imgURL) {
        throw new Error("Cannot Query Steam original Image URL");
      }
      return { url: imgURL };
    }
    async parseImgNodes(source) {
      const list = [];
      const doc = await window.fetch(source).then((resp) => resp.text()).then((raw) => new DOMParser().parseFromString(raw, "text/html"));
      if (!doc) {
        throw new Error("warn: steam matcher failed to get document from source page!");
      }
      const nodes = doc.querySelectorAll(".profile_media_item");
      if (!nodes || nodes.length == 0) {
        throw new Error("warn: failed query image nodes!");
      }
      for (const node of Array.from(nodes)) {
        const src = STEAM_THUMB_IMG_URL_REGEX.exec(node.innerHTML)?.[1];
        if (!src) {
          throw new Error(`Cannot Match Steam Image URL, Content: ${node.innerHTML}`);
        }
        const newNode = new ImageNode(
          src,
          node.getAttribute("href"),
          node.getAttribute("data-publishedfileid") + ".jpg"
        );
        list.push(newNode);
      }
      return list;
    }
    async *fetchPagesSource() {
      let totalPages = -1;
      document.querySelectorAll(".pagingPageLink").forEach((ele) => {
        totalPages = Number(ele.textContent);
      });
      const url = new URL(window.location.href);
      url.searchParams.set("view", "grid");
      if (totalPages === -1) {
        const doc = await window.fetch(url.href).then((response) => response.text()).then((text) => new DOMParser().parseFromString(text, "text/html")).catch(() => null);
        if (!doc) {
          throw new Error("warn: steam matcher failed to get document from source page!");
        }
        doc.querySelectorAll(".pagingPageLink").forEach((ele) => totalPages = Number(ele.textContent));
      }
      if (totalPages > 0) {
        for (let p = 1; p <= totalPages; p++) {
          url.searchParams.set("p", p.toString());
          yield url.href;
        }
      } else {
        yield url.href;
      }
    }
    parseGalleryMeta() {
      const url = new URL(window.location.href);
      const appid = url.searchParams.get("appid");
      return new GalleryMeta(window.location.href, "steam-" + appid || "all");
    }
  }

  class TwitterMatcher extends BaseMatcher {
    name() {
      return "Twitter | X";
    }
    mediaPages = /* @__PURE__ */ new Map();
    uuid = uuid();
    postCount = 0;
    mediaCount = 0;
    userID;
    async fetchUserMedia(cursor) {
      if (!this.userID) {
        this.userID = getUserID();
      }
      if (!this.userID) throw new Error("Cannot obatained User ID");
      const variables = `{"userId":"${this.userID}","count":20,${cursor ? '"cursor":"' + cursor + '",' : ""}"includePromotedContent":false,"withClientEventToken":false,"withBirdwatchNotes":false,"withVoice":true,"withV2Timeline":true}`;
      const features = "&features=%7B%22rweb_tipjar_consumption_enabled%22%3Atrue%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22communities_web_enable_tweet_community_results_fetch%22%3Atrue%2C%22c9s_tweet_anatomy_moderator_badge_enabled%22%3Atrue%2C%22articles_preview_enabled%22%3Atrue%2C%22tweetypie_unmention_optimization_enabled%22%3Atrue%2C%22responsive_web_edit_tweet_api_enabled%22%3Atrue%2C%22graphql_is_translatable_rweb_tweet_is_translatable_enabled%22%3Atrue%2C%22view_counts_everywhere_api_enabled%22%3Atrue%2C%22longform_notetweets_consumption_enabled%22%3Atrue%2C%22responsive_web_twitter_article_tweet_consumption_enabled%22%3Atrue%2C%22tweet_awards_web_tipping_enabled%22%3Afalse%2C%22creator_subscriptions_quote_tweet_preview_enabled%22%3Afalse%2C%22freedom_of_speech_not_reach_fetch_enabled%22%3Atrue%2C%22standardized_nudges_misinfo%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_media_interstitial_enabled%22%3Atrue%2C%22rweb_video_timestamps_enabled%22%3Atrue%2C%22longform_notetweets_rich_text_read_enabled%22%3Atrue%2C%22longform_notetweets_inline_media_enabled%22%3Atrue%2C%22responsive_web_enhance_cards_enabled%22%3Afalse%7D&fieldToggles=%7B%22withArticlePlainText%22%3Afalse%7D";
      const url = `${window.location.origin}/i/api/graphql/aQQLnkexAl5z9ec_UgbEIA/UserMedia?variables=${encodeURIComponent(variables)}${features}`;
      const headers = new Headers();
      headers.set("authorization", "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA");
      headers.set("Pragma", "no-cache");
      headers.set("Cache-Control", "no-cache");
      headers.set("content-type", "application/json");
      headers.set("x-client-uuid", this.uuid);
      headers.set("x-twitter-auth-type", "OAuth2Session");
      headers.set("x-twitter-client-language", "en");
      headers.set("x-twitter-active-user", "yes");
      headers.set("x-client-transaction-id", transactionId());
      headers.set("Sec-Fetch-Dest", "empty");
      headers.set("Sec-Fetch-Mode", "cors");
      headers.set("Sec-Fetch-Site", "same-origin");
      const csrfToken = document.cookie.match(/ct0=(\w+)/)?.[1];
      if (!csrfToken) throw new Error("Not found csrfToken");
      headers.set("x-csrf-token", csrfToken);
      const res = await window.fetch(url, { headers });
      try {
        const json = await res.json();
        const instructions = json.data.user.result.timeline_v2.timeline.instructions;
        let items;
        const addToModule = instructions.find((ins) => ins.type === "TimelineAddToModule");
        const addEntries = instructions.find((ins) => ins.type === "TimelineAddEntries");
        if (!addEntries) {
          throw new Error("Not found TimelineAddEntries");
        }
        if (addToModule) {
          items = addToModule.moduleItems;
        }
        if (!items) {
          const timelineModule = addEntries.entries.find((entry) => entry.content.entryType === "TimelineTimelineModule")?.content;
          items = timelineModule?.items;
        }
        if (!items) {
          return [[], void 0];
        }
        const timelineCursor = addEntries.entries.find((entry) => entry.content.entryType === "TimelineTimelineCursor" && entry.entryId.startsWith("cursor-bottom"))?.content;
        return [items, timelineCursor?.value];
      } catch (error) {
        throw new Error(`fetchUserMedia error: ${error}`);
      }
    }
    async *fetchPagesSource() {
      let cursor;
      while (true) {
        const [mediaPage, nextCursor] = await this.fetchUserMedia(cursor);
        cursor = nextCursor || "last";
        if (!mediaPage || mediaPage.length === 0) break;
        this.mediaPages.set(cursor, mediaPage);
        yield cursor;
        if (!nextCursor) break;
      }
    }
    async parseImgNodes(cursor) {
      const items = this.mediaPages.get(cursor);
      if (!items) throw new Error("warn: cannot find items");
      const list = [];
      for (const item of items) {
        const mediaList = item?.item?.itemContent?.tweet_results?.result?.legacy?.entities?.media || item?.item?.itemContent?.tweet_results?.result?.tweet?.legacy?.entities?.media;
        if (mediaList === void 0) {
          evLog("error", "Not found mediaList: ", item);
          continue;
        }
        this.postCount++;
        if (conf.reverseMultipleImagesPost) {
          mediaList.reverse();
        }
        for (let i = 0; i < mediaList.length; i++) {
          const media = mediaList[i];
          if (media.type !== "video" && media.type !== "photo" && media.type !== "animated_gif") {
            evLog("error", `Not supported media type: ${media.type}`);
            continue;
          }
          const ext = media.media_url_https.split(".").pop();
          const baseSrc = media.media_url_https.replace(`.${ext}`, "");
          const src = `${baseSrc}?format=${ext}&name=${media.sizes.small ? "small" : "thumb"}`;
          let href = media.expanded_url.replace(/\/(photo|video)\/\d+/, "");
          href = `${href}/${media.type === "video" ? "video" : "photo"}/${i + 1}`;
          const largeSrc = `${baseSrc}?format=${ext}&name=${media.sizes.large ? "large" : media.sizes.medium ? "medium" : "small"}`;
          const title = `${media.id_str}-${baseSrc.split("/").pop()}.${ext}`;
          const wh = { w: media.sizes.small.w, h: media.sizes.small.h };
          const node = new ImageNode(src, href, title, void 0, largeSrc, wh);
          if (media.video_info) {
            let bitrate = 0;
            for (const variant of media.video_info.variants) {
              if (variant.bitrate !== void 0 && variant.bitrate >= bitrate) {
                bitrate = variant.bitrate;
                node.originSrc = variant.url;
                node.mimeType = variant.content_type;
                node.title = node.title.replace(/\.\w+$/, `.${variant.content_type.split("/")[1]}`);
              }
            }
          }
          list.push(node);
          this.mediaCount++;
        }
      }
      return list;
    }
    async fetchOriginMeta(node) {
      return { url: node.originSrc };
    }
    workURL() {
      return /(\/x|twitter).com\/(?!(home|explore|notifications|messages)$|i\/|search\?)\w+/;
    }
    galleryMeta(doc) {
      const userName = window.location.href.match(/(twitter|x).com\/(\w+)\/?/)?.[2];
      return new GalleryMeta(window.location.href, `twitter-${userName || doc.title}-${this.postCount}-${this.mediaCount}`);
    }
  }
  function getUserID() {
    const userName = window.location.href.match(/(twitter|x).com\/(\w+)\/?/)?.[2] || "lililjiliijili";
    const followBTNs = Array.from(document.querySelectorAll("button[data-testid][aria-label]"));
    if (followBTNs.length === 0) return void 0;
    const theBTN = followBTNs.find((btn) => (btn.getAttribute("aria-label") ?? "").toLowerCase().includes(`@${userName.toLowerCase()}`)) || followBTNs[0];
    return theBTN.getAttribute("data-testid").match(/(\d+)/)?.[1];
  }

  class WnacgMatcher extends BaseMatcher {
    name() {
      return "绅士漫画";
    }
    meta;
    baseURL;
    async *fetchPagesSource() {
      const id = this.extractIDFromHref(window.location.href);
      if (!id) {
        throw new Error("Cannot find gallery ID");
      }
      this.baseURL = `${window.location.origin}/photos-index-page-1-aid-${id}.html`;
      let doc = await window.fetch(this.baseURL).then((res) => res.text()).then((text) => new DOMParser().parseFromString(text, "text/html"));
      this.meta = this.pasrseGalleryMeta(doc);
      yield doc;
      while (true) {
        const next = doc.querySelector(".paginator > .next > a");
        if (!next) break;
        const url = next.href;
        doc = await window.fetch(url).then((res) => res.text()).then((text) => new DOMParser().parseFromString(text, "text/html"));
        yield doc;
      }
    }
    async parseImgNodes(page) {
      const doc = page;
      const result = [];
      const list = Array.from(doc.querySelectorAll(".grid > .gallary_wrap > .cc > li"));
      for (const li of list) {
        const anchor = li.querySelector(".pic_box > a");
        if (!anchor) continue;
        const img = anchor.querySelector("img");
        if (!img) continue;
        const title = li.querySelector(".title > .name")?.textContent || "unknown";
        result.push(new ImageNode(img.src, anchor.href, title));
      }
      return result;
    }
    async fetchOriginMeta(node) {
      const doc = await window.fetch(node.href).then((res) => res.text()).then((text) => new DOMParser().parseFromString(text, "text/html"));
      const img = doc.querySelector("#picarea");
      if (!img) throw new Error(`Cannot find #picarea from ${node.href}`);
      const url = img.src;
      const title = url.split("/").pop();
      return { url, title };
    }
    workURL() {
      return /(wnacg.com|wn\d{2}.cc)\/photos-index/;
    }
    galleryMeta(doc) {
      return this.meta || super.galleryMeta(doc);
    }
    // https://www.hm19.lol/photos-index-page-1-aid-253297.html
    extractIDFromHref(href) {
      const match = href.match(/-(\d+).html$/);
      if (!match) return void 0;
      return match[1];
    }
    pasrseGalleryMeta(doc) {
      const title = doc.querySelector("#bodywrap > h2")?.textContent || "unknown";
      const meta = new GalleryMeta(this.baseURL || window.location.href, title);
      const tags = Array.from(doc.querySelectorAll(".asTB .tagshow")).map((ele) => ele.textContent).filter(Boolean);
      const description = Array.from(doc.querySelector(".asTB > .asTBcell.uwconn > p")?.childNodes || []).map((e) => e.textContent).filter(Boolean);
      meta.tags = { "tags": tags, "description": description };
      return meta;
    }
  }

  function getMatchers() {
    return [
      new EHMatcher(),
      new NHMatcher(),
      new NHxxxMatcher(),
      new HitomiMather(),
      new PixivMatcher(),
      new SteamMatcher(),
      new RokuHentaiMatcher(),
      new Comic18Matcher(),
      new DanbooruDonmaiMatcher(),
      new Rule34Matcher(),
      new YandereMatcher(),
      new KonachanMatcher(),
      new GelBooruMatcher(),
      new IMHentaiMatcher(),
      new TwitterMatcher(),
      new WnacgMatcher(),
      new HentaiNexusMatcher(),
      new KoharuMatcher(),
      new MHGMatcher(),
      new MangaCopyMatcher(),
      new E621Matcher(),
      new ArcaMatcher(),
      new ArtStationMatcher(),
      new AkumaMatcher()
    ];
  }
  function adaptMatcher(url) {
    const matchers = getMatchers();
    const matcher = matchers.filter((matcher2) => conf.siteProfiles[matcher2.name()]?.enable ?? true).find((matcher2) => {
      let workURLs = matcher2.workURLs();
      if (conf.siteProfiles[matcher2.name()] && conf.siteProfiles[matcher2.name()].workURLs.length > 0) {
        workURLs = conf.siteProfiles[matcher2.name()].workURLs.map((regex) => new RegExp(regex));
      }
      return workURLs.find((regex) => regex.test(url));
    });
    if (!matcher) return [null, false, false];
    return [
      matcher,
      conf.siteProfiles[matcher.name()]?.enableAutoOpen ?? true,
      conf.siteProfiles[matcher.name()]?.enableFlowVision
    ];
  }

  function parseKey(event) {
    const keys = [];
    if (event.ctrlKey) keys.push("Ctrl");
    if (event.shiftKey) keys.push("Shift");
    if (event.altKey) keys.push("Alt");
    if (event.metaKey) keys.push("Meta");
    let key = event.key;
    if (key === " ") key = "Space";
    keys.push(key);
    return keys.join("+");
  }

  function queryRule(root, selector) {
    return Array.from(root.cssRules).find((rule) => rule.selectorText === selector);
  }

  function relocateElement(element, anchor, vw, vh) {
    const rect = anchor.getBoundingClientRect();
    let left = rect.left + rect.width / 2 - element.offsetWidth / 2;
    left = Math.min(left, vw - element.offsetWidth);
    left = Math.max(left, 0);
    element.style.left = left + "px";
    if (rect.top > vh / 2) {
      element.style.bottom = vh - rect.top + "px";
      element.style.top = "unset";
    } else {
      element.style.top = rect.bottom + "px";
      element.style.bottom = "unset";
    }
  }

  function createInputElement(root, anchor, callback) {
    const element = document.createElement("div");
    element.style.position = "fixed";
    element.style.lineHeight = "2em";
    element.id = "input-element";
    element.innerHTML = `<input type="text" style="width:20em;height:2em;"><button class="ehvp-custom-btn ehvp-custom-btn-plain">&nbsp√&nbsp</button>`;
    root.appendChild(element);
    const input = element.querySelector("input");
    const button = element.querySelector("button");
    button.addEventListener("click", () => {
      callback(input.value);
      element.remove();
    });
    relocateElement(element, anchor, root.offsetWidth, root.offsetHeight);
  }
  function createWorkURLs(workURLs, container, onRemove) {
    const urls = workURLs.map((regex) => `<div><span style="user-select: text;">${regex}</span><span class="ehvp-custom-btn ehvp-custom-btn-plain" data-value="${regex}">&nbspx&nbsp</span></div>`);
    container.innerHTML = urls.join("");
    Array.from(container.querySelectorAll("div > span + span")).forEach((element) => {
      element.addEventListener("click", () => {
        onRemove(element.getAttribute("data-value"));
        element.parentElement.remove();
      });
    });
  }
  function createSiteProfilePanel(root) {
    const matchers = getMatchers();
    const listItems = matchers.map((matcher) => {
      const name = matcher.name();
      const id = "id-" + b64EncodeUnicode(name).replaceAll(/[+=\/]/g, "-");
      const profile = conf.siteProfiles[name];
      return `<li data-index="${id}" class="ehvp-custom-panel-list-item">
             <div class="ehvp-custom-panel-list-item-title">
               <div style="font-size: 1.2em;font-weight: 800;">${name}</div>
               <div>
                 <label class="ehvp-custom-panel-checkbox"><span>${i18n.enable.get()}: </span><input id="${id}-enable-checkbox" ${profile?.enable ?? true ? "checked" : ""} type="checkbox"></label>
                 <label class="ehvp-custom-panel-checkbox"><span>${i18n.enableAutoOpen.get()}: </span><input id="${id}-enable-auto-open-checkbox" ${profile?.enableAutoOpen ?? true ? "checked" : ""} type="checkbox"></label>
                 <label class="ehvp-custom-panel-checkbox"><span>${i18n.enableFlowVision.get()}: </span><input id="${id}-enable-flow-vision-checkbox" ${profile?.enableFlowVision ?? false ? "checked" : ""} type="checkbox"></label>
                 <label class="ehvp-custom-panel-checkbox"><span>${i18n.addRegexp.get()}: </span><span id="${id}-add-workurl" class="ehvp-custom-btn ehvp-custom-btn-green">&nbsp+&nbsp</span></label>
               </div>
             </div>
             <div id="${id}-workurls"></div>
           </li>`;
    });
    const HTML_STR = `
<div class="ehvp-custom-panel">
  <div class="ehvp-custom-panel-title">
    <span>
      <span>${i18n.showSiteProfiles.get()}</span>
      <span style="font-size:0.5em;">
        <span class="p-tooltip"> ${i18n.enable.get()}? <span class="p-tooltiptext">${i18n.enableTooltips.get()}</span></span>
        <span class="p-tooltip"> ${i18n.enableAutoOpen.get()}? <span class="p-tooltiptext">${i18n.enableAutoOpenTooltips.get()}</span></span>
        <span class="p-tooltip"> ${i18n.enableFlowVision.get()}? <span class="p-tooltiptext">${i18n.enableFlowVisionTooltips.get()}</span></span>
      </span>
    </span>
    <span id="ehvp-custom-panel-close" class="ehvp-custom-panel-close">✖</span>
  </div>
  <div class="ehvp-custom-panel-container">
    <div class="ehvp-custom-panel-content">
      <ul class="ehvp-custom-panel-list">
      ${listItems.join("")}
      </ul>
    </div>
  </div>
</div>
`;
    const fullPanel = document.createElement("div");
    fullPanel.classList.add("ehvp-full-panel");
    fullPanel.innerHTML = HTML_STR;
    fullPanel.addEventListener("click", (event) => {
      if (event.target.classList.contains("ehvp-full-panel")) {
        fullPanel.remove();
      }
    });
    root.appendChild(fullPanel);
    fullPanel.querySelector(".ehvp-custom-panel-close").addEventListener("click", () => fullPanel.remove());
    const siteProfiles = conf.siteProfiles;
    matchers.forEach((matcher) => {
      const name = matcher.name();
      const id = "id-" + b64EncodeUnicode(name).replaceAll(/[+=\/]/g, "-");
      const defaultWorkURLs = matcher.workURLs().map((u) => u.source);
      const getProfile = () => {
        let profile = siteProfiles[name];
        if (!profile) {
          profile = { enable: true, enableAutoOpen: true, enableFlowVision: false, workURLs: [...defaultWorkURLs] };
          siteProfiles[name] = profile;
        }
        return profile;
      };
      const enableCheckbox = q(`#${id}-enable-checkbox`, fullPanel);
      enableCheckbox.addEventListener("click", () => {
        getProfile().enable = enableCheckbox.checked;
        saveConf(conf);
      });
      const enableAutoOpenCheckbox = q(`#${id}-enable-auto-open-checkbox`, fullPanel);
      enableAutoOpenCheckbox.addEventListener("click", () => {
        getProfile().enableAutoOpen = enableAutoOpenCheckbox.checked;
        saveConf(conf);
      });
      const enableFlowVisionCheckbox = q(`#${id}-enable-flow-vision-checkbox`, fullPanel);
      enableFlowVisionCheckbox.addEventListener("click", () => {
        getProfile().enableFlowVision = enableFlowVisionCheckbox.checked;
        saveConf(conf);
      });
      const addWorkURL = q(`#${id}-add-workurl`, fullPanel);
      const workURLContainer = q(`#${id}-workurls`, fullPanel);
      const removeWorkURL = (value, profile) => {
        const index = profile.workURLs.indexOf(value);
        let changed = false;
        if (index > -1) {
          profile.workURLs.splice(index, 1);
          changed = true;
        }
        if (profile.workURLs.length === 0) {
          profile.workURLs = [...defaultWorkURLs];
          changed = true;
          createWorkURLs(defaultWorkURLs, workURLContainer, (value2) => {
            removeWorkURL(value2, getProfile());
          });
        }
        if (changed) saveConf(conf);
      };
      addWorkURL.addEventListener("click", () => {
        const background = document.createElement("div");
        background.addEventListener("click", (event) => event.target === background && background.remove());
        background.setAttribute("style", "position:absolute;width:100%;height:100%;");
        fullPanel.appendChild(background);
        createInputElement(background, addWorkURL, (value) => {
          if (!value) return;
          try {
            new RegExp(value);
          } catch (_) {
            return;
          }
          background.remove();
          const profile = getProfile();
          profile.workURLs.push(value);
          saveConf(conf);
          createWorkURLs(getProfile().workURLs, workURLContainer, (value2) => {
            removeWorkURL(value2, getProfile());
          });
        });
      });
      let workURLs = defaultWorkURLs;
      if (siteProfiles[name]) {
        if (siteProfiles[name].workURLs.length === 0) {
          siteProfiles[name].workURLs.push(...defaultWorkURLs);
        } else {
          workURLs = siteProfiles[name].workURLs;
        }
      }
      createWorkURLs(workURLs, workURLContainer, (value) => {
        removeWorkURL(value, getProfile());
      });
    });
    fullPanel.querySelectorAll(".p-tooltip").forEach((element) => {
      const child = element.querySelector(".p-tooltiptext");
      if (!child) return;
      element.addEventListener("mouseenter", () => {
        child.style.display = "block";
        relocateElement(child, element, root.offsetWidth, root.offsetHeight);
      });
      element.addEventListener("mouseleave", () => child.style.display = "none");
    });
  }

  function createHelpPanel(root) {
    const HTML_STR = `
<div class="ehvp-custom-panel">
  <div class="ehvp-custom-panel-title">
    <span>${i18n.showHelp.get()}</span>
    <span id="ehvp-custom-panel-close" class="ehvp-custom-panel-close">✖</span>
  </div>
  <div class="ehvp-custom-panel-container ehvp-help-panel">
    <div class="ehvp-custom-panel-content">${i18n.help.get()}</div>
  </div>
</div>
`;
    const fullPanel = document.createElement("div");
    fullPanel.classList.add("ehvp-full-panel");
    fullPanel.innerHTML = HTML_STR;
    fullPanel.addEventListener("click", (event) => {
      if (event.target.classList.contains("ehvp-full-panel")) {
        fullPanel.remove();
      }
    });
    root.appendChild(fullPanel);
    fullPanel.querySelector(".ehvp-custom-panel-close").addEventListener("click", () => fullPanel.remove());
  }

  function createKeyboardCustomPanel(keyboardEvents, root) {
    function addKeyboardDescElement(button, category, id, key) {
      const str = `<span data-id="${id}" data-key="${key}" class="ehvp-custom-panel-item-value"><span>${key}</span><span class="ehvp-custom-btn ehvp-custom-btn-plain" style="padding:0;border:none;">&nbspx&nbsp</span></span>`;
      const tamplate = document.createElement("div");
      tamplate.innerHTML = str;
      const element = tamplate.firstElementChild;
      button.before(element);
      element.querySelector(".ehvp-custom-btn").addEventListener("click", (event) => {
        const keys = conf.keyboards[category][id];
        if (keys && keys.length > 0) {
          const index = keys.indexOf(key);
          if (index !== -1) keys.splice(index, 1);
          if (keys.length === 0) {
            delete conf.keyboards[category][id];
          }
          saveConf(conf);
        }
        event.target.parentElement.remove();
        const values = Array.from(button.parentElement.querySelectorAll(".ehvp-custom-panel-item-value"));
        if (values.length === 0) {
          const desc = keyboardEvents[category][id];
          desc.defaultKeys.forEach((key2) => addKeyboardDescElement(button, category, id, key2));
        }
      });
      tamplate.remove();
    }
    const HTML_STR = `
<div class="ehvp-custom-panel">
  <div class="ehvp-custom-panel-title">
    <span>${i18n.showKeyboard.get()}</span>
    <span id="ehvp-custom-panel-close" class="ehvp-custom-panel-close">✖</span>
  </div>
  <div class="ehvp-custom-panel-container">
    <div class="ehvp-custom-panel-content">
      ${Object.entries(keyboardEvents.inMain).map(([id]) => `
        <div class="ehvp-custom-panel-item">
         <div class="ehvp-custom-panel-item-title">
           <span>${i18n.keyboardCustom.inMain[id].get()}</span>
         </div>
         <div class="ehvp-custom-panel-item-values">
           <!-- wait element created from button event -->
           <button class="ehvp-add-keyboard-btn ehvp-custom-btn ehvp-custom-btn-green" style="margin-left: 0.2em;" data-cate="inMain" data-id="${id}">+</button>
         </div>
        </div>
      `).join("")}
    </div>
    <div class="ehvp-custom-panel-content">
      ${Object.entries(keyboardEvents.inFullViewGrid).map(([id]) => `
        <div class="ehvp-custom-panel-item">
         <div class="ehvp-custom-panel-item-title">
           <span>${i18n.keyboardCustom.inFullViewGrid[id].get()}</span>
         </div>
         <div class="ehvp-custom-panel-item-values">
           <!-- wait element created from button event -->
           <button class="ehvp-add-keyboard-btn ehvp-custom-btn ehvp-custom-btn-green" style="margin-left: 0.2em;" data-cate="inFullViewGrid" data-id="${id}">+</button>
         </div>
        </div>
      `).join("")}
    </div>
    <div class="ehvp-custom-panel-content">
      ${Object.entries(keyboardEvents.inBigImageMode).map(([id]) => `
        <div class="ehvp-custom-panel-item">
         <div class="ehvp-custom-panel-item-title">
           <span>${i18n.keyboardCustom.inBigImageMode[id].get()}</span>
         </div>
         <div class="ehvp-custom-panel-item-values">
           <!-- wait element created from button event -->
           <button class="ehvp-add-keyboard-btn ehvp-custom-btn ehvp-custom-btn-green" style="margin-left: 0.2em;display:inline-block;" data-cate="inBigImageMode" data-id="${id}">+</button>
         </div>
        </div>
      `).join("")}
    </div>
  </div>
</div>
`;
    const fullPanel = document.createElement("div");
    fullPanel.classList.add("ehvp-full-panel");
    fullPanel.innerHTML = HTML_STR;
    fullPanel.addEventListener("click", (event) => {
      if (event.target.classList.contains("ehvp-full-panel")) {
        fullPanel.remove();
      }
    });
    root.appendChild(fullPanel);
    fullPanel.querySelector(".ehvp-custom-panel-close").addEventListener("click", () => fullPanel.remove());
    fullPanel.querySelectorAll(".ehvp-add-keyboard-btn").forEach((button) => {
      const category = button.getAttribute("data-cate");
      const id = button.getAttribute("data-id");
      let keys = conf.keyboards[category][id];
      if (keys === void 0 || keys.length === 0) {
        keys = keyboardEvents[category][id].defaultKeys;
      }
      keys.forEach((key) => addKeyboardDescElement(button, category, id, key));
      const addKeyBoardDesc = (event) => {
        event.preventDefault();
        if (event.key === "Alt" || event.key === "Shift" || event.key === "Control") return;
        const key = parseKey(event);
        if (conf.keyboards[category][id] !== void 0) {
          conf.keyboards[category][id].push(key);
        } else {
          conf.keyboards[category][id] = keys.concat(key);
        }
        saveConf(conf);
        addKeyboardDescElement(button, category, id, key);
        button.textContent = "+";
      };
      button.addEventListener("click", () => {
        button.textContent = "Press Key";
        button.addEventListener("keydown", addKeyBoardDesc);
      });
      button.addEventListener("mouseleave", () => {
        button.textContent = "+";
        button.removeEventListener("keydown", addKeyBoardDesc);
      });
    });
  }

  function createControlBar() {
    const displayText = getDisplayText();
    return `
<div class="b-main" style="flex-direction:row;">
  <a class="b-main-item s-pickable" data-key="entry">${displayText.entry}</a>
  <a class="b-main-item s-pickable" data-key="collapse">${displayText.collapse}</a>
  <div class="b-main-item">
      <a class="" style="color:#ffc005;">1</a><span id="p-slash-1">/</span><span id="p-total">0</span>
  </div>
  <div class="b-main-item s-pickable" data-key="fin">
      <span>${displayText.fin}:</span><span id="p-finished">0</span>
  </div>
  <a class="b-main-item s-pickable" data-key="autoPagePlay" data-status="play">
     <span>${displayText.autoPagePlay}</span>
  </a>
  <a class="b-main-item s-pickable" data-key="autoPagePause" data-status="paused">
     <span>${displayText.autoPagePause}</span>
  </a>
  <a class="b-main-item s-pickable" data-key="config">${displayText.config}</a>
  <a class="b-main-item s-pickable" data-key="download">${displayText.download}</a>
  <a class="b-main-item s-pickable" data-key="chapters">${displayText.chapters}</a>
  <div class="b-main-item">
      <div id="read-mode-select"
      ><a class="b-main-option b-main-option-selected s-pickable" data-key="pagination" data-value="pagination">${displayText.pagination}</a
      ><a class="b-main-option s-pickable" data-key="continuous" data-value="continuous">${displayText.continuous}</a></div>
  </div>
  <div class="b-main-item">
      <span>
        <a class="b-main-btn" type="button">&lt;</a>
        <a class="b-main-btn" type="button">-</a>
        <span class="b-main-input">1</span>
        <a class="b-main-btn" type="button">+</a>
        <a class="b-main-btn" type="button">&gt;</a>
      </span>
  </div>
  <div class="b-main-item">
      <span>
        <span>${icons.zoomIcon}</span>
        <a class="b-main-btn" type="button">-</a>
        <span class="b-main-input" style="width: 3rem; cursor: move;">100</span>
        <a class="b-main-btn" type="button">+</a>
      </span>
  </div>
</div>`;
  }
  function createStyleCustomPanel(root) {
    const HTML_STR = `
<div class="ehvp-custom-panel" style="min-width:30vw;">
  <div class="ehvp-custom-panel-title">
    <span>${i18n.showStyleCustom.get()}</span>
    <span id="ehvp-custom-panel-close" class="ehvp-custom-panel-close">✖</span>
  </div>
  <div class="ehvp-custom-panel-container">
    <div class="ehvp-custom-panel-content">
      <div id="control-bar-example-container"></div>
      <div style="margin-top:1em;line-height:2em;">
        <input id="b-main-btn-custom-input" style="width: 30%;" type="text">
        <span id="b-main-btn-custom-confirm" class="ehvp-custom-btn ehvp-custom-btn-green">&nbspOk&nbsp</span>
        <span id="b-main-btn-custom-reset" class="ehvp-custom-btn ehvp-custom-btn-plain">&nbspReset&nbsp</span>
        <span id="b-main-btn-custom-preset1" class="ehvp-custom-btn ehvp-custom-btn-plain">&nbspPreset1&nbsp</span>
      </div>
      <div><span style="font-size:0.6em;color:#888;">${i18n.controlBarStyleTooltip.get()}</span></div>
    </div>
    <div class="ehvp-custom-panel-content" style="position:relative;">
      <div>
        <span class="ehvp-style-preset-btn ehvp-custom-btn ehvp-custom-btn-green" data-index="0">Preset 1</span>
        <span class="ehvp-style-preset-btn ehvp-custom-btn ehvp-custom-btn-green" data-index="1">Preset 2</span>
        <span class="ehvp-style-preset-btn ehvp-custom-btn ehvp-custom-btn-green" data-index="2">Preset 3</span>
        <span class="ehvp-style-preset-btn ehvp-custom-btn ehvp-custom-btn-green" data-index="3">Preset 4</span>
        <span class="ehvp-style-preset-btn ehvp-custom-btn ehvp-custom-btn-plain" data-index="99">Reset</span>
      </div>
      <textarea id="style-custom-input" style="width: 100%; height: 50vh;border:none;background-color:#00000090;color:#97ff97;text-align:left;vertical-align:top;font-size:1.2em;font-weight:600;">${conf.customStyle ?? ""}</textarea>
      <span style="position:absolute;bottom:2em;right:1em;" class="ehvp-custom-btn ehvp-custom-btn-green" id="style-custom-confirm">&nbspApply&nbsp</span>
    </div>
  </div>
</div>
`;
    const fullPanel = document.createElement("div");
    fullPanel.classList.add("ehvp-full-panel");
    fullPanel.innerHTML = HTML_STR;
    fullPanel.addEventListener("click", (event) => {
      if (event.target.classList.contains("ehvp-full-panel")) {
        fullPanel.remove();
      }
    });
    root.appendChild(fullPanel);
    fullPanel.querySelector(".ehvp-custom-panel-close").addEventListener("click", () => fullPanel.remove());
    const controlBarContainer = fullPanel.querySelector("#control-bar-example-container");
    let pickedKey = void 0;
    controlBarContainer.innerHTML = createControlBar();
    const initPickable = () => {
      Array.from(fullPanel.querySelectorAll(".s-pickable[data-key]")).forEach((element) => {
        element.addEventListener("click", () => {
          pickedKey = element.getAttribute("data-key") || void 0;
          btnCustomInput.value = "";
          if (pickedKey) btnCustomInput.focus();
        });
      });
    };
    initPickable();
    const btnCustomInput = fullPanel.querySelector("#b-main-btn-custom-input");
    const btnCustomConfirm = fullPanel.querySelector("#b-main-btn-custom-confirm");
    const btnCustomReset = fullPanel.querySelector("#b-main-btn-custom-reset");
    const btnCustomPreset1 = fullPanel.querySelector("#b-main-btn-custom-preset1");
    const confirm = () => {
      const value = btnCustomInput.value;
      btnCustomInput.value = "";
      if (!value || !pickedKey) return;
      conf.displayText[pickedKey] = value;
      saveConf(conf);
      controlBarContainer.innerHTML = createControlBar();
      initPickable();
    };
    btnCustomConfirm.addEventListener("click", confirm);
    btnCustomInput.addEventListener("keypress", (ev) => ev.key === "Enter" && confirm());
    btnCustomReset.addEventListener("click", () => {
      btnCustomInput.value = "";
      conf.displayText = {};
      saveConf(conf);
      controlBarContainer.innerHTML = createControlBar();
      initPickable();
    });
    btnCustomPreset1.addEventListener("click", () => {
      conf.displayText = presetDisplayText();
      saveConf(conf);
      controlBarContainer.innerHTML = createControlBar();
      initPickable();
    });
    const styleCustomInput = fullPanel.querySelector("#style-custom-input");
    const styleCustomConfirm = fullPanel.querySelector("#style-custom-confirm");
    styleCustomInput.addEventListener("keydown", (ev) => {
      if (ev.key === "Tab") {
        ev.preventDefault();
        const cursor = styleCustomInput.selectionStart;
        const left = styleCustomInput.value.slice(0, cursor);
        const right = styleCustomInput.value.slice(cursor);
        styleCustomInput.value = left + "  " + right;
        styleCustomInput.selectionStart = cursor + 2;
        styleCustomInput.selectionEnd = cursor + 2;
      }
    });
    const applyStyleCustom = (css) => {
      root.querySelector("#ehvp-style-custom")?.remove();
      const styleElement = document.createElement("style");
      styleElement.id = "ehvp-style-custom";
      conf.customStyle = css;
      styleElement.innerHTML = css;
      root.appendChild(styleElement);
      saveConf(conf);
    };
    styleCustomConfirm.addEventListener("click", () => applyStyleCustom(styleCustomInput.value));
    fullPanel.querySelectorAll(".ehvp-style-preset-btn").forEach((element) => {
      element.addEventListener("click", () => {
        const index = parseInt(element.getAttribute("data-index") ?? "0");
        const css = stylePreset(index);
        styleCustomInput.value = css;
        applyStyleCustom(css);
      });
    });
  }
  function stylePreset(index) {
    const list = [
      `.ehvp-root {
  --ehvp-background-color: #29313dd1;
  --ehvp-fvg-background: #29313e;
  --ehvp-border: 1px solid #ffcd4d;
  --ehvp-font-color: #ffccae;
  --ehvp-img-fetched: #fff67a;
  --ehvp-img-failed: #f00;
  --ehvp-img-init: #ffffff;
  --ehvp-img-box-shadow: -3px 4px 4px 0px #000000;
  --ehvp-panel-border: 2px solid #000;
  --ehvp-panel-box-shadow: -2px -2px 3px #f3ff7e;
  font-size: 16px;
}
/* hide tooltips */
.p-tooltip {
  display: none;
}`,
      `.ehvp-root {
  --ehvp-background-color: #ebebeba0;
  --ehvp-fvg-background: #cccccc88;
  --ehvp-border: 1px solid #ff2ec9;
  --ehvp-font-color: #ff2ec9;
  --ehvp-img-fetched: #fba4fa;
  --ehvp-img-failed: #f00;
  --ehvp-img-init: #586b6c;
  --ehvp-img-box-shadow: -3px 4px 4px 0px #3d243d;
  --ehvp-panel-border: 2px solid #000;
  --ehvp-panel-box-shadow: -3px -3px 3px #3d243d;
  font-size: 16px;
}
/* hide tooltips */
.p-tooltip {
  display: none;
}`,
      `.ehvp-root {
  --ehvp-background-color: #29313e;
  --ehvp-fvg-background: #29313e;
  --ehvp-border: 1px solid #00000000;
  --ehvp-font-color: #ff5ec3;
  --ehvp-img-fetched: #fba4fa;
  --ehvp-img-failed: #f00;
  --ehvp-img-init: #586b6c;
  --ehvp-img-box-shadow: -3px 4px 4px 0px #ffffff00;
  --ehvp-panel-border: 2px solid #000;
  --ehvp-panel-box-shadow: -3px -3px 3px #ffffff00;
  font-size: 16px;
}
/* hide tooltips */
.p-tooltip {
  display: none;
}`,
      `.ehvp-root {
  --ehvp-background-color: #333366;
  --ehvp-border: 1px solid #333366;
  --ehvp-font-color: #eeeeee;
  --ehvp-img-fetched: #ffffff;
  --ehvp-img-failed: #f00;
  --ehvp-img-init: #29313e;
  --ehvp-img-box-shadow: none;
  --ehvp-panel-border: 2px solid #000;
  --ehvp-panel-box-shadow: -3px -3px 5px #ecb3ec;
  font-size: 16px;
  /* --ehvp-fvg-background: url('some image url here'); */
}
/* hide tooltips */
.p-tooltip {
  display: none;
}`
    ];
    return list[index] ?? "";
  }

  class KeyboardDesc {
    defaultKeys;
    cb;
    noPreventDefault = false;
    constructor(defaultKeys, cb, noPreventDefault) {
      this.defaultKeys = defaultKeys;
      this.cb = cb;
      this.noPreventDefault = noPreventDefault || false;
    }
  }
  function initEvents(HTML, BIFM, IFQ, IL, PH) {
    function modNumberConfigEvent(key, data) {
      const range = {
        colCount: [1, 12],
        threads: [1, 10],
        downloadThreads: [1, 10],
        timeout: [8, 40],
        autoPageSpeed: [1, 100],
        preventScrollPageTime: [-1, 9e4],
        paginationIMGCount: [1, 5],
        scrollingSpeed: [1, 100]
      };
      const mod = key === "preventScrollPageTime" ? 10 : 1;
      if (data === "add") {
        if (conf[key] < range[key][1]) {
          conf[key] += mod;
        }
      } else if (data === "minus") {
        if (conf[key] > range[key][0]) {
          conf[key] -= mod;
        }
      }
      const inputElement = q(`#${key}Input`, HTML.config.panel);
      if (inputElement) {
        inputElement.value = conf[key].toString();
      }
      if (key === "colCount") {
        const rule = queryRule(HTML.styleSheet, ".fvg-grid");
        if (rule) rule.style.gridTemplateColumns = `repeat(${conf[key]}, 1fr)`;
      }
      if (key === "paginationIMGCount") {
        const rule = queryRule(HTML.styleSheet, ".bifm-img");
        if (rule) rule.style.minWidth = conf[key] > 1 ? "" : "100vw";
        q("#paginationInput", HTML.paginationAdjustBar).textContent = conf.paginationIMGCount.toString();
        BIFM.setNow(IFQ[IFQ.currIndex], "next");
      }
      saveConf(conf);
    }
    function modBooleanConfigEvent(key) {
      const inputElement = q(`#${key}Checkbox`, HTML.config.panel);
      conf[key] = inputElement?.checked || false;
      saveConf(conf);
      if (key === "autoLoad") {
        IL.autoLoad = conf.autoLoad;
        IL.abort(0, conf.restartIdleLoader / 3);
      }
      if (key === "reversePages") {
        const rule = queryRule(HTML.styleSheet, ".bifm-flex");
        if (rule) {
          rule.style.flexDirection = conf.reversePages ? "row-reverse" : "row";
        }
      }
      if (key === "magnifier") {
        BIFM.elements.curr.forEach((ele) => ele.draggable = !(conf.magnifier && conf.readMode === "pagination"));
      }
    }
    function changeReadModeEvent(value) {
      if (value) {
        conf.readMode = value;
        saveConf(conf);
      }
      conf.autoPageSpeed = conf.readMode === "pagination" ? 5 : 1;
      q("#autoPageSpeedInput", HTML.config.panel).value = conf.autoPageSpeed.toString();
      BIFM.resetScaleBigImages(true);
      if (conf.readMode === "pagination") {
        BIFM.frame.classList.add("bifm-flex");
        if (BIFM.visible) {
          const queue = BIFM.getChapter(BIFM.chapterIndex).queue;
          const index = parseInt(BIFM.elements.curr[0]?.getAttribute("d-index") || "0");
          BIFM.initElements(queue[index]);
        }
      } else {
        BIFM.frame.classList.remove("bifm-flex");
      }
      Array.from(HTML.readModeSelect.querySelectorAll(".b-main-option")).forEach((element) => {
        if (element.getAttribute("data-value") === conf.readMode) {
          element.classList.add("b-main-option-selected");
        } else {
          element.classList.remove("b-main-option-selected");
        }
      });
      if (conf.readMode === "pagination") {
        HTML.root.querySelectorAll(".img-land").forEach((element) => element.style.display = "");
      } else {
        HTML.root.querySelectorAll(".img-land").forEach((element) => element.style.display = "none");
      }
    }
    function modSelectConfigEvent(key) {
      const inputElement = q(`#${key}Select`, HTML.config.panel);
      const value = inputElement?.value;
      if (value) {
        conf[key] = value;
        saveConf(conf);
      }
      if (key === "readMode") {
        changeReadModeEvent();
      }
      if (key === "minifyPageHelper") {
        switch (conf.minifyPageHelper) {
          case "always":
            PH.minify("bigImageFrame");
            break;
          case "inBigMode":
          case "never":
            PH.minify(BIFM.visible ? "bigImageFrame" : "fullViewGrid");
            break;
        }
      }
    }
    const cancelIDContext = {};
    function collapsePanelEvent(target, id) {
      if (id) {
        abortMouseleavePanelEvent(id);
      }
      const timeoutId = window.setTimeout(() => target.classList.add("p-collapse"), 100);
      if (id) {
        cancelIDContext[id] = timeoutId;
      }
    }
    function abortMouseleavePanelEvent(id) {
      (id ? [id] : [...Object.keys(cancelIDContext)]).forEach((k) => {
        window.clearTimeout(cancelIDContext[k]);
        delete cancelIDContext[k];
      });
    }
    function togglePanelEvent(idPrefix, collapse, target) {
      const id = `${idPrefix}-panel`;
      const element = q("#" + id, HTML.pageHelper);
      if (!element) return;
      if (collapse === void 0) {
        togglePanelEvent(idPrefix, !element.classList.contains("p-collapse"), target);
        return;
      }
      if (collapse) {
        collapsePanelEvent(element, id);
      } else {
        Array.from(HTML.root.querySelectorAll(".p-panel")).filter((ele) => ele !== element).forEach((ele) => collapsePanelEvent(ele, ele.id));
        element.classList.remove("p-collapse");
        if (target) {
          relocateElement(element, target, HTML.root.clientWidth, HTML.root.clientHeight);
        }
      }
    }
    const bodyOverflow = document.body.style.overflow;
    function showFullViewGrid() {
      HTML.root.classList.remove("ehvp-root-collapse");
      if (BIFM.visible) {
        BIFM.frame.focus();
        PH.minify("bigImageFrame");
      } else {
        HTML.fullViewGrid.focus();
        PH.minify("fullViewGrid");
      }
      document.body.style.overflow = "hidden";
    }
    function hiddenFullViewGrid() {
      PH.minify("exit");
      HTML.entryBTN.setAttribute("data-stage", "exit");
      HTML.root.classList.add("ehvp-root-collapse");
      if (BIFM.visible) {
        BIFM.frame.blur();
      } else {
        HTML.fullViewGrid.blur();
      }
      document.body.style.overflow = bodyOverflow;
    }
    function shouldStep(oriented, shouldPrevent) {
      if (BIFM.isReachedBoundary(oriented)) {
        if (shouldPrevent && BIFM.tryPreventStep()) return false;
        return true;
      }
      return false;
    }
    const scrollEventDebouncer = new Debouncer();
    function initKeyboardEvent() {
      const inBigImageMode = {
        "exit-big-image-mode": new KeyboardDesc(
          ["Escape", "Enter"],
          () => BIFM.hidden()
        ),
        "step-image-prev": new KeyboardDesc(
          ["ArrowLeft"],
          () => BIFM.stepNext(conf.reversePages ? "next" : "prev")
        ),
        "step-image-next": new KeyboardDesc(
          ["ArrowRight"],
          () => BIFM.stepNext(conf.reversePages ? "prev" : "next")
        ),
        "step-to-first-image": new KeyboardDesc(
          ["Home"],
          () => BIFM.stepNext("next", 0, -1)
        ),
        "step-to-last-image": new KeyboardDesc(
          ["End"],
          () => BIFM.stepNext("prev", 0, -1)
        ),
        "scale-image-increase": new KeyboardDesc(
          ["="],
          () => BIFM.scaleBigImages(1, 5)
        ),
        "scale-image-decrease": new KeyboardDesc(
          ["-"],
          () => BIFM.scaleBigImages(-1, 5)
        ),
        "scroll-image-up": new KeyboardDesc(
          ["PageUp", "ArrowUp", "Shift+Space"],
          (event) => {
            const key = parseKey(event);
            const customKey = !["PageUp", "ArrowUp", "Shift+Space"].includes(key);
            if (customKey) {
              BIFM.scroll(BIFM.frame.offsetHeight / 8 * -1);
            }
            const shouldPrevent = !["PageUp", "Shift+Space"].includes(key);
            if (shouldPrevent) {
              if (!customKey) {
                scrollEventDebouncer.addEvent("SCROLL-IMAGE-UP", () => BIFM.frame.dispatchEvent(new CustomEvent("smoothlyscrollend")), 100);
              }
              BIFM.frame.addEventListener("smoothlyscrollend", () => shouldStep("prev", true), { once: true });
            }
            if (shouldStep("prev", shouldPrevent)) {
              event.preventDefault();
              BIFM.scrollStop();
              BIFM.onWheel(new WheelEvent("wheel", { deltaY: -1 }), false);
            }
          },
          true
        ),
        "scroll-image-down": new KeyboardDesc(
          ["PageDown", "ArrowDown", "Space"],
          (event) => {
            const key = parseKey(event);
            const customKey = !["PageDown", "ArrowDown", "Space"].includes(key);
            if (customKey) {
              BIFM.scroll(BIFM.frame.offsetHeight / 8);
            }
            const shouldPrevent = !["PageDown", "Space"].includes(key);
            if (shouldPrevent) {
              if (!customKey) {
                scrollEventDebouncer.addEvent("SCROLL-IMAGE-DOWN", () => BIFM.frame.dispatchEvent(new CustomEvent("smoothlyscrollend")), 100);
              }
              BIFM.frame.addEventListener("smoothlyscrollend", () => shouldStep("next", true), { once: true });
            }
            if (shouldStep("next", shouldPrevent)) {
              event.preventDefault();
              BIFM.scrollStop();
              BIFM.onWheel(new WheelEvent("wheel", { deltaY: 1 }), false);
            }
          },
          true
        ),
        "toggle-auto-play": new KeyboardDesc(
          ["p"],
          () => EBUS.emit("toggle-auto-play")
        )
      };
      const inFullViewGrid = {
        "open-big-image-mode": new KeyboardDesc(
          ["Enter"],
          () => {
            let start = IFQ.currIndex;
            if (numberRecord && numberRecord.length > 0) {
              start = Number(numberRecord.join("")) - 1;
              numberRecord = null;
              if (isNaN(start)) return;
              start = Math.max(0, Math.min(start, IFQ.length - 1));
            }
            IFQ[start].node.root?.querySelector("a")?.dispatchEvent(new MouseEvent("click", { bubbles: false, cancelable: true }));
          }
        ),
        "pause-auto-load-temporarily": new KeyboardDesc(
          ["Ctrl+p"],
          () => {
            IL.autoLoad = !IL.autoLoad;
            if (IL.autoLoad) {
              IL.abort(IFQ.currIndex, conf.restartIdleLoader / 3);
              EBUS.emit("notify-message", "info", "Auto load Restarted", 3 * 1e3);
            } else {
              EBUS.emit("notify-message", "info", "Auto load Pause", 3 * 1e3);
            }
          }
        ),
        "exit-full-view-grid": new KeyboardDesc(
          ["Escape"],
          () => EBUS.emit("toggle-main-view", false)
        ),
        "columns-increase": new KeyboardDesc(
          ["="],
          () => modNumberConfigEvent("colCount", "add")
        ),
        "columns-decrease": new KeyboardDesc(
          ["-"],
          () => modNumberConfigEvent("colCount", "minus")
        ),
        // "back-chapters-selection": new KeyboardDesc(
        //   ["b"],
        //   () => EBUS.emit("back-chapters-selection")
        // ),
        "toggle-auto-play": new KeyboardDesc(
          ["p"],
          () => EBUS.emit("toggle-auto-play")
        ),
        "retry-fetch-next-page": new KeyboardDesc(
          ["Shift+n"],
          () => EBUS.emit("pf-try-extend")
        )
      };
      const inMain = {
        "open-full-view-grid": new KeyboardDesc(["Enter"], () => {
          const activeElement = document.activeElement;
          if (activeElement instanceof HTMLInputElement || activeElement instanceof HTMLSelectElement) return;
          EBUS.emit("toggle-main-view", true);
        }, true),
        "start-download": new KeyboardDesc(["Ctrl+Alt+d"], () => {
          EBUS.emit("start-download", () => PH.minify("exit", false));
        }, true)
      };
      return { inBigImageMode, inFullViewGrid, inMain };
    }
    const keyboardEvents = initKeyboardEvent();
    let numberRecord = null;
    function bigImageFrameKeyBoardEvent(event) {
      if (HTML.bigImageFrame.classList.contains("big-img-frame-collapse")) return;
      const key = parseKey(event);
      const triggered = Object.entries(keyboardEvents.inBigImageMode).some(([id, desc]) => {
        const override = conf.keyboards.inBigImageMode[id];
        if (override !== void 0 && override.length > 0 ? override.includes(key) : desc.defaultKeys.includes(key)) {
          desc.cb(event);
          return !desc.noPreventDefault;
        }
        return false;
      });
      if (triggered) {
        event.preventDefault();
      }
    }
    function fullViewGridKeyBoardEvent(event) {
      if (HTML.root.classList.contains("ehvp-root-collapse")) return;
      const key = parseKey(event);
      const triggered = Object.entries(keyboardEvents.inFullViewGrid).some(([id, desc]) => {
        const override = conf.keyboards.inFullViewGrid[id];
        if (override !== void 0 && override.length > 0 ? override.includes(key) : desc.defaultKeys.includes(key)) {
          desc.cb(event);
          return !desc.noPreventDefault;
        }
        return false;
      });
      if (triggered) {
        event.preventDefault();
      } else if (event.key.length === 1 && event.key >= "0" && event.key <= "9") {
        numberRecord = numberRecord ? [...numberRecord, Number(event.key)] : [Number(event.key)];
        event.preventDefault();
      }
    }
    function keyboardEvent(event) {
      if (!HTML.root.classList.contains("ehvp-root-collapse")) return;
      if (!HTML.bigImageFrame.classList.contains("big-img-frame-collapse")) return;
      const key = parseKey(event);
      const triggered = Object.entries(keyboardEvents.inMain).some(([id, desc]) => {
        const override = conf.keyboards.inMain[id];
        if (override !== void 0 ? override.includes(key) : desc.defaultKeys.includes(key)) {
          desc.cb(event);
          return !desc.noPreventDefault;
        }
        return false;
      });
      if (triggered) {
        event.preventDefault();
      }
    }
    function showGuideEvent() {
      createHelpPanel(HTML.root);
    }
    function showKeyboardCustomEvent() {
      createKeyboardCustomPanel(keyboardEvents, HTML.root);
    }
    function showSiteProfilesEvent() {
      createSiteProfilePanel(HTML.root);
    }
    function showStyleCustomEvent() {
      createStyleCustomPanel(HTML.root);
    }
    return {
      modNumberConfigEvent,
      modBooleanConfigEvent,
      modSelectConfigEvent,
      togglePanelEvent,
      showFullViewGrid,
      hiddenFullViewGrid,
      fullViewGridKeyBoardEvent,
      bigImageFrameKeyBoardEvent,
      keyboardEvent,
      showGuideEvent,
      collapsePanelEvent,
      abortMouseleavePanelEvent,
      showKeyboardCustomEvent,
      showSiteProfilesEvent,
      showStyleCustomEvent,
      changeReadModeEvent
    };
  }

  class Layout {
  }
  class FullViewGridManager {
    root;
    queue = [];
    done = false;
    chapterIndex = 0;
    layout;
    constructor(HTML, BIFM, flowVision = false) {
      this.root = HTML.fullViewGrid;
      if (flowVision) {
        this.layout = new FlowVisionLayout(this.root);
      } else {
        this.layout = new GRIDLayout(this.root);
      }
      EBUS.subscribe("pf-on-appended", (_total, nodes, chapterIndex, done) => {
        if (this.chapterIndex > -1 && chapterIndex !== this.chapterIndex) return;
        this.append(nodes);
        this.done = done || false;
        setTimeout(() => this.renderCurrView(), 200);
      });
      EBUS.subscribe("pf-change-chapter", (index) => {
        this.chapterIndex = index;
        this.layout.reset();
        this.queue = [];
        this.done = false;
      });
      EBUS.subscribe("ifq-do", (_, imf) => {
        if (!BIFM.visible) return;
        if (imf.chapterIndex !== this.chapterIndex) return;
        if (!imf.node.root) return;
        let scrollTo = 0;
        if (flowVision) {
          scrollTo = imf.node.root.parentElement.offsetTop - window.screen.availHeight / 3;
        } else {
          scrollTo = imf.node.root.offsetTop - window.screen.availHeight / 3;
        }
        scrollTo = scrollTo <= 0 ? 0 : scrollTo >= this.root.scrollHeight ? this.root.scrollHeight : scrollTo;
        if (this.root.scrollTo.toString().includes("[native code]")) {
          this.root.scrollTo({ top: scrollTo, behavior: "smooth" });
        } else {
          this.root.scrollTop = scrollTo;
        }
      });
      EBUS.subscribe("cherry-pick-changed", (chapterIndex) => this.chapterIndex === chapterIndex && this.updateRender());
      const debouncer = new Debouncer();
      this.root.addEventListener("scroll", () => debouncer.addEvent("FULL-VIEW-SCROLL-EVENT", () => {
        if (HTML.root.classList.contains("ehvp-root-collapse")) return;
        this.renderCurrView();
        this.tryExtend();
      }, 400));
      this.root.addEventListener("click", (event) => {
        if (event.target === HTML.fullViewGrid || event.target.classList.contains("img-node") || event.target.classList.contains("fvg-sub-container")) {
          EBUS.emit("toggle-main-view", false);
        }
      });
    }
    append(nodes) {
      if (nodes.length > 0) {
        let index = this.queue.length;
        const list = nodes.map((n) => {
          const ret = { node: n, element: n.create(), ratio: n.ratio() };
          ret.element.setAttribute("data-index", index.toString());
          index++;
          return ret;
        });
        this.queue.push(...list);
        this.layout.append(list);
      }
    }
    tryExtend() {
      if (this.done) return;
      if (this.layout.nearBottom()) EBUS.emit("pf-try-extend");
    }
    updateRender() {
      this.queue.forEach(({ node }) => node.isRender() && node.render());
    }
    renderCurrView() {
      const [se, ee] = this.layout.visibleRange(this.root, this.queue.map((e) => e.element));
      const [start, end] = [parseInt(se.getAttribute("data-index") ?? "-1"), parseInt(ee.getAttribute("data-index") ?? "-1")];
      if (start < end && start > -1 && end < this.queue.length) {
        this.queue.slice(start, end + 1).forEach((e) => e.node.render());
        evLog("info", "render curr view, range: ", `[${start}-${end}]`);
      } else {
        evLog("error", "render curr view error, range: ", `[${start}-${end}]`);
      }
    }
  }
  class GRIDLayout extends Layout {
    root;
    constructor(root) {
      super();
      this.root = root;
      this.root.classList.add("fvg-grid");
      this.root.classList.remove("fvg-flow");
    }
    append(nodes) {
      this.root.append(...nodes.map((l) => l.element));
    }
    nearBottom() {
      const nodes = Array.from(this.root.childNodes);
      if (nodes.length === 0) return false;
      const lastImgNode = nodes[nodes.length - 1];
      const viewButtom = this.root.scrollTop + this.root.clientHeight;
      if (viewButtom + this.root.clientHeight * 2.5 < lastImgNode.offsetTop + lastImgNode.offsetHeight) {
        return false;
      }
      return true;
    }
    reset() {
      this.root.innerHTML = "";
    }
    visibleRange(container, children) {
      if (children.length === 0) return [container, container];
      const vh = container.offsetHeight;
      let first;
      let last;
      let overRow = 0;
      for (let i = 0; i < children.length; i += conf.colCount) {
        const rect = children[i].getBoundingClientRect();
        const visible = rect.top + rect.height >= 0 && rect.top <= vh;
        if (visible) {
          if (first === void 0) {
            first = children[i];
          }
        }
        if (first && !visible) {
          overRow++;
        }
        if (overRow >= 2) {
          last = children[Math.min(children.length - 1, i + conf.colCount)];
          break;
        }
      }
      last = last ?? children[children.length - 1];
      return [first ?? last, last];
    }
  }
  class FlowVisionLayout extends Layout {
    root;
    lastRow;
    count = 0;
    defaultHeight;
    resizeObserver;
    lastRootWidth;
    constructor(root) {
      super();
      this.root = root;
      this.root.classList.add("fvg-flow");
      this.root.classList.remove("fvg-grid");
      this.defaultHeight = window.screen.availHeight / 3;
      this.lastRootWidth = this.root.offsetWidth;
      this.resizeObserver = new ResizeObserver((entries) => {
        const root2 = entries[0];
        const width = root2.contentRect.width;
        if (this.lastRootWidth !== width) {
          this.lastRootWidth = width;
          Array.from(root2.target.querySelectorAll(".fvg-sub-container")).forEach((row) => this.resizeRow(row));
        }
      });
      this.resizeObserver.observe(this.root);
    }
    createRow(_columns) {
      const container = document.createElement("div");
      container.classList.add("fvg-sub-container");
      container.style.height = this.defaultHeight + "px";
      container.style.marginTop = "10px";
      this.root.appendChild(container);
      return container;
    }
    append(nodes) {
      for (const node of nodes) {
        node.element.style.marginLeft = "10px";
        if (!this.lastRow) this.lastRow = this.createRow(conf.colCount);
        const lastChild = this.lastRow.lastElementChild;
        if (lastChild) {
          const nodeWidth = this.lastRow.offsetHeight * (node.ratio ?? 1);
          const gap = (this.lastRow.childElementCount + 1) * 10;
          const factor = 0.5 / Math.max(1, node.ratio ?? 1);
          if (this.lastRow.childElementCount >= 6 || this.childrenWidth(this.lastRow) + gap + nodeWidth * factor > this.root.offsetWidth) {
            if (this.resizeRow(this.lastRow, nodeWidth)) {
              this.lastRow = this.createRow(conf.colCount);
            }
          }
        }
        this.lastRow.appendChild(node.element);
        this.count++;
      }
    }
    childrenWidth(row) {
      let width = 0;
      row.childNodes.forEach((c) => width += c.offsetWidth);
      return width;
    }
    childrenRatio(row) {
      const ret = [];
      row.childNodes.forEach((c) => ret.push(c.offsetWidth / c.offsetHeight));
      return ret;
    }
    resizeRow(row, _nextChildWidth) {
      if (row.childElementCount < 4) return false;
      const ratios = this.childrenRatio(row).filter((r) => r >= 1);
      if (ratios.length === row.childElementCount && row.childElementCount < 5) return false;
      const gap = (row.childElementCount + 1) * 10;
      const width = this.childrenWidth(row) + gap;
      const scale = width / this.root.offsetWidth;
      row.style.height = row.offsetHeight / scale + "px";
      row.childNodes.forEach((c) => c.style.marginLeft = "");
      row.style.justifyContent = "space-around";
      return true;
    }
    nearBottom() {
      const last = this.lastRow;
      if (!last) return false;
      const viewButtom = this.root.scrollTop + this.root.clientHeight;
      if (viewButtom + this.root.clientHeight * 2.5 < last.offsetTop + last.offsetHeight) {
        return false;
      }
      return true;
    }
    reset() {
      this.root.innerHTML = "";
    }
    visibleRange() {
      const children = Array.from(this.root.querySelectorAll(".fvg-sub-container"));
      if (children.length === 0) return [this.root, this.root];
      const vh = this.root.offsetHeight;
      let first;
      let last;
      let overRow = 0;
      for (let i = 0; i < children.length; i++) {
        const rect = children[i].getBoundingClientRect();
        const visible = rect.top + rect.height >= 0 && rect.top <= vh;
        if (visible) {
          if (first === void 0) {
            first = children[i].firstElementChild;
          }
        }
        if (first && !visible) {
          overRow++;
        }
        if (overRow >= 2) {
          last = children[i].lastElementChild;
          break;
        }
      }
      last = last ?? children[children.length - 1].lastElementChild;
      return [first ?? last, last];
    }
  }

  function toPositions(vw, vh, mouseX, mouseY) {
    const pos = { vw, vh };
    if (mouseX <= vw / 2) {
      pos.left = Math.max(mouseX, 5);
    } else {
      pos.right = Math.max(vw - mouseX, 5);
    }
    if (mouseY <= vh / 2) {
      pos.top = Math.max(mouseY, 5);
    } else {
      pos.bottom = Math.max(vh - mouseY, 5);
    }
    return pos;
  }
  function dragElement(element, callbacks, dragHub) {
    (dragHub ?? element).addEventListener("mousedown", (event) => {
      event.preventDefault();
      const wh = window.innerHeight;
      const ww = window.innerWidth;
      const abort = new AbortController();
      callbacks.onStart?.(event.clientX, event.clientY);
      document.addEventListener("mousemove", (event2) => {
        callbacks.onMoving?.(toPositions(ww, wh, event2.clientX, event2.clientY));
      }, { signal: abort.signal });
      document.addEventListener("mouseup", () => {
        abort.abort();
        callbacks.onFinish?.(toPositions(ww, wh, event.clientX, event.clientY));
      }, { once: true });
    });
  }
  function dragElementWithLine(event, element, lock, callback) {
    if (event.buttons !== 1) return;
    document.querySelector("#drag-element-with-line")?.remove();
    const canvas = document.createElement("canvas");
    canvas.id = "drag-element-with-line";
    canvas.style.position = "fixed";
    canvas.style.zIndex = "100000";
    canvas.style.top = "0px";
    canvas.style.left = "0px";
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    const rect = element.getBoundingClientRect();
    const height = Math.floor(rect.height / 2.2);
    const [startX, startY] = [rect.left + rect.width / 2, rect.top + rect.height / 2];
    const ctx = canvas.getContext("2d", { alpha: true });
    const abort = new AbortController();
    canvas.addEventListener("mouseup", () => {
      document.body.removeChild(canvas);
      abort.abort();
    }, { once: true });
    canvas.addEventListener("mousemove", (evt) => {
      const [endX, endY] = [
        lock.x ? startX : evt.clientX,
        startY 
      ];
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.strokeStyle = "#ffffffa0";
      ctx.lineWidth = 4;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(endX, endY, height, 0, 2 * Math.PI);
      ctx.fillStyle = "#ffffffa0";
      ctx.fill();
      callback(toMouseMoveData(startX, startY, endX, endY));
    }, { signal: abort.signal });
  }
  function toMouseMoveData(startX, startY, endX, endY) {
    const distance = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
    const direction = 1 << (startY > endY ? 3 : 2) | 1 << (startX > endX ? 1 : 0);
    return { start: { x: startX, y: startY }, end: { x: endX, y: endY }, distance, direction };
  }

  function styleCSS() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(navigator.userAgent);
    const css = `
.ehvp-root {
  --ehvp-background-color: #333343bb;
  --ehvp-fvg-background: #000;
  --ehvp-border: 1px solid #2f7b10;
  --ehvp-font-color: #fff;
  --ehvp-img-fetched: #90ffae;
  --ehvp-img-failed: red;
  --ehvp-img-init: #fff;
  --ehvp-img-box-shadow: -3px 4px 4px 0px #3d243d;
  --ehvp-panel-border: none;
  --ehvp-panel-box-shadow: none;
  font-size: 16px;
}
.ehvp-root {
  width: 100vw;
  height: 100vh;
  background-color: #000;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 2000;
  box-sizing: border-box;
  overflow: clip;
}
.ehvp-root input[type="checkbox"] {
  width: 1em;
  height: unset !important;
}
.ehvp-root select {
  width: 8em;
  height: 2em;
}
.ehvp-root input {
  width: 3em;
  height: 1.5em;
}
.ehvp-root-collapse {
  height: 0;
}
.fvg-flow {
  width: 100vw;
  height: 100vh;
  overflow: hidden scroll;
  background: var(--ehvp-fvg-background);
}
.fvg-grid {
  width: 100vw;
  height: 100vh;
  display: grid;
  align-content: start;
  grid-gap: 0.7em;
  grid-template-columns: repeat(${conf.colCount}, 1fr);
  overflow: hidden scroll;
  padding: 0.3em;
  box-sizing: border-box;
  background: var(--ehvp-fvg-background);
}
.ehvp-root input, .ehvp-root select {
  color: var(--ehvp-font-color);
  background-color: var(--ehvp-background-color);
  border: 1px solid #000000;
  border-radius: 4px;
  margin: 0px;
  padding: 0px;
  text-align: center;
  vertical-align: middle;
}
.ehvp-root input:enabled:hover, .ehvp-root select:enabled:hover, .ehvp-root input:enabled:focus, .ehvp-root select:enabled:focus {
  background-color: #34355b !important;
}
.ehvp-root select option {
  background-color: #34355b !important;
  color: #f1f1f1;
  font-size: 1em;
}
.p-label {
  cursor: pointer;
}
.full-view-grid .img-node {
  position: relative;
}
.fvg-sub-container {
  display: flex;
  width: 100%;
  contain: content;
}
.fvg-sub-container .img-node {
  width: auto;
  height: 100%;
}
.fvg-sub-container .img-node a {
  height: 100%;
}
.img-node canvas, .img-node img {
  position: relative;
  border: 3px solid var(--ehvp-img-init);
  box-sizing: border-box;
  box-shadow: var(--ehvp-img-box-shadow);
}
.fvg-grid .img-node canvas, 
.fvg-grid .img-node img 
{
  width: 100%;
  height: auto;
}
.fvg-flow .img-node canvas, 
.fvg-flow .img-node img 
{
  width: auto;
  height: 100%;
}
.img-node-numtip {
  position: absolute;
  top: 0;
  left: 0.5em;
  font-size: 1.8em;
  font-weight: 900;
  height: 1.8em;
  line-height: 1.8em;
  text-shadow: 0px 0px 3px #000000;
  color: var(--ehvp-font-color);
  display: none;
}
.img-node:hover .img-node-numtip {
  display: block;
}
.img-node > a {
  display: block;
  line-height: 0;
  position: relative;
}
.ehvp-chapter-description, .img-node-error-hint {
  display: block;
  position: absolute;
  bottom: 0px;
  left: 0px;
  background-color: #708090e3;
  color: #ffe785;
  width: 100%;
  font-weight: 700;
  min-height: 3em;
  font-size: 0.8em;
  padding: 0.5em;
  box-sizing: border-box;
  line-height: 1.3em;
  z-index: 10;
}
.img-node-error-hint {
  color: #8a0000;
  bottom: 3px;
  left: 3px;
  width: calc(100% - 6px);
}
.img-fetched img, .img-fetched canvas {
  border: 3px solid var(--ehvp-img-fetched) !important;
}
.img-fetch-failed img, .img-fetch-failed canvas {
  border: 3px solid var(--ehvp-img-failed) !important;
}
.img-fetching img, .img-fetching canvas {
  border: 3px solid #00000000 !important;
  z-index: 1;
}
.img-excluded img, .img-excluded canvas {
  border: 3px solid #777 !important;
}
.img-excluded a::after {
  content: '';
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  /**aspect-ratio: 1;*/
  background-color: #333333b0;
}
.img-fetching a::after {
  content: '';
  position: absolute;
  top: 0%;
  left: 0%;
  width: 30%;
  height: 30%;
  background-color: #ff0000;
  animation: img-loading 1s linear infinite;
}
@keyframes img-loading {
	25% {
    background-color: #ff00ff;
    top: 0%;
    left: 70%;
	}
	50% {
    background-color: #00ffff;
    top: 70%;
    left: 70%;
	}
	75% {
    background-color: #ffff00;
    top: 70%;
    left: 0%;
	}
}
.big-img-frame::-webkit-scrollbar {
  display: none;
}
.big-img-frame {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  overflow: auto;
  scrollbar-width: none;
  z-index: 2001;
  background-color: #000000d6;
}
.ehvp-root-collapse .big-img-frame {
  position: unset;
}
.big-img-frame > img, .big-img-frame > video {
  object-fit: contain;
  display: block;
}
.bifm-flex {
  display: flex;
  justify-content: flex-start;
  flex-direction: ${conf.reversePages ? "row-reverse" : "row"};
}
.bifm-img { }
.p-helper {
  position: fixed;
  z-index: 2011 !important;
  box-sizing: border-box;
  top: ${conf.pageHelperAbTop};
  left: ${conf.pageHelperAbLeft};
  bottom: ${conf.pageHelperAbBottom};
  right: ${conf.pageHelperAbRight};
}
.p-panel {
  z-index: 2012 !important;
  background-color: var(--ehvp-background-color);
  box-sizing: border-box;
  position: fixed;
  color: var(--ehvp-font-color);
  padding: 3px;
  border-radius: 4px;
  font-weight: 800;
  overflow: hidden;
  width: 24em;
  height: 32em;
  border: var(--ehvp-panel-border);
  box-shadow: var(--ehvp-panel-box-shadow);
}
.clickable {
  text-decoration-line: underline;
  user-select: none;
  text-align: center;
  white-space: nowrap;
}
.clickable:hover {
  color: #90ea90 !important;
}
.p-collapse {
  height: 0px !important;
  padding: 0px !important;
  border: none;
}
.b-main {
  display: flex;
  user-select: none;
  flex-direction: ${conf.pageHelperAbLeft === "unset" ? "row-reverse" : "row"};
  flex-wrap: wrap-reverse;
}
.b-main-item {
  box-sizing: border-box;
  border: var(--ehvp-border);
  border-radius: 4px;
  background-color: var(--ehvp-background-color);
  color: var(--ehvp-font-color);
  font-weight: 800;
  padding: 0em 0.3em;
  margin: 0em 0.2em;
  position: relative;
  white-space: nowrap;
  font-size: 1em;
  line-height: 1.2em;
}
.b-main-option {
  padding: 0em 0.2em;
}
.b-main-option-selected {
  color: black;
  background-color: #ffffffa0;
  border-radius: 6px;
}
.b-main-btn {
  display: inline-block;
  width: 1em;
}
.b-main-input {
  color: var(--ehvp-font-color);
  background-color: var(--ehvp-background-color);
  border-radius: 6px;
  display: inline-block;
  text-align: center;
  width: 1.5em;
  cursor: ns-resize;
}
.chapter-thumbnail {
  width: auto;
  height: 100%;
  aspect-ratio: 1 / 1;
  position: relative;
}
.chapter-thumbnail > #chapter-thumbnail-image-container {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  just-content: center;
  items-align: center;
  z-index: 1;
}
.chapter-thumbnail > #chapter-thumbnail-image-container > img {
  object-fit: contain;
  display: block;
  height: 100%;
  min-width: 100%;
}
.chapter-thumbnail > canvas {
  width: 100%;
  height: 100%;
  /**
  filter: blur(3px) brightness(0.5);
  */
}
.chapter-list {
  height: 100%;
  width: 100%;
  overflow: hidden auto;
  scrollbar-width: none;
  border-left: 2px solid black;
}
.chapter-list::-webkit-scrollbar {
  display: none;
}
.chapter-list-item {
  width: 100%;
  padding-left: 0.7em;
  white-space: nowrap;
  line-height: 1.8em;
  text-decoration: underline;
}
.chapter-list-item:hover {
  background-color: #cddee3ab;
}
.chapter-list-item-hl {
  filter: brightness(150%);
  background-color: #84c5ff6b;
}
.p-chapters {
  width: 34em;
  height: 18em;
  display: flex;
}
.p-chapters-large {
  width: 45em;
  height: 25em;
}
.p-chapters-large .chapter-thumbnail {
  width: auto;
  height: 100%;
}
.p-config {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  align-content: start;
  line-height: 2em;
  overflow: auto scroll;
  scrollbar-width: none;
}
.p-config::-webkit-scrollbar {
  display: none;
}
.p-config label {
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
  margin-bottom: unset;
}
.p-config input {
  cursor: ns-resize;
}
.p-downloader {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.p-downloader canvas {
  /* border: 1px solid greenyellow; */
}
.p-downloader .download-notice {
  text-align: center;
  width: 100%;
}
.p-downloader .downloader-btn-group {
  align-items: center;
  text-align: right;
  width: 100%;
}
.p-btn {
  color: var(--ehvp-font-color);
  cursor: pointer;
  font-weight: 800;
  background-color: var(--ehvp-background-color);
  vertical-align: middle;
  width: 1.5em;
  height: 1.5em;
  border: 1px solid #000000;
  border-radius: 4px;
}
@keyframes main-progress {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
.big-img-frame-collapse {
  width: 0px !important;
}
.ehvp-root-collapse .img-land,
.big-img-frame-collapse .img-land,
.ehvp-root-collapse .ehvp-message-box,
.ehvp-root-collapse .p-panel
 {
  display: none !important;
}
.download-bar {
  background-color: #333333c0;
  height: 0.3em;
  width: 100%;
  bottom: -0.3em;
  position: absolute;
  border-left: 3px solid #00000000;
  border-right: 3px solid #00000000;
  box-sizing: border-box;
  z-index: 1;
}
.download-bar > div {
  background-color: #f0fff0;
  height: 100%;
  border: none;
}
.img-land-left, .img-land-right {
  width: 15%;
  height: 50%;
  position: fixed;
  z-index: 2004;
  top: 25%;
}
.img-land-left {
  left: 0;
  cursor: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC3UlEQVR4nO2ZS28TMRDHV0APcON1gXKisUMRJ0QFJ74EAgQfhMclF15nCqk2noTHcVF2nDRCqBc+AZUKRYR3U0olaODK47JoNiqU0mjX9uymSPlLI0Vayfv72157ZuJ5Qw01lLMCL9gKxfAESLwMAutK4nMQ+BWE/tkL+o3z8bNi41Kl2Dhe8kpbvEGrdhAPKKlvKIlLIHVkGB9A4vXKWH00d/DqWLAXhPaV0D8swP8K1RujfK8Y7s4FXkk8B0J/cQXfwEhXCTyTGbh/1B8BqRU3OPxjBKdKJx9vY4Zv7lBSP8waHlZNSGzRO5ng/ZE84WGNCZaVyGPbQP8ou8KfHyB8RFEV4WkreDrWQOIKF8jsZDuaq7wy30pCd33R3GM++0L7nPCrsjEBEm8ZwdPtyHFJrYe3N4Hf7xam96c2QOlBVvCk2dtt8/EEXksFT0lWL0/JBv7ZnTdW4ymJS5Q0JhroZZXZwM/ff+s0riqEE8kGKCXOAL4dLERQdJsYJfTFFPsfQ274l/VOVD3UcP6mQOCD5BWgwoMR/jUu8sDLeAWepjBgnir3g3/36GNUG+eBhzhwJXkLGZ7//eDfzywzw+v4PmA1UB1vRAszy3xnvWQwYLqFaoebfU3YpQ3abQvZfMR5mVDpPmKs2wyejwkMMr3IMjch8EKiAWo6ubwkSxO+aB5LlcwpqRc3nQmBndTdPOqYuS43twkl9NVU8JwFTT8TTyZfZFvQkKgj4GpgIxPm8Jpm/6ZnKjUe7FJSf+Y0YQnfte6bQkGf5TBAYZuRVqQ+ZQX/eyUETnGZyGXrrBfVoS5FjnUIPc3W5O01d7GVI3wzGA22e5yi2eA6mZK2TYm7vb5W1KvkbDnCn/jk/MGaHLHU7qMLxnnGJX6jWS8fae308hbdjtQxs8qdBHZA4BWQep83aMUJYCGcoL4NtT6o8KDKjtKROCWJqzyco2eUElNWuSn+Zh1qKO//1y8OuBKqSFLycQAAAABJRU5ErkJggg=="), auto;
}
.img-land-right {
  right: 0;
  cursor: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADG0lEQVR4nO2ZS2tTQRTHL2oXuvO10bqymYkVV2LRlV9CVPQrdO9jE/ANPvCZcjvToju5mpxJGqtWwZ1QH4UWa1WotTUWtNWt1VJHTi6V2KbJnZmTW4X8YaAQuPP7z5nHOaee11BDDTkr8IKVMpndIzkclwwygsOwZPBNMvUzHPg3vCr9lswd60zmdqe81ApvudW9FbYIrs4JDkXJlTYcHyWHs50tmebYwbtago2SKV8w9cMC/K8hwm+kbyWz62OBFxwOSaa+uoJXMDItGByoG7i/02+SXAlqcLnICHSk9j5ZRQyfXyO46q03vJw3waGAcxLB+01xwssyEySRiGPbyKVH2hX+8DLCaxxdLLvfCh6vNclhynTCR+39+sXl13Rbialpn+U3mK8+U77pZI/b+/Xc7JxGvbwyQhgJuG4Ej6+j6SNVDj8vukjAzM1Ez+bIBjA9MJ1k9F5RV9Lzi8M0JhiciQSPSVaYpxgettacHi0sYeKSeyQEhyImjTUNhFml3SRVTRBEQiSybbUNYErsMEk1E88uuJkQTB2NsP8h67pSVU2cdzDB4E7tCGDhQXDoljTxS+unJ4dsIzAUwQBdqty9Pa8/9E1WNnFi0OKbMFV7CxEUKfUzATOxG8AxcONNxfMwcnuM3gB1tTVwrTL827vjumtbjn4LUR3iqvAZG3gV9RBDpp7w72DCCl6GEQjq/pBVg8d8Ca9X628zOFLTADad6gH/vreou13gudI+y++KlMwJriZI4e9/coaXDMYjd/OwY0YG/4AAnpcO8OlI8LYFDSZqCzX2kAZemhY0YRRU2nSichNjfZOlV9gdXuHqX/VMJVqDdYKrLzYmiOGnrfumMqEO2kxqf8+rRaOTq31W8H8iwaCDCiaWrbNQWIdSFDnGg6kesiZv2NyFQozw+aA5WO1RClfD5may2TYp6vZ6ubBXadNyjDA+Ox9YkysW2334wDivOIfvuOrpHYW1XtzC1xE7Zla5E4NxyeCU5GqTt9wqJYCJbBv2bbD1gYUHVnaYjpRSklKVB4P4G6bEmFX+E/9mbagh7//Xb5hJEJPq8mugAAAAAElFTkSuQmCC"), auto;
}
.p-tooltip { }
.p-tooltip .p-tooltiptext {
  display: none;
  max-width: 34em;
  background-color: #000000df;
  color: var(--ehvp-font-color);
  border-radius: 6px;
  position: fixed;
  z-index: 1;
  font-size: small;
  white-space: normal;
  text-align: left;
  padding: 0.3em 1em;
  box-sizing: border-box;
  pointer-events: none;
}
.page-loading {
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #333333a6;
}
.page-loading-text {
  color: var(--ehvp-font-color);
  font-size: 6em;
}
@keyframes rotate {
	100% {
		transform: rotate(1turn);
	}
}
.border-ani {
	position: relative;
	z-index: 0;
	overflow: hidden;
}
.border-ani::before {
	content: '';
	position: absolute;
	z-index: -2;
	left: -50%;
	top: -50%;
	width: 200%;
	height: 200%;
	background-color: #fff;
	animation: rotate 4s linear infinite;
}
.border-ani::after {
	content: '';
	position: absolute;
	z-index: -1;
	left: 6px;
	top: 6px;
	width: calc(100% - 16px);
	height: calc(100% - 16px);
	background-color: #333;
}
.overlay-tip {
  position: absolute;
  top: 3px;
  right: 3px;
  z-index: 10;
  height: 1em;
  border-radius: 10%;
  border: 1px solid #333;
  color: var(--ehvp-font-color);
  background-color: #959595d1;
  text-align: center;
  font-weight: 800;
}
.lightgreen { color: #90ea90; }
.ehvp-full-panel {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #000000e8;
  z-index: 3000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 0;
}
.ehvp-custom-panel {
  min-width: 50vw;
  min-height: 50vh;
  max-width: 80vw;
  max-height: 80vh;
  background-color: var(--ehvp-background-color);
  border: 1px solid #000000;
  display: flex;
  flex-direction: column;
  text-align: start;
  color: var(--ehvp-font-color);
  position: relative;
  user-select: none;
}
.ehvp-custom-panel-title {
  font-size: 1.8em;
  line-height: 2em;
  font-weight: 800;
  display: flex;
  justify-content: space-between;
  padding-left: 1em;
}
.ehvp-custom-panel-close {
  width: 2em;
  text-align: center;
}
.ehvp-custom-panel-close:hover {
  background-color: #c3c0e0;
}
.ehvp-custom-panel-container {
  overflow: auto;
  scrollbar-width: thin;
}
.ehvp-custom-panel-content {
  border: 1px solid #000000;
  border-radius: 4px;
  margin: 0.5em;
  padding: 0.5em;
}
.ehvp-custom-panel-item {
  margin: 0.2em 0em;
}
.ehvp-custom-panel-item-title {
  font-size: 1.4em;
}
.ehvp-custom-panel-item-values {
  margin-top: 0.3em;
  text-align: end;
  line-height: 1.3em;
}
.ehvp-custom-panel-item-value {
  font-size: 1.1em;
  font-weight: 800;
  color: black;
  background-color: #c5c5c5;
  border: 1px solid #000000;
  box-sizing: border-box;
  margin-left: 0.3em;
  display: inline-flex;
}
.ehvp-custom-panel-item-value span {
  padding: 0em 0.5em;
}
.ehvp-custom-panel-item-value button {
  background-color: #fff;
  color: black;
  border: none;
}
.ehvp-custom-panel-item-value button:hover {
  background-color: #ffff00;
}
.ehvp-custom-panel-item-input, .ehvp-custom-panel-item-span {
  font-size: 1.1em;
  font-weight: 800;
  background-color: #7fef7b;
  color: black;
  border: none;
}
.ehvp-custom-panel-item-span {
  background-color: #34355b;
  color: white;
}
.ehvp-custom-panel-item-add-btn:hover {
  background-color: #ffff00 !important;
}
.ehvp-custom-panel-list > li {
  line-height: 3em;
  margin-left: 0.5em;
  font-size: 1.4em;
}
.ehvp-custom-panel-checkbox:hover {
  border: 1px solid var(--ehvp-font-color);
}
.ehvp-custom-panel-list-item-disable {
  text-decoration: line-through;
  color: red;
}
.ehvp-help-panel > div > h2 {
  color: #c1ffc9;
}
.ehvp-help-panel > div > p {
  font-size: 1.1em;
  margin-left: 1em;
  font-weight: 600;
}
.ehvp-help-panel > div > ul {
  font-size: 1em;
}
.ehvp-help-panel > div a {
  color: #ff5959;
}
.ehvp-help-panel > div strong {
  color: #d76d00;
}
.bifm-vid-ctl {
  position: fixed;
  z-index: 2010;
  padding: 3px 10px;
  bottom: 0.2em;
  ${conf.pageHelperAbLeft === "unset" ? "left: 0.2em;" : "right: 0.2em;"}
}
.bifm-vid-ctl > div {
  display: flex;
  align-items: center;
  line-height: 1.2em;
}
.bifm-vid-ctl > div > * {
  margin: 0 0.1em;
}
.bifm-vid-ctl:not(:hover) .bifm-vid-ctl-btn,
.bifm-vid-ctl:not(:hover) .bifm-vid-ctl-span,
.bifm-vid-ctl:not(:hover) #bifm-vid-ctl-volume
{
  opacity: 0;
}
.bifm-vid-ctl-btn {
  height: 1.5em;
  width: 1.5em;
  font-size: 1.2em;
  padding: 0;
  margin: 0;
  border: none;
  background-color: #00000000;
  cursor: pointer;
}
#bifm-vid-ctl-volume {
  width: 5em;
  height: 0.5em;
}
.bifm-vid-ctl-pg {
  border: 1px solid #00000000;
  background-color: #3333337e;
  -webkit-appearance: none;
}
#bifm-vid-ctl-pg {
  width: 100%;
  height: 0.2em;
  background-color: #333333ee;
}
.bifm-vid-ctl:hover {
  background-color: var(--ehvp-background-color);
}
.bifm-vid-ctl:hover #bifm-vid-ctl-pg {
  height: 0.8em;
}
.bifm-vid-ctl-pg-inner {
  background-color: #ffffffa0;
  height: 100%;
}
.bifm-vid-ctl:hover #bifm-vid-ctl-pg .bifm-vid-ctl-pg-inner {
  background-color: #fff;
}
.bifm-vid-ctl-span {
  color: white;
  font-weight: 800;
}
.download-middle {
  width: 100%;
  height: auto;
  flex-grow: 1;
  overflow: hidden;
}
.download-middle .ehvp-tabs + div {
  width: 100%;
  height: calc(100% - 2em);
}
.ehvp-tabs {
  height: 2em;
  width: 100%;
  line-height: 2em;
}
.ehvp-p-tab {
  border: 1px dotted #ff0;
  font-size: 1em;
  padding: 0 0.4em;
}
.download-chapters, .download-status, .download-cherry-pick {
  width: 100%;
  height: 100%;
}
.download-chapters {
  overflow: hidden auto;
}
.download-chapters label {
  white-space: nowrap;
}
.download-chapters label span {
  margin-left: 0.5em;
}
.ehvp-p-tab-selected {
  color: rgb(120, 240, 80) !important;
}
.ehvp-message-box {
  position: fixed;
  z-index: 4001;
  top: 0;
  left: 0;
}
.ehvp-message {
  margin-top: 1em;
  margin-left: 1em;
  line-height: 2em;
  background-color: #ffffffd6;
  border-radius: 6px;
  padding-left: 0.3em;
  position: relative;
  box-shadow: inset 0 0 5px 2px #8273ff;
  color: black;
}
.ehvp-message > button {
  border: 1px solid #00000000;
  margin-left: 1em;
  color: black;
  background-color: #00000000;
  height: 2em;
  width: 2em;
  text-align: center;
  font-weight: 800;
}
.ehvp-message > button:hover {
  background-color: #444;
}
.ehvp-message-duration-bar {
  position: absolute;
  bottom: 0;
  width: 0%;
  left: 0;
  height: 0.1em;
  background: red;
}
.ehvp-custom-btn {
  border: 1px solid #000;
  font-weight: 700;
  color: #000;
  background-color: #ffffff80;
}
.ehvp-custom-btn-plain {
  background-color: #aaa;
}
.ehvp-custom-btn-green {
  background-color: #7fef7b;
}
.ehvp-custom-btn:hover {
  border: 1px solid #fff;
  color: #333;
  background-color: #ffffff90;
  filter: brightness(150%);
}
.ehvp-custom-btn:active {
  color: #ccc;
}
.ehvp-custom-panel-list-item-title {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #000;
  padding: 0em 1em;
}
.ehvp-custom-panel-title:hover, .ehvp-custom-panel-list-item-title:hover {
  background-color: #33333388;
}
.s-pickable:hover {
  border: 1px solid red;
  filter: brightness(150%);
}
@media (max-width: ${isMobile ? "1440px" : "720px"}) {
  .ehvp-root {
    font-size: 4cqw;
  }
  .ehvp-root-collapse #entry-btn {
    font-size: 2.2em;
  }
  .p-helper {
    bottom: 0px;
    left: 0px;
    top: unset;
    right: unset;
  }
  .b-main {
    flex-direction: row;
  }
  .b-main-item {
    font-size: 1.3em;
    margin-top: 0.2em;
  }
  #pagination-adjust-bar {
    display: none;
  }
  .bifm-img {
    min-weight: 100vw !important;
  }
  .p-panel {
    width: 100vw;
    font-size: 5cqw;
  }
  .p-chapters {
    width: 100vw;
  }
  .ehvp-custom-panel {
    max-width: 100vw;
  }
  .ehvp-root input, .ehvp-root select {
    width: 2em;
    height: 1.2em;
    font-size: 1em;
  }
  .ehvp-root select {
    width: 7em !important;
  }
  .p-btn {
    font-size: 1em;
  }
  .bifm-vid-ctl {
    display: none;
  }
  .ehvp-custom-panel-list-item-title {
    display: block;
  }
  .chapter-thumbnail {
    display: none;
  }
}
`;
    return css;
  }

  class DownloaderPanel {
    panel;
    canvas;
    tabStatus;
    tabChapters;
    tabCherryPick;
    statusElement;
    chaptersElement;
    cherryPickElement;
    noticeElement;
    forceBTN;
    startBTN;
    btn;
    constructor(root) {
      this.btn = q("#downloader-panel-btn", root);
      this.panel = q("#downloader-panel", root);
      this.canvas = q("#downloader-canvas", root);
      this.tabStatus = q("#download-tab-status", root);
      this.tabChapters = q("#download-tab-chapters", root);
      this.tabCherryPick = q("#download-tab-cherry-pick", root);
      this.statusElement = q("#download-status", root);
      this.chaptersElement = q("#download-chapters", root);
      this.cherryPickElement = q("#download-cherry-pick", root);
      this.noticeElement = q("#download-notice", root);
      this.forceBTN = q("#download-force", root);
      this.startBTN = q("#download-start", root);
      this.panel.addEventListener("transitionend", () => EBUS.emit("downloader-canvas-resize"));
    }
    initTabs() {
      const elements = [this.statusElement, this.chaptersElement, this.cherryPickElement];
      const tabs = [
        {
          ele: this.tabStatus,
          cb: () => {
            elements.forEach((e, i) => e.hidden = i != 0);
            EBUS.emit("downloader-canvas-resize");
          }
        },
        {
          ele: this.tabChapters,
          cb: () => {
            elements.forEach((e, i) => e.hidden = i != 1);
          }
        },
        {
          ele: this.tabCherryPick,
          cb: () => {
            elements.forEach((e, i) => e.hidden = i != 2);
            q("#download-cherry-pick-input", this.cherryPickElement).focus();
          }
        }
      ];
      tabs.forEach(({ ele, cb }, i) => {
        ele.addEventListener("click", () => {
          ele.classList.add("ehvp-p-tab-selected");
          tabs.filter((_, j) => j != i).forEach((t) => t.ele.classList.remove("ehvp-p-tab-selected"));
          cb();
        });
      });
    }
    switchTab(tabID) {
      switch (tabID) {
        case "status":
          this.tabStatus.click();
          break;
        case "chapters":
          this.tabChapters.click();
          break;
        case "cherry-pick":
          this.tabCherryPick.click();
          break;
      }
    }
    initNotice(btns) {
      this.noticeElement.innerHTML = "";
      btns.forEach((b) => {
        const a = document.createElement("a");
        a.textContent = b.btn;
        a.classList.add("clickable");
        a.style.color = "gray";
        a.style.margin = "0em 0.5em";
        a.addEventListener("click", b.cb);
        this.noticeElement.append(a);
      });
    }
    abort(stage) {
      this.flushUI(stage);
      this.normalizeBTN();
    }
    flushUI(stage) {
      this.startBTN.style.color = stage === "downloadFailed" ? "red" : "";
      this.startBTN.textContent = i18n[stage].get();
      this.btn.style.color = stage === "downloadFailed" ? "red" : "";
    }
    noticeableBTN() {
      if (!this.btn.classList.contains("lightgreen")) {
        this.btn.classList.add("lightgreen");
        if (!/✓/.test(this.btn.textContent)) {
          this.btn.textContent += "✓";
        }
      }
    }
    normalizeBTN() {
      this.btn.textContent = this.btn.textContent.replace("✓", "");
      this.btn.classList.remove("lightgreen");
    }
    createChapterSelectList(chapters, selectedChapters) {
      const selectAll = chapters.length === 1;
      this.chaptersElement.innerHTML = `
<div>
  <span id="download-chapters-select-all" class="clickable">Select All</span>
  <span id="download-chapters-unselect-all" class="clickable">Unselect All</span>
</div>
${chapters.map((c, i) => `<div><label>
  <input type="checkbox" id="ch-${c.id}" value="${c.id}" ${selectAll || selectedChapters.find((sel) => sel.index === i) ? "checked" : ""} />
  <span>${c.title}</span></label></div>`).join("")}
`;
      [["#download-chapters-select-all", true], ["#download-chapters-unselect-all", false]].forEach(
        ([id, checked]) => this.chaptersElement.querySelector(id)?.addEventListener(
          "click",
          () => chapters.forEach((c) => {
            const checkbox = this.chaptersElement.querySelector("#ch-" + c.id);
            if (checkbox) checkbox.checked = checked;
          })
        )
      );
    }
    selectedChapters() {
      const idSet = /* @__PURE__ */ new Set();
      this.chaptersElement.querySelectorAll("input[type=checkbox][id^=ch-]:checked").forEach((checkbox) => idSet.add(Number(checkbox.value)));
      return idSet;
    }
    initCherryPick(onAdd, onRemove, onClear, getRangeList) {
      let chapterIndex = 0;
      function addRangeElements(container, rangeList, onRemove2) {
        container.querySelectorAll(".ehvp-custom-panel-item-value").forEach((e) => e.remove());
        const tamplate = document.createElement("div");
        rangeList.forEach((range) => {
          const str = `<span class="ehvp-custom-panel-item-value" data-id="${range.id}"><span >${range.toString()}</span><span class="ehvp-custom-btn ehvp-custom-btn-plain" style="padding:0;border:none;">&nbspx&nbsp</span></span>`;
          tamplate.innerHTML = str;
          const element = tamplate.firstElementChild;
          element.style.backgroundColor = range.positive ? "#7fef7b" : "#ffa975";
          container.appendChild(element);
          element.querySelector(".ehvp-custom-btn").addEventListener("click", (event) => {
            const parent = event.target.parentElement;
            onRemove2(parent.getAttribute("data-id"));
            parent.remove();
          });
          tamplate.remove();
        });
      }
      const pickBTN = q("#download-cherry-pick-btn-add", this.cherryPickElement);
      const excludeBTN = q("#download-cherry-pick-btn-exclude", this.cherryPickElement);
      const clearBTN = q("#download-cherry-pick-btn-clear", this.cherryPickElement);
      const rangeBeforeSpan = q("#download-cherry-pick-btn-range-before", this.cherryPickElement);
      const rangeAfterSpan = q("#download-cherry-pick-btn-range-after", this.cherryPickElement);
      const input = q("#download-cherry-pick-input", this.cherryPickElement);
      const addCherryPick = (exclude, range) => {
        const rangeList = range ? [CherryPickRange.from((exclude ? "!" : "") + range)].filter((r) => r !== null) : (input.value || "").split(",").map((s) => (exclude ? "!" : "") + s).map(CherryPickRange.from).filter((r) => r !== null);
        if (rangeList.length > 0) {
          rangeList.forEach((range2) => {
            const newList = onAdd(chapterIndex, range2);
            if (newList === null) return;
            addRangeElements(this.cherryPickElement.firstElementChild, newList, (id) => onRemove(chapterIndex, id));
          });
        }
        input.value = "";
        input.focus();
      };
      const clearPick = () => {
        onClear(chapterIndex);
        addRangeElements(this.cherryPickElement.firstElementChild, [], (id) => onRemove(chapterIndex, id));
        input.value = "";
        input.focus();
      };
      pickBTN.addEventListener("click", () => addCherryPick(false));
      excludeBTN.addEventListener("click", () => addCherryPick(true));
      clearBTN.addEventListener("click", clearPick);
      this.cherryPickElement.querySelectorAll(".download-cherry-pick-follow-btn").forEach((btn) => {
        const followBTNClick = () => {
          const step = parseInt(btn.getAttribute("data-sibling-step") || "1");
          let sibling = btn;
          for (let i = 0; i < step; i++) {
            sibling = sibling.previousElementSibling;
          }
          if (step <= 1) {
            clearPick();
          }
          addCherryPick(step > 1, sibling.getAttribute("data-range") || void 0);
        };
        btn.addEventListener("click", followBTNClick);
      });
      input.addEventListener("keypress", (event) => event.key === "Enter" && addCherryPick(false));
      let lastIndex = 0;
      EBUS.subscribe("add-cherry-pick-range", (chIndex, index, positive, shiftKey) => {
        const range = new CherryPickRange([index + 1, shiftKey ? (lastIndex ?? index) + 1 : index + 1], positive);
        lastIndex = index;
        addRangeElements(this.cherryPickElement.firstElementChild, onAdd(chIndex, range) || [], (id) => onRemove(chIndex, id));
      });
      EBUS.subscribe("pf-change-chapter", (index) => {
        if (index === -1) return;
        chapterIndex = index;
        addRangeElements(this.cherryPickElement.firstElementChild, getRangeList(chapterIndex) || [], (id) => onRemove(chapterIndex, id));
      });
      let pad = 0;
      EBUS.subscribe("pf-on-appended", (total) => {
        pad = total.toString().length;
        const rAfter = rangeAfterSpan.getAttribute("data-range").split("-").map((v) => v.padStart(pad, "0")).join("-");
        rangeAfterSpan.textContent = rAfter;
        rangeAfterSpan.setAttribute("data-range", rAfter);
        const rBefore = rangeBeforeSpan.getAttribute("data-range").split("-").map((v, i) => i === 1 ? total.toString() : v.padStart(pad, "0")).join("-");
        rangeBeforeSpan.textContent = rBefore;
        rangeBeforeSpan.setAttribute("data-range", rBefore);
      });
      EBUS.subscribe("ifq-do", (index) => {
        const rAfter = [1, index + 1].map((v) => v.toString().padStart(pad, "0")).join("-");
        rangeAfterSpan.textContent = rAfter;
        rangeAfterSpan.setAttribute("data-range", rAfter);
        const rBefore = rangeBeforeSpan.getAttribute("data-range").split("-").map((v, i) => i === 0 ? (index + 1).toString().padStart(pad, "0") : v).join("-");
        rangeBeforeSpan.textContent = rBefore;
        rangeBeforeSpan.setAttribute("data-range", rBefore);
      });
    }
    static html() {
      return `
<div id="downloader-panel" class="p-panel p-downloader p-collapse">
    <div id="download-notice" class="download-notice" style="font-size: 0.7em;"></div>
    <div id="download-middle" class="download-middle">
      <div class="ehvp-tabs">
        <a id="download-tab-status" class="clickable ehvp-p-tab">${i18n.status.get()}</a>
        <a id="download-tab-cherry-pick" class="clickable ehvp-p-tab">${i18n.cherryPick.get()}</a>
        <a id="download-tab-chapters" class="clickable ehvp-p-tab">${i18n.selectChapters.get()}</a>
      </div>
      <div>
        <div id="download-status" class="download-status" hidden>
          <canvas id="downloader-canvas" width="0" height="0"></canvas>
        </div>
        <div id="download-cherry-pick" class="download-cherry-pick" hidden>
          <div class="ehvp-custom-panel-item-values" style="text-align: start;">
            <div style="margin-bottom: 1rem;display: flex;">
              <input type="text" class="ehvp-custom-panel-item-input" id="download-cherry-pick-input" placeholder="1, 2-3" style="text-align: start; width: 50%; height: 1.3rem; border-radius: 0px;" />
              <span class="ehvp-custom-btn ehvp-custom-btn-green" id="download-cherry-pick-btn-add">Pick</span>
              <span class="ehvp-custom-btn ehvp-custom-btn-plain" id="download-cherry-pick-btn-exclude">Exclude</span>
              <span class="ehvp-custom-btn ehvp-custom-btn-plain" id="download-cherry-pick-btn-clear">Clear</span>
            </div>
            <div style="margin-bottom: 1rem;">
              <div style="margin-bottom: 0.2rem">
                <span class="ehvp-custom-panel-item-span" id="download-cherry-pick-btn-range-after" data-range="1-1">1-1</span><span
                 class="ehvp-custom-btn ehvp-custom-btn-green download-cherry-pick-follow-btn" data-sibling-step="1">pick</span><span
                 class="ehvp-custom-btn ehvp-custom-btn-plain download-cherry-pick-follow-btn" data-sibling-step="2">exclude</span>
              </div>
              <div>
                <span class="ehvp-custom-panel-item-span" id="download-cherry-pick-btn-range-before" data-range="1-1">1-1</span><span
                class="ehvp-custom-btn ehvp-custom-btn-green download-cherry-pick-follow-btn" data-sibling-step="1">pick</span><span
                class="ehvp-custom-btn ehvp-custom-btn-plain download-cherry-pick-follow-btn" data-sibling-step="2">exclude</span>
              </div>
            </div>
          </div>
        </div>
        <div id="download-chapters" class="download-chapters" hidden></div>
      </div>
    </div>
    <div class="download-btn-group">
       <a id="download-force" class="clickable">${i18n.forceDownload.get()}</a>
       <a id="download-start" style="color: rgb(120, 240, 80)" class="clickable">${i18n.downloadStart.get()}</a>
    </div>
</div>`;
    }
  }

  class ConfigPanel {
    panel;
    btn;
    constructor(root) {
      this.panel = q("#config-panel", root);
      this.btn = q("#config-panel-btn", root);
      this.panel.querySelectorAll(".p-tooltip").forEach((element) => {
        const child = element.querySelector(".p-tooltiptext");
        if (!child) return;
        element.addEventListener("mouseenter", () => {
          child.style.display = "block";
          relocateElement(child, element, root.offsetWidth, root.offsetHeight);
        });
        element.addEventListener("mouseleave", () => child.style.display = "none");
      });
    }
    initEvents(events) {
      ConfigItems.forEach((item) => {
        switch (item.typ) {
          case "number":
            q(`#${item.key}MinusBTN`, this.panel).addEventListener("click", () => events.modNumberConfigEvent(item.key, "minus"));
            q(`#${item.key}AddBTN`, this.panel).addEventListener("click", () => events.modNumberConfigEvent(item.key, "add"));
            q(`#${item.key}Input`, this.panel).addEventListener("wheel", (event) => {
              event.preventDefault();
              if (event.deltaY < 0) {
                events.modNumberConfigEvent(item.key, "add");
              } else if (event.deltaY > 0) {
                events.modNumberConfigEvent(item.key, "minus");
              }
            });
            break;
          case "boolean":
            q(`#${item.key}Checkbox`, this.panel).addEventListener("click", () => events.modBooleanConfigEvent(item.key));
            break;
          case "select":
            q(`#${item.key}Select`, this.panel).addEventListener("change", () => events.modSelectConfigEvent(item.key));
            break;
        }
      });
    }
    static html() {
      const configItemStr = ConfigItems.map(createOption).join("");
      return `
<div id="config-panel" class="p-panel p-config p-collapse">
    ${configItemStr}
    <div style="grid-column-start: 1; grid-column-end: 11; padding-left: 5px;">
        <label class="p-label">
            <span>${i18n.dragToMove.get()}:</span>
            <span id="dragHub" style="font-size: 1.85rem;cursor: grab;">✠</span>
        </label>
    </div>
    <div style="grid-column-start: 1; grid-column-end: 11; padding-left: 5px; text-align: left;">
         <a id="show-guide-element" class="clickable" style="border: 1px dotted #fff; padding: 0px 3px;">${i18n.showHelp.get()}</a>
         <a id="show-keyboard-custom-element" class="clickable" style="border: 1px dotted #fff; padding: 0px 3px;">${i18n.showKeyboard.get()}</a>
         <a id="show-site-profiles-element" class="clickable" style="border: 1px dotted #fff; padding: 0px 3px;">${i18n.showSiteProfiles.get()}</a>
         <a id="show-style-custom-element" class="clickable" style="border: 1px dotted #fff; padding: 0px 3px;">${i18n.showStyleCustom.get()}</a>
         <a class="clickable" style="border: 1px dotted #fff; padding: 0px 3px;" href="https://github.com/MapoMagpie/eh-view-enhance" target="_blank">${i18n.letUsStar.get()}</a>
    </div>
</div>`;
    }
  }
  function createOption(item) {
    const i18nKey = item.i18nKey || item.key;
    const i18nValue = i18n[i18nKey];
    const i18nValueTooltip = i18n[`${i18nKey}Tooltip`];
    if (!i18nValue) {
      throw new Error(`i18n key ${i18nKey} not found`);
    }
    let display = true;
    if (item.displayInSite) {
      display = item.displayInSite.test(location.href);
    }
    let input = "";
    switch (item.typ) {
      case "boolean":
        input = `<input id="${item.key}Checkbox" ${conf[item.key] ? "checked" : ""} type="checkbox" />`;
        break;
      case "number":
        input = `<span>
                  <button id="${item.key}MinusBTN" class="p-btn" type="button">-</button>
                  <input id="${item.key}Input" value="${conf[item.key]}" disabled type="text" />
                  <button id="${item.key}AddBTN" class="p-btn" type="button">+</button></span>`;
        break;
      case "select":
        if (!item.options) {
          throw new Error(`options for ${item.key} not found`);
        }
        const optionsStr = item.options.map((o) => `<option value="${o.value}" ${conf[item.key] == o.value ? "selected" : ""}>${o.display}</option>`).join("");
        input = `<select id="${item.key}Select">${optionsStr}</select>`;
        break;
    }
    const [start, end] = item.gridColumnRange ? item.gridColumnRange : [1, 11];
    return `<div style="grid-column-start: ${start}; grid-column-end: ${end}; padding-left: 5px;${display ? "" : " display: none;"}"><label class="p-label"><span><span>${i18nValue.get()}</span><span class="p-tooltip">${i18nValueTooltip ? " ?:" : " :"}<span class="p-tooltiptext">${i18nValueTooltip?.get() || ""}</span></span></span>${input}</label></div>`;
  }

  class ChaptersPanel {
    panel;
    root;
    thumbnail;
    thumbnailImg;
    thumbnailCanvas;
    listContainer;
    first = false;
    constructor(root) {
      this.root = root;
      this.panel = q("#chapters-panel", root);
      this.thumbnail = q("#chapter-thumbnail", root);
      this.thumbnailImg = q("#chapter-thumbnail-image", root);
      this.thumbnailCanvas = q("#chapter-thumbnail-canvas", root);
      this.listContainer = q("#chapter-list", root);
      EBUS.subscribe("pf-update-chapters", (chapters) => {
        this.updateChapterList(chapters);
        if (chapters.length > 1) {
          this.relocateToCenter();
        }
      });
      EBUS.subscribe("pf-change-chapter", (index, chapter) => this.updateHighlight(index, chapter));
    }
    updateChapterList(chapters) {
      const ul = this.listContainer.firstElementChild;
      chapters.forEach((ch, i) => {
        const li = document.createElement("div");
        let title = "";
        if (ch.title instanceof Array) {
          title = ch.title.join("	");
        } else {
          title = ch.title;
        }
        li.innerHTML = `<span>${title}</span>`;
        li.setAttribute("id", "chapter-list-item-" + ch.id.toString());
        li.classList.add("chapter-list-item");
        li.addEventListener("click", () => {
          ch.onclick?.(i);
          if (this.first) {
            this.first = false;
            this.panel.classList.add("p-collapse");
            this.panel.classList.remove("p-panel-large");
            this.panel.classList.remove("p-chapters-large");
          }
        });
        li.addEventListener("mouseenter", () => this.updateChapterThumbnail(ch));
        ul.appendChild(li);
      });
      this.updateChapterThumbnail(chapters[0]);
    }
    relocateToCenter() {
      this.first = true;
      this.panel.classList.remove("p-collapse");
      this.panel.classList.add("p-panel-large");
      this.panel.classList.add("p-chapters-large");
      const [w, h] = [this.root.offsetWidth, this.root.offsetHeight];
      const [pw, ph] = [this.panel.offsetWidth, this.panel.offsetHeight];
      const [left, top] = [w / 2 - pw / 2, h / 2 - ph / 2];
      this.panel.style.left = left + "px";
      this.panel.style.top = top + "px";
    }
    updateHighlight(index, chapter) {
      Array.from(this.listContainer.querySelectorAll("div > .chapter-list-item")).forEach((li, i) => {
        if (i === index) {
          li.classList.add("chapter-list-item-hl");
        } else {
          li.classList.remove("chapter-list-item-hl");
        }
      });
      this.updateChapterThumbnail(chapter);
    }
    updateChapterThumbnail(chapter) {
      this.thumbnailImg.onload = () => {
        const width = this.thumbnailImg.naturalWidth;
        const height = this.thumbnailImg.naturalHeight;
        let [sx, sw, sy, sh] = [0, width, 0, height];
        if (width > height) {
          sx = Math.floor((width - height) / 2);
          sw = height;
        } else if (width < height) {
          sy = Math.floor((height - width) / 2);
          sh = width;
        }
        this.thumbnailCanvas.width = sw;
        this.thumbnailCanvas.height = sh;
        const ctx = this.thumbnailCanvas.getContext("2d");
        ctx.drawImage(this.thumbnailImg, sx, sy, sw, sh, 0, 0, width, height);
      };
      this.thumbnailImg.src = chapter.thumbimg ?? DEFAULT_THUMBNAIL;
      this.thumbnail.querySelector(".ehvp-chapter-description")?.remove();
      const description = document.createElement("div");
      description.classList.add("ehvp-chapter-description");
      if (Array.isArray(chapter.title)) {
        description.innerHTML = chapter.title.map((t) => `<span>${t}</span>`).join("<br>");
      } else {
        description.innerHTML = `<span>${chapter.title}</span>`;
      }
      this.thumbnail.appendChild(description);
    }
    static html() {
      return `
<div id="chapters-panel" class="p-panel p-chapters p-collapse">
    <div id="chapter-thumbnail" class="chapter-thumbnail">
      <div id="chapter-thumbnail-image-container" style="display:none;">
        <img id="chapter-thumbnail-image" src="${DEFAULT_THUMBNAIL}" alt="thumbnail" />
      </div>
      <canvas id="chapter-thumbnail-canvas" width="100" height="100"></canvas>
    </div>
    <div id="chapter-list" class="chapter-list">
      <div></div>
    </div>
</div>`;
    }
  }

  function createHTML() {
    const base = document.createElement("div");
    const dt = getDisplayText();
    base.id = "ehvp-base";
    base.setAttribute("tabindex", "0");
    base.setAttribute("style", "all: initial");
    document.body.after(base);
    const HTML_STRINGS = `
<div id="page-loading" class="page-loading" style="display: none;">
    <div class="page-loading-text border-ani">Loading...</div>
</div>
<div id="message-box" class="ehvp-message-box"></div>
<div id="ehvp-nodes-container" class="full-view-grid" tabindex="6"></div>
<div id="big-img-frame" class="big-img-frame big-img-frame-collapse${conf.readMode === "pagination" ? " bifm-flex" : ""}" tabindex="7">
   <a id="img-land-left" class="img-land img-land-left"></a>
   <a id="img-land-right" class="img-land img-land-right"></a>
</div>
<div id="p-helper" class="p-helper">
    <div>
        ${ConfigPanel.html()}
        ${DownloaderPanel.html()}
        ${ChaptersPanel.html()}
    </div>
    <div id="b-main" class="b-main">
        <a id="entry-btn" class="b-main-item clickable" data-display-texts="${dt.entry},${dt.collapse}">${dt.entry}</a>
        <div id="page-status" class="b-main-item" hidden>
            <a class="clickable" id="p-curr-page" style="color:#ffc005;">1</a><span id="p-slash-1">/</span><span id="p-total">0</span>
        </div>
        <div id="fin-status" class="b-main-item" hidden>
            <span>${dt.fin}:</span><span id="p-finished">0</span>
        </div>
        <a id="auto-page-btn" class="b-main-item clickable" hidden data-status="paused" data-display-texts="${dt.autoPagePlay},${dt.autoPagePause}">
           <span>${dt.autoPagePlay}</span>
           <div id="auto-page-progress" style="z-index: -1; height: 100%; width: 0%; position: absolute; top: 0px; left: 0px; background-color: #cd8e8e;"></div>
        </a>
        <a id="config-panel-btn" class="b-main-item clickable" hidden>${dt.config}</a>
        <a id="downloader-panel-btn" class="b-main-item clickable" hidden>${dt.download}</a>
        <a id="chapters-panel-btn" class="b-main-item clickable" hidden>${dt.chapters}</a>
        <div id="read-mode-bar" class="b-main-item" hidden>
            <div id="read-mode-select"
            ><a class="b-main-option clickable ${conf.readMode === "pagination" ? "b-main-option-selected" : ""}" data-value="pagination">${dt.pagination}</a
            ><a class="b-main-option clickable ${conf.readMode === "continuous" ? "b-main-option-selected" : ""}" data-value="continuous">${dt.continuous}</a></div>
        </div>
        <div id="pagination-adjust-bar" class="b-main-item" hidden>
            <span>
              <a id="paginationStepPrev" class="b-main-btn clickable" type="button">&lt;</a>
              <a id="paginationMinusBTN" class="b-main-btn clickable" type="button">-</a>
              <span id="paginationInput" class="b-main-input">${conf.paginationIMGCount}</span>
              <a id="paginationAddBTN" class="b-main-btn clickable" type="button">+</a>
              <a id="paginationStepNext" class="b-main-btn clickable" type="button">&gt;</a>
            </span>
        </div>
        <div id="scale-bar" class="b-main-item" hidden>
            <span>
              <span>${icons.zoomIcon}</span>
              <a id="scaleMinusBTN" class="b-main-btn clickable" type="button">-</a>
              <span id="scaleInput" class="b-main-input" style="width: 3rem; cursor: move;">${conf.imgScale}</span>
              <a id="scaleAddBTN" class="b-main-btn clickable" type="button">+</a>
            </span>
        </div>
    </div>
</div>
`;
    const shadowRoot = base.attachShadow({ mode: "open" });
    const root = document.createElement("div");
    root.classList.add("ehvp-root");
    root.classList.add("ehvp-root-collapse");
    root.innerHTML = HTML_STRINGS;
    const style = document.createElement("style");
    style.innerHTML = styleCSS();
    const styleCustom = document.createElement("style");
    styleCustom.id = "ehvp-style-custom";
    styleCustom.innerHTML = conf.customStyle;
    shadowRoot.append(style);
    root.append(styleCustom);
    shadowRoot.append(root);
    return {
      root,
      fullViewGrid: q("#ehvp-nodes-container", root),
      bigImageFrame: q("#big-img-frame", root),
      pageHelper: q("#p-helper", root),
      configPanelBTN: q("#config-panel-btn", root),
      downloaderPanelBTN: q("#downloader-panel-btn", root),
      chaptersPanelBTN: q("#chapters-panel-btn", root),
      entryBTN: q("#entry-btn", root),
      currPageElement: q("#p-curr-page", root),
      totalPageElement: q("#p-total", root),
      finishedElement: q("#p-finished", root),
      showGuideElement: q("#show-guide-element", root),
      showKeyboardCustomElement: q("#show-keyboard-custom-element", root),
      showSiteProfilesElement: q("#show-site-profiles-element", root),
      showStyleCustomElement: q("#show-style-custom-element", root),
      imgLandLeft: q("#img-land-left", root),
      imgLandRight: q("#img-land-right", root),
      autoPageBTN: q("#auto-page-btn", root),
      pageLoading: q("#page-loading", root),
      messageBox: q("#message-box", root),
      config: new ConfigPanel(root),
      downloader: new DownloaderPanel(root),
      chapters: new ChaptersPanel(root),
      readModeSelect: q("#read-mode-select", root),
      paginationAdjustBar: q("#pagination-adjust-bar", root),
      styleSheet: style.sheet
    };
  }
  function addEventListeners(events, HTML, BIFM, DL, PH) {
    HTML.config.initEvents(events);
    const panelElements = {
      "config": { panel: HTML.config.panel, btn: HTML.configPanelBTN },
      "downloader": { panel: HTML.downloader.panel, btn: HTML.downloaderPanelBTN, cb: () => DL.check() },
      "chapters": { panel: HTML.chapters.panel, btn: HTML.chaptersPanelBTN }
    };
    function collapsePanel(panel) {
      if (conf.autoCollapsePanel && !panel.classList.contains("p-panel-large")) {
        events.collapsePanelEvent(panel, panel.id);
      }
      if (BIFM.visible) {
        HTML.bigImageFrame.focus();
      } else {
        HTML.root.focus();
      }
    }
    Object.entries(panelElements).forEach(([key, elements]) => {
      elements.panel.addEventListener("mouseleave", () => collapsePanel(elements.panel));
      elements.panel.addEventListener("blur", () => collapsePanel(elements.panel));
      elements.btn.addEventListener("click", () => {
        events.togglePanelEvent(key, void 0, elements.btn);
        elements.cb?.();
      });
    });
    let hovering = false;
    HTML.pageHelper.addEventListener("mouseover", () => {
      hovering = true;
      events.abortMouseleavePanelEvent();
      PH.minify(PH.lastStage, true);
    });
    HTML.pageHelper.addEventListener("mouseleave", () => {
      hovering = false;
      Object.values(panelElements).forEach((elements) => collapsePanel(elements.panel));
      setTimeout(() => !hovering && PH.minify(PH.lastStage, false), 700);
    });
    HTML.entryBTN.addEventListener("click", () => {
      let stage = HTML.entryBTN.getAttribute("data-stage") || "exit";
      stage = stage === "open" ? "exit" : "open";
      HTML.entryBTN.setAttribute("data-stage", stage);
      EBUS.emit("toggle-main-view", stage === "open");
    });
    HTML.currPageElement.addEventListener("wheel", (event) => BIFM.stepNext(event.deltaY > 0 ? "next" : "prev", event.deltaY > 0 ? -1 : 1, parseInt(HTML.currPageElement.textContent) - 1));
    document.addEventListener("keydown", (event) => events.keyboardEvent(event));
    HTML.fullViewGrid.addEventListener("keydown", (event) => {
      events.fullViewGridKeyBoardEvent(event);
      event.stopPropagation();
    });
    HTML.bigImageFrame.addEventListener("keydown", (event) => {
      events.bigImageFrameKeyBoardEvent(event);
      event.stopPropagation();
    });
    HTML.imgLandLeft.addEventListener("click", (event) => {
      BIFM.stepNext(conf.reversePages ? "next" : "prev");
      event.stopPropagation();
    });
    HTML.imgLandRight.addEventListener("click", (event) => {
      BIFM.stepNext(conf.reversePages ? "prev" : "next");
      event.stopPropagation();
    });
    HTML.showGuideElement.addEventListener("click", events.showGuideEvent);
    HTML.showKeyboardCustomElement.addEventListener("click", events.showKeyboardCustomEvent);
    HTML.showSiteProfilesElement.addEventListener("click", events.showSiteProfilesEvent);
    HTML.showStyleCustomElement.addEventListener("click", events.showStyleCustomEvent);
    dragElement(HTML.pageHelper, {
      onFinish: () => {
        conf.pageHelperAbTop = HTML.pageHelper.style.top;
        conf.pageHelperAbLeft = HTML.pageHelper.style.left;
        conf.pageHelperAbBottom = HTML.pageHelper.style.bottom;
        conf.pageHelperAbRight = HTML.pageHelper.style.right;
        saveConf(conf);
      },
      onMoving: (pos) => {
        HTML.pageHelper.style.top = pos.top === void 0 ? "unset" : `${pos.top}px`;
        HTML.pageHelper.style.bottom = pos.bottom === void 0 ? "unset" : `${pos.bottom}px`;
        HTML.pageHelper.style.left = pos.left === void 0 ? "unset" : `${pos.left}px`;
        HTML.pageHelper.style.right = pos.right === void 0 ? "unset" : `${pos.right}px`;
        const rule = queryRule(HTML.styleSheet, ".b-main");
        if (rule) rule.style.flexDirection = pos.left === void 0 ? "row-reverse" : "row";
      }
    }, q("#dragHub", HTML.pageHelper));
    HTML.readModeSelect.addEventListener("click", (event) => {
      const value = event.target.getAttribute("data-value");
      if (value) {
        events.changeReadModeEvent(value);
        PH.minify(PH.lastStage);
      }
    });
    q("#paginationStepPrev", HTML.pageHelper).addEventListener("click", () => BIFM.stepNext(conf.reversePages ? "next" : "prev", conf.reversePages ? -1 : 1));
    q("#paginationStepNext", HTML.pageHelper).addEventListener("click", () => BIFM.stepNext(conf.reversePages ? "prev" : "next", conf.reversePages ? 1 : -1));
    q("#paginationMinusBTN", HTML.pageHelper).addEventListener("click", () => events.modNumberConfigEvent("paginationIMGCount", "minus"));
    q("#paginationAddBTN", HTML.pageHelper).addEventListener("click", () => events.modNumberConfigEvent("paginationIMGCount", "add"));
    q("#paginationInput", HTML.pageHelper).addEventListener("wheel", (event) => events.modNumberConfigEvent("paginationIMGCount", event.deltaY < 0 ? "add" : "minus"));
    q("#scaleInput", HTML.pageHelper).addEventListener("mousedown", (event) => {
      const element = event.target;
      const scale = conf.imgScale || (conf.readMode === "pagination" ? 100 : 80);
      dragElementWithLine(event, element, { y: true }, (data) => {
        const fix = (data.direction & 3) === 1 ? 1 : -1;
        BIFM.scaleBigImages(1, 0, Math.floor(scale + data.distance * 0.6 * fix));
        element.textContent = conf.imgScale.toString();
      });
    });
    q("#scaleMinusBTN", HTML.pageHelper).addEventListener("click", () => BIFM.scaleBigImages(-1, 10));
    q("#scaleAddBTN", HTML.pageHelper).addEventListener("click", () => BIFM.scaleBigImages(1, 10));
    q("#scaleInput", HTML.pageHelper).addEventListener("wheel", (event) => BIFM.scaleBigImages(event.deltaY > 0 ? -1 : 1, 5));
  }
  function showMessage(box, level, message, duration) {
    const element = document.createElement("div");
    element.classList.add("ehvp-message");
    element.innerHTML = `<span ${level === "error" ? "style='color: red;'" : ""}>${message}</span><button>X</button><div class="ehvp-message-duration-bar"></div>`;
    box.appendChild(element);
    element.querySelector("button")?.addEventListener("click", () => element.remove());
    const durationBar = element.querySelector("div.ehvp-message-duration-bar");
    if (duration) {
      durationBar.style.animation = `${duration}ms linear main-progress`;
      durationBar.addEventListener("animationend", () => element.remove());
    }
  }

  class PageHelper {
    html;
    chapterIndex = -1;
    pageNumInChapter = [];
    lastStage = "exit";
    chapters;
    downloading;
    constructor(html, chapters, downloading) {
      this.html = html;
      this.chapters = chapters;
      this.downloading = downloading;
      EBUS.subscribe("pf-change-chapter", (index) => {
        let current = 0;
        if (index >= 0) {
          current = this.pageNumInChapter[index] || 0;
        }
        this.chapterIndex = index;
        const [total, finished] = (() => {
          const queue = this.chapters()[index]?.queue;
          if (!queue) return [0, 0];
          const finished2 = queue.filter((imf) => imf.stage === FetchState.DONE).length;
          return [queue.length, finished2];
        })();
        this.setPageState({ finished: finished.toString(), total: total.toString(), current: (current + 1).toString() });
        this.minify(this.lastStage);
      });
      EBUS.subscribe("bifm-on-show", () => this.minify("bigImageFrame"));
      EBUS.subscribe("bifm-on-hidden", () => this.minify("fullViewGrid"));
      EBUS.subscribe("ifq-do", (index, imf) => {
        if (imf.chapterIndex !== this.chapterIndex) return;
        const queue = this.chapters()[this.chapterIndex]?.queue;
        if (!queue) return;
        this.pageNumInChapter[this.chapterIndex] = index;
        this.setPageState({ current: (index + 1).toString() });
      });
      EBUS.subscribe("ifq-on-finished-report", (index, queue) => {
        if (queue.chapterIndex !== this.chapterIndex) return;
        this.setPageState({ finished: queue.finishedIndex.size.toString() });
        evLog("info", `No.${index + 1} Finished，Current index at No.${queue.currIndex + 1}`);
      });
      EBUS.subscribe("pf-on-appended", (total, _ifs, chapterIndex, done) => {
        if (this.chapterIndex > -1 && chapterIndex !== this.chapterIndex) return;
        this.setPageState({ total: `${total}${done ? "" : ".."}` });
      });
      html.currPageElement.addEventListener("click", (event) => {
        const ele = event.target;
        const index = parseInt(ele.textContent || "1") - 1;
        if (this.chapterIndex >= 0) {
          const queue = this.chapters()[this.chapterIndex]?.queue;
          if (!queue || !queue[index]) return;
          EBUS.emit("imf-on-click", queue[index]);
        }
      });
    }
    setPageState({ total, current, finished }) {
      if (total !== void 0) {
        this.html.totalPageElement.textContent = total;
      }
      if (current !== void 0) {
        this.html.currPageElement.textContent = current;
      }
      if (finished !== void 0) {
        this.html.finishedElement.textContent = finished;
      }
    }
    // const arr = ["entry-btn", "auto-page-btn", "page-status", "fin-status", "chapters-panel-btn", "config-panel-btn", "downloader-panel-btn", "scale-bar", "read-mode-bar", "pagination-adjust-bar"];
    minify(stage, hover = false) {
      this.lastStage = stage;
      let level = [0, 0];
      if (stage === "exit") {
        level = [0, 0];
      } else {
        switch (stage) {
          case "fullViewGrid":
            if (conf.minifyPageHelper === "never" || conf.minifyPageHelper === "inBigMode") {
              level = [1, 1];
            } else {
              level = hover ? [1, 1] : [3, 1];
            }
            break;
          case "bigImageFrame":
            if (conf.minifyPageHelper === "never") {
              level = [2, 2];
            } else {
              level = hover ? [2, 2] : [3, 2];
            }
            break;
        }
      }
      function getPick(lvl, downloading = false) {
        switch (lvl) {
          case 0:
            return downloading ? ["entry-btn", "page-status", "fin-status"] : ["entry-btn"];
          case 1:
            return ["page-status", "fin-status", "auto-page-btn", "config-panel-btn", "downloader-panel-btn", "chapters-panel-btn", "entry-btn"];
          case 2:
            return ["page-status", "fin-status", "auto-page-btn", "config-panel-btn", "downloader-panel-btn", "chapters-panel-btn", "entry-btn", "read-mode-bar", "pagination-adjust-bar", "scale-bar"];
          case 3:
            return ["page-status", "auto-page-btn"];
        }
        return [];
      }
      const filter = (id) => {
        if (id === "chapters-panel-btn") return this.chapters().length > 1;
        if (id === "auto-page-btn" && level[0] === 3) return this.html.pageHelper.querySelector("#auto-page-btn")?.getAttribute("data-status") === "playing";
        if (id === "pagination-adjust-bar") return conf.readMode === "pagination";
        return true;
      };
      const pick = getPick(level[0], this.downloading()).filter(filter);
      const notHidden = getPick(level[1], this.downloading()).filter(filter);
      const items = Array.from(this.html.pageHelper.querySelectorAll(".b-main > .b-main-item"));
      for (const item of items) {
        const index = pick.indexOf(item.id);
        item.style.order = index === -1 ? "99" : index.toString();
        item.style.opacity = index === -1 ? "0" : "1";
        item.hidden = !notHidden.includes(item.id);
      }
      const entryBTN = this.html.pageHelper.querySelector("#entry-btn");
      const displayTexts = entryBTN.getAttribute("data-display-texts").split(",");
      entryBTN.textContent = stage === "exit" ? displayTexts[0] : displayTexts[1];
    }
  }

  function onMouse(ele, callback, signal) {
    ele.addEventListener("mousedown", (event) => {
      const { left } = ele.getBoundingClientRect();
      const mouseMove = (event2) => {
        const xInProgress = event2.clientX - left;
        const percent = Math.round(xInProgress / ele.clientWidth * 100);
        callback(percent);
      };
      mouseMove(event);
      ele.addEventListener("mousemove", mouseMove);
      ele.addEventListener("mouseup", () => {
        ele.removeEventListener("mousemove", mouseMove);
      }, { once: true });
      ele.addEventListener("mouseleave", () => {
        ele.removeEventListener("mousemove", mouseMove);
      }, { once: true });
    }, { signal });
  }

  const PLAY_ICON = `<svg width="1.4rem" height="1.4rem" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M106.854 106.002a26.003 26.003 0 0 0-25.64 29.326c16 124 16 117.344 0 241.344a26.003 26.003 0 0 0 35.776 27.332l298-124a26.003 26.003 0 0 0 0-48.008l-298-124a26.003 26.003 0 0 0-10.136-1.994z"/></svg>`;
  const PAUSE_ICON = `<svg width="1.4rem" height="1.4rem" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M120.16 45A20.162 20.162 0 0 0 100 65.16v381.68A20.162 20.162 0 0 0 120.16 467h65.68A20.162 20.162 0 0 0 206 446.84V65.16A20.162 20.162 0 0 0 185.84 45h-65.68zm206 0A20.162 20.162 0 0 0 306 65.16v381.68A20.162 20.162 0 0 0 326.16 467h65.68A20.162 20.162 0 0 0 412 446.84V65.16A20.162 20.162 0 0 0 391.84 45h-65.68z"/></svg>`;
  const VOLUME_ICON = `<svg width="1.4rem" height="1.4rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path fill="#fff" d="M10.0012 8.99984H9.1C8.53995 8.99984 8.25992 8.99984 8.04601 9.10883C7.85785 9.20471 7.70487 9.35769 7.60899 9.54585C7.5 9.75976 7.5 10.0398 7.5 10.5998V13.3998C7.5 13.9599 7.5 14.2399 7.60899 14.4538C7.70487 14.642 7.85785 14.795 8.04601 14.8908C8.25992 14.9998 8.53995 14.9998 9.1 14.9998H10.0012C10.5521 14.9998 10.8276 14.9998 11.0829 15.0685C11.309 15.1294 11.5228 15.2295 11.7143 15.3643C11.9305 15.5164 12.1068 15.728 12.4595 16.1512L15.0854 19.3023C15.5211 19.8252 15.739 20.0866 15.9292 20.1138C16.094 20.1373 16.2597 20.0774 16.3712 19.9538C16.5 19.811 16.5 19.4708 16.5 18.7902V5.20948C16.5 4.52892 16.5 4.18864 16.3712 4.04592C16.2597 3.92233 16.094 3.86234 15.9292 3.8859C15.7389 3.9131 15.5211 4.17451 15.0854 4.69733L12.4595 7.84843C12.1068 8.27166 11.9305 8.48328 11.7143 8.63542C11.5228 8.77021 11.309 8.87032 11.0829 8.93116C10.8276 8.99984 10.5521 8.99984 10.0012 8.99984Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const MUTED_ICON = `<svg width="1.4rem" height="1.4rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M16 9.50009L21 14.5001M21 9.50009L16 14.5001M4.6 9.00009H5.5012C6.05213 9.00009 6.32759 9.00009 6.58285 8.93141C6.80903 8.87056 7.02275 8.77046 7.21429 8.63566C7.43047 8.48353 7.60681 8.27191 7.95951 7.84868L10.5854 4.69758C11.0211 4.17476 11.2389 3.91335 11.4292 3.88614C11.594 3.86258 11.7597 3.92258 11.8712 4.04617C12 4.18889 12 4.52917 12 5.20973V18.7904C12 19.471 12 19.8113 11.8712 19.954C11.7597 20.0776 11.594 20.1376 11.4292 20.114C11.239 20.0868 11.0211 19.8254 10.5854 19.3026L7.95951 16.1515C7.60681 15.7283 7.43047 15.5166 7.21429 15.3645C7.02275 15.2297 6.80903 15.1296 6.58285 15.0688C6.32759 15.0001 6.05213 15.0001 5.5012 15.0001H4.6C4.03995 15.0001 3.75992 15.0001 3.54601 14.8911C3.35785 14.7952 3.20487 14.6422 3.10899 14.4541C3 14.2402 3 13.9601 3 13.4001V10.6001C3 10.04 3 9.76001 3.10899 9.54609C3.20487 9.35793 3.35785 9.20495 3.54601 9.10908C3.75992 9.00009 4.03995 9.00009 4.6 9.00009Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  class VideoControl {
    ui;
    paused = false;
    abortController;
    root;
    constructor(root) {
      this.root = root;
      this.ui = this.create(this.root);
      this.flushUI();
    }
    show() {
      this.ui.root.hidden = false;
    }
    hidden() {
      this.ui.root.hidden = true;
    }
    create(root) {
      const ui = document.createElement("div");
      ui.classList.add("bifm-vid-ctl");
      ui.innerHTML = `
<div>
  <button id="bifm-vid-ctl-play" class="bifm-vid-ctl-btn">${PLAY_ICON}</button>
  <button id="bifm-vid-ctl-mute" class="bifm-vid-ctl-btn">${MUTED_ICON}</button>
    <div id="bifm-vid-ctl-volume" class="bifm-vid-ctl-pg">
      <div class="bifm-vid-ctl-pg-inner" style="width: 30%"></div>
    </div>
  <span id="bifm-vid-ctl-time" class="bifm-vid-ctl-span">00:00</span>
  <span class="bifm-vid-ctl-span">/</span>
  <span id="bifm-vid-ctl-duration" class="bifm-vid-ctl-span">10:00</span>
  <!-- <span id = "bifm-vid-ctl-drag" class="bifm-vid-ctl-span" style = "cursor: grab;">✠</span> -->
</div>
<div>
    <div id="bifm-vid-ctl-pg" class="bifm-vid-ctl-pg">
      <div class="bifm-vid-ctl-pg-inner" style="width: 30%"></div>
    </div>
</div>
`;
      root.appendChild(ui);
      return {
        root: ui,
        playBTN: q("#bifm-vid-ctl-play", ui),
        volumeBTN: q("#bifm-vid-ctl-mute", ui),
        volumeProgress: q("#bifm-vid-ctl-volume", ui),
        progress: q("#bifm-vid-ctl-pg", ui),
        time: q("#bifm-vid-ctl-time", ui),
        duration: q("#bifm-vid-ctl-duration", ui)
      };
    }
    flushUI(state, onlyState) {
      const { value, max } = state ? { value: state.time, max: state.duration } : { value: 0, max: 10 };
      const percent = value / max * 100;
      this.ui.progress.firstElementChild.style.width = `${percent}%`;
      this.ui.time.textContent = secondsToTime(value);
      this.ui.duration.textContent = secondsToTime(max);
      if (onlyState) return;
      this.ui.playBTN.innerHTML = this.paused ? PLAY_ICON : PAUSE_ICON;
      this.ui.volumeBTN.innerHTML = conf.muted ? MUTED_ICON : VOLUME_ICON;
      this.ui.volumeProgress.firstElementChild.style.width = `${conf.volume || 30}%`;
    }
    attach(element) {
      this.detach();
      this.show();
      this.abortController = new AbortController();
      const state = { time: element.currentTime, duration: element.duration };
      this.flushUI(state);
      element.addEventListener("timeupdate", (event) => {
        const ele = event.target;
        if (!state) return;
        state.time = ele.currentTime;
        this.flushUI(state, true);
      }, { signal: this.abortController.signal });
      element.onwaiting = () => evLog("debug", "onwaiting");
      element.loop = true;
      element.muted = conf.muted || false;
      element.volume = (conf.volume || 30) / 100;
      if (!this.paused) {
        element.play();
      }
      let elementID = element.id;
      if (!elementID) {
        elementID = "vid-" + Math.random().toString(36).slice(2);
        element.id = elementID;
      }
      this.ui.playBTN.addEventListener("click", () => {
        const vid = this.root.querySelector(`#${elementID}`);
        if (vid) {
          this.paused = !this.paused;
          if (this.paused) {
            vid.pause();
          } else {
            vid.play();
          }
          this.flushUI(state);
        }
      }, { signal: this.abortController.signal });
      this.ui.volumeBTN.addEventListener("click", () => {
        const vid = this.root.querySelector(`#${elementID}`);
        if (vid) {
          conf.muted = !conf.muted;
          vid.muted = conf.muted;
          saveConf(conf);
          this.flushUI(state);
        }
      }, { signal: this.abortController.signal });
      onMouse(this.ui.progress, (percent) => {
        const vid = this.root.querySelector(`#${elementID}`);
        if (vid) {
          vid.currentTime = vid.duration * (percent / 100);
          state.time = vid.currentTime;
          this.flushUI(state);
        }
      }, this.abortController.signal);
      onMouse(this.ui.volumeProgress, (percent) => {
        const vid = this.root.querySelector(`#${elementID}`);
        if (vid) {
          conf.volume = percent;
          saveConf(conf);
          vid.volume = conf.volume / 100;
          this.flushUI(state);
        }
      }, this.abortController.signal);
    }
    detach() {
      this.abortController?.abort();
      this.abortController = void 0;
      this.flushUI();
    }
  }
  function secondsToTime(seconds) {
    const min = Math.floor(seconds / 60).toString().padStart(2, "0");
    const sec = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  }

  class Scroller {
    element;
    scrolling = false;
    step;
    // [1, 100]
    distance = 0;
    additional = 0;
    lastDirection;
    directionChanged = false;
    constructor(element, step) {
      this.element = element;
      this.step = step || 1;
    }
    scroll(y) {
      let resolve;
      const promise = new Promise((r) => resolve = r);
      this.distance = Math.abs(y);
      if (this.scrolling || this.distance <= 0) {
        this.additional = 0;
        return promise;
      }
      const sign = y / this.distance;
      const direction = y < 0 ? "up" : "down";
      this.directionChanged = this.lastDirection !== void 0 && this.lastDirection !== direction;
      this.lastDirection = direction;
      this.additional = 0;
      this.scrolling = true;
      const scrolled = () => {
        this.scrolling = false;
        this.directionChanged = false;
        this.lastDirection = void 0;
        this.distance = 0;
        resolve?.();
      };
      const doFrame = () => {
        if (!this.scrolling) return scrolled();
        this.distance -= this.step + this.additional;
        let scrollTop = this.element.scrollTop + (this.step + this.additional) * sign;
        scrollTop = Math.max(scrollTop, 0);
        scrollTop = Math.min(scrollTop, this.element.scrollHeight - this.element.clientHeight);
        this.element.scrollTop = scrollTop;
        if (this.distance <= 0) return scrolled();
        if (scrollTop === 0 || scrollTop === this.element.scrollHeight - this.element.clientHeight) return scrolled();
        if (this.directionChanged) return scrolled();
        window.requestAnimationFrame(doFrame);
      };
      window.requestAnimationFrame(doFrame);
      return promise;
    }
  }

  class TouchPoint {
    id;
    x;
    y;
    constructor(id, x, y) {
      this.id = id;
      this.x = x;
      this.y = y;
    }
    static from(tp) {
      return new TouchPoint(tp.identifier, tp.clientX, tp.clientY);
    }
    distance(other) {
      return Math.sqrt((this.x - other.x) ** 2 + (this.y - other.y) ** 2);
    }
    direction(other) {
      const x = this.x - other.x;
      const y = this.y - other.y;
      const absX = Math.abs(x);
      const absY = Math.abs(y);
      if (absX > absY) {
        return x > 0 ? "L" : "R";
      } else {
        return y > 0 ? "U" : "D";
      }
    }
  }
  class TouchManager {
    element;
    tpCache = [];
    trail = [];
    handlers;
    constructor(element, handles) {
      this.element = element;
      this.handlers = handles;
      this.element.addEventListener("touchstart", (ev) => this.start(ev));
      this.element.addEventListener("touchmove", (ev) => this.move(ev));
      this.element.addEventListener("touchend", (ev) => this.end(ev));
    }
    start(ev) {
      this.tpCache = Array.from(ev.targetTouches).map(TouchPoint.from);
      this.trail = [this.tpCache[0]];
      let distance = 0;
      if (this.tpCache.length === 2) {
        distance = this.tpCache[0].distance(this.tpCache[1]);
      }
      this.handlers.start?.(distance, ev);
    }
    move(ev) {
      if (this.tpCache.length === 1) {
        const last = this.trail[this.trail.length - 1];
        const tp = TouchPoint.from(ev.targetTouches[0]);
        const distance = last.distance(tp);
        if (distance > 30) {
          this.trail.push(tp);
        }
        return;
      }
      if (this.tpCache.length === 2 && ev.targetTouches.length === 2) {
        const tp1 = TouchPoint.from(ev.targetTouches[0]);
        const tp2 = TouchPoint.from(ev.targetTouches[1]);
        this.handlers.zoom?.(tp1.distance(tp2), ev);
        return;
      }
    }
    end(ev) {
      if (this.tpCache.length === 1 && this.trail.length > 1) {
        let direction = void 0;
        for (let i = 0, j = 1; j < this.trail.length; i++, j++) {
          if (!direction) {
            direction = this.trail[i].direction(this.trail[j]);
          } else {
            if (this.trail[i].direction(this.trail[j]) !== direction) return;
          }
        }
        this.handlers.swipe?.(direction, ev);
      }
      this.trail = [];
      this.tpCache = [];
      this.handlers.end?.(ev);
    }
  }

  class BigImageFrameManager {
    frame;
    lockInit;
    fragment;
    // image decode will take a while, so cache it to fragment
    elements = { next: [], curr: [], prev: [] };
    debouncer;
    throttler;
    callbackOnWheel;
    preventStep = { currentPreventFinished: false };
    visible = false;
    html;
    frameScrollAbort;
    vidController;
    chapterIndex = 0;
    getChapter;
    loadingHelper;
    currLoadingState = /* @__PURE__ */ new Map();
    scroller;
    lastMouse;
    pageNumInChapter = [];
    constructor(HTML, getChapter) {
      this.html = HTML;
      this.frame = HTML.bigImageFrame;
      this.fragment = new DocumentFragment();
      this.debouncer = new Debouncer();
      this.throttler = new Debouncer("throttle");
      this.lockInit = false;
      this.getChapter = getChapter;
      this.scroller = new Scroller(this.frame);
      this.initFrame();
      this.initImgScaleStyle();
      EBUS.subscribe("pf-change-chapter", (index) => {
        this.elements = { next: [], curr: [], prev: [] };
        this.chapterIndex = Math.max(0, index);
      });
      EBUS.subscribe("imf-on-click", (imf) => this.show(imf));
      EBUS.subscribe("imf-on-finished", (index, success, imf) => {
        if (imf.chapterIndex !== this.chapterIndex) return;
        this.currLoadingState.delete(index);
        if (!this.visible || !success) return;
        const elements = [
          ...this.elements.curr.map((e, i) => ({ img: e, eleIndex: i, key: "curr" })),
          ...this.elements.prev.map((e, i) => ({ img: e, eleIndex: i, key: "prev" })),
          ...this.elements.next.map((e, i) => ({ img: e, eleIndex: i, key: "next" })),
          ...this.getMediaNodes().map((e, i) => ({ img: e, eleIndex: i, key: "" }))
        ];
        const ret = elements.find((o) => index === parseIndex(o.img));
        if (!ret) return;
        const { img, eleIndex, key } = ret;
        if (imf.contentType?.startsWith("video")) {
          const vid = this.newMediaNode(index, imf);
          if (["curr", "prev", "next"].includes(key)) {
            this.elements[key][eleIndex] = vid;
          }
          img.replaceWith(vid);
          img.remove();
          return;
        }
        img.setAttribute("src", imf.node.blobSrc);
        this.debouncer.addEvent("FLUSH-LOADING-HELPER", () => this.flushLoadingHelper(), 20);
      });
      this.loadingHelper = document.createElement("span");
      this.loadingHelper.id = "bifm-loading-helper";
      this.loadingHelper.style.position = "absolute";
      this.loadingHelper.style.zIndex = "3000";
      this.loadingHelper.style.display = "none";
      this.loadingHelper.style.padding = "0px 3px";
      this.loadingHelper.style.backgroundColor = "#ffffff90";
      this.loadingHelper.style.fontWeight = "bold";
      this.loadingHelper.style.left = "0px";
      this.frame.append(this.loadingHelper);
      EBUS.subscribe("imf-download-state-change", (imf) => {
        if (imf.chapterIndex !== this.chapterIndex) return;
        const element = this.elements.curr.find((e) => e.getAttribute("d-random-id") === imf.randomID);
        if (!element) return;
        const index = parseIndex(element);
        this.currLoadingState.set(index, Math.floor(imf.downloadState.loaded / imf.downloadState.total * 100));
        this.debouncer.addEvent("FLUSH-LOADING-HELPER", () => this.flushLoadingHelper(), 20);
      });
      new AutoPage(this, this.scroller, HTML.autoPageBTN);
    }
    initFrame() {
      this.frame.addEventListener("wheel", (event) => this.onWheel(event, true));
      this.frame.addEventListener("contextmenu", (event) => event.preventDefault());
      const debouncer = new Debouncer("throttle");
      this.frame.addEventListener("mousemove", (mmevt) => {
        if (conf.stickyMouse === "disable" || conf.readMode !== "pagination") return;
        debouncer.addEvent("BIG-IMG-MOUSE-MOVE", () => {
          if (this.lastMouse) {
            stickyMouse(this.frame, mmevt, this.lastMouse, conf.stickyMouse === "enable");
          }
          this.lastMouse = { x: mmevt.clientX, y: mmevt.clientY };
        }, 5);
      });
      this.frame.addEventListener("mousedown", (mdevt) => {
        if (mdevt.button !== 0) return;
        if (mdevt.target.classList.contains("img-land")) return;
        let moved = false;
        let last = { x: mdevt.clientX, y: mdevt.clientY };
        const abort = new AbortController();
        this.frame.addEventListener("mouseup", (muevt) => {
          abort.abort();
          if (!moved) {
            this.hidden(muevt);
          } else if (conf.imgScale === 100) {
            this.scaleBigImages(1, 0, conf.imgScale, false);
          }
        }, { once: true });
        this.frame.addEventListener("mousemove", (mmevt) => {
          if ((!conf.magnifier || conf.readMode !== "pagination" || conf.stickyMouse !== "disable") && (moved = true)) return;
          if (!moved && conf.imgScale === 100) {
            this.scaleBigImages(1, 0, 150, false);
          }
          moved = true;
          debouncer.addEvent("BIG-IMG-MOUSE-MOVE", () => {
            stickyMouse(this.frame, mmevt, last, true);
            last = { x: mmevt.clientX, y: mmevt.clientY };
          }, 5);
        }, { signal: abort.signal });
      });
      new TouchManager(this.frame, {
        swipe: (direction) => {
          if (conf.readMode === "continuous") return;
          const oriented = (() => {
            switch (direction) {
              case "L":
                return conf.reversePages ? "next" : "prev";
              case "R":
                return conf.reversePages ? "prev" : "next";
              case "U":
                return "next";
              case "D":
                return "prev";
            }
          })();
          if (conf.imgScale === 100) {
            this.stepNext(oriented);
          } else if (this.isReachedBoundary(oriented, direction === "L" || direction === "R") && !this.tryPreventStep()) {
            this.stepNext(oriented);
          }
        }
      });
    }
    scroll(y) {
      this.scroller.step = conf.scrollingSpeed;
      this.scroller.scroll(y);
    }
    scrollStop() {
      this.scroller.scrolling = false;
    }
    hidden(event) {
      if (event && event.target && event.target.tagName === "SPAN") return;
      this.visible = false;
      EBUS.emit("bifm-on-hidden");
      this.html.fullViewGrid.focus();
      this.frameScrollAbort?.abort();
      this.frame.classList.add("big-img-frame-collapse");
      this.debouncer.addEvent("TOGGLE-CHILDREN", () => this.resetElements(), 200);
    }
    show(imf) {
      this.visible = true;
      this.frame.classList.remove("big-img-frame-collapse");
      this.frame.focus();
      this.frameScrollAbort = new AbortController();
      this.frame.addEventListener("scroll", () => this.onScroll(), { signal: this.frameScrollAbort.signal });
      this.debouncer.addEvent("TOGGLE-CHILDREN-D", () => imf.chapterIndex === this.chapterIndex && this.setNow(imf), 100);
      EBUS.emit("bifm-on-show");
    }
    setNow(imf, oriented) {
      if (this.visible) {
        this.initElements(imf, oriented);
      } else {
        const queue = this.getChapter(this.chapterIndex).queue;
        const index = queue.indexOf(imf);
        if (index === -1) return;
        this.pageNumInChapter[this.chapterIndex] = index;
        EBUS.emit("ifq-do", index, imf, oriented || "next");
      }
      this.lastMouse = void 0;
      this.currLoadingState.clear();
      this.flushLoadingHelper();
    }
    initElements(imf, oriented = "next") {
      this.resetPreventStep();
      const queue = this.getChapter(this.chapterIndex).queue;
      const index = queue.indexOf(imf);
      if (index === -1) return;
      if (conf.readMode === "continuous") {
        this.resetElements();
        this.elements.curr[0] = this.newMediaNode(index, imf);
        this.frame.appendChild(this.elements.curr[0]);
        this.tryExtend();
      } else {
        this.balanceElements(index, queue, oriented);
        this.placeElements();
        this.checkFrameOverflow();
      }
      this.pageNumInChapter[this.chapterIndex] = index;
      EBUS.emit("ifq-do", index, imf, oriented);
      this.elements.curr[0]?.scrollIntoView();
    }
    placeElements() {
      this.removeMediaNode();
      this.elements.curr.forEach((element) => this.frame.appendChild(element));
      this.elements.prev.forEach((element) => this.fragment.appendChild(element));
      this.elements.next.forEach((element) => this.fragment.appendChild(element));
      const vid = this.elements.curr[0];
      if (vid && vid instanceof HTMLVideoElement) {
        if (vid.paused) this.tryPlayVideo(vid);
      }
    }
    balanceElements(index, queue, oriented) {
      const indices = { prev: [], curr: [], next: [] };
      for (let i = 0; i < conf.paginationIMGCount; i++) {
        const prevIndex = i + index - conf.paginationIMGCount;
        const currIndex = i + index;
        const nextIndex = i + index + conf.paginationIMGCount;
        if (prevIndex > -1) indices.prev.push(prevIndex);
        if (currIndex > -1 && currIndex < queue.length) indices.curr.push(currIndex);
        if (nextIndex < queue.length) indices.next.push(nextIndex);
      }
      if (oriented === "next") {
        this.elements.prev = this.elements.curr;
        this.elements.curr = this.elements.next;
        this.elements.next = [];
      } else {
        this.elements.next = this.elements.curr;
        this.elements.curr = this.elements.prev;
        this.elements.prev = [];
      }
      Object.entries(indices).forEach(([k, indexRange]) => {
        const elements = this.elements[k];
        if (elements.length > indexRange.length) {
          elements.splice(indexRange.length, elements.length - indexRange.length).forEach((ele) => ele.remove());
        }
        for (let j = 0; j < indexRange.length; j++) {
          if (indexRange[j] === parseIndex(elements[j])) continue;
          if (elements[j]) elements[j].remove();
          elements[j] = this.newMediaNode(indexRange[j], queue[indexRange[j]]);
        }
      });
    }
    resetElements() {
      this.elements = { prev: [], curr: [], next: [] };
      this.fragment.childNodes.forEach((child) => child.remove());
      this.removeMediaNode();
    }
    removeMediaNode() {
      this.vidController?.detach();
      this.vidController?.hidden();
      this.getMediaNodes().forEach((ele) => {
        if (ele instanceof HTMLVideoElement) {
          ele.pause();
        }
        ele.remove();
      });
    }
    getMediaNodes() {
      const list = Array.from(this.frame.querySelectorAll("img, video"));
      let last = 0;
      for (const ele of list) {
        const index = parseIndex(ele);
        if (index < last) {
          throw new Error("BIFM: getMediaNodes: list is not ordered by d-index");
        }
        last = index;
      }
      return list;
    }
    stepNext(oriented, fixStep = 0, current) {
      let index = current !== void 0 ? current : this.elements.curr[0] ? parseInt(this.elements.curr[0].getAttribute("d-index")) : void 0;
      if (index === void 0 || isNaN(index)) return;
      const queue = this.getChapter(this.chapterIndex)?.queue;
      if (!queue || queue.length === 0) return;
      index = oriented === "next" ? index + conf.paginationIMGCount : index - conf.paginationIMGCount;
      if (conf.paginationIMGCount > 1) {
        index += fixStep;
      }
      if (index < -conf.paginationIMGCount) {
        index = queue.length - 1;
      } else {
        index = Math.max(0, index);
      }
      if (!queue[index]) return;
      this.setNow(queue[index], oriented);
    }
    // isMouse: onWheel triggered by mousewheel, if not, means by keyboard control
    onWheel(event, isMouse, preventCallback) {
      if (!preventCallback) this.callbackOnWheel?.(event);
      if (event.buttons === 2) {
        event.preventDefault();
        this.scaleBigImages(event.deltaY > 0 ? -1 : 1, 5);
        return;
      }
      if (conf.readMode === "continuous") return;
      const oriented = event.deltaY > 0 ? "next" : "prev";
      if (conf.stickyMouse === "disable") {
        if (!this.isReachedBoundary(oriented)) return;
        if (isMouse && this.tryPreventStep()) return;
      }
      event.preventDefault();
      this.stepNext(oriented);
    }
    onScroll() {
      if (conf.readMode === "continuous") {
        this.consecutive();
      }
    }
    resetPreventStep(fin) {
      this.preventStep.ani?.cancel();
      this.preventStep.ele?.remove();
      this.preventStep = { currentPreventFinished: fin ?? false };
    }
    // prevent scroll to next page while mouse scrolling;
    tryPreventStep() {
      if (!conf.imgScale || conf.imgScale === 100 || conf.preventScrollPageTime === 0) {
        return false;
      }
      if (this.preventStep.currentPreventFinished) {
        this.resetPreventStep();
        return false;
      } else {
        if (!this.preventStep.ele) {
          const lockEle = document.createElement("div");
          lockEle.style.width = "100vw";
          lockEle.style.position = "fixed";
          lockEle.style.display = "flex";
          lockEle.style.justifyContent = "center";
          lockEle.style.bottom = "0px";
          lockEle.innerHTML = `<div style="width: 30vw;height: 0.1rem;background-color: #1b00ff59;text-align: center;font-size: 0.8rem;position: relative;font-weight: 800;color: gray;border-radius: 7px;border: 1px solid #510000;"><span style="position: absolute;bottom: -3px;"></span></div>`;
          this.frame.appendChild(lockEle);
          this.preventStep.ele = lockEle;
          if (conf.preventScrollPageTime > 0) {
            const ani = lockEle.children[0].animate([{ width: "30vw" }, { width: "0vw" }], { duration: conf.preventScrollPageTime });
            ani.onfinish = () => this.preventStep.ele && this.resetPreventStep(true);
            this.preventStep.ani = ani;
          }
          this.preventStep.currentPreventFinished = false;
        }
        return true;
      }
    }
    isReachedBoundary(oriented, side = false) {
      if (!side) {
        if (oriented === "prev") {
          return this.frame.scrollTop <= 0;
        }
        if (oriented === "next") {
          return this.frame.scrollTop >= this.frame.scrollHeight - this.frame.offsetHeight;
        }
      } else {
        if (oriented === "prev") {
          return this.frame.scrollLeft <= 0;
        }
        if (oriented === "next") {
          return this.frame.scrollLeft >= this.frame.scrollWidth - this.frame.offsetWidth;
        }
      }
      return false;
    }
    consecutive() {
      this.throttler.addEvent("SCROLL", () => {
        this.debouncer.addEvent("REDUCE", () => {
          if (!this.elements.curr[0]) return;
          const distance2 = this.getRealOffsetTop(this.elements.curr[0]) - this.frame.scrollTop;
          if (this.tryReduce()) {
            this.restoreScrollTop(this.elements.curr[0], distance2);
          }
        }, 500);
        const mediaNodes = this.getMediaNodes();
        const index = this.findMediaNodeIndexOnCenter(mediaNodes);
        const centerNode = mediaNodes[index];
        if (this.elements.curr[0] !== centerNode) {
          const oldIndex = parseIndex(this.elements.curr[0]);
          const newIndex = parseIndex(centerNode);
          const oriented = oldIndex < newIndex ? "next" : "prev";
          const queue = this.getChapter(this.chapterIndex).queue;
          if (queue.length === 0 || newIndex < 0 || newIndex > queue.length - 1) return;
          const imf = queue[newIndex];
          this.pageNumInChapter[this.chapterIndex] = newIndex;
          EBUS.emit("ifq-do", newIndex, imf, oriented);
          if (this.elements.curr[0] instanceof HTMLVideoElement) {
            this.elements.curr[0].pause();
          }
          this.tryPlayVideo(centerNode);
        }
        this.elements.curr[0] = centerNode;
        const distance = this.getRealOffsetTop(this.elements.curr[0]) - this.frame.scrollTop;
        if (this.tryExtend() > 0) {
          this.restoreScrollTop(this.elements.curr[0], distance);
        }
      }, 60);
    }
    restoreScrollTop(imgNode, distance) {
      this.frame.scrollTop = this.getRealOffsetTop(imgNode) - distance;
    }
    getRealOffsetTop(imgNode) {
      return imgNode.offsetTop;
    }
    tryExtend() {
      let indexOffset = 0;
      let mediaNodes = [];
      let scrollTopFix = 0;
      while (true) {
        mediaNodes = this.getMediaNodes();
        const frist = mediaNodes[0];
        if (frist.offsetTop + frist.offsetHeight > this.frame.scrollTop + scrollTopFix) {
          const extended = this.extendImgNode(frist, "prev");
          if (extended === null) {
            break;
          } else {
            scrollTopFix += extended.offsetHeight;
          }
          indexOffset++;
        } else {
          break;
        }
      }
      while (true) {
        mediaNodes = this.getMediaNodes();
        const last = mediaNodes[mediaNodes.length - 1];
        if (last.offsetTop < this.frame.scrollTop + this.frame.offsetHeight) {
          if (this.extendImgNode(last, "next") === null) break;
        } else {
          break;
        }
      }
      return indexOffset;
    }
    tryReduce() {
      const imgNodes = this.getMediaNodes();
      const shouldRemoveNodes = [];
      let oriented = "prev";
      for (const imgNode of imgNodes) {
        if (oriented === "prev") {
          if (imgNode.offsetTop + imgNode.offsetHeight < this.frame.scrollTop) {
            shouldRemoveNodes.push(imgNode);
          } else {
            oriented = "next";
            shouldRemoveNodes.pop();
          }
        } else if (oriented === "next") {
          if (imgNode.offsetTop > this.frame.scrollTop + this.frame.offsetHeight) {
            oriented = "remove";
          }
        } else {
          shouldRemoveNodes.push(imgNode);
        }
      }
      if (shouldRemoveNodes.length === 0) return false;
      for (const imgNode of shouldRemoveNodes) {
        imgNode.remove();
      }
      return true;
    }
    extendImgNode(mediaNode, oriented) {
      let extendedNode;
      const index = parseIndex(mediaNode);
      if (index === -1) {
        throw new Error("BIFM: extendImgNode: media node index is NaN");
      }
      const queue = this.getChapter(this.chapterIndex).queue;
      if (queue.length === 0) return null;
      if (oriented === "prev") {
        if (index === 0) return null;
        extendedNode = this.newMediaNode(index - 1, queue[index - 1]);
        mediaNode.before(extendedNode);
      } else {
        if (index === queue.length - 1) return null;
        extendedNode = this.newMediaNode(index + 1, queue[index + 1]);
        mediaNode.after(extendedNode);
      }
      return extendedNode;
    }
    newMediaNode(index, imf) {
      if (!imf) throw new Error("BIFM: newMediaNode: img fetcher is null");
      if (imf.contentType?.startsWith("video")) {
        const vid = document.createElement("video");
        vid.classList.add("bifm-img");
        vid.classList.add("bifm-vid");
        vid.draggable = !(conf.magnifier && conf.readMode === "pagination");
        vid.setAttribute("d-index", index.toString());
        vid.setAttribute("d-random-id", imf.randomID);
        vid.onloadeddata = () => {
          if (this.visible && vid === this.elements.curr[0]) {
            this.tryPlayVideo(vid);
          }
        };
        vid.src = imf.node.blobSrc;
        return vid;
      } else {
        const img = document.createElement("img");
        img.decoding = "sync";
        img.classList.add("bifm-img");
        img.draggable = !(conf.magnifier && conf.readMode === "pagination");
        img.setAttribute("d-index", index.toString());
        img.setAttribute("d-random-id", imf.randomID);
        if (imf.stage === FetchState.DONE) {
          img.src = imf.node.blobSrc;
        } else {
          img.src = imf.node.thumbnailSrc;
        }
        return img;
      }
    }
    tryPlayVideo(vid) {
      if (vid instanceof HTMLVideoElement) {
        if (!this.vidController) {
          this.vidController = new VideoControl(this.html.root);
        }
        this.vidController.attach(vid);
      } else {
        this.vidController?.hidden();
      }
    }
    /**
     * @param fix: 1 or -1, means scale up or down
     * @param rate: step of scale, eg: current scale is 80, rate is 10, then new scale is 90
     * @param _percent: directly set width percent 
     * @param syncConf: sync to config, default = true 
     */
    scaleBigImages(fix, rate, _percent, syncConf) {
      const rule = queryRule(this.html.styleSheet, ".bifm-img");
      if (!rule) return 0;
      let percent = _percent || parseInt(conf.readMode === "pagination" ? rule.style.height : rule.style.width);
      if (isNaN(percent)) percent = 100;
      percent = percent + rate * fix;
      switch (conf.readMode) {
        case "pagination":
          percent = Math.max(percent, 100);
          percent = Math.min(percent, 300);
          rule.style.height = `${percent}vh`;
          break;
        case "continuous":
          percent = Math.max(percent, 20);
          percent = Math.min(percent, 100);
          rule.style.width = `${percent}vw`;
          break;
      }
      if (conf.readMode === "pagination") {
        this.checkFrameOverflow();
        rule.style.minWidth = percent > 100 ? "" : "100vw";
        if (percent === 100) this.resetScaleBigImages(false);
      }
      if (syncConf ?? true) {
        conf.imgScale = percent;
        saveConf(conf);
      }
      q("#scaleInput", this.html.pageHelper).textContent = `${percent}`;
      return percent;
    }
    checkFrameOverflow() {
      const flexRule = queryRule(this.html.styleSheet, ".bifm-flex");
      if (flexRule) {
        if (this.frame.offsetWidth < this.frame.scrollWidth) {
          flexRule.style.justifyContent = "flex-start";
        } else {
          flexRule.style.justifyContent = "center";
        }
      }
    }
    resetScaleBigImages(syncConf) {
      const rule = queryRule(this.html.styleSheet, ".bifm-img");
      if (!rule) return;
      let percent = 100;
      rule.style.minWidth = "";
      rule.style.minHeight = "";
      rule.style.maxWidth = "";
      rule.style.maxHeight = "";
      rule.style.height = "";
      rule.style.width = "";
      rule.style.margin = "";
      if (conf.readMode === "pagination") {
        rule.style.height = "100vh";
        rule.style.margin = "0";
        if (conf.paginationIMGCount === 1) rule.style.minWidth = "100vw";
      } else {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(navigator.userAgent);
        rule.style.maxWidth = "100vw";
        rule.style.width = isMobile ? "100vw" : "80vw";
        rule.style.margin = "0 auto";
        percent = isMobile ? 100 : 80;
      }
      if (syncConf) {
        conf.imgScale = percent;
        saveConf(conf);
        q("#scaleInput", this.html.pageHelper).textContent = `${conf.imgScale}`;
      }
    }
    initImgScaleStyle() {
      this.resetScaleBigImages(false);
      if (conf.imgScale && conf.imgScale > 0) {
        this.scaleBigImages(1, 0, conf.imgScale);
      }
    }
    findMediaNodeIndexOnCenter(imgNodes) {
      const centerLine = this.frame.offsetHeight / 2;
      for (let i = 0; i < imgNodes.length; i++) {
        const imgNode = imgNodes[i];
        const realOffsetTop = imgNode.offsetTop - this.frame.scrollTop;
        if (realOffsetTop < centerLine && realOffsetTop + imgNode.offsetHeight >= centerLine) {
          return i;
        }
      }
      return 0;
    }
    flushLoadingHelper() {
      if (this.currLoadingState.size === 0) {
        this.loadingHelper.style.display = "none";
      } else {
        if (this.loadingHelper.style.display === "none") {
          this.loadingHelper.style.display = "inline-block";
        }
        const ret = Array.from(this.currLoadingState).map(([k, v]) => `[P-${k + 1}: ${v}%]`);
        if (conf.reversePages) ret.reverse();
        this.loadingHelper.textContent = `Loading ${ret.join(",")}`;
      }
    }
    getPageNumber() {
      return this.pageNumInChapter[this.chapterIndex] ?? 0;
    }
  }
  class AutoPage {
    bifm;
    status;
    button;
    lockVer;
    scroller;
    constructor(BIFM, scroller, root) {
      this.bifm = BIFM;
      this.scroller = scroller;
      this.status = "stop";
      this.button = root;
      this.lockVer = 0;
      this.bifm.callbackOnWheel = () => {
        if (this.status === "running") {
          this.stop();
          this.start(this.lockVer);
        }
      };
      EBUS.subscribe("bifm-on-hidden", () => this.stop());
      EBUS.subscribe("bifm-on-show", () => conf.autoPlay && this.start(this.lockVer));
      EBUS.subscribe("toggle-auto-play", () => {
        if (this.status === "stop") {
          this.start(this.lockVer);
        } else {
          this.stop();
        }
      });
      this.initPlayButton();
    }
    initPlayButton() {
      this.button.addEventListener("click", () => {
        if (this.status === "stop") {
          this.start(this.lockVer);
        } else {
          this.stop();
        }
      });
    }
    async start(lockVer) {
      this.status = "running";
      this.button.setAttribute("data-status", "playing");
      const displayTexts = this.button.getAttribute("data-display-texts").split(",");
      this.button.firstElementChild.innerText = displayTexts[1];
      const frame = this.bifm.frame;
      if (!this.bifm.visible) {
        const queue = this.bifm.getChapter(this.bifm.chapterIndex).queue;
        if (queue.length === 0) return;
        const index = Math.max(parseIndex(this.bifm.elements.curr[0]), 0);
        this.bifm.show(queue[index]);
      }
      const progress = q("#auto-page-progress", this.button);
      const interval = () => conf.readMode === "pagination" ? conf.autoPageSpeed : 1;
      while (true) {
        await sleep(10);
        progress.style.animation = `${interval() * 1e3}ms linear main-progress`;
        await sleep(interval() * 1e3);
        if (this.lockVer !== lockVer) {
          return;
        }
        progress.style.animation = ``;
        if (this.status !== "running") {
          break;
        }
        if (this.bifm.elements.curr.length === 0) break;
        const index = parseInt(this.bifm.elements.curr[0]?.getAttribute("d-index"));
        const queue = this.bifm.getChapter(this.bifm.chapterIndex).queue;
        if (index < 0 || index >= queue.length) break;
        if (conf.readMode === "pagination") {
          if (this.bifm.isReachedBoundary("next")) {
            const curr = this.bifm.elements.curr[0];
            if (curr instanceof HTMLVideoElement) {
              let resolve;
              const promise = new Promise((r) => resolve = r);
              curr.addEventListener("timeupdate", () => {
                if (curr.currentTime >= curr.duration - 1) {
                  sleep(1e3).then(resolve);
                }
              });
              await promise;
            }
            this.bifm.onWheel(new WheelEvent("wheel", { deltaY: 1 }), false, true);
          } else {
            const deltaY = this.bifm.frame.offsetHeight / 2;
            frame.scrollBy({ top: deltaY, behavior: "smooth" });
          }
        } else {
          this.scroller.step = conf.autoPageSpeed;
          this.scroller.scroll(this.bifm.frame.offsetHeight);
        }
      }
      this.stop();
    }
    stop() {
      this.status = "stop";
      this.button.setAttribute("data-status", "paused");
      const progress = q("#auto-page-progress", this.button);
      progress.style.animation = ``;
      this.lockVer += 1;
      const displayTexts = this.button.getAttribute("data-display-texts").split(",");
      this.button.firstElementChild.innerText = displayTexts[0];
      this.scroller.scroll(-1);
    }
  }
  function parseIndex(ele) {
    if (!ele) return -1;
    const d = ele.getAttribute("d-index") || "";
    const i = parseInt(d);
    return isNaN(i) ? -1 : i;
  }
  function stickyMouse(element, event, lastMouse, reverse) {
    let [distanceY, distanceX] = [event.clientY - lastMouse.y, event.clientX - lastMouse.x];
    if (reverse) [distanceY, distanceX] = [-distanceY, -distanceX];
    const overflowY = element.scrollHeight - element.offsetHeight;
    if (overflowY > 0) {
      const rateY = overflowY / (element.offsetHeight / 4) * 3;
      let scrollTop = element.scrollTop + distanceY * rateY;
      scrollTop = Math.max(scrollTop, 0);
      scrollTop = Math.min(scrollTop, overflowY);
      element.scrollTop = scrollTop;
    }
    const overflowX = element.scrollWidth - element.offsetWidth;
    if (overflowX > 0) {
      const rateX = overflowX / (element.offsetWidth / 4) * 3;
      let scrollLeft = element.scrollLeft + distanceX * rateX;
      if (conf.reversePages) {
        scrollLeft = Math.min(scrollLeft, 0);
        scrollLeft = Math.max(scrollLeft, -overflowX);
      } else {
        scrollLeft = Math.max(scrollLeft, 0);
        scrollLeft = Math.min(scrollLeft, overflowX);
      }
      element.scrollLeft = scrollLeft;
    }
  }

  function revertMonkeyPatch(element) {
    const originalScrollTo = Element.prototype.scrollTo;
    Object.defineProperty(element, "scrollTo", {
      value: originalScrollTo,
      writable: true,
      configurable: true
    });
  }

  function main(MATCHER, autoOpen, flowVision) {
    const HTML = createHTML();
    [HTML.fullViewGrid, HTML.bigImageFrame].forEach((e) => revertMonkeyPatch(e));
    const IFQ = IMGFetcherQueue.newQueue();
    const IL = new IdleLoader(IFQ);
    const PF = new PageFetcher(IFQ, MATCHER);
    const DL = new Downloader(HTML, IFQ, IL, PF, MATCHER);
    const PH = new PageHelper(HTML, () => PF.chapters, () => DL.downloading);
    const BIFM = new BigImageFrameManager(HTML, (index) => PF.chapters[index]);
    new FullViewGridManager(HTML, BIFM, flowVision);
    const events = initEvents(HTML, BIFM, IFQ, IL, PH);
    addEventListeners(events, HTML, BIFM, DL, PH);
    EBUS.subscribe("downloader-canvas-on-click", (index) => {
      IFQ.currIndex = index;
      if (IFQ.chapterIndex !== BIFM.chapterIndex) return;
      BIFM.show(IFQ[index]);
    });
    EBUS.subscribe("notify-message", (level, msg, duration) => showMessage(HTML.messageBox, level, msg, duration));
    PF.beforeInit = () => HTML.pageLoading.style.display = "flex";
    PF.afterInit = () => {
      HTML.pageLoading.style.display = "none";
      IL.processingIndexList = [0];
      IL.start();
      if (conf.autoEnterBig || BIFM.visible) {
        const imf = IFQ[BIFM.getPageNumber()];
        if (imf) BIFM.show(imf);
      }
    };
    if (conf.first) {
      events.showGuideEvent();
      conf.first = false;
      saveConf(conf);
    }
    EBUS.subscribe("start-download", (cb) => {
      signal.first = false;
      if (PF.chapters.length === 0) {
        EBUS.emit("pf-init", () => {
          DL.start();
          cb();
        });
      } else {
        DL.start();
        sleep(20).then(cb);
      }
    });
    const signal = { first: true };
    function entry(expand) {
      if (HTML.pageHelper) {
        if (expand) {
          events.showFullViewGrid();
          if (signal.first) {
            signal.first = false;
            EBUS.emit("pf-init", () => {
            });
          }
        } else {
          ["config", "downloader"].forEach((id) => events.togglePanelEvent(id, true));
          events.hiddenFullViewGrid();
        }
      }
    }
    EBUS.subscribe("toggle-main-view", entry);
    if (conf.autoOpen && autoOpen) {
      HTML.entryBTN.setAttribute("data-stage", "open");
      entry(true);
    }
    return () => {
      console.log("destory eh-view-enhance");
      entry(false);
      PF.abort();
      IL.abort();
      IFQ.length = 0;
      EBUS.reset();
      document.querySelector("#ehvp-base")?.remove();
      return sleep(500);
    };
  }
  let destoryFunc;
  const debouncer = new Debouncer();
  function reMain() {
    debouncer.addEvent("LOCATION-CHANGE", () => {
      const newStart = () => {
        if (document.querySelector(".ehvp-base")) return;
        const [matcher, autoOpen, flowVision] = adaptMatcher(window.location.href);
        if (matcher) {
          destoryFunc = main(matcher, autoOpen, flowVision);
        }
      };
      if (destoryFunc) {
        destoryFunc().then(newStart);
      } else {
        newStart();
      }
    }, 20);
  }
  setTimeout(() => {
    const oldPushState = history.pushState;
    history.pushState = function pushState(...args) {
      reMain();
      return oldPushState.apply(this, args);
    };
    const oldReplaceState = history.replaceState;
    history.replaceState = function replaceState(...args) {
      return oldReplaceState.apply(this, args);
    };
    window.addEventListener("popstate", reMain);
    reMain();
  }, 300);

})(saveAs, pica, zip);