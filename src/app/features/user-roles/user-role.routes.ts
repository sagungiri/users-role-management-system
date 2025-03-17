import { Routes } from '@angular/router';
import { CrudRoutes } from '@shared/constant/navigation-route.const';

export const userRolesRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@features/user-roles/page/list-page/list-page.component').then(
        c => c.ListPageComponent
      )
  },
  {
    path: CrudRoutes.CREATE,
    loadComponent: () =>
      import(
        '@features/user-roles/page/create-page/create-page.component'
      ).then(c => c.CreatePageComponent)
  },
  {
    path: CrudRoutes.DETAIL,
    loadComponent: () =>
      import('@features/user-roles/page/view-page/view-page.component').then(
        c => c.ViewPageComponent
      )
  },
  {
    path: CrudRoutes.EDIT,
    loadComponent: () =>
      import(
        '@features/user-roles/page/update-page/update-page.component'
      ).then(c => c.UpdatePageComponent)
  }
];
