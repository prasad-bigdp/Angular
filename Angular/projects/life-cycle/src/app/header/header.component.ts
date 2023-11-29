import { Component,AfterContentInit,AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  

  ngOnDestroy() {
    console.log("i'm dead")
  }
}
