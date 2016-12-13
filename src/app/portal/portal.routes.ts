import { Routes, RouterModule } from '@angular/router';
import { PortalLayoutComponent } from './components/portal-layout';
import { HomeComponent } from './components/home';
import { CoursesComponent } from './components/courses';

export const ROUTES: Routes = [
  {
    path: '',
    component: PortalLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'courses', component: CoursesComponent }
    ]
  }
];
