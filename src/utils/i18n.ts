import { KeyboardInBigImageModeId, KeyboardInFullViewGridId, KeyboardInMainId } from "../ui/event";

const lang = navigator.language;
const i18nIndex = lang.startsWith("zh") ? 1 : 0;
export class I18nValue extends Array<string> {
  constructor(...value: string[]) {
    super(...value);
  }
  get() {
    return this[i18nIndex];
  }
}
type KeyboardCustom = {
  inMain: Record<KeyboardInMainId, I18nValue>;
  inFullViewGrid: Record<KeyboardInFullViewGridId, I18nValue>;
  inBigImageMode: Record<KeyboardInBigImageModeId, I18nValue>;
}
const keyboardCustom: KeyboardCustom = {
  inMain: {
    "open-full-view-grid": new I18nValue("Enter Read Mode", "进入阅读模式"),
  },
  inBigImageMode: {
    "step-image-prev": new I18nValue("Go Prev Image", "切换到上一张图片"),
    "step-image-next": new I18nValue("Go Next Image", "切换到下一张图片"),
    "exit-big-image-mode": new I18nValue("Exit Big Image Mode", "退出大图模式"),
    "step-to-first-image": new I18nValue("Go First Image", "跳转到第一张图片"),
    "step-to-last-image": new I18nValue("Go Last Image", "跳转到最后一张图片"),
    "scale-image-increase": new I18nValue("Increase Image Scale", "放大图片"),
    "scale-image-decrease": new I18nValue("Decrease Image Scale", "缩小图片"),
    "scroll-image-up": new I18nValue("Scroll Image Up (Please Keep Default Keys)", "向上滚动图片 (请保留默认按键)"),
    "scroll-image-down": new I18nValue("Scroll Image Down (Please Keep Default Keys)", "向下滚动图片 (请保留默认按键)"),
  },
  inFullViewGrid: {
    "open-big-image-mode": new I18nValue("Enter Big Image Mode", "进入大图阅读模式"),
    "pause-auto-load-temporarily": new I18nValue("Pause Auto Load Temporarily", "临时停止自动加载"),
    "exit-full-view-grid": new I18nValue("Exit Read Mode", "退出阅读模式"),
    "columns-increase": new I18nValue("Increase Columns ", "增加每行数量"),
    "columns-decrease": new I18nValue("Decrease Columns ", "减少每行数量"),
    "back-chapters-selection": new I18nValue("Back to Chapters Selection", "返回章节选择"),
  },
}
export const i18n = {
  imageScale: new I18nValue("SCALE", "缩放"),
  download: new I18nValue("DL", "下载"),
  config: new I18nValue("CONF", "配置"),
  backChapters: new I18nValue("Chapters", "章节"),
  autoPagePlay: new I18nValue("PLAY", "播放"),
  autoPagePause: new I18nValue("PAUSE", "暂停"),
  autoPlay: new I18nValue("Auto Page", "自动翻页"),
  autoPlayTooltip: new I18nValue("Auto Page when entering the big image readmode.", "当阅读大图时，开启自动播放模式。"),
  preventScrollPageTime: new I18nValue("Flip Page Time", "滚动翻页时间"),
  preventScrollPageTimeTooltip: new I18nValue("In Read Mode:Single Page, when scrolling through the content, prevent immediate page flipping when reaching the bottom, improve the reading experience. Set to 0 to disable this feature, measured in milliseconds.", "在单页阅读模式下，滚动浏览时，阻止滚动到底部时立即翻页，提升阅读体验。设置为0时则为禁用此功能，单位为毫秒。"),
  collapse: new I18nValue("FOLD", "收起"),
  colCount: new I18nValue("Columns", "每行数量"),
  readMode: new I18nValue("Read Mode", "阅读模式"),
  autoPageInterval: new I18nValue("Auto Page Interval", "自动翻页间隔"),
  autoPageIntervalTooltip: new I18nValue("Use the mouse wheel on Input box to adjust the interval time.", "在输入框上使用鼠标滚轮快速修改间隔时间"),
  readModeTooltip: new I18nValue("Switch to the next picture when scrolling, otherwise read continuously", "滚动时切换到下一张图片，否则连续阅读"),
  threads: new I18nValue("PreloadThreads", "最大同时加载"),
  threadsTooltip: new I18nValue("Max Preload Threads", "大图浏览时，每次滚动到下一张时，预加载的图片数量，大于1时体现为越看加载的图片越多，将提升浏览体验。"),
  downloadThreads: new I18nValue("DownloadThreads", "最大同时下载"),
  downloadThreadsTooltip: new I18nValue("Max Download Threads, suggest: <5", "下载模式下，同时加载的图片数量，建议小于等于5"),
  timeout: new I18nValue("Timeout(second)", "超时时间(秒)"),
  fetchOriginal: new I18nValue("Raw Image", "最佳质量"),
  autoLoad: new I18nValue("Auto Load", "自动加载"),
  autoLoadTooltip: new I18nValue("", "进入本脚本的浏览模式后，即使不浏览也会一张接一张的加载图片。直至所有图片加载完毕。"),
  fetchOriginalTooltip: new I18nValue("enable will download the original source, cost more traffic and quotas", "启用后，将加载未经过压缩的原档文件，下载打包后的体积也与画廊所标体积一致。<br>注意：这将消耗更多的流量与配额，请酌情启用。"),
  forceDownload: new I18nValue("Take Loaded", "获取已下载的"),
  downloadStart: new I18nValue("Start Download", "开始下载"),
  downloadRangeStart: new I18nValue("Download Range begin this page", "从此页开始"),
  downloadRangeUntil: new I18nValue("Start Download until this page", "开始下载此页之前的内容"),
  downloading: new I18nValue("Downloading...", "下载中..."),
  downloadFailed: new I18nValue("Failed(Retry)", "下载失败(重试)"),
  downloaded: new I18nValue("Downloaded", "下载完成"),
  packaging: new I18nValue("Packaging...", "打包中..."),
  reversePages: new I18nValue("Reverse Pages", "反向翻页"),
  reversePagesTooltip: new I18nValue("Clicking on the side navigation, if enable then reverse paging, which is a reading style similar to Japanese manga where pages are read from right to left.", "点击侧边导航时，是否反向翻页，反向翻页类似日本漫画那样的从右到左的阅读方式。"),
  autoCollapsePanel: new I18nValue("Auto Fold Control Panel", "自动收起控制面板"),
  autoCollapsePanelTooltip: new I18nValue("When the mouse is moved out of the control panel, the control panel will automatically fold. If disabled, the display of the control panel can only be toggled through the button on the control bar.", "当鼠标移出控制面板时，自动收起控制面板。禁用此选项后，只能通过控制栏上的按钮切换控制面板的显示。"),
  enableDownloadRange: new I18nValue("Enable download range", "允许下载范围内的图片"),
  disableCssAnimation: new I18nValue("Disable Animation", "禁用动画"),
  disableCssAnimationTooltip: new I18nValue("Valid after refreshing the page", "刷新页面后生效"),
  stickyMouse: new I18nValue("Sticky Mouse", "黏糊糊鼠标"),
  stickyMouseTooltip: new I18nValue("In non-continuous reading mode, scroll a single image automatically by moving the mouse.", "非连续阅读模式下，通过鼠标移动来自动滚动单张图片。"),
  minifyPageHelper: new I18nValue("Minify Control Bar", "最小化控制栏"),
  minifyPageHelperTooltip: new I18nValue("Minify Control Bar", "最小化控制栏"),
  paginationIMGCount: new I18nValue("Images Per Page", "每页图片数量"),
  paginationIMGCountTooltip: new I18nValue("In Pagination Read mode, the number of images displayed on each page", "在翻页阅读模式下，每页展示的图片数量"),
  hitomiFormat: new I18nValue("Hitomi Image Format", "Hitomi 图片格式"),
  hitomiFormatTooltip: new I18nValue("In Hitomi, Fetch images by the format.<br>if Auto then try Avif > Jxl > Webp, Requires Refresh", "在Hitomi中的源图格式。<br>如果是Auto，则优先获取Avif > Jxl > Webp，修改后需要刷新生效。"),
  ehentaiTitlePrefer: new I18nValue("EHentai Prefer Title", "EHentai标题语言"),
  ehentaiTitlePreferTooltip: new I18nValue("Many galleries have both an English/Romanized title and a title in Japanese script. <br>Which one do you want to use as the archive filename?", "许多图库都同时拥有英文/罗马音标题和日文标题，<br>您希望下载时哪个作为文件名？"),
  reverseMultipleImagesPost: new I18nValue("Descending Images In Post", "反转推文图片顺序"),
  reverseMultipleImagesPostTooltip: new I18nValue("Reverse order for post with multiple images attatched", "反转推文图片顺序"),
  autoOpen: new I18nValue("Auto Open", "自动展开"),
  autoOpenTooltip: new I18nValue("Automatically open after the gallery page is loaded", "进入画廊页面后，自动展开阅读视图。"),
  autoLoadInBackground: new I18nValue("Keep Loading", "后台加载"),
  autoLoadInBackgroundTooltip: new I18nValue("Keep Auto-Loading after the tab loses focus", "当标签页失去焦点后保持自动加载。"),
  dragToMove: new I18nValue("Drag to Move", "拖动移动"),
  originalCheck: new I18nValue("<a class='clickable' style='color:gray;'>Enable RawImage Transient</a>", "未启用最佳质量图片，点击此处<a class='clickable' style='color:gray;'>临时开启最佳质量</a>"),
  showHelp: new I18nValue("Help", "帮助"),
  showKeyboard: new I18nValue("Keyboard", "快捷键"),
  showExcludes: new I18nValue("Excludes", "站点排除"),
  showAutoOpenExcludes: new I18nValue("AutoOpenExcludes", "自动打开排除"),
  letUsStar: new I18nValue("Let's Star", "点星"),
  help: new I18nValue(`
    <h1>GUIDE:</h1>
    <ol>
      <li>If you are browsing E-Hentai, please click <a style="color: red" id="renamelink" href="${window.location.href}?inline_set=ts_l">Here</a> to switch to Lager thumbnail mode for clearer thumbnails. (need login e-hentai)</li>
      <li>Click <span style="background-color: gray;">&lessdot;📖&gtdot;</span> from left-bottom corner, entry reading.</li>
      <li>Just a monment, all thumbnail will exhibited in grid, <strong style="color: red;">click</strong> one of thumbnails into big image mode.</li>
      <li>You can use the <strong style="color: red;">mouse middle-click</strong> on a thumbnail to open the href of the image in new tab.</li>
      <li><strong style="color: orange">Image quality:</strong>For e-hentai，you can enable control-bar > CONF > Image Raw, which will directly download the uploaded original uncompressed images, but it will consume more quotas. Generally, the compressed files provided by E-Hentai are already clear enough.</li>
      <li><strong style="color: orange">Big image:</strong>click thumbnail image, into big image mode, use mouse wheel switch to next or prev</li>
      <li><strong style="color: orange">Keyboard:</strong>
        <table>
          <tr><td>Scale Image</td><td>mouse right + wheel or -/=</td></tr>
          <tr><td>Open  Image(In thumbnails)</td><td>Enter</td></tr>
          <tr><td>Exit  Image(In big mode)</td><td>Enter/Esc</td></tr>
          <tr><td>Open Specific Page(In thumbnails)</td><td>Input number(no echo) + Enter</td></tr>
          <tr><td>Switch Page</td><td>→/←</td></tr>
          <tr><td>Scroll Image</td><td>↑/↓/Space</td></tr>
          <tr><td>Toggle Auto Load</td><td>p</td></tr>
        </table>
      </li>
      <li><strong style="color: orange">Download:</strong>You can click on the download button in the download panel to quickly load all the images. You can still continue browsing the images. Downloading and viewing large images are integrated, and you can click on Download Loaded in the download panel to save the images at any time.</li>
      <li><strong style="color: orange">Download in range:</strong>Used to ignore some images, you should open big image mode first and go to the first image you want, client"Download Range begin this page", and select the latest image you want, click "Start Download until this page". For example, if you want to ignore the latest some ad. images, just select the last image you want in big image mode and click "Start Download until this page"</li>
      <li><strong style="color: orange">Feedback:</strong>
        Click 
        <span>
        <a style="color: #ff6961;" href="https://github.com/MapoMagpie/eh-view-enhance/issues" target="_blank" alt="Issue MapoMagpie/eh-view-enhance on GitHub">Issue</a>
        </span>
        to provide feedback on issues, Give me a star if you like this script.
        <span>
        <a style="color: #ff6961;" href="https://github.com/MapoMagpie/eh-view-enhance" target="_blank" alt="Star MapoMagpie/eh-view-enhance on GitHub">Star</a>
        </span>
      </li>
    </ol>
  `, `
    <h1>操作说明:</h1>
    <ol>
      <li>如果你正在浏览E绅士，请点击<a style="color: red" id="renamelink" href="${window.location.href}?inline_set=ts_l">此处</a>切换到Lager缩略图模式，以获取更清晰的缩略图。</li>
      <li>点击左下角 <span style="background-color: gray;">&lessdot;📖&gtdot;</span> 展开，进入阅读模式。</li>
      <li>稍等片刻后，缩略图会全屏陈列在页面上，<strong style="color: red;">点击</strong>某一缩略图进入大图浏览模式。</li>
      <li>你可以在某个缩略图上使用<strong style="color: red;">鼠标中键</strong>来打开该图片所在的页面。</li>
      <li><strong style="color: orange">图片质量:</strong>图片质量: 对于E绅士，你可以在控制栏>配置，启用原图模式，这将直接下载上传原档未压缩的图片，但会消耗更多的配额。一般来说E绅士默认提供的压缩档已经足够清晰。</li>
      <li><strong style="color: orange">大图展示:</strong>点击缩略图，可以展开大图，在大图上滚动切换上一张下一张图片</li>
      <li><strong style="color: orange">键盘操作:</strong>
        <table>
          <tr><td>图片缩放</td><td>鼠标右键+滚轮 或 -/=</td></tr>
          <tr><td>打开大图(缩略图模式下)</td><td>回车</td></tr>
          <tr><td>退出大图(大图模式下)</td><td>回车/Esc</td></tr>
          <tr><td>打开指定图片(缩略图模式下)</td><td>直接输入数字(不回显) + 回车</td></tr>
          <tr><td>切换图片</td><td>→/←</td></tr>
          <tr><td>滚动图片</td><td>↑/↓</td></tr>
          <tr><td>开关自动加载</td><td>p</td></tr>
        </table>
      </li>
      <li><strong style="color: orange">下载功能:</strong>你可以在下载面板中点击下载，这将快速加载所有的图片，你依旧可以继续浏览图片。下载与大图浏览是一体的，你随时可以在下载面板点击<strong style="color: orange">下载已加载的</strong>保存图片。</li>
      <li><strong style="color: orange">下载区间内的内容:</strong>需要从菜单中打开，可以只下载指定的若干张图片，首先需要你打开大图模式点击第一张想要下载的图片，点击"从此页开始下载"，随后选择最后一张想要下载的图片，点击"开始下载此页之前的内容"。例如屏蔽最后几张广告只需要，点击最后一张想下载的大图，然后点击"开始下载此页之前的内容"</li>
      <li><strong style="color: orange">问题反馈:</strong>
        点击 
        <span>
        <a style="color: #ff6961;" href="https://github.com/MapoMagpie/eh-view-enhance/issues" target="_blank" alt="Issue MapoMagpie/eh-view-enhance on GitHub">Issue</a>
        </span>
        反馈你的问题或建议，如果你喜欢这个脚本，给我一个star吧。 
        <span>
        <a style="color: #ff6961;" href="https://github.com/MapoMagpie/eh-view-enhance" target="_blank" alt="Star MapoMagpie/eh-view-enhance on GitHub">Star</a>
        </span>
      </li>
    </ol>
  `),
  keyboardCustom: keyboardCustom,
};
