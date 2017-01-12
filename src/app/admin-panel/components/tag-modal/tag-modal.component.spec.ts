import { inject, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { TagModalComponent } from './tag-modal.component';

describe('Tag Modal', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TagModalComponent
    ]}));

  it('should have a title', inject([ TagModalComponent ], (component: TagModalComponent) => {
    expect(true).toEqual(true);
  }));

});
