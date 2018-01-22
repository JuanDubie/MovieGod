import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamPage } from './team';
import { Equipo } from '../../models/equipos';
import { Jugador } from '../../models/jugador';
import {FormBuilder, FormGroup } from '@angular/forms';
@NgModule({
  declarations: [
    TeamPage,
  ],
  imports: [
    IonicPageModule.forChild(TeamPage),
  ],
})
export class TeamPageModule {

  public team;
  public player;
  public nombre;
  public jugador : Jugador =new Jugador;
  public equipo: Equipo = new Equipo;

  constructor() {
    this.nombre;


  }

  CrearJugador(form){
    console.log(form);


  };


}