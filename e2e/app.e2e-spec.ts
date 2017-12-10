import { AreuDemoPage } from './app.po';

describe('areu-demo App', function() {
  let page: AreuDemoPage;

  beforeEach(() => {
    page = new AreuDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
