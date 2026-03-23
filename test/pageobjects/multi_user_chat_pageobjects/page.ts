import { browser } from "@wdio/globals";
import {Browser} from 'webdriverio';

export default class Page {
  browser: Browser;

  constructor(browser: Browser) {
    this.browser = browser;
  }

  public open() {
    return browser.url(`http://localhost:3000/`);
  }
}
