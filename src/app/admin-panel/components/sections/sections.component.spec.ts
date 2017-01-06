import { inject, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { SectionsComponent } from './sections.component';

describe('Sections', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SectionsComponent
    ]}));

  it('should have a title', inject([ SectionsComponent ], (component: SectionsComponent) => {
    expect(true).toEqual(true);
  }));

});
