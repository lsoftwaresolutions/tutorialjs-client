import { browser, by, element } from 'protractor';

describe('Layout', () => {

  beforeEach(() => {
    browser.get('/admin');
  });


  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'TutorialJS';
    expect(subject).toEqual(result);
  });

});
