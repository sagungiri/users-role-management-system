import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  OnInit
} from '@angular/core';
import { StorageService } from '@core/service/storage.service';

@Directive({
  selector: '[buttonPermission]' // still works with *buttonPermission
})
export class ButtonPermissionDirective implements OnInit {
  @Input() buttonPermission!: string;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    const rawPermissions = this.storageService.getItem('permissions');
    const permissions = Array.isArray(rawPermissions) ? rawPermissions : [];

    if (permissions.includes(this.buttonPermission)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear(); // remove element from DOM
    }
  }
}
