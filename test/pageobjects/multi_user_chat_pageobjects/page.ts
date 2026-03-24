import {Browser} from 'webdriverio';

export default class Page {
  browser: Browser;

  constructor(browser: Browser) {
    this.browser = browser;
  }

  open(path: string) {
    return this.browser.url(path);
  }

}