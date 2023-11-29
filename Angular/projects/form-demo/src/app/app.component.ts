import { Component } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formDemo';
  display(f:any,a:any,b:any,c:any)
  {
    console.log(f, a, b, c)
    /* setvalue,patchValue*/
    f.patchValue({
      username: "rajesh",
      email: "abc@gmail.com",
    
    })
  }
  submit() {
    
  }
}
