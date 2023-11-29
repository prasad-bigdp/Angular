import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  name="shakti"
  isAdmin: boolean =(this.name==='shakti')?true:false;
  show: boolean = true;
  fun()
  {
    alert("hellooo")
  }
}

