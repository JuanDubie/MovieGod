import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';



@IonicPage()
@Component({
  selector: 'page-juego',
  templateUrl: 'juego.html',
})
export class JuegoPage {

  public peliculasAmostar;
  public peliculasAcopia;
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
  public estado;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.peliculasAmostar=[];
    this.peliculasBmostar = [];
    this.equipoA=[];
    this.equipoB=[];
    this.peliculaA;
    this.peliculaB;
    this.arrancarA=false;
    this.arrancarB =false;
    this.estado=0;
  }

  ionViewWillEnter(){
    this.storage.get('Equipos').then((val) => {
     this.equipoA=val.equipoA;
     this.equipoB=val.equipoB;
     this.scoreA=val.scoreA;
      this.scoreB = val.scoreB; 
      
    });
    this.storage.get('Peliculas').then((val) => {
      console.log(val);
      this.peliculasAcopia=val.peliculasAcopia;

      this.peliculasBcopia =val.peliculasBcopia;
      return true;  
    })
    .then(()=>{
      this.peliculasAmostar = [];
      this.peliculasBmostar = [];

      var numero = Math.floor((Math.random() * 2) + 1);
     var time=this;
      if(numero===2){
      time.arrancarB = true; 
      setTimeout(function () {
        time.arrancarB = false; 
      }, 
        2000);
     
        this.estado=2;
      for (var j = 0; j < 3; j++) {
        this.peliculasBmostar.push(this.peliculasBcopia[j]);
        this.peliculasBcopia.splice(this.peliculasBcopia.indexOf(this.peliculasBmostar[j]), 1);
      }

    }else{

        this.estado = 1;
      time.arrancarA = true;
      setTimeout(function () {
        time.arrancarA = false;
      },
        2000);

      for (var i = 0; i < 3; i++) {
        this.peliculasAmostar.push(this.peliculasAcopia[i]);  
         this.peliculasAcopia.splice(this.peliculasAcopia.indexOf(this.peliculasAmostar[i]), 1);

      }

    }
     
    });
    

  }

  elegir(peli) {
    if(this.estado==2){
      this.peliculaB=peli;
      this.peliculasBmostar.splice(this.peliculasBmostar.indexOf(peli), 1);
      this.peliculasBmostar.map(key=>{
        this.peliculasBcopia.push(key);
      })
      this.storage.set('PeliculaJuego', this.peliculaB);
      this.storage.set('Peliculas.peliculasBcopia', this.peliculasAcopia);
      this.navCtrl.push("PeliPage");
    }else{
      this.peliculaA=peli;
      this.peliculasAmostar.splice(this.peliculasAmostar.indexOf(peli), 1);
      this.peliculasAmostar.map(key => {
        this.peliculasAcopia.push(key);
      })
      this.storage.set('PeliculaJuego', this.peliculaA);
      this.storage.set('Peliculas.peliculasAcopia', this.peliculasAcopia);
      this.navCtrl.push("PeliPage"); 
    }
    

  }

  



}


// ['Deseando amar', 'Pozos de ambición', '¡Olvídate de mí!', 'El árbol de la vida',
//   'No es país para viejos', 'Hijos de los hombres', '‘4 meses, 3 semanas y 2 días', 'Holy Motors',
//   ' La cinta blanca', 'Lost in Translation', 'La red social', 'La última noche', 'Hable con ella', 'Oldboy', 'La vida de los otros',
//   'El caballero oscuro', 'Tigre y dragón', 'Ciudad de Dios']


// ['El nuevo mundo', '12 años de esclavitud', 'Adiós al lenguaje', 'The Assassin',
// 'La noche más oscura', 'Under the Skin', 'En tierra hostil', 'Inteligencia Artificial','La mujer sin cabeza',
// 'Lejos del cielo', 'El secreto de sus ojos','Déjame entrar'];















