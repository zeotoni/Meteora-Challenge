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
  filter!: string;

  constructor(
    private productsService: ProductsService,
    private productListService: ProductListService,
    private router: Router
    ) {}

  toggleShowUl() {
    this.isVisible = !this.isVisible;
  }

  onKeyUp(target : any) {
    if(target instanceof EventTarget) {
      const element = target as HTMLInputElement;
      this.filter = element.value;
    }
  }

  showProductFilter() {
    if(this.filter) {
      this.productsService.getByTitle(this.filter)
        .subscribe(productList => {
          this.productListService.sendUpdateList(productList)
        })

      this.inputSearch.nativeElement.value = ''
    }

  }

  goTo(fragment: any) {
    this.router.navigateByUrl('#'+fragment);
  }
}
