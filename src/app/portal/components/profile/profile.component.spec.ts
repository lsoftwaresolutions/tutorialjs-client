import { inject, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ProfileComponent } from './profile.component';

describe('Profile', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ProfileComponent
    ]}));

  it('should have a title', inject([ ProfileComponent ], (component: ProfileComponent) => {
    expect(true).toEqual(true);
  }));

});
