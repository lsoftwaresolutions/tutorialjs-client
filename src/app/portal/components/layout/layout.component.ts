import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { UserService } from '../../../core/services/user';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'layout'
  selector: 'layout',  // <layout></layout>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    UserService
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './layout.style.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './layout.template.pug'
})

export class LayoutComponent implements OnInit {
  public user: IUser;
  public isCollapsed: boolean = true;

  constructor(
    private toastr: ToastsManager,
    private userService: UserService
  ) {
    console.log('hello `Layout` component');
    userService.current()
      .$observable
      .subscribe(
        (user: IUser) => this.user = user
      );
  }

  ngOnInit(): void { }

  public logout() {
    this.userService.logout();
  }
}
