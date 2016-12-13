import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { CoreModule } from '../core';

import { ROUTES } from './portal.routes';
import { PortalLayoutComponent } from './components/portal-layout';
import { HomeComponent } from './components/home';
import { CoursesComponent } from './components/courses';

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    CoreModule
  ],
  exports: [
    PortalLayoutComponent,
    HomeComponent,
    CoursesComponent
  ],
  declarations: [
    PortalLayoutComponent,
    HomeComponent,
    CoursesComponent
  ]
})

export class PortalModule {
  static ROUTES = ROUTES;
}
