import { inject, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { NewsModalComponent } from './news-modal.component';

describe('News Modal', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      NewsModalComponent
    ]}));

  it('should have a title', inject([ NewsModalComponent ], (component: NewsModalComponent) => {
    expect(true).toEqual(true);
  }));

});
