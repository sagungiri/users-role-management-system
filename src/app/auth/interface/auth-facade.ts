import { Observable } from 'rxjs';

export interface IAuthFacade {
  login(username: string, password: string): void;
  logout(): void;
}
