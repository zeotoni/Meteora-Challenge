import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Product } from '../products/product';


const API = 'https://meteora-api.onrender.com/products'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(API)
  }

  getByCategory(category: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${API}/category?category=${category}`)
  }

  getByTitle(title: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${API}/title?title=${title}`)
  }
}
