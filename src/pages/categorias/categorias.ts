import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoPlayer } from '@ionic-native/video-player';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private videoPlayer: VideoPlayer) {
  }

  ionViewDidLoad() {
    this.videoPlayer.play('https://staging.coverr.co/s3/mp4/Busy-Forest.mp4').then(() => {
      console.log('video completed');
     }).catch(err => {
      console.log('Erro: '+err);
     });
  }


}
