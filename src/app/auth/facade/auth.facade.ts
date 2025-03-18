// src/app/auth/facade/auth.facade.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IAuthFacade } from '@auth/interface/auth-facade';
import { ApiService } from '@auth/service/api.service';
import { StorageService } from '@core/service/storage.service';
import { TokenService } from '@core/service/token.service';
import { NavigationRoute } from '@shared/constant/navigation-route.const';
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

  login(username: string, password: string): void {
    // Call the API with username and password
    this.apiService.getUser(username, password).subscribe({
      next: data => {
        console.log('API data received:', data);
        const token = data[0]?.token;
        this.tokenService.saveToken(token);
        this.router.navigate([this.navigationRoute.FEATURE.DASHBOARD]);
        console.log('User logged in');
      }
    });
  }

  logout(): void {
    this.storageService.clear();
    this.router.navigate([this.navigationRoute.AUTH.LOG_IN]);
    console.log('User logged out');
  }

  signup(username: string, password: string, confirmPassword: string): void {}
}
