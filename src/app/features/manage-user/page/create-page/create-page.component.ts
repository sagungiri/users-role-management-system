import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormComponent } from '@features/manage-user/component/form/form.component';
import { ApiService } from '@features/manage-user/service/api.service';
import { ApiService as RoleApiService } from '@features/user-roles/service/api.service';
import { NavigationRoute } from '@shared/constant/navigation-route.const';
import { catchError, map, tap } from 'rxjs';

@Component({
  selector: 'app-create-page',
  imports: [CommonModule, FormComponent],
  templateUrl: './create-page.component.html',
  styleUrl: './create-page.component.scss'
})
export class CreatePageComponent {
  navigationRoute = NavigationRoute;
  roleApiService = inject(RoleApiService);

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  rolesData$ = this.roleApiService.getAll().pipe(
    map((data: any) =>
      data.map((item: any) => ({
        label: item.name,
        value: item.id
      }))
    ),
    tap(transformedData => console.log('Transformed Data:', transformedData))
  );

  submit(event: any) {
    const user = { ...event, status: 'active', userType: 'Secondary' };

    this.apiService.create(user).subscribe({
      next: response => {
        this.router.navigate([this.navigationRoute.FEATURE.MANAGE_USER.BASE]);
        console.log('Success:', response);
      },
      error: error => {
        console.error('Error:', error);
      }
    });
  }

  onCancel() {
    this.router.navigate([this.navigationRoute.FEATURE.MANAGE_USER.BASE]);
  }
}
