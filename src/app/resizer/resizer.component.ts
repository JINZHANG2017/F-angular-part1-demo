import { Component, ViewChild } from '@angular/core';
import { ResizeComponent } from '../resize/resize.component';

@Component({
  selector: 'app-resizer',
  templateUrl: './resizer.component.html',
})
export class ResizerComponent {
  @ViewChild(ResizeComponent) resizeComponent: ResizeComponent;

  reset(): void {
    this.resizeComponent.size = 16;
  }
}

