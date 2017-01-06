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
import { HttpInterceptorModule, HTTP_INTERCEPTOR_PROVIDER } from 'ng2-http-interceptor';
import { FroalaEditorModule } from 'ng2-froala-editor/ng2-froala-editor';


import { HrefVoidDirective } from './directives/href-void';
import { TjsAutosizeDirective } from './directives/tjs-autosize';
import { TjsMaterializeDirective } from './directives/tjs-materialize';

import { APIResourceService } from './services/api-resource';
import { AuthService } from './services/auth';
import { AuthUserGuardService } from './services/auth-user-guard';
import { AuthAdminGuardService } from './services/auth-admin-guard';
import { PasswordResetService } from './services/password-reset';
import { CourseService } from './services/course';
import { SectionService } from './services/section';
import { NewsService } from './services/news';
import { LevelService } from './services/level';
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
    Ng2Webstorage.forRoot({ prefix: 'tutorialjs', separator: '.' }),
    HttpInterceptorModule,
    FroalaEditorModule
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
    HttpInterceptorModule,
    FroalaEditorModule,

    MnFullpageDirective,
    HrefVoidDirective,
    TjsAutosizeDirective,
    TjsMaterializeDirective
  ],
  declarations: [
    MnFullpageDirective,
    HrefVoidDirective,
    TjsAutosizeDirective,
    TjsMaterializeDirective
  ],
  providers: [
    ...HTTP_INTERCEPTOR_PROVIDER,
    APIResourceService,
    AuthService,
    AuthUserGuardService,
    AuthAdminGuardService,
    PasswordResetService,
    CourseService,
    SectionService,
    NewsService,
    LevelService,
    UserService
  ]
})

export class CoreModule { }
