import { inject, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { NewsComponent } from './news.component';

describe('News', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      NewsComponent
    ]}));

  it('should have a title', inject([ NewsComponent ], (component: NewsComponent) => {
    expect(true).toEqual(true);
  }));

});
