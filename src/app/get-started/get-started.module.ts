import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core';

import { ROUTES } from './get-started.routes';
import { GetStartedComponent } from './components/get-started';
import { SignInComponent } from './components/sign-in';
import { SignUpComponent } from './components/sign-up';
import { PasswordResetComponent } from './components/password-reset';

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    CoreModule
  ],
  exports: [
    GetStartedComponent,
    SignInComponent,
    SignUpComponent,
    PasswordResetComponent
  ],
  declarations: [
    GetStartedComponent,
    SignInComponent,
    SignUpComponent,
    PasswordResetComponent
  ]
})

export class GetStartedModule {
  static ROUTES = ROUTES;
}
