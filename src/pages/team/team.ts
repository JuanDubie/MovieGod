import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Equipo } from '../../models/equipos';
import { Storage } from '@ionic/storage';



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
  public equipo: Equipo = new Equipo();
  public mostrar;
  public teamA;
  public teamB;
  public mostrarEquipos;
  public jugar;
  public participantes;
  public scoreB;
  public scoreA;
  constructor(private storage: Storage,public navCtrl: NavController, public navParams: NavParams) {
    this.participantes=false;
    this.team =[];
    this.contador=0;
    this.mostrar=false;
    this.teamA=[];
    this.teamB=[]
    this.mostrarEquipos=false;
  
  }

  CrearJugador() {
    this.contador++;
    this.team.push(this.nombre);
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

    } else { this.mostrar = false; }
  }

  CrearEquipo() {

    this.teamA = [];
    this.teamB = [];
    this.jugar=false;
    var arrayA =[];
    var arrayB =[];
    var contA=0;
    var contB=0;
    var mitad = this.team.length/2;
    
    this.team.map(function (key) {

       var numero = Math.floor((Math.random() * 2) + 1);

      if(contA===mitad){
       numero=1;
      }

      if (contB === mitad) {
        numero = 2;
      }

      if ((numero === 2) && (arrayA.length <= mitad)) {
        contA++;
        arrayA.push(key);
        
      }
      else
      {
        contB++;
        arrayB.push(key);
      }

    });

    this.mostrarEquipos=true;
    
    
    
    this.equipo.equipoA=arrayA;
    this.equipo.equipoB=arrayB;
    this.jugar = true;
  } 



    Juego(){
     
      this.equipo.scoreA=0;
      this.equipo.scoreB=0;
      
      this.storage.set('Equipos', this.equipo);
    
    

      this.navCtrl.push("JuegoPage");
  }

}
