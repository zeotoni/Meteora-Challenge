import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Subscription } from 'rxjs';
import { Product } from './product';
import { ProductListService } from '../services/product-list.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit{

  @ViewChild('modal') modalTemplateRef!: ElementRef;
  products!: Product[];
  subscriptionList!: Subscription;
  errorSearchMessage!: string;

  constructor(
    private productsService: ProductsService,
    private productListService: ProductListService
  ){}

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((products) => {
      this.products = products;
    })
  }

  ngAfterViewInit(): void {
    this.getProductsList();

  }

  showModal(){
    this.modalTemplateRef.nativeElement.firstChild.showModal();
  }

  getProductsList() {
    this.subscriptionList = this.productListService.getUpdatedList().subscribe((list) => {
      console.log(list);

      if(!list.length) {
        this.errorSearchMessage = 'Nenhum produto correspondente encontrado!'
        this.products = this.products;
      } else {
        this.products = list;
        this.errorSearchMessage = '';
      }

    })
  }
}
