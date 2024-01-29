import { Routes } from '@angular/router';
import { isAuthenticatedGuard } from './guards/is-authenticated.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'player',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'player',
    loadChildren: () =>
      import('./pages/player/player.routes').then((m) => m.playerRoutes),
    canActivate: [isAuthenticatedGuard],
  },
];
