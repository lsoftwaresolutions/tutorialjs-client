import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { CourseService } from '../../../core/services/course';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'course-modal'
  selector: 'course-modal',  // <course-modal></course-modal>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    CourseService
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './course-modal.style.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './course-modal.template.pug'
})

export class CourseModalComponent implements OnInit {
  @Input() data: ICourse = {
    name: '',
    description: ''
  };
  public file: Blob;

  constructor(
    public modalInstance: NgbActiveModal,
    private toastr: ToastsManager,
    private courseService: CourseService
  ) {
    console.log('hello `Course Modal` component');
  }

  ngOnInit(): void { }

  public save() {
    if (this.data.id) {
      this.courseService.update(this.data)
        .$observable
        .subscribe(
          () => {
            this.toastr.success(`Course has been updated successfully.`, 'Success!');
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
      this.courseService.save(this.data)
        .$observable
        .subscribe(
          (course: ICourse) => {
            this.toastr.success(`Course has been created successfully.`, 'Success!');
            this.modalInstance.close(course);
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

  public fileUploaded(event: Event) {
    let reader: FileReader = new FileReader();
    reader.onload = (readerEvent: Event) => {
      let binaryString: string = (<any>readerEvent.target).result;
      this.data.image = binaryString;
    };
    reader.readAsDataURL((<any>event.target).files[0]);
  }
}
