import {Route} from '@angular/router';

export const appRoutes: Route[] = [

    {path: '', redirectTo: '/list', pathMatch: 'full'},
    {path: 'list', loadChildren: () => import('@monolit-lazy-loading-nx/list').then(m => m.ListModule)},
    {path: 'form', loadChildren: () => import('@monolit-lazy-loading-nx/form').then(m => m.FormModule)},


];
