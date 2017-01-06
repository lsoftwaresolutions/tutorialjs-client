import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { UserService } from '../../../core/services/user';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'profile'
  selector: 'profile',  // <profile></profile>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    UserService
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './profile.style.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './profile.template.pug'
})

export class ProfileComponent implements OnInit {
  public user: IUser;
  private currentUser: IUser;

  constructor(
    private toastr: ToastsManager,
    private storage: LocalStorageService,
    private userService: UserService
  ) {
    console.log('hello `Profile` component');
    this.currentUser = this.storage.retrieve('currentUser');
    userService.get({ id: this.currentUser.id })
      .$observable
      .subscribe(
        (user: IUser) => {
          this.user = user;
        }
      );
  }

  ngOnInit(): void { }

  public save() {
    this.userService.update(this.user)
      .$observable
      .subscribe(
        (user: IUser) => {
          this.toastr.success(`Your profile has been updated successfully.`, 'Success!');
          this.storage.store('currentUser', Object.assign(this.currentUser, this.user));
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
