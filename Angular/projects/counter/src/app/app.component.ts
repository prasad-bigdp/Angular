import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter';
  count: number = 0;
  incr(e:Event)
  {
    this.count++;
    alert(e.target+" got clicked")
  }
  decr()
  {
    this.count--;
  }
  reset()
  {
    this.count = 0;
  }
}
