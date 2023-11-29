import { Component,AfterViewInit,AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewChecked,AfterViewInit{
  data: any;
 ngAfterViewInit(): void {
    console.log("view initialized") 
 }
  ngAfterViewChecked(): void {
     console.log("view checked") 
  }
}
