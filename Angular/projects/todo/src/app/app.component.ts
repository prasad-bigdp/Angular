import { Component } from '@angular/core';
import { TodoServiceService } from './todo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
      constructor(private t:TodoServiceService){}
  title = 'todo';
  task: string = '';
  tasks:string[] = [];
  addTask()
  {
   this.t.addTodo(this.task)
  }
}
