import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as swal from 'sweetalert2';
import { SectionService } from '../../../core/services/section';
import { SectionModalComponent } from '../section-modal/section-modal.component';


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
    private modalService: NgbModal,
    private sectionService: SectionService,
    activatedRoute: ActivatedRoute,
    router: Router
  ) {
    console.log('hello `Sections` component');
    activatedRoute.params
      .subscribe(
        (params: Params) => {
          this.courseId = params['id'];
          this.load();
        },
        () => {
          router.navigate([ '/admin/courses' ]);
        }
      );
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

  public remove(section, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    swal({
      title: 'Are you sure?',
      // tslint:disable-next-line:max-line-length
      text: `Are you sure you want delete "${section.name}" section? You won't be able to revert this!`,
      type: 'question',
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
        this.sectionService.remove({ id: section.id })
          .$observable
          .subscribe(
            () => {
              swal({
                title: 'Deleted!',
                text: 'Section has been deleted successfully.',
                type: 'success',
                confirmButtonClass: 'btn btn-primary d5-init-ripples',
                buttonsStyling: false,
                showCloseButton: true
              });
              let index: number = this.sections.findIndex((e: ISection) => e.id === section.id);
              if (index !== -1) {
                this.sections.splice(index, 1);
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

  private open(data?: ISection) {
    const modalRef = this.modalService.open(SectionModalComponent);
    if (data) {
      modalRef.componentInstance.data = Object.assign({ }, data);
      modalRef.result.then((section: ISection) => Object.assign(data, section), () => { });
    } else {
      modalRef.componentInstance.data = { courseId: this.courseId };
      modalRef.result.then((section: ISection) => this.sections.push(section), () => { });
    }
  }

  private load() {
    this.sectionService.query({ courseId: this.courseId })
      .$observable
      .subscribe(
        (sections: ISection[]) => this.sections = sections
      );
  }
}
