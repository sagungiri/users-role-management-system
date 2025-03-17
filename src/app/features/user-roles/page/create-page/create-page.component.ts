import { Component } from '@angular/core';
import { FormComponent } from '@features/user-roles/component/form/form.component';

@Component({
  selector: 'app-create-page',
  imports: [FormComponent],
  templateUrl: './create-page.component.html',
  styleUrl: './create-page.component.scss'
})
export class CreatePageComponent {
  submit() {}
}
