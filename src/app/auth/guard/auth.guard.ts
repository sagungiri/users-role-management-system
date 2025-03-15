import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  createUrlTreeFromSnapshot
} from '@angular/router';
import { TokenService } from '@core/service/token.service';
import { NavigationRoute } from '@shared/constant/navigation-route.const';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

export const authGuard = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const tokenService = inject(TokenService);

  const token = tokenService.getToken();

  // Wrap in observable to comply with route guard expectations
  return of(!!token).pipe(
    map(isAuthenticated =>
      isAuthenticated
        ? true /
        : createUrlTreeFromSnapshot(route, [NavigationRoute.AUTH.LOG_IN], {
            returnUrl: state.url // Redirect to login with returnUrl
          })
    )
  );
};
