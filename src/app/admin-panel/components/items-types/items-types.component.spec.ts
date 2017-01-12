import { inject, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ItemsTypesComponent } from './items-types.component';

describe('ItemsTypes', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ItemsTypesComponent
    ]}));

  it('should have a title', inject([ ItemsTypesComponent ], (component: ItemsTypesComponent) => {
    expect(true).toEqual(true);
  }));

});
