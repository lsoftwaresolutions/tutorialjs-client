import { browser, by, element } from 'protractor';

describe('Chat', () => {

  beforeEach(() => {
    browser.get('/chat');
  });


  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'TutorialJS';
    expect(subject).toEqual(result);
  });

});
