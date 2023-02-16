import {Component} from '@angular/core';
import {TranslateService} from '../../form/translate.service';

@Component({
  selector: 'app-list',
  template: `<p>{{translateService.provideTranslate('Tutaj będzie lista') }}</p>
  `,
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  constructor(public translateService: TranslateService) {
  }
}
