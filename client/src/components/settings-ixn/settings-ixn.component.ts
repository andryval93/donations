import { Component, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { SettingsIxn } from '../../model/settingsIxn'; 


@Component({
  selector: 'settings-ixn',
  templateUrl: 'settings-ixn.component.html'
})
export class SettingsIxnComponent {

  @Input() settingsIxnitems: SettingsIxn;

  validation_messages = {
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' },
      { type: 'maxlength', message: 'Password cannot be more than 25 characters long.' },
      { type: 'pattern', message: 'Your password must contain only numbers and letters (both uppercase and lowercase).' }
    ],
    'name': [
      { type: 'required', message: 'Name is required.' }
    ]
  }

  slideOneForm: any;

  constructor(public formBuilder: FormBuilder) {
    this.slideOneForm = formBuilder.group({
      applicationName: ['', Validators.compose([
        Validators.maxLength(30),
        Validators.pattern('[a-zA-Z ]*'),
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') //this is for the letters (both uppercase and lowercase) and numbers validation
      ])],
      port: ['', Validators.compose([
        Validators.required
      ])],
      username: ['', Validators.compose([
        Validators.required
      ])],
      host: ['', Validators.compose([
        Validators.required
      ])],
      warmStandByPort: ['', Validators.compose([
        Validators.required
      ])],
      warmStandByTimeout: ['', Validators.compose([
        Validators.required
      ])],
      warmStandByAttempts: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  isValid() {
    return this.slideOneForm.valid;
  }

  values(){
    return new SettingsIxn(
      this.slideOneForm.value.applicationName,
      this.slideOneForm.value.password,
      this.slideOneForm.value.port,
      this.slideOneForm.value.username,
      this.slideOneForm.value.host,
      this.slideOneForm.value.warmStandByPort,
      this.slideOneForm.value.warmStandByTimeout,
      this.slideOneForm.value.warmStandByAttempts,
      true
    );
  }
}
