import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as swal from 'sweetalert2';
import { ItemService } from '../../../core/services/item';
import { ItemModalComponent } from '../item-modal/item-modal.component';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'items'
  selector: 'items',  // <items></items>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    ItemService
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './items.style.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './items.template.pug'
})

export class ItemsComponent implements OnInit {
  public items: IItem[];
  public courseId: string;
  public sectionId: string;

  constructor(
    private modalService: NgbModal,
    private itemService: ItemService,
    activatedRoute: ActivatedRoute,
    router: Router
  ) {
    console.log('hello `Items` component');
    activatedRoute.params
      .subscribe(
        (params: Params) => {
          this.courseId = params['courseId'];
          this.sectionId = params['sectionId'];
          this.load();
        },
        () => {
          if (this.courseId) {
            router.navigate([ '/admin/courses', this.courseId ]);
          } else {
            router.navigate([ '/admin/courses' ]);
          }
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

  public remove(item, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    swal({
      title: 'Are you sure?',
      // tslint:disable-next-line:max-line-length
      text: `Are you sure you want delete "${item.name}" item? You won't be able to revert this!`,
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
        this.itemService.remove({ id: item.id, course: this.courseId, section: this.sectionId })
          .$observable
          .subscribe(
            () => {
              swal({
                title: 'Deleted!',
                text: 'Item has been deleted successfully.',
                type: 'success',
                confirmButtonClass: 'btn btn-primary d5-init-ripples',
                buttonsStyling: false,
                showCloseButton: true
              });
              let index: number = this.items.findIndex((e: IItem) => e.id === item.id);
              if (index !== -1) {
                this.items.splice(index, 1);
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

  private open(data?: IItem) {
    const modalRef = this.modalService.open(ItemModalComponent, { size: 'lg' });
    if (data) {
      // tslint:disable-next-line:max-line-length
      modalRef.componentInstance.data = Object.assign(
        {
          course: this.courseId,
          section: this.sectionId
        },
        data,
        data.type && (<any>data.type)._id ? { type: (<any>data.type)._id } : { },
        data.level && (<any>data.level)._id ? { level: (<any>data.level)._id } : { }
      );
      // tslint:disable-next-line:max-line-length
      modalRef.result.then((item: IItem) => Object.assign(data, item) && this.order(this.items), () => { });
    } else {
      modalRef.componentInstance.data = { course: this.courseId, section: this.sectionId };
      // tslint:disable-next-line:max-line-length
      modalRef.result.then((item: IItem) => this.items.push(item) && this.order(this.items), () => { });
    }
  }

  private load() {
    this.itemService.query({ course: this.courseId, section: this.sectionId })
      .$observable
      .subscribe(
        (items: IItem[]) => this.items = this.order(items)
      );
  }

  private order(courses: IItem[]): IItem[] {
    return courses.sort((lhs: IItem, rhs: IItem) => lhs.order - rhs.order);
  }
}
