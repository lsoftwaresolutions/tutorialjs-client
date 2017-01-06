import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'courses'
  selector: 'courses',  // <courses></courses>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './courses.style.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './courses.template.pug'
})

export class CoursesComponent implements OnInit {
  constructor() {
    console.log('hello `Courses` component');
  }

  ngOnInit(): void { }
}
