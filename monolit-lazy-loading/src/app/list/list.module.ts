import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: ListComponent},

];

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ]
})
export class ListModule { }
