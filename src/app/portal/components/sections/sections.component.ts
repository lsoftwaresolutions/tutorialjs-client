import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SectionService } from '../../../core/services/section';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'sections'
  selector: 'sections',  // <sections></sections>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    SectionService
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './sections.style.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './sections.template.pug'
})

export class SectionsComponent implements OnInit {
  public sections: ISection[];
  public courseId: string;

  constructor(
    private sectionService: SectionService,
    activatedRoute: ActivatedRoute,
    router: Router
  ) {
    console.log('hello `Sections` component');
    activatedRoute.params
      .subscribe(
        (params: Params) => {
          this.courseId = params['courseId'];
          this.load();
        },
        () => {
          router.navigate([ '/courses' ]);
        }
      );
  }

  ngOnInit(): void { }

  public refresh() {
    this.load();
  }

  private load() {
    this.sectionService.query({ course: this.courseId })
      .$observable
      .subscribe(
        (sections: ISection[]) => this.sections = this.order(sections)
      );
  }

  private order(courses: ISection[]): ISection[] {
    return courses.sort((lhs: ISection, rhs: ISection) => lhs.order - rhs.order);
  }
}
