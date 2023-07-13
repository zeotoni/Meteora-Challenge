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

  showProductFilter(value: string) {

    if(value) {
      this.productsService.getByTitle(value)
        .subscribe(productList => {
          this.productListService.sendUpdateList(productList)
        });
      this.router.navigateByUrl('#products');
      setTimeout(() => {
        this.hideKeyboard();
        this.inputSearch.nativeElement.value = '';
      }, 800);
    }
  }

  hideKeyboard() {
    (document.activeElement as HTMLElement).blur();
  }

}
