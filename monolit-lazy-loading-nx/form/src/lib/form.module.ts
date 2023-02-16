import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormComponent} from './form.component';
import {SharedModule} from '@monolit-lazy-loading-nx/shared';

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
export class FormModule {
}
