import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getWebContainerClass() {
    let containerClass = element(by.css('.web-container')).getAttribute('class');
    return containerClass.then((value) => value.length);
  }
}
