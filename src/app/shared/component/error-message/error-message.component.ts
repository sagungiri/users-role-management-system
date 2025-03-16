import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  imports: [CommonModule, FormsModule],
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent {
  @Input() control: AbstractControl | null = null;
  @Input() errorMessages: { type: string; message: string }[] = [];

  constructor() {}

  getResolvedErrorMessages(control: AbstractControl | null): string[] {
    if (!control || !control.errors) return [];

    const formControl = control as FormControl;

    return this.errorMessages
      .filter(errorDef => formControl.hasError(errorDef.type))
      .map(errorDef => {
        const errorData = formControl.getError(errorDef.type);
        // Handle different validation types dynamically
        switch (errorDef.type) {
          case 'minlength':
          case 'maxlength':
            return errorDef.message.replace(
              /\{0\}/g,
              errorData?.['requiredLength'].toString()
            );
          case 'pattern':
            return errorDef.message.replace(
              /\{0\}/g,
              errorData?.['requiredPattern'] ?? ''
            );
          default:
            return errorDef.message;
        }
      });
  }
}
