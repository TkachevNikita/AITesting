import { AuthComponent } from '@aitesting/auth';
import type { Route } from '@angular/router';

export const authRouter: Route[] = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        loadComponent: async () =>
          import('./components/login/login.component').then(
            (c) => c.LoginComponent,
          ),
      },
      {
        path: 'register',
        loadComponent: async () =>
          import('./components/register/register.component').then(
            (c) => c.RegisterComponent,
          ),
      },
      {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
];
