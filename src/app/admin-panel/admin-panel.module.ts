import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { CoreModule } from '../core';

import { ROUTES } from './admin-panel.routes';
import { LayoutComponent } from './components/layout';
import { GeneralComponent } from './components/general';
import { DashboardComponent } from './components/dashboard';
import { CoursesComponent } from './components/courses';
import { CourseModalComponent } from './components/course-modal';
import { SectionsComponent } from './components/sections';
import { SectionModalComponent } from './components/section-modal';
import { ItemsComponent } from './components/items';
import { ItemModalComponent } from './components/item-modal';
import { NewsComponent } from './components/news';
import { NewsModalComponent } from './components/news-modal';
import { LevelsComponent } from './components/levels';
import { LevelModalComponent } from './components/level-modal';
import { TagsComponent } from './components/tags';
import { TagModalComponent } from './components/tag-modal';
import { ItemsTypesComponent } from './components/items-types';
import { ItemsTypeModalComponent } from './components/items-type-modal';

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    CoreModule
  ],
  exports: [
    LayoutComponent,
    GeneralComponent,
    DashboardComponent,
    CoursesComponent,
    CourseModalComponent,
    SectionsComponent,
    SectionModalComponent,
    ItemsComponent,
    ItemModalComponent,
    NewsComponent,
    NewsModalComponent,
    LevelsComponent,
    LevelModalComponent,
    TagsComponent,
    TagModalComponent,
    ItemsTypesComponent,
    ItemsTypeModalComponent
  ],
  declarations: [
    LayoutComponent,
    GeneralComponent,
    DashboardComponent,
    CoursesComponent,
    CourseModalComponent,
    SectionsComponent,
    SectionModalComponent,
    ItemsComponent,
    ItemModalComponent,
    NewsComponent,
    NewsModalComponent,
    LevelsComponent,
    LevelModalComponent,
    TagsComponent,
    TagModalComponent,
    ItemsTypesComponent,
    ItemsTypeModalComponent
  ],
  entryComponents: [
    CourseModalComponent,
    SectionModalComponent,
    ItemModalComponent,
    NewsModalComponent,
    LevelModalComponent,
    TagModalComponent,
    ItemsTypeModalComponent
  ]
})

export class AdminPanelModule {
  static ROUTES = ROUTES;
}
