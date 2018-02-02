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
  public timer;
  public maxTime
  public hidevalue 

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.peli;
    this.timer;
    this.hidevalue = false;
  }
  maxtime: any = 30

  StartTimer() {
    
    this.timer = setTimeout(x => {
      if (this.maxTime <= 0) { }
      this.maxTime -= 1;
      console.log(this.timer);
      if (this.maxTime > 0) {
        this.hidevalue = false;
        this.StartTimer();
      }

      else {
        this.hidevalue = true;
      }

    }, 1000);


  }
  
    
  ionViewWillEnter(){
    this.storage.get('PeliculaJuego').then((val) => {
      this.peli=val;
    });
    
  }
  

}
