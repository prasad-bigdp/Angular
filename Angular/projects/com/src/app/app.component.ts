import { Component, ViewChild, ViewChildren } from '@angular/core';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'com';
  message = 'hello child';
  m:string=''
  fruits = [
    {
      fruit: 'banana',
      img: 'https://via.placeholder.com/600/92c952',
    },
    {
      fruit: 'orange',
      img: 'https://via.placeholder.com/600/771796',
    },
    {
      fruit: 'mango',
      img: 'https://via.placeholder.com/600/d32776',
    },
  ];
  names=["raj","prasad","alice"]
  msg1: string = '';
  fun(m:string)
  {
    this.msg1 = m;
  }
  msg2 = ''

  @ViewChild(MainComponent) c:any
  @ViewChildren("pr") p:any;
  changeBG()
  {
    console.log(this.p)
    console.log(this.p._results[ 1 ].nativeElement.style.background = "blue")
    console.log(this.c.message)
  }

}
