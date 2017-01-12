import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as swal from 'sweetalert2';
import { NewsService } from '../../../core/services/news';
import { NewsModalComponent } from '../news-modal/news-modal.component';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'news'
  selector: 'news',  // <news></news>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    NewsService
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './news.style.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './news.template.pug'
})

export class NewsComponent implements OnInit {
  public news: INews[];

  constructor(
    private modalService: NgbModal,
    private newsService: NewsService
  ) {
    console.log('hello `News` component');
    this.load();
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

  public remove(news, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    swal({
      title: 'Are you sure?',
      // tslint:disable-next-line:max-line-length
      text: `Are you sure you want delete "${news.name}" news? You won't be able to revert this!`,
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
        this.newsService.remove({ id: news.id })
          .$observable
          .subscribe(
            () => {
              swal({
                title: 'Deleted!',
                text: 'News has been deleted successfully.',
                type: 'success',
                confirmButtonClass: 'btn btn-primary d5-init-ripples',
                buttonsStyling: false,
                showCloseButton: true
              });
              let index: number = this.news.findIndex((e: INews) => e.id === news.id);
              if (index !== -1) {
                this.news.splice(index, 1);
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

  private open(data?: INews) {
    const modalRef = this.modalService.open(NewsModalComponent);
    if (data) {
      modalRef.componentInstance.data = Object.assign({ }, data);
      // tslint:disable-next-line:max-line-length
      modalRef.result.then((news: INews) => Object.assign(data, news) && this.order(this.news), () => { });
    } else {
      modalRef.componentInstance.data = { };
      // tslint:disable-next-line:max-line-length
      modalRef.result.then((news: INews) => this.news.push(news) && this.order(this.news), () => { });
    }
  }

  private load() {
    this.newsService.query()
      .$observable
      .subscribe(
        (news: INews[]) => this.news = this.order(news)
      );
  }

  private order(news: INews[]): INews[] {
    return news.sort((lhs: INews, rhs: INews) => Number(rhs.createdAt) - Number(lhs.createdAt));
  }
}
