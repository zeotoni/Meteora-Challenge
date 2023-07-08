import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Observable, Subscription } from 'rxjs';
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

  constructor(
    private productsService: ProductsService,
    private productListService: ProductListService
  ){}

  ngOnInit(): void {
    this.productsService.getByCategory('').subscribe((product) => {
      this.products = product;
    })
  }

  ngAfterViewInit(): void {
    this.getProductsList();
  }

  showModal(){
    this.modalTemplateRef.nativeElement.firstChild.showModal();
  }

  getProductsList() {
    let listSubject: Product[] = [];
    this.subscriptionList = this.productListService.getUpdatedList().subscribe((i) => {
      listSubject = i
      this.products = listSubject;
      if(listSubject.length) {
      } else {
        this.productsService.getByCategory('').subscribe((product) => {
          this.products = product;
        })
      }
    })
  }
}
