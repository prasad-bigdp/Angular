import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  myForm: FormGroup | any;
  submitted: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      characters: new FormArray([new FormControl()]),
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
    this.submitted = true;
  }

  addCharacters() {
    (<FormArray>this.myForm.get('characters')).push(new FormControl(''));
  }

  removeCharacters(idx: number) {
    (<FormArray>this.myForm.get('characters')).removeAt(idx);
  }
}
