import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResizerComponent } from './resizer/resizer.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
  {path: 'wallet', component: WalletComponent},
  {path: 'resize', component: ResizerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
