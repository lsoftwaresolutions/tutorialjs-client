import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core';
import { PortalModule } from '../portal';

import { ROUTES } from './chat.routes';
import { ChatComponent } from './components/chat';

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    CoreModule,
    PortalModule
  ],
  exports: [
    ChatComponent
  ],
  declarations: [
    ChatComponent
  ]
})

export class ChatModule {
  static ROUTES = ROUTES;
}
