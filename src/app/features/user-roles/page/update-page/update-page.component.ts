import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormComponent } from '@features/user-roles/component/form/form.component';
import { ApiService } from '@features/user-roles/service/api.service';
import { NavigationRoute } from '@shared/constant/navigation-route.const';
import { Observable } from 'rxjs/internal/Observable';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-update-page',
  imports: [CommonModule, FormComponent],
  templateUrl: './update-page.component.html',
  styleUrl: './update-page.component.scss'
})
export class UpdatePageComponent {
  navigationRoute = NavigationRoute;
  private route = inject(ActivatedRoute);
  id: string = '';
  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  detailData$: Observable<any> = this.route.paramMap.pipe(
    tap((params: any) => {
      this.id = params.get('id')!;
    }),
    switchMap(params => this.apiService.getDetail(params.get('id')!))
  );

  submit(event: any) {
    console.log('event', event);

    this.apiService.update(this.id, event).subscribe({
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
