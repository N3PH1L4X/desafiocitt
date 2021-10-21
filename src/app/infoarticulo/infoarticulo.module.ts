import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoarticuloPageRoutingModule } from './infoarticulo-routing.module';

import { InfoarticuloPage } from './infoarticulo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoarticuloPageRoutingModule
  ],
  declarations: [InfoarticuloPage]
})
export class InfoarticuloPageModule {}
