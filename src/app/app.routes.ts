import type { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full',
      },
      {
        path: 'auth',
        loadChildren: async () =>
          import('@aitesting/auth').then((r) => r.authRouter),
      },
      {
        path: 'chat/:id',
        loadComponent: async () =>
          import('@aitesting/chat').then((c) => c.ChatComponent),
      },
    ],
  },
];
