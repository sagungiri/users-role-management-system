import { Component, inject } from '@angular/core';
import { ActivateTemplateComponent } from '@auth/component/activate-template/activate-template.component';
import { BaseShellComponent } from '@auth/component/base-shell/base-shell.component';
import { AuthFacade } from '@auth/facade/auth.facade';
import { AUTH_FACADE } from '@auth/token/auth-facade.token';

@Component({
  selector: 'app-activate',
  imports: [BaseShellComponent, ActivateTemplateComponent],
  templateUrl: './activate.component.html',
  styleUrl: './activate.component.scss',
  providers: [
    {
      provide: AUTH_FACADE,
      useClass: AuthFacade
    }
  ]
})
export class ActivateComponent {
  private authFacade = inject(AUTH_FACADE);

  signup(event: {
    username: string;
    password: string;
    confirmPassword: string;
  }) {
    this.authFacade.signup(
      event.username,
      event.password,
      event.confirmPassword
    );
  }
}
