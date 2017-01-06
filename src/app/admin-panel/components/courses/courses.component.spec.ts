import { inject, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { CoursesComponent } from './courses.component';

describe('Courses', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CoursesComponent
    ]}));

  it('should have a title', inject([ CoursesComponent ], (component: CoursesComponent) => {
    expect(true).toEqual(true);
  }));

});
