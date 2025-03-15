import { Injectable, inject } from '@angular/core';
import { StorageService } from '@core/service/storage.service';

@Injectable({ providedIn: 'root' })
export class TokenService {
  private readonly storageService = inject(StorageService);
  private readonly tokenKey = 'secret-id'; // Constant key for JWT token

  /**
   * Get JWT token from local storage
   * @returns {string | null} JWT token or null if not found
   */
  getToken(): string | null {
    return this.storageService.getItem(this.tokenKey) as string | null;
  }

  /**
   * Save JWT token to local storage
   * @param {string} token JWT token to store
   */
  saveToken(token: string): void {
    this.storageService.setItem(this.tokenKey, token);
  }

  /**
   * Remove JWT token from local storage
   */
  removeToken(): void {
    this.storageService.removeItem(this.tokenKey);
  }
}
