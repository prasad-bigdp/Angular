import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './form2Way.component.html',
  styleUrls: ['./form2Way.component.css'],
})
export class Form2wayComponent {
  formData = {
    email: '',
    password: '',
    options: {
      option1: false,
      option2: false,
    },
    radio: '',
  };

  submittedData: any;

  submitForm(data: any) {
    this.submittedData = data;
  }
}
