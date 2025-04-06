import { inject } from '@angular/core';
import {
  CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { PermissionService } from '@core/service/permission.service';
import { NavigationRoute } from '@shared/constant/navigation-route.const';
import { Observable } from 'rxjs';

export const PermissionGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  const permissionService = inject(PermissionService);
  const router = inject(Router);

  const currentUrl = state.url;

  if (permissionService.checkServiceIsActive(currentUrl)) {
    return true;
  }

  return router.parseUrl(NavigationRoute.FORBIDDEN);
};
