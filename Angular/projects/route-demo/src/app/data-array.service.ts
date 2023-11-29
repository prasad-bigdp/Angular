import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataArrayService {

  movies = [ "rr", "bahubali", "titanic" ];
  message = "hello everyone, I'm a service";
  value:any;
  sayHello()
  {
    alert("hellooooooooooooooo")
  }
  constructor(private ht: HttpClient) { 
    this.value = this.ht.get('https://fakestoreapi.com/products');
    console.log(this.value);
    this.value.subscribe((v: any) => {
      console.log(v);
    })
  }
}
