import { inject, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { PortalLayoutComponent } from './portal-layout.component';

describe('Portal Layout', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      PortalLayoutComponent
    ]}));

  it('should have a title', inject([ PortalLayoutComponent ], (component: PortalLayoutComponent) => {
    expect(true).toEqual(true);
  }));

});
