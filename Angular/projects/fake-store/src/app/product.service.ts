import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'https://fakestoreapi.com/products';
  products: any;
  product:any
  constructor(private ht:HttpClient) {
 
  }
  getProducts()
  {
    this.products = this.ht.get(this.url);
    return this.products;
  }
  getProductsById(id:any)
  {
    this.product = this.ht.get(`${this.url}/${id}`)
    return this.product;
  }
}
