import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationRoute } from '@shared/constant/navigation-route.const';
import { ButtonComponent } from '@shared/component/button/button.component';
import { TableComponent, TableColumnDirective } from '@shared/component/table';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '@shared/component/pagination/pagination.component';
import { ActionUtils } from '@shared/utils/action-utils';

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

  constructor(private router: Router) {}

  dataset = {
    totalCount: 50,
    size: 10,
    content: [
      {
        id: 1,
        name: 'Adminstrator',
        label: 'Admin'
      },
      {
        id: 2,
        name: 'Content Creator',
        label: 'Content Creator'
      }
    ]
  };

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
