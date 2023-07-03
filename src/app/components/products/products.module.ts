import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ModalsModule } from '../modals/modals.module';



@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ModalsModule
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
