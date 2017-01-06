import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { AuthService } from '../../../core/services/auth';
import { UserService } from '../../../core/services/user';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'sign-up'
  selector: 'sign-up',  // <sign-up></sign-up>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    AuthService,
    UserService
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './sign-up.style.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './sign-up.template.pug'
})

export class SignUpComponent implements OnInit {
  public signUpModel: any = { };

  constructor(
    private toastr: ToastsManager,
    private storage: LocalStorageService,
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {
    console.log('hello `Sign Up` component');
    this.userService.current()
      .$observable
      .subscribe(
        (user: IUser) => {
          this.storage.store('currentUser', user);
          this.router.navigate(['/home']);
        }
      );
  }

  ngOnInit(): void { }

  public signUp() {
    this.userService.save(this.signUpModel)
      .$observable
      .subscribe(
        (user: IUser) => {
          this.toastr.success(`You've successfully registered at TutorialJS.`, 'Congratulations!');
          this.storage.store('token', btoa(`${user.email}:${this.signUpModel.password}`));
          this.authService.save(this.signUpModel)
            .$observable
            .subscribe(
              (authInfo: IAuth) => {
                this.storage.store('currentUser', authInfo.user);
                this.router.navigate(['/home']);
                let message: string = `Hi ${authInfo.user.firstname || authInfo.user.login}.`;
                this.toastr.success(message, 'Welcome!');
              },
              (error: any) => {
                this.storage.clear('currentUser');
                let message: string = 'Something went wrong...';
                if (error && error.message) {
                  message = error.message;
                }
                this.toastr.error(message, 'Oops!');
              }
            );
        },
        (error: any) => {
          this.storage.clear('currentUser');
          let message: string = 'Something went wrong...';
          if (error && error.message) {
            message = error.message;
          }
          this.toastr.error(message, 'Oops!');
        }
      );
  }
}
