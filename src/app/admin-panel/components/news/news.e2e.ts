import { browser, by, element } from 'protractor';

describe('News', () => {

  beforeEach(() => {
    browser.get('/admin/news');
  });


  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'TutorialJS';
    expect(subject).toEqual(result);
  });

});
