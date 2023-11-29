import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Application';
  isenabled: boolean = false;
  cname: string = this.isenabled ? 'light' : 'dark';
  c: string = 'red';
  val: string = '30px';
  myRule()
  {
    alert("helllo");
  }
  
}
