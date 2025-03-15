import {
  HttpErrorResponse,
  HttpEvent,
  HttpRequest,
  HttpInterceptor,
  HttpHandler
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { HttpErrorCode } from '@auth/constant/error.const';
import { AUTH_FACADE } from '@auth/token/auth-facade.token';
import { TokenService } from '@core/service/token.service';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private readonly tokenService = inject(TokenService);
  private readonly authFacade = inject(AUTH_FACADE);

  /**
   * List of APIs to be excluded from error interception
   */
  private readonly ignoreAPIs: string[] = ['/auth/'];

  /**
   * Intercepts HTTP requests to attach token and handle errors globally
   *
   * @param req The outgoing HTTP request
   * @param next The next HTTP handler in the chain
   * @returns Observable of HTTP event
   */
  intercept<T>(
    req: HttpRequest<T>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = this.tokenService.getToken();

    // Add Authorization header if token exists
    if (accessToken) {
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${accessToken}` }
      });
    }

    // Handle errors globally
    return next
      .handle(req)
      .pipe(
        catchError((response: HttpEvent<Response>) =>
          this.handleError(response, req)
        )
      );
  }

  /**
   * Handles HTTP errors globally based on status codes
   *
   * @param response The HTTP error response
   * @param req The intercepted HTTP request
   * @returns Observable of HTTP event or empty observable for specific cases
   */
  private handleError(
    response: HttpEvent<Response>,
    req: HttpRequest<any>
  ): Observable<HttpEvent<any>> {
    if (response instanceof HttpErrorResponse) {
      // Skip handling for ignored APIs
      if (this.ignoreAPIs.some(api => req.url.includes(api))) {
        return throwError(() => response);
      }

      // Global error status handling
      switch (response.status) {
        case HttpErrorCode.UNAUTHORIZED:
          console.warn('Unauthorized: 401. Logging out...');
          this.tokenService.removeToken();
          this.authFacade.logout();
          return EMPTY;

        case HttpErrorCode.FORBIDDEN:
          console.warn('Access forbidden: 403');
          break;

        case HttpErrorCode.SERVER_ERROR:
          console.error('Internal server error: 500');
          break;

        case HttpErrorCode.METHOD_NOT_ALLOWED:
          console.error('Method not allowed: 405');
          break;

        default:
          console.error(`Unhandled error status: ${response.status}`);
          break;
      }

      // For all handled cases (except 401), rethrow the error
      return throwError(() => response);
    }

    // Rethrow non-HttpErrorResponse just in case
    return throwError(() => response);
  }
}
