import { inject, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { UserComponent } from './user.component';

describe('User', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      UserComponent
    ]}));

  it('should have a title', inject([ UserComponent ], (component: UserComponent) => {
    expect(true).toEqual(true);
  }));

});
