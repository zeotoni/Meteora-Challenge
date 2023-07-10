import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Product } from '../products/product';

const API = 'http://localhost:3000/products'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getByCategory(category: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${API}/category?category=${category}`)
  }

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(API)
  }
}
