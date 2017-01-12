import { Routes, RouterModule } from '@angular/router';
import { AuthUserGuardService } from '../core/services/auth-user-guard';
import { LayoutComponent } from './components/layout';
import { HomeComponent } from './components/home';
import { CoursesComponent } from './components/courses';
import { SectionsComponent } from './components/sections';
import { ItemsComponent } from './components/items';
import { NewsComponent } from './components/news';
import { ProfileComponent } from './components/profile';
import { UserComponent } from './components/user';

export const ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [ AuthUserGuardService ],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'courses/:courseId', component: SectionsComponent },
      { path: 'courses/:courseId/section/:sectionId', component: ItemsComponent },
      { path: 'news', component: NewsComponent },
      { path: 'users/:userId', component: UserComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  }
];
