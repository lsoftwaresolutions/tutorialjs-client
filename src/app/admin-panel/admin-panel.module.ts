import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { CoreModule } from '../core';

import { ROUTES } from './admin-panel.routes';
import { LayoutComponent } from './components/layout';
import { GeneralComponent } from './components/general';
import { CoursesComponent } from './components/courses';
import { CourseModalComponent } from './components/course-modal';
import { SectionsComponent } from './components/sections';
import { SectionModalComponent } from './components/section-modal';
import { NewsComponent } from './components/news';
import { NewsModalComponent } from './components/news-modal';
import { LevelsComponent } from './components/levels';
import { LevelModalComponent } from './components/level-modal';

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    CoreModule
  ],
  exports: [
    LayoutComponent,
    GeneralComponent,
    CoursesComponent,
    CourseModalComponent,
    SectionsComponent,
    SectionModalComponent,
    NewsComponent,
    NewsModalComponent,
    LevelsComponent,
    LevelModalComponent
  ],
  declarations: [
    LayoutComponent,
    GeneralComponent,
    CoursesComponent,
    CourseModalComponent,
    SectionsComponent,
    SectionModalComponent,
    NewsComponent,
    NewsModalComponent,
    LevelsComponent,
    LevelModalComponent
  ],
  entryComponents: [
    CourseModalComponent,
    SectionModalComponent,
    NewsModalComponent,
    LevelModalComponent
  ]
})

export class AdminPanelModule {
  static ROUTES = ROUTES;
}
