import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Equipo } from '../../models/equipos';
import { Jugador } from '../../models/jugador';

 function even(cont) {
  return !(cont % 2);
}


@IonicPage()
@Component({
  selector: 'page-team',
  templateUrl: 'team.html',
})
export class TeamPage {

  public team;
  public player;
  public nombre;
  public contador;
  public jugador: Jugador = new Jugador;
  public equipo: Equipo = new Equipo;
  public mostrar;
  public teamA;
  public teamB;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team =[];
    this.contador=0;
    this.mostrar=false;
    this.teamA=[];
    this.teamB=[]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamPage');
  }
  CrearJugador() {
    this.contador++;
    this.team.push(this.jugador.nombre);
    var estado = even(this.team.length);
    if((estado==true)&&(this.contador>=4)){
      this.mostrar=true;
    } else { this.mostrar = false; }
  };
  EliminarJugador(t){
  this.contador--;
  this.team.splice(this.team.indexOf(t),1);
    var estado = even(this.team.length);
    if ((estado == true) && (this.contador >= 4)) {
      this.mostrar = true;
    } else { this.mostrar = false;}
  }

  CrearEquipo() {

    var arrayA = [];
    var arrayB = [];

    this.team.map(function (key) {
      var numero = Math.floor((Math.random() * 2) + 1);
      // if ((numero === 2 )&& (teamA <= (n / 2))){
      //   teamA.push(key);
      //   console.log(teamA);
      // }
      if ((numero === 2)) {
        arrayA.push(key);

      }

      if ((numero === 1)) {
        arrayB.push(key);

      }

    });

    this.teamA = arrayA;
    this.teamB = arrayB;
   
  } 

}
