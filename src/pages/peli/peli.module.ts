import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PeliPage } from './peli';

@NgModule({
  declarations: [
    PeliPage,
  ],
  imports: [
    IonicPageModule.forChild(PeliPage),
  ],
})
export class PeliPageModule {}
