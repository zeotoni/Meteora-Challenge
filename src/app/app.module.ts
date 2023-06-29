import { CategoryModule } from './components/category/category.module';
import { HeaderModule } from './components/header/header.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerModule } from './components/banner/banner.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsModule } from './components/products/products.module';
import { FacilitiesModule } from './components/facilities/facilities.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    HeaderModule,
    BannerModule,
    CategoryModule,
    ProductsModule,
    FacilitiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
