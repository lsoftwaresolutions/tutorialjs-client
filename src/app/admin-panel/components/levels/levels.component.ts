import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as swal from 'sweetalert2';
import { LevelService } from '../../../core/services/level';
import { LevelModalComponent } from '../level-modal/level-modal.component';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'levels'
  selector: 'levels',  // <levels></levels>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    LevelService
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './levels.style.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './levels.template.pug'
})

export class LevelsComponent implements OnInit {
  public levels: ILevel[];
  public courseId: string;

  constructor(
    private modalService: NgbModal,
    private levelService: LevelService,
    activatedRoute: ActivatedRoute,
    router: Router
  ) {
    console.log('hello `Levels` component');
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

  public remove(level, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    swal({
      title: 'Are you sure?',
      // tslint:disable-next-line:max-line-length
      text: `Are you sure you want delete "${level.name}" level? You won't be able to revert this!`,
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
        this.levelService.remove({ id: level.id })
          .$observable
          .subscribe(
            () => {
              swal({
                title: 'Deleted!',
                text: 'Level has been deleted successfully.',
                type: 'success',
                confirmButtonClass: 'btn btn-primary d5-init-ripples',
                buttonsStyling: false,
                showCloseButton: true
              });
              let index: number = this.levels.findIndex((e: ILevel) => e.id === level.id);
              if (index !== -1) {
                this.levels.splice(index, 1);
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

  private open(data?: ILevel) {
    const modalRef = this.modalService.open(LevelModalComponent);
    if (data) {
      modalRef.componentInstance.data = Object.assign({ }, data);
      modalRef.result.then((level: ILevel) => Object.assign(data, level), () => { });
    } else {
      modalRef.componentInstance.data = { courseId: this.courseId };
      modalRef.result.then((level: ILevel) => this.levels.push(level), () => { });
    }
  }

  private load() {
    this.levelService.query({ courseId: this.courseId })
      .$observable
      .subscribe(
        (levels: ILevel[]) => this.levels = levels
      );
  }
}
