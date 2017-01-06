import { inject, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { SectionModalComponent } from './section-modal.component';

describe('Section Modal', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SectionModalComponent
    ]}));

  it('should have a title', inject([ SectionModalComponent ], (component: SectionModalComponent) => {
    expect(true).toEqual(true);
  }));

});
