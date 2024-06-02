import { Debouncer } from "./utils/debouncer";
import { FetchState, IMGFetcher } from "./img-fetcher";
import { Oriented, conf } from "./config";
import EBUS from "./event-bus";
import { DEFAULT_DOWNLOADSTART, DEFAULT_DOWNLOADUNTIL } from "./download/downloader";
import { evLog } from "./utils/ev-log";

export class IMGFetcherQueue extends Array<IMGFetcher> {
  executableQueue: number[];
  currIndex: number;
  finishedIndex: Set<number> = new Set();
  private debouncer: Debouncer;
  downloading?: () => boolean;
  dataSize: number = 0;
  chapterIndex: number = 0;

  clear() {
    this.length = 0;
    this.executableQueue = [];
    this.currIndex = 0;
    this.finishedIndex.clear();
  }

  restore(chapterIndex: number, imfs: IMGFetcher[]) {
    this.clear();
    this.chapterIndex = chapterIndex;
    imfs.forEach((imf, i) => imf.stage === FetchState.DONE && this.finishedIndex.add(i));
    this.push(...imfs);
  }

  static newQueue() {
    const queue = new IMGFetcherQueue();
    // avoid Array.slice or some methods trigger Array.constructor
    EBUS.subscribe("imf-on-finished", (index, success, imf) => queue.chapterIndex === imf.chapterIndex && queue.finishedReport(index, success, imf));
    EBUS.subscribe("ifq-do", (index, imf, oriented) => {
      if (imf.chapterIndex !== queue.chapterIndex) return;
      queue.do(index, oriented);
    });
    EBUS.subscribe("pf-change-chapter", () => queue.forEach(imf => imf.unrender()));
    return queue;
  }

  constructor() {
    super();
    //可执行队列
    this.executableQueue = [];
    //当前的显示的大图的图片请求器所在的索引
    this.currIndex = 0;
    //已经完成加载的
    this.debouncer = new Debouncer();
  }

  // 0 - 3, 0 1 2
  //-1 - 3, 0 1 2
  isFinised(changed: boolean = false, start: number = DEFAULT_DOWNLOADSTART, until: number = DEFAULT_DOWNLOADUNTIL) {
    if (!changed)
      return this.finishedIndex.size === this.length;

    evLog("debug", "isFinished", changed, start, until, this.length);
    if (start < until) {
      // (start, 0, 1, 2, xxx, until)
      for (let i = start + 1; i < until && i <= this.length; i++) {
        if (!this.finishedIndex.has(i)) {
          return false;
        }
      }
      return true;
      // return Array.from({length: until - start}, (_, i) => i + start).every(num => this.finishedIndex.has(num));
    }
    return false;
  }

  do(start: number, oriented?: Oriented) {
    oriented = oriented || "next";
    //边界约束
    this.currIndex = this.fixIndex(start);
    EBUS.emit("ifq-on-do", this.currIndex, this, this.downloading?.() || false);
    if (this.downloading?.()) return;

    //从当前索引开始往后,放入指定数量的图片获取器,如果该图片获取器已经获取完成则向后延伸.
    //如果最后放入的数量为0,说明已经没有可以继续执行的图片获取器,可能意味着后面所有的图片都已经加载完毕,也可能意味着中间出现了什么错误
    if (!this.pushInExecutableQueue(oriented)) return;

    /* 300毫秒的延迟，在这300毫秒的时间里，可执行队列executableQueue可能随时都会变更，300毫秒过后，只执行最新的可执行队列executableQueue中的图片请求器
            在对大图元素使用滚轮事件的时候，由于速度非常快，大量的IMGFetcher图片请求器被添加到executableQueue队列中，如果调用这些图片请求器请求大图，可能会被认为是爬虫脚本
            因此会有一个时间上的延迟，在这段时间里，executableQueue中的IMGFetcher图片请求器会不断更替，300毫秒结束后，只调用最新的executableQueue中的IMGFetcher图片请求器。 */
    this.debouncer.addEvent("IFQ-EXECUTABLE", () =>
      // console.log("IFQ-EXECUTABLE", this.executableQueue);
      Promise.all(this.executableQueue.splice(0, conf.paginationIMGCount).map(imfIndex => this[imfIndex].start(imfIndex)))
        .then(() => this.executableQueue.forEach(imfIndex => this[imfIndex].start(imfIndex)))
      ,
      300);
  }

  //等待图片获取器执行成功后的上报，如果该图片获取器上报自身所在的索引和执行队列的currIndex一致，则改变大图
  finishedReport(index: number, success: boolean, imf: IMGFetcher) {
    // change chapter will clear this
    if (this.length === 0) return;
    // evLog("ifq finished report, index: ", index, ", success: ", success, ", current index: ", this.currIndex);
    if (!success || imf.stage !== FetchState.DONE) return;
    // if (!this.finishedIndex.has(index)) { }
    this.finishedIndex.add(index);
    if (this.dataSize < 1000000000) { // 1GB
      this.dataSize += imf.data?.byteLength || 0;
    }
    EBUS.emit("ifq-on-finished-report", index, this);
  }

  //如果开始的索引小于0,则修正索引为0,如果开始的索引超过队列的长度,则修正索引为队列的最后一位
  fixIndex(start: number) {
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
  pushInExecutableQueue(oriented: Oriented) {
    //把要执行获取器先放置到队列中，延迟执行
    this.executableQueue = [];
    for (let count = 0, index = this.currIndex; this.checkOutbounds(index, oriented, count); oriented === "next" ? ++index : --index) {
      if (this[index].stage === FetchState.DONE) continue;
      this.executableQueue.push(index);
      count++;
    }
    return this.executableQueue.length > 0;
  }

  // 如果索引已到达边界且添加数量在配置最大同时获取数量的范围内
  checkOutbounds(index: number, oriented: Oriented, count: number) {
    let ret = false;
    if (oriented === "next") ret = index < this.length;
    if (oriented === "prev") ret = index > -1;
    if (!ret) return false;
    if (count < conf.threads + conf.paginationIMGCount - 1) return true;
    return false;
  }

  findImgIndex(ele: HTMLElement): number {
    for (let index = 0; index < this.length; index++) {
      if (this[index].node.equal(ele)) {
        return index;
      }
    }
    return 0;
  }

}
