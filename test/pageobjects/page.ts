import { browser } from '@wdio/globals'

export default class Page {
    public open () {
        return browser.url(`http://localhost:3000/`);
    }
}