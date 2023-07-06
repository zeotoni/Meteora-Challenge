import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Observable } from 'rxjs';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  @ViewChild('modal') modalTemplateRef!: ElementRef;
  products!: Product[];

  constructor(private productsService: ProductsService){}

  ngOnInit(): void {
    this.getProductsList()
  }

  showModal(){
    this.modalTemplateRef.nativeElement.firstChild.showModal();
  }

  getProductsList() {
    this.productsService.getAllProducts().subscribe((product) => {
      this.products = product;
    })
  }
}
