import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ItemService } from '../../../core/services/item';
import { ItemsTypeService } from '../../../core/services/items-type';
import { LevelService } from '../../../core/services/level';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'item-modal'
  selector: 'item-modal',  // <item-modal></item-modal>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    ItemService,
    ItemsTypeService,
    LevelService
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './item-modal.style.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './item-modal.template.pug'
})

export class ItemModalComponent implements OnInit {
  public itemsTypes: IItemsType[];
  public itemsTypesMap: any;
  public levels: ILevel[];
  public question: IQuestion = {
    text: '',
    weight: 0
  };
  @Input() data: IItem = {
    name: '',
    description: ''
  };

  constructor(
    public modalInstance: NgbActiveModal,
    private toastr: ToastsManager,
    private itemService: ItemService,
    private itemsTypeService: ItemsTypeService,
    private levelService: LevelService
  ) {
    console.log('hello `Item Modal` component');
    this.loadItemsTypes();
    this.loadLevels();
  }

  ngOnInit(): void { }

  public save() {
    if (this.data.id) {
      this.itemService.update(this.data)
        .$observable
        .subscribe(
          () => {
            this.toastr.success(`Item has been updated successfully.`, 'Success!');
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
      this.itemService.save(this.data)
        .$observable
        .subscribe(
          (item: IItem) => {
            this.toastr.success(`Item has been created successfully.`, 'Success!');
            this.modalInstance.close(item);
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

  public onFroalaModelChanged(event: any) {
    setTimeout(() => {
      this.data.description = event;
    });
  }

  public onFroalaQuestionModelChanged(event: any) {
    setTimeout(() => {
      this.data.description = event;
    });
  }

  private loadItemsTypes() {
    this.itemsTypeService.query()
      .$observable
      .subscribe(
        (itemsTypes: IItemsType[]) => {
          this.itemsTypes = itemsTypes;
          this.itemsTypesMap = itemsTypes.reduce((prev, cur) => {
            prev[cur.id] = cur;
            return prev;
          }, { });
        }
      );
  }

  private loadLevels() {
    this.levelService.query()
      .$observable
      .subscribe(
        (levels: ILevel[]) => this.levels = levels
      );
  }
}
