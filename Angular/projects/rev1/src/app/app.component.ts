import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rev1';
  isAdmin = true;
  name: string = 'prasa';
  id: number = 10;
  isCenter = true;
  isDanger: boolean = true;
  val = 'john';
  color: string = 'brown';
  bgclr = 'black'
  
  isNarendra = false;
  email: string = 'abc@gmail.com';
  isPrasad: boolean = this.name === 'prasad' ? true : false;
  fun()
  {
    let obj = { 'center': this.isCenter, 'danger': this.isDanger };
    
    return obj;
  }
  result(e:Event)
  {
    const ele= e.target as HTMLButtonElement
    alert("i came from template and my name is "+ ele.textContent);
  }
}
