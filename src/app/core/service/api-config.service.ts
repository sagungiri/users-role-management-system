import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '@core/interface/api-response';
import { ApiPathConfig } from '@core/config/api-path.config';
import { ShowLoading } from '@shared/decorators/show-loading.decorator';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Makes a POST HTTP request to the specified API path.
   *
   * T - Type of the request payload.
   * R - Expected type of the response data.
   * @param {string} path - The API endpoint path.
   * @param {T} [reqParams] - Optional request body or parameters.
   * @param {{ [x: string]: string }} [headers] - Optional HTTP headers to include in the request.
   * @returns {Observable<ApiResponse<R>>} - Observable emitting the API response.
   */

  @ShowLoading()
  post<T, R>(
    path: string,
    reqParams?: T,
    headers?: { [x: string]: string }
  ): Observable<ApiResponse<R>> {
    let options = {};

    if (headers) {
      const httpHeaders = new HttpHeaders({
        ...headers
      });
      options = { headers: httpHeaders };
    }

    return this.httpClient.post<ApiResponse<R>>(
      ApiPathConfig.generateApiPath(path),
      reqParams || {},
      options
    );
  }

  @ShowLoading()
  get<T, R>(
    path: string,
    reqParams?: T,
    headers?: { [x: string]: string }
  ): Observable<R> {
    let options: {
      headers?: HttpHeaders;
      params?: HttpParams;
    } = {};

    if (headers) {
      options.headers = new HttpHeaders(headers);
    }

    if (reqParams) {
      let params = new HttpParams();
      Object.entries(reqParams).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params = params.set(key, String(value));
        }
      });
      options.params = params;
    }
    return this.httpClient.get<R>(ApiPathConfig.generateApiPath(path), options);
  }

  @ShowLoading()
  put<T, R>(
    path: string,
    reqParams: T,
    headers?: { [x: string]: string }
  ): Observable<ApiResponse<R>> {
    let options = {};
    if (headers) {
      const httpHeaders = new HttpHeaders({
        ...headers
      });
      options = { headers: httpHeaders };
    }

    return this.httpClient.put<ApiResponse<R>>(
      ApiPathConfig.generateApiPath(path),
      reqParams,
      options
    );
  }

  @ShowLoading()
  delete<T, R>(
    path: string,
    headers?: { [x: string]: string }
  ): Observable<ApiResponse<R>> {
    let options = {};
    if (headers) {
      const httpHeaders = new HttpHeaders({
        ...headers
      });
      options = { headers: httpHeaders };
    }

    return this.httpClient.delete<ApiResponse<R>>(
      ApiPathConfig.generateApiPath(path),
      options
    );
  }
}
