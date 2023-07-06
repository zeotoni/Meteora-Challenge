import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isVisible: boolean = false;

  constructor(private productsService: ProductsService) {}

  toggleShowUl() {
    this.isVisible = !this.isVisible;
  }

  showResult() {
    // this.productsService.getAllProducts().then(res => console.log(res))
  }
}
