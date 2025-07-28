import { Config, getConf, getSiteConfig } from "../config";
import { Matcher } from "./platform";

export type MatcherSetup = {
  name: string,
  workURLs: RegExp[],
  match?: string[],
  constructor: () => Matcher<any>,
}

export class Adapter {
  ready: Promise<MatcherSetup>;
  resolve?: (matcher: MatcherSetup) => void;
  reject: any;
  matchers: MatcherSetup[];
  matcher?: MatcherSetup;
  conf: Config & { selectedSiteNameConfig?: string };
  globalConf: Config;

  constructor() {
    this.ready = new Promise<MatcherSetup>((resolve, _reject) => this.resolve = resolve);
    this.matchers = [];
    this.globalConf = this.conf = getConf();
  }

  addSetup(setup: MatcherSetup) {
    this.matchers.push(setup);
    const siteConf = getSiteConfig(setup.name);
    if (!(siteConf.enable ?? true)) {
      return;
    }
    let workURLs = siteConf.workURLs?.map(regex => new RegExp(regex)) ?? [];
    if (workURLs.length === 0) {
      workURLs = setup.workURLs;
    }
    if (workURLs.find(regex => regex.test(window.location.href))) {
      this.conf = { ...this.conf, ...siteConf };
      this.matcher = setup;
      this.resolve?.(setup);
    }
  }
}

export const ADAPTER = new Adapter();
