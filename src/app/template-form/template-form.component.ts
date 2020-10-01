import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  // firstName: string;
  validationMessage: string = null;

  constructor() { }

  ngOnInit(): void {
  }

  UserRegistration(frmValues: NgForm) {
    if (!frmValues.valid) {
      console.log('Form is Invalid');
      return;
    }

    // validations:
    if (frmValues.controls.lastName.value.length <= 5) {
      this.validationMessage = "Last name should be more than 5 char in length";
      return;
    }

    console.log(frmValues)
    console.log('FirstName: ' + frmValues.controls.firstName.value);
    // console.log('FirstName LocalVariable: ' + this.firstName);
    console.log('LastName: ' + frmValues.controls.lastName.value);
    console.log('EmailID: ' + frmValues.controls.emailID.value);

    frmValues.reset();
  }
}
