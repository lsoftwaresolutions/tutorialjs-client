import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ItemService } from '../../../core/services/item';
import { ItemsTypeService } from '../../../core/services/items-type';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'items'
  selector: 'items',  // <items></items>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    ItemService,
    ItemsTypeService
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './items.style.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './items.template.pug'
})

export class ItemsComponent implements OnInit {
  public itemsTypes: IItemsType[];
  public itemsTypesMap: any;
  public items: IItem[];
  public currentIndex: number = 0;
  public courseId: string;
  public sectionId: string;

  constructor(
    private itemService: ItemService,
    private itemsTypeService: ItemsTypeService,
    activatedRoute: ActivatedRoute,
    router: Router
  ) {
    console.log('hello `Sections` component');
    activatedRoute.params
      .subscribe(
        (params: Params) => {
          this.courseId = params['courseId'];
          this.sectionId = params['sectionId'];
          this.load();
        },
        () => {
          if (this.courseId) {
            router.navigate([ '/courses', this.courseId ]);
          } else {
            router.navigate([ '/courses' ]);
          }
        }
      );
    this.loadItemsTypes();
  }

  ngOnInit(): void { }

  public refresh() {
    this.load();
  }

  public prev() {
    this.currentIndex--;
  }

  public next() {
    this.currentIndex++;
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
