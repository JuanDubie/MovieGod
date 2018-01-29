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
  public peliA;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.peliA;
  }

  
  ionViewWillEnter(){
     this.peliA = JSON.parse(localStorage.getItem("PeliA"));
     console.log(this)
  }

}
