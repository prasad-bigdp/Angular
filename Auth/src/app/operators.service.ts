import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class OperatorsService {

  constructor(private hc: HttpClient) {
    
  }
  get() {
   return this.hc.get('https://fakestoreapi.com/products');
  }
}
