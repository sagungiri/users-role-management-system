import { Component, inject, OnInit } from '@angular/core';
import { AuthFacade } from '@auth/facade/auth.facade';
import { AUTH_FACADE } from '@auth/token/auth-facade.token';
import { BaseShellComponent } from '@auth/component/base-shell/base-shell.component';
import { LoginTemplateComponent } from '@auth/component/login-template/login-template.component';
import { Router } from '@angular/router';
import { TokenService } from '@core/service/token.service';
import { NavigationRoute } from '@shared/constant/navigation-route.const';

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
export class LoginComponent implements OnInit {
  private authFacade = inject(AUTH_FACADE);
  tokenService = inject(TokenService);
  router = inject(Router);

  ngOnInit(): void {
    const token = this.tokenService.getToken();
    if (token) {
      this.router.navigate([NavigationRoute.FEATURE.DASHBOARD]);
    }
  }

  login(event: { username: string; password: string }) {
    this.authFacade.login(event.username, event.password);
  }
}
