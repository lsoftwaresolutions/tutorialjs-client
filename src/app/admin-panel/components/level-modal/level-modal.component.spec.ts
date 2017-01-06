import { inject, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { LevelModalComponent } from './level-modal.component';

describe('Level Modal', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LevelModalComponent
    ]}));

  it('should have a title', inject([ LevelModalComponent ], (component: LevelModalComponent) => {
    expect(true).toEqual(true);
  }));

});
