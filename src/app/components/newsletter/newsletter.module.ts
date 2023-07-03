import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsletterComponent } from './newsletter.component';
import { ModalsModule } from '../modals/modals.module';



@NgModule({
  declarations: [
    NewsletterComponent
  ],
  imports: [
    CommonModule,
    ModalsModule
  ],
  exports: [
    NewsletterComponent
  ]
})
export class NewsletterModule { }
