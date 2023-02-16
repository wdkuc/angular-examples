import {Component} from '@angular/core';
import {TranslateService} from '../translate.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  translated: string = '';

  constructor(public translateService: TranslateService) {
  }
}
