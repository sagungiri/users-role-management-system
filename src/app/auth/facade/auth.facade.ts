// src/app/auth/facade/auth.facade.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IAuthFacade } from '@auth/interface/auth-facade';
import { ApiService } from '@auth/service/api.service';
import { StorageService } from '@core/service/storage.service';
import { TokenService } from '@core/service/token.service';
import { NavigationRoute } from '@shared/constant/navigation-route.const';
import { switchMap, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthFacade implements IAuthFacade {
  navigationRoute = NavigationRoute;

  constructor(
    private tokenService: TokenService,
    private storageService: StorageService,
    private apiService: ApiService,
    private router: Router
  ) {}

  /**
   * Login is done like this due to limitation of mockapi.io
   * Instead of this there need to be actual login api in application
   * and token need to be get from headers instead of body
   * and required data for further details like permission management needto be in login api response instead
   *
   * @param username
   * @param password
   */
  login(username: string, password: string): void {
    // Call the API with username and password
    this.apiService
      .getUser(username, password)
      .pipe(
        tap(data => {
          const token = data[0]?.token;
          const isPrimary = data[0]?.userType === 'Primary';

          this.tokenService.saveToken(token);
          this.storageService.setItem('is-primary-user', isPrimary);
        }),
        switchMap((data: any) => {
          const role = data[0]?.role;
          return this.apiService.getUserRoleById(role);
        })
      )
      .subscribe({
        next: (roleData: any) => {
          console.log('User role data received:', roleData);
          this.storageService.setItem('permissions', roleData[0]?.permissions);
          this.router.navigate([this.navigationRoute.FEATURE.DASHBOARD]);
          console.log('User logged in');
        },
        error: err => {
          console.error('Login or role fetch failed:', err);
        }
      });
  }

  logout(): void {
    this.storageService.clear();
    this.router.navigate([this.navigationRoute.AUTH.BASE]);
    console.log('User logged out');
  }

  signup(username: string, password: string, confirmPassword: string): void {}
}
