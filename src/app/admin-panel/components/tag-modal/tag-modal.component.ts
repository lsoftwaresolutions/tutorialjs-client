import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { TagService } from '../../../core/services/tag';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'tag-modal'
  selector: 'tag-modal',  // <tag-modal></tag-modal>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    TagService
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './tag-modal.style.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './tag-modal.template.pug'
})

export class TagModalComponent implements OnInit {
  @Input() data: ITag = {
    name: '',
    description: ''
  };

  constructor(
    public modalInstance: NgbActiveModal,
    private toastr: ToastsManager,
    private tagService: TagService
  ) {
    console.log('hello `Tag Modal` component');
  }

  ngOnInit(): void { }

  public save() {
    if (this.data.id) {
      this.tagService.update(this.data)
        .$observable
        .subscribe(
          () => {
            this.toastr.success(`Tag has been updated successfully.`, 'Success!');
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
      this.tagService.save(this.data)
        .$observable
        .subscribe(
          (tag: ITag) => {
            this.toastr.success(`Tag has been created successfully.`, 'Success!');
            this.modalInstance.close(tag);
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
