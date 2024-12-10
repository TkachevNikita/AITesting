import { AuthComponent } from '@aitesting/auth';
import { ChatComponent } from '@aitesting/chat';
import type { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'chat',
    component: ChatComponent,
  },
  {
    path: 'auth/login',
    component: AuthComponent,
  },
];
