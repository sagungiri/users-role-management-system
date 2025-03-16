import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationRoute } from '@shared/constant/navigation-route.const';

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.component.scss']
})
export class ForbiddenComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate() {
    this.router.navigate([NavigationRoute.FEATURE.DASHBOARD]);
  }
}
