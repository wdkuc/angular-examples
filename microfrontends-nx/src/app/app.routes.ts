import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'form',
    loadChildren: () => import('form/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'list',
    loadChildren: () => import('list/Module').then((m) => m.RemoteEntryModule),
  },
  {path: '', redirectTo: '/list', pathMatch: 'full'},
];
