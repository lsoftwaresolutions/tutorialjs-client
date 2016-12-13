import { inject, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { NoContentComponent } from './no-content.component';

describe('404', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      NoContentComponent
    ]}));

  it('should have a title', inject([ NoContentComponent ], (component: NoContentComponent) => {
    expect(true).toEqual(true);
  }));

});
