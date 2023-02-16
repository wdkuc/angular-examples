import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [

  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListModule)},
  {path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
