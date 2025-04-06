import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { TokenService } from '@core/service/token.service';
import { NavigationRoute } from '@shared/constant/navigation-route.const';

export const AuthGuard = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  const token = tokenService.getToken();
  console.log('token', token);
  return !!token ? true : router.createUrlTree([NavigationRoute.AUTH.BASE]);
};
