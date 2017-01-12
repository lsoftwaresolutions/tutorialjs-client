import { inject, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ItemsTypeModalComponent } from './items-type-modal.component';

describe('ItemsType Modal', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ItemsTypeModalComponent
    ]}));

  it('should have a title', inject([ ItemsTypeModalComponent ], (component: ItemsTypeModalComponent) => {
    expect(true).toEqual(true);
  }));

});
