import { Routes } from '@angular/router';
import { AuthUserGuardService } from '../core/services/auth-user-guard';
import { LayoutComponent } from '../portal/components/layout';
import { ChatComponent } from './components/chat';

export const ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [ AuthUserGuardService ],
    children: [
      { path: 'chat', component: ChatComponent }
    ]
  }
];
