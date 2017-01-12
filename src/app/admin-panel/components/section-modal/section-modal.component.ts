import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { SectionService } from '../../../core/services/section';
import { LevelService } from '../../../core/services/level';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'section-modal'
  selector: 'section-modal',  // <section-modal></section-modal>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    SectionService,
    LevelService
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './section-modal.style.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './section-modal.template.pug'
})

export class SectionModalComponent implements OnInit {
  public levels: ILevel[];
  @Input() data: ISection = {
    name: '',
    description: ''
  };

  constructor(
    public modalInstance: NgbActiveModal,
    private toastr: ToastsManager,
    private sectionService: SectionService,
    private levelService: LevelService
  ) {
    console.log('hello `Section Modal` component');
    this.loadLevels();
  }

  ngOnInit(): void { }

  public save() {
    if (this.data.id) {
      this.sectionService.update(this.data)
        .$observable
        .subscribe(
          () => {
            this.toastr.success(`Section has been updated successfully.`, 'Success!');
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
      this.sectionService.save(this.data)
        .$observable
        .subscribe(
          (section: ISection) => {
            this.toastr.success(`Section has been created successfully.`, 'Success!');
            this.modalInstance.close(section);
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

  private loadLevels() {
    this.levelService.query()
      .$observable
      .subscribe(
        (levels: ILevel[]) => this.levels = levels
      );
  }
}
