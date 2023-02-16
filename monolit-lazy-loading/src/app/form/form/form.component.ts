import {Component} from '@angular/core';
import {TranslateService} from '../translate.service';

@Component({
  selector: 'app-form',
  template: `
    <app-field-with-label (valueChanged)="translated = translateService.provideTranslate($event)"
                          [label]="'Key to translate'"></app-field-with-label>
    <div>Translated value {{translated}}
    </div>
  `,
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  translated: string = '';

  constructor(public translateService: TranslateService) {
  }
}
