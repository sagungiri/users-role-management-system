import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormComponent } from '@features/user-roles/component/form/form.component';
import { UserRolesApiService } from '@features/services/user-roles-api.service';
import { NavigationRoute } from '@shared/constant/navigation-route.const';

@Component({
  selector: 'app-create-page',
  imports: [FormComponent],
  templateUrl: './create-page.component.html',
  styleUrl: './create-page.component.scss'
})
export class CreatePageComponent {
  navigationRoute = NavigationRoute;

  constructor(
    private apiService: UserRolesApiService,
    private router: Router
  ) {}

  submit(event: any) {
    const role = { ...event, default: false };

    this.apiService.create(role).subscribe({
      next: response => {
        this.router.navigate([this.navigationRoute.FEATURE.USER_ROLE.BASE]);
        console.log('Success:', response);
      },
      error: error => {
        console.error('Error:', error);
      }
    });
  }

  onCancel() {
    this.router.navigate([this.navigationRoute.FEATURE.USER_ROLE.BASE]);
  }
}
