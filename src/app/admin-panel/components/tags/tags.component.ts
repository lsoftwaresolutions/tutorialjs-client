import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as swal from 'sweetalert2';
import { TagService } from '../../../core/services/tag';
import { TagModalComponent } from '../tag-modal/tag-modal.component';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'tags'
  selector: 'tags',  // <tags></tags>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    TagService
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './tags.style.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './tags.template.pug'
})

export class TagsComponent implements OnInit {
  public tags: ITag[];
  public courseId: string;

  constructor(
    private modalService: NgbModal,
    private tagService: TagService,
    activatedRoute: ActivatedRoute,
    router: Router
  ) {
    console.log('hello `Tags` component');
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

  public remove(tag, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    swal({
      title: 'Are you sure?',
      // tslint:disable-next-line:max-line-length
      text: `Are you sure you want delete "${tag.name}" tag? You won't be able to revert this!`,
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
        this.tagService.remove({ id: tag.id })
          .$observable
          .subscribe(
            () => {
              swal({
                title: 'Deleted!',
                text: 'Tag has been deleted successfully.',
                type: 'success',
                confirmButtonClass: 'btn btn-primary d5-init-ripples',
                buttonsStyling: false,
                showCloseButton: true
              });
              let index: number = this.tags.findIndex((e: ITag) => e.id === tag.id);
              if (index !== -1) {
                this.tags.splice(index, 1);
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

  private open(data?: ITag) {
    const modalRef = this.modalService.open(TagModalComponent);
    if (data) {
      modalRef.componentInstance.data = Object.assign({ }, data);
      modalRef.result.then((tag: ITag) => Object.assign(data, tag), () => { });
    } else {
      modalRef.componentInstance.data = { courseId: this.courseId };
      modalRef.result.then((tag: ITag) => this.tags.push(tag), () => { });
    }
  }

  private load() {
    this.tagService.query({ courseId: this.courseId })
      .$observable
      .subscribe(
        (tags: ITag[]) => this.tags = tags
      );
  }
}
