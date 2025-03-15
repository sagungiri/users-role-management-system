// src/app/auth/facade/auth.facade.ts
import { Injectable } from '@angular/core';
import { IAuthFacade } from '@auth/interface/auth-facade';
import { ApiService } from '@auth/service/api.service';
import { StorageService } from '@core/service/storage.service';
import { TokenService } from '@core/service/token.service';
@Injectable({
  providedIn: 'root'
})
export class AuthFacade implements IAuthFacade {
  constructor(
    private tokenService: TokenService,
    private storageService: StorageService,
    private apiService: ApiService
  ) {}

  login(username: string, password: string): void {
    // Simulate an API call to get the token (replace with real API logic)
    const token = 'your-jwt-token'; // Token received from your login API

    // Save the token
    this.tokenService.saveToken(token);
    console.log('User logged in');
  }

  logout(): void {
    this.storageService.clear();
    console.log('User logged out');
  }
}
