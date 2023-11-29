import { Component } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  constructor(private t: TodoServiceService) { }
  tasks: string[] = [];
  /* async*/
  /* when ever a component instantiated*/
  ngOnInit()
  {
    this.tasks=this.t.getTodoArray()
  }
  delete(i:number)
  {
    this.t.removeTodo(i);
  }
}
