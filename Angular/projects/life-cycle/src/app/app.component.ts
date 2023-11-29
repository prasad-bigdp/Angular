import { Component,OnChanges,OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges {
  title = 'lifeCycle';
  constructor() {
    console.log("i'm a contructor")
  }
  
  ngOnChanges(c: SimpleChanges) {
      console.log("changes happen"+c)
  }
  ngOnInit() {
    console.log("I'm a ng on init")
  }
}
