import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TranslateService} from '../../form/translate.service';

@Component({
  selector: 'app-field-with-label',
  templateUrl: './field-with-label.component.html',
  styleUrls: ['./field-with-label.component.scss']
})
export class FieldWithLabelComponent {
  @Input() label: string = '';
  @Output() valueChanged = new EventEmitter<string>();
  value: string='';

  constructor(private translateService: TranslateService) {
  }

  onValueChange($event: Event) {
    this.value = ($event.target as HTMLInputElement).value;
    this.valueChanged.next(this.value);
  }
}
