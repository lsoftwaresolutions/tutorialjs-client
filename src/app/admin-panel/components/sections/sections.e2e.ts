import { browser, by, element } from 'protractor';

describe('Sections', () => {

  beforeEach(() => {
    browser.get('/admin/courses/1');
  });


  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'TutorialJS';
    expect(subject).toEqual(result);
  });

});
