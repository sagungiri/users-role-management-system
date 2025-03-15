import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonConfig } from './interface/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [CommonModule]
})
export class ButtonComponent {
  @Input() config: Partial<ButtonConfig> = {};

  @Output() onClick: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  protected click() {
    this.onClick.emit(true);
  }
}
