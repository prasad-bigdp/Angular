import { Component } from '@angular/core';
import { Observable, of,map } from 'rxjs';
import { OperatorsService } from './operators.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Auth';
  res: any;
  data: any;
  constructor(private os:OperatorsService) {
   
 }
  ngOnInit() {
    this.os.get().subscribe(
      (data) => {
        console.log(data);
        this.data = data;
      }
    )
    console.log(this.data)
     }
  
}
