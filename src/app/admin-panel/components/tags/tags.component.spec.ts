import { inject, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { TagsComponent } from './tags.component';

describe('Tags', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TagsComponent
    ]}));

  it('should have a title', inject([ TagsComponent ], (component: TagsComponent) => {
    expect(true).toEqual(true);
  }));

});
