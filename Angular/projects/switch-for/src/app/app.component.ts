import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'switchFor';
  value: number = 0;
  incr()
  {
    this.value++;
  }
  todo={}
   url:string= 'https://jsonplaceholder.typicode.com/todos/4'
  fetchData()
  {
    fetch(this.url)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data1) => {
        this.todo = data1;
        console.log(this.todo)
        
      });

  }
  
  data = ['mobiles','tablets','laptops','tv'];
}
