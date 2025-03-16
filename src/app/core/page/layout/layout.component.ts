import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@core/component/header/header.component';
import { SidemenuComponent } from '@core/component/sidemenu/sidemenu.component';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, RouterOutlet, HeaderComponent, SidemenuComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  sidebarExpanded = true;
}
