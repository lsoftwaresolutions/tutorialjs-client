import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../core/services/news';


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

  constructor(private newsService: NewsService) {
    console.log('hello `News` component');
    this.load();
  }

  ngOnInit(): void { }

  public refresh() {
    this.load();
  }

  private load() {
    this.newsService.query()
      .$observable
      .subscribe(
        (news: INews[]) => this.news = this.order(news)
      );
  }

  private order(news: INews[]): INews[] {
    return news
      .filter((e: INews) => e.isAvailable)
      .sort((lhs: INews, rhs: INews) => Number(rhs.createdAt) - Number(lhs.createdAt));
  }
}
