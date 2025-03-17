import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-checkbox-group',
  imports: [CommonModule, ReactiveFormsModule, MatCheckboxModule],
  templateUrl: './checkbox-group.component.html',
  styleUrl: './checkbox-group.component.scss'
})
export class CheckboxGroupComponent {
  @Input() options: string[] = [];
  @Input() control!: FormControl;
  @Input() label: string = '';

  selectionChange(option: string) {
    const currentValue = this.control.value || [];
    if (currentValue.includes(option)) {
      this.control.setValue(currentValue.filter((v: string) => v !== option));
    } else {
      this.control.setValue([...currentValue, option]);
    }
    this.control.markAsTouched();
  }

  isSelected(option: string): boolean {
    return this.control.value?.includes(option);
  }
}
