import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as MenuItems from '@core/component/sidemenu/json/menu-item.json';

@Component({
  selector: 'app-sidemenu',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.scss'
})
export class SidemenuComponent {
  @Input() isExpanded: boolean = false;
  menuItems = (MenuItems as any).menuItems;
}
