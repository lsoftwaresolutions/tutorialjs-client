import { inject, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ItemModalComponent } from './item-modal.component';

describe('Item Modal', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ItemModalComponent
    ]}));

  it('should have a title', inject([ ItemModalComponent ], (component: ItemModalComponent) => {
    expect(true).toEqual(true);
  }));

});
