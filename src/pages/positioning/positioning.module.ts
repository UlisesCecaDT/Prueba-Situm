import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PositioningPage } from './positioning';
import { NavbarModule } from '../../components/navbar/navbar.module'
import { MapButtonModule } from '../../components/mapButton/mapButton.module'

@NgModule({
  declarations: [
    PositioningPage,
  ],
  imports: [
    IonicPageModule.forChild(PositioningPage),
    NavbarModule,
    MapButtonModule
  ],
})
export class PositioningPageModule {}
