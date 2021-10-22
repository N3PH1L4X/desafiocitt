import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PantallaejecutivosPageRoutingModule } from './pantallaejecutivos-routing.module';

import { PantallaejecutivosPage } from './pantallaejecutivos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PantallaejecutivosPageRoutingModule
  ],
  declarations: [PantallaejecutivosPage]
})
export class PantallaejecutivosPageModule {}
