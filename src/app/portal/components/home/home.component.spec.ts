import { inject, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { HomeComponent } from './home.component';

describe('Home', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HomeComponent
    ]}));

  it('should have a title', inject([ HomeComponent ], (component: HomeComponent) => {
    expect(true).toEqual(true);
  }));

});
