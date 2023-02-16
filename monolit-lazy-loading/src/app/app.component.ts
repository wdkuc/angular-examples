import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button mat-button [routerLink]="['list']">List</button>
    <button mat-button [routerLink]="['form']">Form</button>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'monolit-app';
}
