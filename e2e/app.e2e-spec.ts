import { AngularRouterLinkPage } from './app.po';

describe('angular-router-link App', () => {
  let page: AngularRouterLinkPage;

  beforeEach(() => {
    page = new AngularRouterLinkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
