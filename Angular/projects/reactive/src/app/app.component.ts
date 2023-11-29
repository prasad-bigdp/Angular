import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray, ValidatorFn } from '@angular/forms';
import { loginForm } from './models/login.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'reactive';
  data$: any;
  constructor(private fb: FormBuilder, private hc: HttpClient) {}
  // myForm = this.fb.group({
  //   uname: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [Validators.minLength(8)]),
  // });
  // myForm = new FormGroup({
  //   uname: new FormControl(null,[Validators.required,Validators.email]),
  //   password: new FormControl('', [ Validators.minLength(8) ]),

  // })
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.data$ = this.hc.get('https://fakestoreapi.com/products');
    console.log(this.data$)
  }

  myForm = this.fb.group({
    uname: [
      null,
      [Validators.required, this.chekckUpperCase],
      this.asyncValidateTest,
    ],
    password: [],
    names: this.fb.array([this.fb.control('')]),
  });
  chekckUpperCase(control: FormControl) {
    const pattern = /[A-z]/;
    console.log(pattern.test(control.value));
    if (pattern.test(control.value)) {
      return { upperCaseError: true };
    }
    return null;
  }
  asyncValidateTest(control: FormControl) {
    const response = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ key: true });
      }, 3000);
      return null;
    });
    return response;
  }
  get names() {
    return this.myForm.controls.names as FormArray;
  }
  add() {
    console.log(this.myForm.controls.names);
    this.myForm.controls.names.push(this.fb.control(null));
  }
  submit() {}
  delete(i: any) {
    this.myForm.controls.names.controls.splice(i, 1);
  }
  show() {
    this.fb.array;
    console.log(this.myForm, this.myForm.get('uname'));
  }
}
