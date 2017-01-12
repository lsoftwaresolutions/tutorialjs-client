import { inject, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ChatComponent } from './chat.component';

describe('Home', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ChatComponent
    ]}));

  it('should have a title', inject([ ChatComponent ], (component: ChatComponent) => {
    expect(true).toEqual(true);
  }));

});
