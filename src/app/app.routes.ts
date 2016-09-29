import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { GetStarted } from './get-started';
import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: GetStarted },
  { path: 'get-started',  component: GetStarted },
  { path: 'home',  component: Home },
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
  },
  { path: '**',    component: NoContent },
];
