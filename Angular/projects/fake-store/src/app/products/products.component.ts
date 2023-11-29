import { Component,OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: any;
   constructor(private ps:ProductService,private route:Router){}
  ngOnInit()
  {
    this.ps.getProducts().subscribe(
      (data: any) => {
        this.products = data;
     }
   )
  }
  navigateTo(id:any)
  {
    this.route.navigate(['/products',id])
  }
}
