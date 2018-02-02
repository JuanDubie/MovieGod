import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TeamPage  } from "../team/team";
import { Pelicula } from '../../models/peliculas';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public peliculasA;
public peliculasB;
public pelicula :Pelicula = new Pelicula();

  constructor(public navCtrl: NavController,private storage:Storage) {
    
    this.pelicula.peliculasA = ['Deseando amar', 'Pozos de ambición', '¡Olvídate de mí!', 'Tigre y dragón', 'Oldboy'];
    
    this.pelicula.peliculasB = ['El nuevo mundo', '12 años de esclavitud', 'El secreto de sus ojos', 'Ciudad de Dios', 'La última noche'];

      this.pelicula.peliculasAcopia = this.pelicula.peliculasA;

      this.pelicula.peliculasBcopia = this.pelicula.peliculasB;


  }

  CrearEquipos(){
  
    this.storage.set('Peliculas', this.pelicula);
    
    this.navCtrl.push("TeamPage");
  };
}


// this.pelicula.peliculasB = ['El nuevo mundo', '12 años de esclavitud', 'Adiós al lenguaje', 'The Assassin',
//   'La noche más oscura', 'Under the Skin', 'En tierra hostil', 'Inteligencia Artificial', 'La mujer sin cabeza',
//   'Lejos del cielo', 'El secreto de sus ojos', 'Déjame entrar', 'Ciudad de Dios'];
