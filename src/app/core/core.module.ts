import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ResourceModule } from 'ng2-resource-rest';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MnFullpageDirective, MnFullpageService } from 'ng2-fullpage';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { CustomFormsModule } from 'ng2-validation';
import { ToastModule, ToastOptions } from 'ng2-toastr';
import { Ng2Webstorage } from 'ng2-webstorage';


import { TjsMaterializeDirective } from './directives/tjs-materialize';

import { APIResourceService } from './services/api-resource';
import { AuthService } from './services/auth';
import { PasswordResetService } from './services/password-reset';
import { UserService } from './services/user';

let options: ToastOptions = new ToastOptions({
  toastLife: 5000,
  showCloseButton: true,
  positionClass: 'toast-top-right',
  animate: 'flyRight'
});

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ResourceModule.forRoot(),
    NgbModule.forRoot(),
    SlimLoadingBarModule.forRoot(),
    CustomFormsModule,
    ToastModule.forRoot(options),
    Ng2Webstorage.forRoot({ prefix: 'tutorialjs', separator: '.' })
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ResourceModule,
    NgbModule,
    SlimLoadingBarModule,
    CustomFormsModule,
    ToastModule,
    Ng2Webstorage,

    MnFullpageDirective,
    TjsMaterializeDirective
  ],
  declarations: [
    MnFullpageDirective,
    TjsMaterializeDirective
  ],
  providers: [
    APIResourceService,
    AuthService,
    PasswordResetService,
    UserService
  ]
})

export class CoreModule { }
