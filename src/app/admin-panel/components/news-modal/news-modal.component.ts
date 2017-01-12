import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NewsService } from '../../../core/services/news';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'news-modal'
  selector: 'news-modal',  // <news-modal></news-modal>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    NewsService
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './news-modal.style.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './news-modal.template.pug'
})

export class NewsModalComponent implements OnInit {
  @Input() data: INews = {
    name: '',
    text: ''
  };
  public file: Blob;

  constructor(
    public modalInstance: NgbActiveModal,
    private toastr: ToastsManager,
    private newsService: NewsService
  ) {
    console.log('hello `News Modal` component');
  }

  ngOnInit(): void { }

  public onFroalaModelChanged(event: any) {
    setTimeout(() => {
      this.data.text = event;
    });
  }

  public save() {
    if (this.data.id) {
      this.newsService.update(this.data)
        .$observable
        .subscribe(
          () => {
            this.toastr.success(`News has been updated successfully.`, 'Success!');
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
      this.newsService.save(this.data)
        .$observable
        .subscribe(
          (news: INews) => {
            this.toastr.success(`News has been created successfully.`, 'Success!');
            this.modalInstance.close(news);
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
