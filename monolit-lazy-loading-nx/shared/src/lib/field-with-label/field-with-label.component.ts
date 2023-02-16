import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TranslateService} from '../translate.service';

@Component({
    selector: 'app-field-with-label',
    template: `
        <mat-form-field appearance="fill">
            <mat-label>{{label}}</mat-label>
            <input matInput (change)="onValueChange($event)">

        </mat-form-field>

        <div> Input value:{{value }}</div>
        <div> Translated input value: {{value | translate}}</div>
    `,
    styleUrls: ['./field-with-label.component.scss']
})
export class FieldWithLabelComponent {
    @Input() label: string = '';
    @Output() valueChanged = new EventEmitter<string>();
    value: string = '';

    constructor() {
    }

    onValueChange($event: Event) {
        this.value = ($event.target as HTMLInputElement).value;
        this.valueChanged.next(this.value);
    }
}
