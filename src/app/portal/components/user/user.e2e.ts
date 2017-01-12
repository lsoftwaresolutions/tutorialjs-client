import { browser, by, element } from 'protractor';

describe('User', () => {

  beforeEach(() => {
    browser.get('/user');
  });


  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'TutorialJS';
    expect(subject).toEqual(result);
  });

});
