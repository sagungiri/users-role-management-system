import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '@core/interface/api-response';
import { ApiPathConfig } from '@core/config/api-path.config';

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
}
