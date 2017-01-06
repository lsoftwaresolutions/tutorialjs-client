import { inject, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { LevelsComponent } from './levels.component';

describe('Levels', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LevelsComponent
    ]}));

  it('should have a title', inject([ LevelsComponent ], (component: LevelsComponent) => {
    expect(true).toEqual(true);
  }));

});
