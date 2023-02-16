import {Component} from '@angular/core';
import {TranslateService} from '@monolit-lazy-loading-nx/shared';

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
