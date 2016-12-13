import { browser, by, element } from 'protractor';

describe('Portal Layout', () => {

  beforeEach(() => {
    browser.get('/portal-layout');
  });


  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'TutorialJS';
    expect(subject).toEqual(result);
  });

});
