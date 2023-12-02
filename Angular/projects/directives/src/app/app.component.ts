import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dirBool: boolean = false;
  title = 'directives';
  name="shakti"
  isAdmin: boolean =(this.name==='shakti')?true:false;
  show: boolean = true;
  fun()
  {
    alert("hellooo")
  }
}

