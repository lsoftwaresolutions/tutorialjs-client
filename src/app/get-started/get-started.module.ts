import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { MnFullpageDirective, MnFullpageService } from 'ng2-fullpage';

import { ROUTES } from './get-started.routes';
import { GetStartedComponent } from './components/get-started';

@NgModule({
  declarations: [
    GetStartedComponent,
    MnFullpageDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    NgbModule.forRoot(),
    SlimLoadingBarModule.forRoot()
  ],
  providers: [
    MnFullpageService
  ]
})

export class GetStartedModule {
  static ROUTES = ROUTES;
}
