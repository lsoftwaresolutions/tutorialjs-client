import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { CoreModule } from '../core';

import { ROUTES } from './portal.routes';
import { LayoutComponent } from './components/layout';
import { HomeComponent } from './components/home';
import { CoursesComponent } from './components/courses';
import { ProfileComponent } from './components/profile';

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    CoreModule
  ],
  exports: [
    LayoutComponent,
    HomeComponent,
    CoursesComponent,
    ProfileComponent
  ],
  declarations: [
    LayoutComponent,
    HomeComponent,
    CoursesComponent,
    ProfileComponent
  ]
})

export class PortalModule {
  static ROUTES = ROUTES;
}
