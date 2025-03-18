import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormComponent } from '@features/manage-user/component/form/form.component';
import { NavigationRoute } from '@shared/constant/navigation-route.const';
import { ApiService as RoleApiService } from '@features/user-roles/service/api.service';

import { map, Observable, switchMap, tap } from 'rxjs';
import { ApiService } from '@features/manage-user/service/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-page',
  imports: [CommonModule, FormComponent],
  templateUrl: './update-page.component.html',
  styleUrl: './update-page.component.scss'
})
export class UpdatePageComponent {
  navigationRoute = NavigationRoute;
  id: string = '';
  roleApiService = inject(RoleApiService);
  private route = inject(ActivatedRoute);

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

  detailData$: Observable<any> = this.route.paramMap.pipe(
    tap((params: any) => {
      this.id = params.get('id')!;
    }),
    switchMap(params => this.apiService.getDetail(params.get('id')!))
  );

  submit(event: any) {
    const user = { ...event, status: 'active', userType: 'Secondary' };

    this.apiService.update(this.id, user).subscribe({
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
