import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output
} from '@angular/core';
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
import { SelectComponent } from '@shared/component/select/select.component';
import { ErrorMessageConst } from '@shared/constant/error-message.const';
import { RegexConst } from '@shared/constant/regex.const';

@Component({
  selector: 'app-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextComponent,
    ButtonComponent,
    ErrorMessageComponent,
    SelectComponent
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnChanges {
  @Input() formData: any;
  @Input() roles: any;
  @Output() onSubmit = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<boolean>();

  permissionsOptions = ['View', 'Create', 'Update', 'Delete'];

  createBtnConfig = {
    button: { cssClass: 'button-primary', value: 'Submit', type: 'Submit' }
  };

  cancelBtnConfig = {
    button: { cssClass: 'button-secondary', value: 'Cancel' }
  };
  errorMessageConst = ErrorMessageConst;

  constructor(private router: Router) {}

  readonly userForm = new FormGroup({
    name: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15)
      ]
    }),
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
    email: new FormControl('', {
      validators: [Validators.required]
    }),
    phonenumber: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]
    }),
    role: new FormControl('', {
      validators: [Validators.required]
    })
  });

  ngOnChanges() {
    if (this.formData) {
      this.userForm.patchValue(this.formData);
    }
  }

  submit(): void {
    if (this.userForm.valid) {
      this.onSubmit.next(this.userForm.value);
    }
  }

  getControl(controlName: string): FormControl {
    return this.userForm.get(controlName) as FormControl;
  }

  cancel() {
    this.onCancel.next(true);
  }
}
