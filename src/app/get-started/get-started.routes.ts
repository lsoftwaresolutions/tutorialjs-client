import { Routes } from '@angular/router';
import { GetStartedComponent } from './components/get-started';
import { SignInComponent } from './components/sign-in';
import { SignUpComponent } from './components/sign-up';
import { PasswordResetComponent } from './components/password-reset';

export const ROUTES: Routes = [
  { path: '', component: GetStartedComponent },
  { path: 'get-started', component: GetStartedComponent },
  { path: 'login', component: SignInComponent },
  { path: 'join', component: SignUpComponent },
  { path: 'password-reset', component: PasswordResetComponent }
];
