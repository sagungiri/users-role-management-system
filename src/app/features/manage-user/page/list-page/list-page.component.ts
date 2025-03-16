import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationRoute } from '@shared/constant/navigation-route.const';
import { ButtonComponent } from '../../../../shared/component/button/button.component';
import { TableComponent } from '../../../../shared/component/table/table.component';
import { CommonModule } from '@angular/common';
import { TableColumnDirective } from '@shared/component/table/directives/table-column.directive';
import { PaginationComponent } from '@shared/component/pagination/pagination.component';
import { StatusBadgeComponent } from '../../../../shared/component/status-badge/status-badge.component';

@Component({
  selector: 'app-list-page',
  imports: [
    CommonModule,
    ButtonComponent,
    TableComponent,
    TableColumnDirective,
    PaginationComponent,
    StatusBadgeComponent
  ],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.scss'
})
export class ListPageComponent {
  navigationRoute = NavigationRoute;
  createBtnConfig = {
    button: { cssClass: 'button-primary', value: 'Add User' }
  };
  viewBtnConfig = {
    image: {
      src: 'assets/view-icon.svg'
    }
  };
  updateBtnConfig = {
    image: {
      src: 'assets/update-icon.svg'
    }
  };

  constructor(private router: Router) {}

  dataset = {
    totalCount: 50,
    size: 10,
    content: [
      {
        id: 1,
        name: 'Alice',
        address: 25,
        username: 'Alice12',
        status: 'Active',
        type: 'Primary'
      },
      {
        id: 2,
        name: 'Bob',
        username: 'Bob',
        status: 'Active',
        type: 'Primary'
      },
      {
        id: 3,
        name: 'Charlie',
        username: 'Charlie',
        status: 'Inactive',
        type: 'Secondary'
      }
    ]
  };

  createNew() {
    this.router.navigate([this.navigationRoute.FEATURE.MANAGE_USER.CREATE]);
  }

  onPageChange(event: any) {}

  viewDetails() {}

  updateFields() {}
}
