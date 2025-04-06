import { Routes } from '@angular/router';
import { PermissionGuard } from '@core/guard/permission.guard';
import { NavigationRoute } from '@shared/constant/navigation-route.const';

export const featuresRoutes: Routes = [
  {
    path: '',
    redirectTo: NavigationRoute.FEATURE.DASHBOARD,
    pathMatch: 'full'
  },
  {
    path: NavigationRoute.FEATURE.DASHBOARD,
    loadComponent: () =>
      import('@features/dashboard/dashboard.component').then(
        c => c.DashboardComponent
      )
  },
  {
    path: NavigationRoute.FEATURE.MANAGE_USER.BASE,
    loadChildren: () =>
      import('@features/manage-user/manage-user.routes').then(
        c => c.manageUserRoutes
      ),
    canActivate: [PermissionGuard]
  },
  {
    path: NavigationRoute.FEATURE.USER_ROLE.BASE,
    loadChildren: () =>
      import('@features/user-roles/user-role.routes').then(
        c => c.userRolesRoutes
      ),
    canActivate: [PermissionGuard]
  }
];
