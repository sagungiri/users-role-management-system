import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordsMatchValidator(): ValidatorFn {
  return (form: AbstractControl): ValidationErrors | null => {
    const password = form.get('password')?.value;
    const confirmPasswordControl = form.get('confirmPassword');

    if (!confirmPasswordControl) return null;

    const confirmPassword = confirmPasswordControl.value;
    const existingErrors = confirmPasswordControl.errors || {};

    if (password && confirmPassword && password !== confirmPassword) {
      confirmPasswordControl.setErrors({ ...existingErrors, mismatch: true });
    } else {
      if (existingErrors['mismatch']) {
        delete existingErrors['mismatch'];
        const updatedErrors = Object.keys(existingErrors).length
          ? existingErrors
          : null;
        confirmPasswordControl.setErrors(updatedErrors);
      }
    }

    return null;
  };
}
