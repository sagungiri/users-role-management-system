import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { InputTextComponent } from '../../../shared/component/input-text/input-text.component';
import { ButtonComponent } from '../../../shared/component/button/button.component';
import { ErrorMessageComponent } from '../../../shared/component/error-message/error-message.component';
import { ErrorMessageConst } from '@shared/constant/error-message.const';
import { RegexConst } from '@shared/constant/regex.const';

@Component({
  selector: 'app-login-template',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextComponent,
    ButtonComponent,
    ErrorMessageComponent
  ],
  templateUrl: './login-template.component.html',
  styleUrl: './login-template.component.scss'
})
export class LoginTemplateComponent {
  @Output() onSubmit = new EventEmitter<{
    username: string;
    password: string;
  }>();

  loginBtnConfig = {
    button: { type: 'Submit', cssClass: 'button-primary', value: 'Log in' }
  };

  signupBtnConfig = {
    button: { cssClass: 'button-secondary', value: 'Activate' }
  };

  errorMessageConst = ErrorMessageConst;

  readonly loginForm = new FormGroup({
    username: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15)
      ]
    }),
    password: new FormControl('', {
      validators: [
        Validators.required,
        Validators.pattern(RegexConst.PASSWORD_PATTERN)
      ]
    })
  });

  submit(): void {
    if (this.loginForm.valid) {
      this.onSubmit.emit(
        this.loginForm.value as { username: string; password: string }
      );
    }
  }

  getControl(controlName: string): FormControl {
    return this.loginForm.get(controlName) as FormControl;
  }
}
