import { Injectable } from '@angular/core';
import { ApiResponse } from '@core/interface/api-response';
import { ApiConfigService } from '@core/service/api-config.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  basePath = 'role';
  constructor(private apiConfigService: ApiConfigService) {}

  getAll() {
    return this.apiConfigService.get<null, any[]>(this.basePath);
  }

  getDetail(id: number) {
    return this.apiConfigService.get<null, any>(this.basePath + '/' + id);
  }

  create(data: any): Observable<ApiResponse> {
    return this.apiConfigService.post<any, any>(this.basePath, data);
  }

  update(id: string, data: any): Observable<ApiResponse> {
    return this.apiConfigService.put<any, any>(`${this.basePath}/${id}`, data);
  }
}
