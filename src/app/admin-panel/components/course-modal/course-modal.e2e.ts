import { browser, by, element } from 'protractor';

describe('Course Modal', () => {

  beforeEach(() => {
    browser.get('/admin/courses');
  });


  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'TutorialJS';
    expect(subject).toEqual(result);
  });

});
