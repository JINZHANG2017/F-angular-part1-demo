import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResizeComponent } from './resize/resize.component';
import { ResizerComponent } from './resizer/resizer.component';
import { WalletComponent } from './wallet/wallet.component';

@NgModule({
  declarations: [
    AppComponent,
    ResizeComponent,
    ResizerComponent,
    WalletComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
