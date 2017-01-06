import { Routes, RouterModule } from '@angular/router';
import { AuthAdminGuardService } from '../core/services/auth-admin-guard';
import { LayoutComponent } from './components/layout';
import { GeneralComponent } from './components/general';
import { CoursesComponent } from './components/courses';
import { SectionsComponent } from './components/sections';
import { NewsComponent } from './components/news';

export const ROUTES: Routes = [
  {
    path: 'admin',
    component: LayoutComponent,
    canActivate: [ AuthAdminGuardService ],
    children: [
      { path: '',   redirectTo: '/admin/general', pathMatch: 'full' },
      { path: 'general', component: GeneralComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'courses/:id', component: SectionsComponent },
      { path: 'news', component: NewsComponent }
    ]
  }
];
