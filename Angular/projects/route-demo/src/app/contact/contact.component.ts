import { Component } from '@angular/core';
import { DataArrayService } from '../data-array.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(public sh:DataArrayService){}

  fun()
  {
       this.sh.sayHello()
  }
}
