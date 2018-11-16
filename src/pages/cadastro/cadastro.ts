import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  @ViewChild('usuario') usuario;
  @ViewChild('password') password;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public firebaseAuth : AngularFireAuth) {
  }

  cadastrar() {
    this.firebaseAuth.auth.createUserWithEmailAndPassword(
      this.usuario.value, this.password.value,
    ).then(()=> {
      console.log('Cadastrado com sucesso');
  }).catch((erro :any)=>{
    console.log('Erro ao cadastrar');
  });
    
  }

}
