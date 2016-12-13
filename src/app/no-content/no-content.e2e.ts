import { browser, by, element } from 'protractor';

describe('404', () => {

  beforeEach(() => {
    browser.get('/no-content');
  });


  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'TutorialJS';
    expect(subject).toEqual(result);
  });

});
