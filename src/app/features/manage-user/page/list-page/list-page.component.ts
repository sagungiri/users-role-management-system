import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationRoute } from '@shared/constant/navigation-route.const';
import { ButtonComponent } from '@shared/component/button/button.component';
import { TableComponent, TableColumnDirective } from '@shared/component/table';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '@shared/component/pagination/pagination.component';
import { StatusBadgeComponent } from '@shared/component/status-badge/status-badge.component';
import { ActionUtils } from '@shared/utils/action-utils';
import { BehaviorSubject, switchMap, tap } from 'rxjs';
import { ManageUserApiService } from '@features/services/manage-user-api.service';
import { ButtonPermissionDirective } from '@core/directives/button-permission.directive';

@Component({
  selector: 'app-list-page',
  imports: [
    CommonModule,
    ButtonComponent,
    TableComponent,
    TableColumnDirective,
    PaginationComponent,
    StatusBadgeComponent,
    ButtonPermissionDirective
  ],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.scss'
})
export class ListPageComponent {
  navigationRoute = NavigationRoute;

  createBtnConfig = {
    button: { cssClass: 'button-primary', value: 'Add User' }
  };
  viewBtnConfig = ActionUtils.viewBtnConfig;
  updateBtnConfig = ActionUtils.updateBtnConfig;
  deleteBtnConfig = ActionUtils.deleteBtnConfig;
  private pageSubject = new BehaviorSubject<number>(1);
  pageSize = 10;

  constructor(
    private router: Router,
    private apiService: ManageUserApiService
  ) {}

  dataset$ = this.pageSubject.pipe(
    switchMap(page => this.apiService.getAll()),
    tap(data => {})
  );

  createNew() {
    this.router.navigate([this.navigationRoute.FEATURE.MANAGE_USER.CREATE]);
  }

  onPageChange(event: any) {}

  viewDetails() {}

  updateFields(id: number) {
    this.router.navigate([this.navigationRoute.FEATURE.MANAGE_USER.BASE, id]);
  }
  delete(id: number) {}
}
