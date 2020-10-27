import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-resize',
  templateUrl: './resize.component.html',
})
export class ResizeComponent {
  @Input() size: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  resize(delta: number): void {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
}

