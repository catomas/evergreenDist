import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormProductsComponent } from './form-products/form-products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    FormProductsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimeNgModule
  ],
  exports: [
    FormProductsComponent
  ]
})
export class ComponentsModule { }
