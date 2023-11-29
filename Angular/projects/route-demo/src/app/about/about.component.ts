import { Component } from '@angular/core';
import { DataArrayService } from '../data-array.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(public msg:DataArrayService){}

}
