import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../products/product';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  listProductsSubject = new Subject<Product[]>();

  sendUpdateList(list: Product[]) {
    this.listProductsSubject.next(list)
  }

  getUpdatedList(): Observable<Product[]> {
    return this.listProductsSubject.asObservable();
  }
}
