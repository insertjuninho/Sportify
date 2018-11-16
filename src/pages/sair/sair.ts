import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-sair',
  templateUrl: 'sair.html',
})
export class SairPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public firebaseAuth : AngularFireAuth) {
  }

  ionViewDidLoad() {
    this.firebaseAuth.auth.signOut()
    .then(() =>{
      console.log("Desconectado!");
    })
    .catch((erro :any)=>{
      console.log("Erro!");
  });

  }

}
