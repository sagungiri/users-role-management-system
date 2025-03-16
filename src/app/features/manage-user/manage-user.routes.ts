import { Routes } from '@angular/router';
import {
  CrudRoutes,
  NavigationRoute
} from '@shared/constant/navigation-route.const';

export const manageUserRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@features/manage-user/page/list-page/list-page.component').then(
        c => c.ListPageComponent
      )
  },
  {
    path: CrudRoutes.CREATE,
    loadComponent: () =>
      import(
        '@features/manage-user/page/create-page/create-page.component'
      ).then(c => c.CreatePageComponent)
  },
  {
    path: CrudRoutes.DETAIL,
    loadComponent: () =>
      import('@features/manage-user/page/view-page/view-page.component').then(
        c => c.ViewPageComponent
      )
  },
  {
    path: CrudRoutes.EDIT,
    loadComponent: () =>
      import(
        '@features/manage-user/page/update-page/update-page.component'
      ).then(c => c.UpdatePageComponent)
  }
];
