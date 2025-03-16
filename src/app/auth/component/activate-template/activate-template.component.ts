import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonComponent } from '@shared/component/button/button.component';
import { ErrorMessageComponent } from '@shared/component/error-message/error-message.component';
import { InputTextComponent } from '@shared/component/input-text/input-text.component';
import { ErrorMessageConst } from '@shared/constant/error-message.const';
import { NavigationRoute } from '@shared/constant/navigation-route.const';
import { RegexConst } from '@shared/constant/regex.const';
import { passwordsMatchValidator } from '@shared/validator/confirm-password.validator';

@Component({
  selector: 'app-activate-template',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextComponent,
    ButtonComponent,
    ErrorMessageComponent
  ],
  templateUrl: './activate-template.component.html',
  styleUrl: './activate-template.component.scss'
})
export class ActivateTemplateComponent {
  @Output() onSubmit = new EventEmitter<{
    username: string;
    password: string;
    confirmPassword: string;
  }>();

  signupBtnConfig = {
    button: { type: 'Submit', cssClass: 'button-primary', value: 'Submit' }
  };

  loginBtnConfig = {
    button: {
      cssClass: 'button-secondary',
      value: 'Log in'
    }
  };

  errorMessageConst = ErrorMessageConst;

  constructor(private router: Router) {}

  readonly signupForm = new FormGroup(
    {
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
      }),
      confirmPassword: new FormControl('', {
        validators: [Validators.required]
      })
    },
    { validators: passwordsMatchValidator() }
  );

  submit(): void {
    if (this.signupForm.valid) {
      this.onSubmit.emit(
        this.signupForm.value as {
          username: string;
          password: string;
          confirmPassword: string;
        }
      );
    }
  }

  getControl(controlName: string): FormControl {
    return this.signupForm.get(controlName) as FormControl;
  }

  navigate() {
    this.router.navigate([
      NavigationRoute.AUTH.BASE,
      NavigationRoute.AUTH.LOG_IN
    ]);
  }
}
