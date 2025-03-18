import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationRoute } from '@shared/constant/navigation-route.const';
import { ButtonComponent } from '@shared/component/button/button.component';
import { TableComponent, TableColumnDirective } from '@shared/component/table';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '@shared/component/pagination/pagination.component';
import { ActionUtils } from '@shared/utils/action-utils';
import { BehaviorSubject, switchMap, tap } from 'rxjs';
import { ApiService } from '@features/user-roles/service/api.service';

@Component({
  selector: 'app-list-page',
  imports: [
    CommonModule,
    ButtonComponent,
    TableComponent,
    TableColumnDirective,
    PaginationComponent
  ],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.scss'
})
export class ListPageComponent {
  navigationRoute = NavigationRoute;

  createBtnConfig = {
    button: { cssClass: 'button-primary', value: 'Add Roles' }
  };
  viewBtnConfig = ActionUtils.viewBtnConfig;
  updateBtnConfig = ActionUtils.updateBtnConfig;
  deleteBtnConfig = ActionUtils.deleteBtnConfig;
  private pageSubject = new BehaviorSubject<number>(1);
  pageSize = 10;

  constructor(
    private router: Router,
    private apiService: ApiService
  ) {}

  dataset$ = this.pageSubject.pipe(
    switchMap(page => this.apiService.getAll()),
    tap(data => {})
  );

  createNew() {
    this.router.navigate([this.navigationRoute.FEATURE.USER_ROLE.CREATE]);
  }

  onPageChange(event: any) {}

  viewDetails(id: number) {}

  updateFields(id: number) {
    this.router.navigate([this.navigationRoute.FEATURE.USER_ROLE.BASE, id]);
  }

  delete(id: number) {}
}
