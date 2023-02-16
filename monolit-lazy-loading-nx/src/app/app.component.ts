import {Component} from '@angular/core';

@Component({
    selector: 'monolit-lazy-loading-nx-root',
    template: `
        <button mat-button [routerLink]="['list']">List</button>
        <button mat-button [routerLink]="['form']">Form</button>
        <router-outlet></router-outlet>`,
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
}
