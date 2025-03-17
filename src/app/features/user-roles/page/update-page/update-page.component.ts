import { Component } from '@angular/core';
import { FormComponent } from '@features/user-roles/component/form/form.component';

@Component({
  selector: 'app-update-page',
  imports: [FormComponent],
  templateUrl: './update-page.component.html',
  styleUrl: './update-page.component.scss'
})
export class UpdatePageComponent {
  submit() {}
}
