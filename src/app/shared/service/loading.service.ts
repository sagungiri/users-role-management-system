import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { LoadingModalComponent } from '@shared/component/loading-modal/loading-modal.component';

@Injectable({
  providedIn: 'any'
})
export class LoadingService {
  private overlayRef: OverlayRef | null = null;

  constructor(private overlay: Overlay) {}

  show(): void {
    if (this.overlayRef) return;

    const overlayConfig = {
      hasBackdrop: true,
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically()
    };

    this.overlayRef = this.overlay.create(overlayConfig);
    const componentPortal = new ComponentPortal(LoadingModalComponent);
    this.overlayRef.attach(componentPortal);
  }

  hide(): void {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }
}
