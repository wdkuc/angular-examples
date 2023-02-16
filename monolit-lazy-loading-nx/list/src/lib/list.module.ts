import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './list.component';
import {SharedModule} from '@monolit-lazy-loading-nx/shared';


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
export class ListModule {
}
