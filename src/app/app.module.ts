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
import { NewsletterModule } from './components/newsletter/newsletter.module';
import { FooterModule } from './components/footer/footer.module';
import { ModalsModule } from './components/modals/modals.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoaderInterceptor } from './components/products/loader/loader.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    HeaderModule,
    BannerModule,
    CategoryModule,
    ProductsModule,
    FacilitiesModule,
    NewsletterModule,
    FooterModule,
    ModalsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
