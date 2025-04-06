import { Routes } from '@angular/router';
import { AuthGuard } from '@auth/guard/auth.guard';
import { featuresRoutes } from '@features/features.routes';
import { NavigationRoute } from '@shared/constant/navigation-route.const';

export const routes: Routes = [
  {
    path: NavigationRoute.AUTH.BASE,
    loadChildren: () => import('@auth/auth.routes').then(c => c.authRoutes)
  },
  {
    path: '',
    loadComponent: () =>
      import('@core/page/layout/layout.component').then(c => c.LayoutComponent),
    canActivate: [AuthGuard],
    children: [...featuresRoutes]
  },
  {
    path: NavigationRoute.FORBIDDEN,
    loadComponent: () =>
      import('@core/page/forbidden/forbidden.component').then(
        c => c.ForbiddenComponent
      )
  },
  {
    path: '**',
    redirectTo: ''
  }
];
