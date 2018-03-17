import { AppPage } from '../page-objects/app.po';

describe('Angular5Upgrade App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have a theme', () => {
    page.navigateTo();
    expect(page.getWebContainerClass()).toBeGreaterThan(13);
  })
});
