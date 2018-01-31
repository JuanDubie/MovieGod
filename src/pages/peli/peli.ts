import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the PeliPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-peli',
  templateUrl: 'peli.html',
})
export class PeliPage {
  public peli;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.peli;
  }

  
  ionViewWillEnter(){
    this.storage.get('PeliculaJuego').then((val) => {
      this.peli=val;
    });
    
   
  }

}
