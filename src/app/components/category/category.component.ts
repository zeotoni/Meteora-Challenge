import { ProductListService } from './../services/product-list.service';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../products/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{

  constructor(
    private productservice: ProductsService,
    private productListService: ProductListService,
    private router: Router
    ){}

  ngOnInit(): void {

  }

  showProducts(category: string) {
    this.productservice.getByCategory(category).subscribe((categoryList) => {
      this.productListService.sendUpdateList(categoryList)
    })
  }

  goTo(fragment: any) {
    this.router.navigateByUrl('#'+fragment);
  }

}
