import { inject, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { CourseModalComponent } from './course-modal.component';

describe('Course Modal', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CourseModalComponent
    ]}));

  it('should have a title', inject([ CourseModalComponent ], (component: CourseModalComponent) => {
    expect(true).toEqual(true);
  }));

});
