import { browser, by, element } from 'protractor';

describe('Profile', () => {

  beforeEach(() => {
    browser.get('/profile');
  });


  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'TutorialJS';
    expect(subject).toEqual(result);
  });

});
