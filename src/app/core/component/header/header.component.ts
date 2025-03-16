import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { AuthFacade } from '@auth/facade/auth.facade';
import { AUTH_FACADE } from '@auth/token/auth-facade.token';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [
    {
      provide: AUTH_FACADE,
      useClass: AuthFacade
    }
  ]
})
export class HeaderComponent {
  private authFacade = inject(AUTH_FACADE);
  @Input() isSidebarExpanded: boolean = false;
  @Output() toggleSidebar = new EventEmitter<boolean>();
  @ViewChild('logoutModal', { static: false }) logoutModal!: ElementRef;

  handleSidebarToggle = () => {
    this.toggleSidebar.emit(this.isSidebarExpanded);
  };

  openModal() {
    this.logoutModal.nativeElement.style.display = 'block';
  }

  closeModal() {
    this.logoutModal.nativeElement.style.display = 'none';
  }

  onLogout() {
    this.authFacade.logout();
  }
}
