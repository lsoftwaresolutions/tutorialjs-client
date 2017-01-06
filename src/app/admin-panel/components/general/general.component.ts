import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'general'
  selector: 'general',  // <general></general>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './general.style.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './general.template.pug'
})

export class GeneralComponent implements OnInit {
  constructor() {
    console.log('hello `General` component');
  }

  ngOnInit(): void { }
}
