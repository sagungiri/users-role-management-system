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
import { CheckboxGroupComponent } from '@shared/component/checkbox-group/checkbox-group.component';

@Component({
  selector: 'app-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextComponent,
    ButtonComponent,
    ErrorMessageComponent,
    CheckboxGroupComponent
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @Output() onSubmit = new EventEmitter<{
    username: string;
    password: string;
  }>();

  permissionsOptions = ['View', 'Create', 'Update', 'Delete'];

  createBtnConfig = {
    button: { cssClass: 'button-primary', value: 'Submit', type: 'Submit' }
  };

  cancelBtnConfig = {
    button: { cssClass: 'button-secondary', value: 'Cancel' }
  };
  errorMessageConst = ErrorMessageConst;

  constructor(private router: Router) {}

  readonly rolesForm = new FormGroup({
    name: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15)
      ]
    }),
    label: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15)
      ]
    }),
    permissions: new FormControl(['View'], {
      validators: [Validators.required]
    })
  });

  submit(): void {
    if (this.rolesForm.valid) {
      //   this.onSubmit.emit(
      //     this.rolesForm.value as { username: string; password: string }
      //   );
    }
  }

  getControl(controlName: string): FormControl {
    return this.rolesForm.get(controlName) as FormControl;
  }

  cancel() {}
}
