import { Injectable } from '@angular/core';
import { ApiResponse } from '@core/interface/api-response';
import { ApiConfigService } from '@core/service/api-config.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageUserApiService {
  basePath = 'user';
  constructor(private apiConfigService: ApiConfigService) {}

  // getAll(page: number, limit: number) {
  //   const queryParams = `?page=${page}&limit=${limit}`;
  //   return this.apiConfigService.get<null, any[]>(this.basePath + queryParams);
  // }

  getAll() {
    return this.apiConfigService.get<null, any[]>(this.basePath);
  }

  getDetail(id: number | string) {
    return this.apiConfigService.get<null, any>(this.basePath + '/' + id);
  }

  create(data: any): Observable<ApiResponse> {
    return this.apiConfigService.post<any, any>(this.basePath, data);
  }

  update(id: string, data: any): Observable<ApiResponse> {
    return this.apiConfigService.put<any, any>(`${this.basePath}/${id}`, data);
  }

  delete(id: string): Observable<ApiResponse> {
    return this.apiConfigService.delete<any, any>(`${this.basePath}/${id}`);
  }
}
