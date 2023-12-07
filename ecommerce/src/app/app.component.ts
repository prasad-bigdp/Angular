import { Component, ElementRef, OnInit } from '@angular/core';
import { Cart, CartItem } from './models/cart.model';
import { CartService } from './services/cart.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  cart: Cart = { items: [] };
  @ViewChild("abc", { static: true }) ab!:ElementRef;
  constructor(private cartService: CartService) {
    console.log(this.ab)
  }

  ngOnInit() {
    this.cartService.cart.subscribe((_cart:any) => {
      this.cart = _cart;
    });
  }
}
