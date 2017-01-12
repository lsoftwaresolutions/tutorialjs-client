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
import { ColorPickerModule } from 'angular2-color-picker';
import { Ng2HighchartsModule } from 'ng2-highcharts';
import { MomentModule } from 'angular2-moment';


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
import { ItemService } from './services/item';
import { ItemsTypeService } from './services/items-type';
import { NewsService } from './services/news';
import { LevelService } from './services/level';
import { TagService } from './services/tag';
import { UserService } from './services/user';
import { ChatService } from './services/chat';
import { QuestionService } from './services/question';
import { AnswerService } from './services/answer';
import { PlaygroundService } from './services/playground';

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
    FroalaEditorModule,
    ColorPickerModule,
    Ng2HighchartsModule,
    MomentModule
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
    ColorPickerModule,
    Ng2HighchartsModule,
    MomentModule,

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
    ItemService,
    ItemsTypeService,
    NewsService,
    LevelService,
    TagService,
    UserService,
    ChatService,
    QuestionService,
    AnswerService,
    PlaygroundService
  ]
})

export class CoreModule { }
