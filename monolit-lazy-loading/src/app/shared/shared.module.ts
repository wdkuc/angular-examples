import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from './translate.pipe';
import { FieldWithLabelComponent } from './field-with-label/field-with-label.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    TranslatePipe,
    FieldWithLabelComponent
  ],
  exports: [
    FieldWithLabelComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class SharedModule { }
