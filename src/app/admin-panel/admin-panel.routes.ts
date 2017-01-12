import { Routes, RouterModule } from '@angular/router';
import { AuthAdminGuardService } from '../core/services/auth-admin-guard';
import { LayoutComponent } from './components/layout';
import { GeneralComponent } from './components/general';
import { DashboardComponent } from './components/dashboard';
import { CoursesComponent } from './components/courses';
import { SectionsComponent } from './components/sections';
import { ItemsComponent } from './components/items';
import { NewsComponent } from './components/news';

export const ROUTES: Routes = [
  {
    path: 'admin',
    component: LayoutComponent,
    canActivate: [ AuthAdminGuardService ],
    children: [
      { path: '',   redirectTo: '/admin/general', pathMatch: 'full' },
      { path: 'general', component: GeneralComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'courses/:courseId', component: SectionsComponent },
      { path: 'courses/:courseId/section/:sectionId', component: ItemsComponent },
      { path: 'news', component: NewsComponent }
    ]
  }
];
