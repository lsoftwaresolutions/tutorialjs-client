import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ItemsTypeService } from '../../../core/services/items-type';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'items-type-modal'
  selector: 'items-type-modal',  // <items-type-modal></items-type-modal>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    ItemsTypeService
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './items-type-modal.style.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './items-type-modal.template.pug'
})

export class ItemsTypeModalComponent implements OnInit {
  @Input() data: IItemsType = {
    name: '',
    description: ''
  };

  constructor(
    public modalInstance: NgbActiveModal,
    private toastr: ToastsManager,
    private itemsTypeService: ItemsTypeService
  ) {
    console.log('hello `Items Type Modal` component');
  }

  ngOnInit(): void { }

  public save() {
    if (this.data.id) {
      this.itemsTypeService.update(this.data)
        .$observable
        .subscribe(
          () => {
            this.toastr.success(`Items Type has been updated successfully.`, 'Success!');
            this.modalInstance.close(this.data);
          },
          (error: any) => {
            let message: string = 'Something went wrong...';
            if (error && error.message) {
              message = error.message;
            }
            this.toastr.error(message, 'Oops!');
          }
        );
    }
    else {
      this.itemsTypeService.save(this.data)
        .$observable
        .subscribe(
          (itemsType: IItemsType) => {
            this.toastr.success(`Items Type has been created successfully.`, 'Success!');
            this.modalInstance.close(itemsType);
          },
          (error: any) => {
            let message: string = 'Something went wrong...';
            if (error && error.message) {
              message = error.message;
            }
            this.toastr.error(message, 'Oops!');
          }
        );
    }
  }
}
