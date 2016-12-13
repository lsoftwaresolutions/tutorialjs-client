import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { LocalStorageService } from 'ng2-webstorage';
import { AuthService } from '../../../core/services/auth';
import { UserService } from '../../../core/services/user';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'sign-in'
  selector: 'sign-in',  // <sign-in></sign-in>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    AuthService,
    UserService
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './sign-in.style.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './sign-in.template.pug'
})

export class SignInComponent {
  public signInModel: any = { };

  constructor(
    private toastr: ToastsManager,
    private storage: LocalStorageService,
    private router: Router,
    private authService: AuthService,
    userService: UserService
  ) {
    console.log('hello `Sign In` component');
    userService.current()
      .$observable
      .subscribe(
        (user: IUser) => router.navigate(['/home'])
      );
  }

  ngOnInit(): void { }

  public signIn() {
    this.storage.store('token', btoa(`${this.signInModel.email}:${this.signInModel.password}`));
    this.authService.save(this.signInModel)
      .$observable
      .subscribe(
        (authInfo: IAuth) => {
          this.router.navigate(['/home']);
          this.toastr.success(`Hi ${authInfo.user.firstname || authInfo.user.login}.`, 'Welcome!');
        },
        (error: any) => this.toastr.error((error && error.message) ? error.message : 'Something went wrong....', 'Oops!')
      );
  }
}
