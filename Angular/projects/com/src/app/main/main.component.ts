import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  
  @Input() m: string = '';
  @Input() fruit: string = '';
  @Input() image: string = ''
  @Input() name:string=''
  message: string = 'hello parent'
  @Output() eve = new EventEmitter()
  greet()
  {
    alert("hello everyone")
  }


  callParent()
  {
     this.eve.emit(this.message)
  }
}
