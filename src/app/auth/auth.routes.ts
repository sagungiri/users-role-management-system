import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { NavigationRoute } from '@shared/constant/navigation-route.const';

export const authRoutes: Routes = [
  {
    path: NavigationRoute.AUTH.LOG_IN,
    loadComponent: () =>
      import('@auth/page/login/login.component').then(c => c.LoginComponent)
  },
  {
    path: NavigationRoute.AUTH.USER_ACTIVATION,
    loadComponent: () =>
      import('@auth/page/activate/activate.component').then(
        c => c.ActivateComponent
      )
  },
  {
    path: '',
    redirectTo: NavigationRoute.AUTH.LOG_IN,
    pathMatch: 'full'
  }
];
