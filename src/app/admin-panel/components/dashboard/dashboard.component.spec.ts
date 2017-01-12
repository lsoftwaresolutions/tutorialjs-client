import { inject, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard.component';

describe('Home', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      DashboardComponent
    ]}));

  it('should have a title', inject([ DashboardComponent ], (component: DashboardComponent) => {
    expect(true).toEqual(true);
  }));

});
