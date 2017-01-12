import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from '../../../core/services/user';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'user'
  selector: 'user',  // <user></user>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    UserService
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './user.style.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './user.template.pug'
})

export class UserComponent implements OnInit {
  public user: IUser;
  public currentUser: IUser;
  public userId: string;
  public chartData: any = {
    title: {
      enabled: true,
      text: 'Effectiveness'
    },
    subtitle: {
      enabled: true,
      text: 'JavaScript'
    },
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: ['Boolean Objects', 'Arrays', 'Strings'],
      title: {
        enabled: true,
        text: 'Sections'
      }
    },
    yAxis: {
      title: {
        enabled: true,
        text: 'Percentage'
      },
      min: 0,
      max: 100
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Effectiveness',
        data: [
          {
            dataLabels: { enabled: true, format: '{y} %' },
            name: 'Boolean Objects',
            y: 100
          },
          {
            dataLabels: { enabled: true, format: '{y} %' },
            name: 'Arrays',
            y: 90
          },
          {
            dataLabels: { enabled: true, format: '{y} %' },
            name: 'Strings',
            y: 100
          }
        ]
      }
    ]
  };

  constructor(
    private userService: UserService,
    activatedRoute: ActivatedRoute,
    router: Router
  ) {
    console.log('hello `User` component');
    this.userService.current()
      .$observable
      .subscribe(
        (currentUser: IUser) => this.currentUser = currentUser
      );
    activatedRoute.params
      .subscribe((params: Params) => {
        this.userId = params['userId'];
        this.load();
      });
  }

  ngOnInit(): void { }

  private load() {
    this.userService.get({ id: this.userId })
      .$observable
      .subscribe(
        (user: IUser) => this.user = user
      );
  }
}
