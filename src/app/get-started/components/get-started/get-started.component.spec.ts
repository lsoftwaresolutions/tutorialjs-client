import { inject, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { GetStartedComponent } from './get-started.component';

describe('Get Started', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      GetStartedComponent
    ]}));

  it('should have ctx', inject([ GetStartedComponent ], (component: GetStartedComponent) => {
    expect(true).toEqual(true);
  }));

});
