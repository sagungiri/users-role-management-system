import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConfigService } from '@core/service/api-config.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly basePath = 'user';
  readonly rolePath = 'role';
  constructor(private apiConfigService: ApiConfigService) {}

  getUser(username: string, password: string) {
    const queryParam = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;

    return this.apiConfigService.get<any, any[]>(
      this.basePath + '?' + queryParam
    );
  }

  getUserRoleById(id: string) {
    const queryParam = `id=${encodeURIComponent(id)}`;

    return this.apiConfigService.get<any, { userRole: string }>(
      this.rolePath + '?' + queryParam
    );
  }
}
