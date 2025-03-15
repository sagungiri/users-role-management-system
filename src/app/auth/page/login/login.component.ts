import { Component, inject } from '@angular/core';
import { AuthFacade } from '@auth/facade/auth.facade';
import { AUTH_FACADE } from '@auth/token/auth-facade.token';
import { BaseShellComponent } from '@auth/component/base-shell/base-shell.component';
import { LoginTemplateComponent } from '@auth/component/login-template/login-template.component';

@Component({
  selector: 'app-login',
  imports: [BaseShellComponent, LoginTemplateComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [
    {
      provide: AUTH_FACADE,
      useClass: AuthFacade
    }
  ]
})
export class LoginComponent {
  private authFacade = inject(AUTH_FACADE);

  login(event: { username: string; password: string }) {
    this.authFacade.login(event.username, event.password);
  }
}
