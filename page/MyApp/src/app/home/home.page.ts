import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {


  constructor(private router: Router) {}
  public mensaje =""

  user = {
    username:"",
    password: ""

  }

  login(){

    if(this.user.username != ""){
      let navigationExtras: NavigationExtras = {
        state: { user: this.user}
      }
      this.router.navigate(['/bienvenida'], navigationExtras);
    } else {
        this.mensaje = "Debe ingresar sus credenciales."
    }


  }
  recuperar(){
    this.router.navigate(['/recuperar'])
  }
}
