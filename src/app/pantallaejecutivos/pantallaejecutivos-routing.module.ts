import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PantallaejecutivosPage } from './pantallaejecutivos.page';

const routes: Routes = [
  {
    path: '',
    component: PantallaejecutivosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PantallaejecutivosPageRoutingModule {}
