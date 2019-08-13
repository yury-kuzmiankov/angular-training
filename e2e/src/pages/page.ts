import { element, by, browser } from 'protractor';

export class Page{
  br = browser;

  getTextByElement(selector) {
    return element(by.css(selector)).getText();
  }

  clickByElement(selector) {
    element(by.css(selector)).click();
  }

  getElement(selector) {
    return element(by.css(selector));
  }

  elementIsPresent(selector) {
    return element(by.css(selector)).isPresent().then((isPresent: boolean) => { return isPresent; });
  }

  elementIsVisible(selector) {
    return element(by.css(selector)).isVisible();
  }

  getPageTitle() {
    return this.br.getTitle();
  }
}
