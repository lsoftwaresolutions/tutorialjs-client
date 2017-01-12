import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../../../core/services/course';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'courses'
  selector: 'courses',  // <courses></courses>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    CourseService
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './courses.style.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './courses.template.pug'
})

export class CoursesComponent implements OnInit {
  public courses: ICourse[];

  constructor(
    private courseService: CourseService
  ) {
    console.log('hello `Courses` component');
    this.load();
  }

  ngOnInit(): void { }

  public refresh() {
    this.load();
  }

  private load() {
    this.courseService.query()
      .$observable
      .subscribe(
        (courses: ICourse[]) => this.courses = this.order(courses)
      );
  }

  private order(courses: ICourse[]): ICourse[] {
    return courses.sort((lhs: ICourse, rhs: ICourse) => lhs.order - rhs.order);
  }
}
