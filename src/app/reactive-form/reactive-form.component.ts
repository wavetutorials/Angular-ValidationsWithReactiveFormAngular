import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  regUserForm: FormGroup;
  validationMessage: string = null;

  constructor() {

    this.regUserForm = new FormBuilder().group({
      firstName: new FormControl('', [
        Validators.required,
        Validators.maxLength(10)
      ]),
      lastName: new FormControl('', [
        Validators.required
      ]
      ),
      emailID: new FormControl('', [
        Validators.required,
        Validators.email
      ]
      ),
    })

  }

  get _firstName() {
    return this.regUserForm.get('firstName');
  }

  ngOnInit(): void {

    this.regUserForm.setValue({
      firstName: "Wave",
      lastName: "Tutorials",
      emailID: "wavetutorials@Outlook.com",
    });


    this.regUserForm.valueChanges.subscribe(x => {
      console.log('Form Value Changes: ' + JSON.stringify(x));
      // console.log('First Name Value Chang: ' + x.firstName);
    });

    this.regUserForm.statusChanges.subscribe(x => {
      // console.log('Form Status: ' + x);
    });

    this.regUserForm.get('firstName').statusChanges.subscribe(x => {
     // console.log('First Name Status: ' + x);
    });

  }

  UserRegistration(frmValues: FormGroup) {
    if (!frmValues.valid) {
      console.log('Form is Invalid');
      return;
    }

    // Validations:
    if (frmValues.controls.lastName.value.length <= 5) {
      this.validationMessage = "Last Name should be more than 5 char in length";
      return;
    }



    console.log(frmValues)
    console.log('FirstName: ' + frmValues.controls.firstName.value);
    console.log('LastName: ' + frmValues.controls.lastName.value);
    console.log('EmailID: ' + frmValues.controls.emailID.value);

    frmValues.reset({
      // 'firstName': 'Value After Submiting'
    });

    this.validationMessage = '';
  }

}
