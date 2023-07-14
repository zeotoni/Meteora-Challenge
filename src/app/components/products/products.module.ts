import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ModalsModule } from '../modals/modals.module';
import { MessageModule } from '../message/message.module';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ModalsModule,
    MessageModule
  ],
  exports: [
    ProductsComponent,
    ProductComponent
  ]
})
export class ProductsModule { }
