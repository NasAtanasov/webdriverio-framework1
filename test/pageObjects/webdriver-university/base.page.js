export default class BasePage {
    open (path) {
        return browser.url(`${path}`); //wdio.conf.js https://www.webdriveruniversity.com/${path};
    }
}