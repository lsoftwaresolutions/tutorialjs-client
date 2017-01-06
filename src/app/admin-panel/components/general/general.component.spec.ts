import { inject, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { GeneralComponent } from './general.component';

describe('Home', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      GeneralComponent
    ]}));

  it('should have a title', inject([ GeneralComponent ], (component: GeneralComponent) => {
    expect(true).toEqual(true);
  }));

});
