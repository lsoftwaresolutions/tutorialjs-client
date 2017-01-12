import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as swal from 'sweetalert2';
import { ItemsTypeService } from '../../../core/services/items-type';
import { ItemsTypeModalComponent } from '../items-type-modal/items-type-modal.component';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'items-types'
  selector: 'items-types',  // <items-types></items-types>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    ItemsTypeService
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './items-types.style.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './items-types.template.pug'
})

export class ItemsTypesComponent implements OnInit {
  public itemsTypes: IItemsType[];
  public courseId: string;

  constructor(
    private modalService: NgbModal,
    private itemsTypeService: ItemsTypeService,
    activatedRoute: ActivatedRoute,
    router: Router
  ) {
    console.log('hello `Items Types` component');
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

  public remove(itemsType, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    swal({
      title: 'Are you sure?',
      // tslint:disable-next-line:max-line-length
      text: `Are you sure you want delete "${itemsType.name}" items type? You won't be able to revert this!`,
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
        this.itemsTypeService.remove({ id: itemsType.id })
          .$observable
          .subscribe(
            () => {
              swal({
                title: 'Deleted!',
                text: 'Items Type has been deleted successfully.',
                type: 'success',
                confirmButtonClass: 'btn btn-primary d5-init-ripples',
                buttonsStyling: false,
                showCloseButton: true
              });
              // tslint:disable-next-line:max-line-length
              let index: number = this.itemsTypes.findIndex((e: IItemsType) => e.id === itemsType.id);
              if (index !== -1) {
                this.itemsTypes.splice(index, 1);
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

  private open(data?: IItemsType) {
    const modalRef = this.modalService.open(ItemsTypeModalComponent);
    if (data) {
      modalRef.componentInstance.data = Object.assign({ }, data);
      modalRef.result.then((itemsType: IItemsType) => Object.assign(data, itemsType), () => { });
    } else {
      modalRef.componentInstance.data = { courseId: this.courseId };
      modalRef.result.then((itemsType: IItemsType) => this.itemsTypes.push(itemsType), () => { });
    }
  }

  private load() {
    this.itemsTypeService.query()
      .$observable
      .subscribe(
        (itemsTypes: IItemsType[]) => this.itemsTypes = itemsTypes
      );
  }
}
