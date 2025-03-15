import { InjectionToken } from '@angular/core';
import { IAuthFacade } from '@auth/interface/auth-facade';

export const AUTH_FACADE = new InjectionToken<IAuthFacade>('AUTH_FACADE');
