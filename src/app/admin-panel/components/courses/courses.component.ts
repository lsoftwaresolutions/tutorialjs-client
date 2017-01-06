import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as swal from 'sweetalert2';
import { CourseService } from '../../../core/services/course';
import { CourseModalComponent } from '../course-modal/course-modal.component';


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
    private modalService: NgbModal,
    private courseService: CourseService
  ) {
    console.log('hello `Courses` component');
    this.load();
  }

  ngOnInit(): void { }

  public add() {
    this.open();
  }

  public edit(data, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.open(data);
  }

  public remove(course, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    swal({
      title: 'Are you sure?',
      // tslint:disable-next-line:max-line-length
      text: `Are you sure you want delete "${course.name}" course? You won't be able to revert this!`,
      type: 'warning',
      reverseButtons: true,
      focusCancel: true,
      showCancelButton: true,
      buttonsStyling: false,
      showCloseButton: true,
      confirmButtonClass: 'btn btn-danger margin-5 d5-init-ripples',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonClass: 'btn btn-default margin-5 d5-init-ripples',
      cancelButtonText: 'No!'
    })
      .then(() => {
        this.courseService.remove({ id: course.id })
          .$observable
          .subscribe(
            () => {
              swal({
                title: 'Deleted!',
                text: 'Course has been deleted successfully.',
                type: 'success',
                confirmButtonClass: 'btn btn-primary d5-init-ripples',
                buttonsStyling: false,
                showCloseButton: true
              });
              let index: number = this.courses.findIndex((e: ICourse) => e.id === course.id);
              if (index !== -1) {
                this.courses.splice(index, 1);
              }
            },
            () => {
              swal({
                title: 'Error...',
                text: 'Something went wrong.',
                type: 'error',
                confirmButtonClass: 'btn btn-primary d5-init-ripples',
                buttonsStyling: false,
                showCloseButton: true
              });
            }
          );
      })
      .catch(swal.noop);
  }

  public refresh() {
    this.load();
  }

  private open(data?: ICourse) {
    const modalRef = this.modalService.open(CourseModalComponent);
    if (data) {
      modalRef.componentInstance.data = Object.assign({ }, data);
      modalRef.result.then((course: ICourse) => Object.assign(data, course), () => { });
    } else {
      modalRef.result.then((course: ICourse) => this.courses.push(course), () => { });
    }
  }

  private load() {
    this.courseService.query()
      .$observable
      .subscribe(
        (courses: ICourse[]) => this.courses = courses
      );
  }
}
