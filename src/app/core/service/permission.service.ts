import { Injectable } from '@angular/core';
import { NavigationRoute } from '@shared/constant/navigation-route.const';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  constructor(private storageService: StorageService) {}

  checkServiceIsActive(url: string): boolean {
    const isPrimaryAdmin =
      this.storageService.getItem('is-primary-user') == true;

    const permissions = this.storageService.getItem('permissions');

    if (url.includes(NavigationRoute.FEATURE.USER_ROLE.BASE)) {
      return isPrimaryAdmin;
    }

    const permissionType = this.getPermissionTypeFromUrl(url);

    return this.hasPermission(permissionType, permissions);
  }

  private getPermissionTypeFromUrl(
    url: string
  ): 'Create' | 'View' | 'Update' | 'Delete' | null {
    const cleanedUrl = url.split('?')[0].split('#')[0];
    const segments = cleanedUrl.split('/').filter(Boolean);

    if (cleanedUrl.endsWith('/create')) return 'Create';
    if (/\/\d+$/.test(cleanedUrl)) return 'Update';

    if (segments.length === 1) return 'View';

    return null;
  }

  private hasPermission(
    permissionType: 'Create' | 'View' | 'Update' | 'Delete' | null,
    permissions: any
  ): boolean {
    if (!permissionType) return false;

    return permissions.includes(permissionType);
  }

  showMenuItem(routePath: string): boolean {
    if (routePath.includes(NavigationRoute.FEATURE.USER_ROLE.BASE)) {
      return this.storageService.getItem('is-primary-user') == true;
    } else {
      return true;
    }
  }
}
