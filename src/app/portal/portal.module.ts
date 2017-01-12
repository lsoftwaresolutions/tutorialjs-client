import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { CoreModule } from '../core';

import { ROUTES } from './portal.routes';
import { LayoutComponent } from './components/layout';
import { HomeComponent } from './components/home';
import { CoursesComponent } from './components/courses';
import { SectionsComponent } from './components/sections';
import { ItemsComponent } from './components/items';
import { NewsComponent } from './components/news';
import { ProfileComponent } from './components/profile';
import { UserComponent } from './components/user';

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    CoreModule
  ],
  exports: [
    LayoutComponent,
    HomeComponent,
    CoursesComponent,
    SectionsComponent,
    ItemsComponent,
    NewsComponent,
    ProfileComponent,
    UserComponent
  ],
  declarations: [
    LayoutComponent,
    HomeComponent,
    CoursesComponent,
    SectionsComponent,
    ItemsComponent,
    NewsComponent,
    ProfileComponent,
    UserComponent
  ]
})

export class PortalModule {
  static ROUTES = ROUTES;
}
