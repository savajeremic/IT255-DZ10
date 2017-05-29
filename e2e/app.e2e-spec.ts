import { IT255DZ10Page } from './app.po';

describe('it255-dz10 App', () => {
  let page: IT255DZ10Page;

  beforeEach(() => {
    page = new IT255DZ10Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
