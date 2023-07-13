import { ProductListService } from './../services/product-list.service';
import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  constructor(
    private productservice: ProductsService,
    private productListService: ProductListService,
    private router: Router
  ){}

  showProducts(category: string) {
    this.productservice.getByCategory(category).subscribe((categoryList) => {
      this.productListService.sendUpdateList(categoryList)
    })
    this.router.navigateByUrl('#products');
  }
}
