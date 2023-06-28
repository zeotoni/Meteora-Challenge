import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    BannerComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule
  ],
  exports: [
    BannerComponent
  ]
})
export class BannerModule { }
