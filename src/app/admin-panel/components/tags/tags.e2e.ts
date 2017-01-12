import { browser, by, element } from 'protractor';

describe('Tags', () => {

  beforeEach(() => {
    browser.get('/admin/general');
  });


  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'TutorialJS';
    expect(subject).toEqual(result);
  });

});
