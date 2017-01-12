import { inject, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ItemsComponent } from './items.component';

describe('Items', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ItemsComponent
    ]}));

  it('should have a title', inject([ ItemsComponent ], (component: ItemsComponent) => {
    expect(true).toEqual(true);
  }));

});
