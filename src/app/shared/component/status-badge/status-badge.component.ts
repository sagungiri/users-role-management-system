import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-badge',
  imports: [CommonModule],
  templateUrl: './status-badge.component.html',
  styleUrl: './status-badge.component.scss'
})
export class StatusBadgeComponent {
  @Input() label!: string;

  private colorMap: { [key: string]: string } = {
    active: 'badge-primary',
    inactive: 'badge-danger',

    primary: 'badge-primary',
    secondary: 'badge-secondary'
  };

  get badgeClass(): string {
    return this.colorMap[this.label.toLowerCase()] || 'badge-default';
  }
}
