import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { LevelService } from '../../../core/services/level';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'level-modal'
  selector: 'level-modal',  // <level-modal></level-modal>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    LevelService
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './level-modal.style.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './level-modal.template.pug'
})

export class LevelModalComponent implements OnInit {
  @Input() data: ILevel = {
    name: '',
    description: ''
  };

  constructor(
    public modalInstance: NgbActiveModal,
    private toastr: ToastsManager,
    private levelService: LevelService
  ) {
    console.log('hello `Level Modal` component');
  }

  ngOnInit(): void { }

  public save() {
    if (this.data.id) {
      this.levelService.update(this.data)
        .$observable
        .subscribe(
          () => {
            this.toastr.success(`Level has been updated successfully.`, 'Success!');
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
      this.levelService.save(this.data)
        .$observable
        .subscribe(
          (level: ILevel) => {
            this.toastr.success(`Level has been created successfully.`, 'Success!');
            this.modalInstance.close(level);
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
