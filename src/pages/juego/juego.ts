import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-juego',
  templateUrl: 'juego.html',
})
export class JuegoPage {

  public peliculasA;
  public peliculasAmostar;
  public peliculasAcopia;
  public peliculasB;
  public peliculasBmostar;
  public peliculasBcopia;
  public equipoA;
  public peliculaA;
  public peliculaB;
  public equipoB;
  public arrancarA;
  public arrancarB;
  public scoreA;
  public scoreB;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.peliculasA= ['Deseando amar', 'Pozos de ambición', '¡Olvídate de mí!', 'El árbol de la vida',
  'No es país para viejos', 'Hijos de los hombres', '‘4 meses, 3 semanas y 2 días', 'Holy Motors',
   ' La cinta blanca', 'Lost in Translation', 'La red social', 'La última noche', 'Hable con ella', 'Oldboy', 'La vida de los otros',
   'El caballero oscuro', 'Tigre y dragón', 'Ciudad de Dios'];
    this.peliculasAmostar=[];
    this.peliculasBmostar = [];
    this.peliculasAcopia=[];
    this.peliculasB=['El nuevo mundo', '12 años de esclavitud', 'Adiós al lenguaje', 'The Assassin',
    'La noche más oscura', 'Under the Skin', 'En tierra hostil', 'Inteligencia Artificial','La mujer sin cabeza',
   'Lejos del cielo', 'El secreto de sus ojos','Déjame entrar'];
    this.peliculasBcopia=[];
    this.equipoA=[];
    this.equipoB=[];
    this.peliculaA;
    this.peliculaB;
    this.arrancarA=false;
    this.arrancarB = false;
  }

  ionViewWillEnter(){
  
    this.equipoA = JSON.parse(localStorage.getItem("EquipoA"));
    this.equipoB = JSON.parse(localStorage.getItem("EquipoB"));
    this.scoreA = JSON.parse(localStorage.getItem("ScoreA"));
    this.scoreB = JSON.parse(localStorage.getItem("ScoreB"));
    this.peliculasAcopia=this.peliculasA;
    this.peliculasBcopia = this.peliculasB;
    var numero = Math.floor((Math.random() * 2) + 1);

    if(numero===2){
      this.arrancarB =true ;
      
      
    }else{
      this.arrancarA = true;
      
    }

    for(var i=0;i < 3;i++){
      this.peliculasAmostar.push(this.peliculasAcopia[i]);
      // this.peliculasAcopia.splice(this.peliculasAcopia.indexOf(this.peliculasAmostar[i]),1);
    }

    for (var j = 0; j < 3; j++) {
      this.peliculasBmostar.push(this.peliculasBcopia[j]);
      // this.peliculasBcopia.splice(this.peliculasBcopia.indexOf(this.peliculasBmostar[j]), 1);
    }
  }

  elegir(peli) {
console.log(peli);
  this.peliculaA=peli;
    localStorage.setItem("PeliA", JSON.stringify(this.peliculaA));

    this.navCtrl.push("PeliPage");
  }

  



}


// ['Deseando amar', 'Pozos de ambición', '¡Olvídate de mí!', 'El árbol de la vida',
//   'No es país para viejos', 'Hijos de los hombres', '‘4 meses, 3 semanas y 2 días', 'Holy Motors',
//   ' La cinta blanca', 'Lost in Translation', 'La red social', 'La última noche', 'Hable con ella', 'Oldboy', 'La vida de los otros',
//   'El caballero oscuro', 'Tigre y dragón', 'Ciudad de Dios']


// ['El nuevo mundo', '12 años de esclavitud', 'Adiós al lenguaje', 'The Assassin',
// 'La noche más oscura', 'Under the Skin', 'En tierra hostil', 'Inteligencia Artificial','La mujer sin cabeza',
// 'Lejos del cielo', 'El secreto de sus ojos','Déjame entrar'];















