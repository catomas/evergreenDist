import { NgModule } from '@angular/core';


import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RippleModule} from 'primeng/ripple';
import {MenubarModule} from 'primeng/menubar';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';



@NgModule({
  exports: [
    MenubarModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    RippleModule,
    TableModule
  ]
})
export class PrimeNgModule { }
