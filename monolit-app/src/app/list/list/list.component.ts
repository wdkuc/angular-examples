import {Component} from '@angular/core';
import {TranslateService} from '../../form/translate.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  constructor(public translateService: TranslateService) {
  }
}
