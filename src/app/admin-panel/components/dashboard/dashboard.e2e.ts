import { browser, by, element } from 'protractor';

describe('Dashboard', () => {

  beforeEach(() => {
    browser.get('/admin/dashboard');
  });


  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'TutorialJS';
    expect(subject).toEqual(result);
  });

});
