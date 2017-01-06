import { Routes, RouterModule } from '@angular/router';
import { AuthUserGuardService } from '../core/services/auth-user-guard';
import { LayoutComponent } from './components/layout';
import { HomeComponent } from './components/home';
import { CoursesComponent } from './components/courses';
import { ProfileComponent } from './components/profile';

export const ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [ AuthUserGuardService ],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  }
];
