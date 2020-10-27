import { Component } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
})
export class WalletComponent {
  balance = 1000;

  inc(): void {
    this.change(1);
  }

  dec(): void {
    this.change(-1);
  }

  change(delta: number): void {
    this.balance = this.balance + delta;
  }
}
