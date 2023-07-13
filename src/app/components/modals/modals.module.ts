import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalNewsletterComponent } from './modal-newsletter/modal-newsletter.component';
import { ModalProductComponent } from './modal-product/modal-product.component';
import { FocusTrapModule } from '../directives/focus-trap/focus-trap.module';



@NgModule({
  declarations: [
    ModalNewsletterComponent,
    ModalProductComponent
  ],
  imports: [
    CommonModule,
    FocusTrapModule
  ],
  exports: [
    ModalNewsletterComponent,
    ModalProductComponent
  ]
})
export class ModalsModule { }
