import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {
  static readonly APP_PREFIX = 'ACCESS-KEY_';

  /**
   * Sets item in session storage
   *
   * @param {string} key
   * @param {unknown} value
   */
  setItem(key: string, value: unknown) {
    try {
      sessionStorage.setItem(
        `${StorageService.APP_PREFIX}${key}`,
        JSON.stringify(value)
      );
    } catch {
      sessionStorage.setItem(
        `${StorageService.APP_PREFIX}${key}`,
        value as string
      );
    }
  }

  /**
   * Gets item from session storage by key
   *
   * @param {string} key
   * @return {*}  {unknown}
   */
  getItem(key: string): unknown {
    const value = sessionStorage.getItem(`${StorageService.APP_PREFIX}${key}`);
    try {
      return JSON.parse(value as string);
    } catch {
      return value;
    }
  }

  /**
   * Removes item from session storage by key
   *
   * @param {string} key
   */
  removeItem(key: string) {
    sessionStorage.removeItem(`${StorageService.APP_PREFIX}${key}`);
  }
}
