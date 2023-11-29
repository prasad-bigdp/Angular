import { Component } from '@angular/core';
import { DataArrayService } from '../data-array.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  movies: string[]=[];
  constructor(private m: DataArrayService)
  {
    this.movies=m.movies
  }


}
