import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConfigService } from '@core/service/api-config.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  basePath = 'user';
  constructor(private apiConfigService: ApiConfigService) {}

  getUser(username: string, password: string) {
    const queryParam = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;

    return this.apiConfigService.get<any, any[]>(
      this.basePath + '?' + queryParam
    );
  }
}
