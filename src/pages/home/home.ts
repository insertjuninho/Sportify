import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, ToastController } from 'ionic-angular';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('usuario') usuario;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController,
              public firebaseAuth : AngularFireAuth,
              public toastCtrl : ToastController) {

  }

  login(){
    this.firebaseAuth.auth.signInWithEmailAndPassword(
      this.usuario.value,this.password.value,
    ).then(()=>{
      //login com successo
      console.log(this.firebaseAuth.auth.currentUser.email);
      this.exibirMensage('Logado com sucesso');
    })
    .catch( ( erro:any) => {
        //login sem sucesso
    
    });
  }

  exibirMensage(mensagem : string){
    let toast = this.toastCtrl.create({
      duration : 4000, position: 'bottom'
    })
    toast.setMessage(mensagem);
    toast.present();
  }

  irParaCadastro(){
    this.navCtrl.push('CadastroPage');
  }
}
