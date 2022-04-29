import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { CreateComponent } from './pages/create/create.component';
import { ShowComponent } from './pages/show/show.component';
import { ListComponent } from './pages/list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    CreateComponent,
    ShowComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    PrimeNgModule,
    ComponentsModule
  ]
})
export class ProductsModule { }
