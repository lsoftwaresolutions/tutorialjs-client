import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'dashboard'
  selector: 'dashboard',  // <dashboard></dashboard>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './dashboard.style.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './dashboard.template.pug'
})

export class DashboardComponent implements OnInit {
  constructor() {
    console.log('hello `Dashboard` component');
  }

  ngOnInit(): void { }
}
