import { browser, by, element } from 'protractor';

describe('Get Started', () => {

  beforeEach(() => {
    browser.get('/get-started');
  });


  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'TutorialJS';
    expect(subject).toEqual(result);
  });

});
