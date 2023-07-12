import { ProductListService } from './../services/product-list.service';
import { Component, ViewChild } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isVisible: boolean = false;
  @ViewChild('inputSearch') inputSearch: any;


  constructor(
    private productsService: ProductsService,
    private productListService: ProductListService,
    private router: Router
  ) {}

  toggleShowUl() {
    this.isVisible = !this.isVisible;
  }

  showProductFilter() {
    if(this.inputSearch.nativeElement.value) {

      this.productsService.getByTitle(this.inputSearch.nativeElement.value)
        .subscribe(productList => {
          this.productListService.sendUpdateList(productList)
        })

      this.goTo('products');
      this.inputSearch.nativeElement.value = ''
    }

  }

  goTo(fragment: any) {
    this.router.navigateByUrl('#'+fragment);
  }
}
