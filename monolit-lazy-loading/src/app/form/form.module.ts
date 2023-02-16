import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormComponent} from './form/form.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: FormComponent},

];

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ]
})
export class FormModule { }
