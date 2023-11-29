import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private s:Router){}
  title = 'routePara';
  users = [
    { name: 'raj', Age: 20, id: 513 },
    { name: 'john', Age: 50, id: 253 },
    {name:'likit',Age:22,id:666}
  ]
  call(id:number)
  {
    this.s.navigate([ 'users', id ])
    
  }

}
