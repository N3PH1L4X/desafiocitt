import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoarticuloPage } from './infoarticulo.page';

const routes: Routes = [
  {
    path: '',
    component: InfoarticuloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoarticuloPageRoutingModule {}
