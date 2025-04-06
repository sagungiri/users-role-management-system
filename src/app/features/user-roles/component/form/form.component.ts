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
export class FormComponent implements OnChanges {
  @Input() formData: any;
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
  isDisabled = false;

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

  ngOnChanges() {
    if (this.formData) {
      this.rolesForm.patchValue(this.formData);
      if (this.formData.default) {
        this.rolesForm.disable();
        this.isDisabled = true;
      }
    }
  }

  submit(): void {
    if (this.rolesForm.valid) {
      this.onSubmit.emit(this.rolesForm.value);
    }
  }

  getControl(controlName: string): FormControl {
    return this.rolesForm.get(controlName) as FormControl;
  }

  cancel() {
    this.onCancel.next(true);
  }
}
