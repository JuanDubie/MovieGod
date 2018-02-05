import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Equipo } from '../../models/equipos';



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
  private timer;
  public counter;
  public timeleft;
  public mostrar
  public hide
  public juega;
  public equipo: Equipo = new Equipo();
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.peli;
    this.timer;
    this.counter=0;
    this.timeleft=5;
    this.mostrar=false;
    this.hide=true;
   
  }
  StartTimer() {
    this.hide = false;
      var _this=this;
      function timeIt(){
      _this.counter++;
      _this.timer = (_this.timeleft - _this.counter);
        if (_this.timer ==0){
          _this.mostrar = true;
          clearInterval(time);
        }

    }
    var time = setInterval(timeIt,1000);

  }
    
  gano(){



  }

  perdio(){



  }


  ionViewWillEnter(){
    this.storage.get('PeliculaJuego').then((val) => {
      this.peli=val;
    });
    this.storage.get('Juega').then((val) => {
      this.juega = val;
      console.log(val);
    });
    this.storage.get('Equipos').then((val) => {
      this.equipo.equipoA = val.equipoA;
      this.equipo.equipoB = val.equipoB;
      this.equipo.scoreA = val.scoreA;
      this.equipo.scoreB = val.scoreB;

    });
    
  }
  
}
