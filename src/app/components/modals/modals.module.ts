import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalNewsletterComponent } from './modal-newsletter/modal-newsletter.component';
import { ModalProductComponent } from './modal-product/modal-product.component';



@NgModule({
  declarations: [
    ModalNewsletterComponent,
    ModalProductComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalNewsletterComponent,
    ModalProductComponent
  ]
})
export class ModalsModule { }
