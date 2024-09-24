import { Component } from '@angular/core';
import {ApiService} from "../../common/services/api/api.services";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  l_or_r: boolean;
  password: any;
  login_password:string = 'password';
  register_password:string = 'password';
  register_confirm_password:string = 'password';
  link:any;
  data = {
    nom: '',
    prenom: '',
    email: '',
    mdp: '',
    confirme_mdp: ''
  }
  constructor(private api : ApiService, private router: Router) {
      this.l_or_r = false;
  }

  change(arg: string): void {
    switch (arg) {
      case 'l':
        this.l_or_r = false;
        break;
      case 'r':
        this.l_or_r = true;
        break;
      default:
        this.l_or_r = false;
    }
  }

  seeLoginPassword() {
    this.login_password = this.login_password === 'password' ? 'text' : 'password';
  }
  changeLoginPassword(event: any) {
    this.password = event.target.value
  }

  onSubmitLogin(event: Event) {
    event.preventDefault();

    // faire ton appelle API ici pour la connexion
    // si la connexion est valider faire le navigate si dessous
    this.router.navigate([this.link + "/accueil"]);

    // si c'est pas bon faire sa pour afficher message erreur
    // this.messageErreur("Mettre le message d'erreur qui va bien", 'Down')
  }
  onSubmitRegister(event: Event) {
    event.preventDefault();

    // faire ton appelle API ici pour l'inscription
    // si ton inscription est valider faire le navigate si dessous
    // this.router.navigate(["/connexion"]);

    // si probleme pendant l'inscription faire ci-dessous
    this.router.navigate(["/auth"]);
  }

  seeRegisterPassword() {
    this.register_password = this.register_password === 'password' ? 'text' : 'password';
  }

  changeRegisterPassword(event: any) {
    this.data.mdp = event.target.value
  }

  seeConfirmRegisterPassword() {
    this.register_confirm_password = this.register_confirm_password === 'password' ? 'text' : 'password'
  }

  changeConfirmRegisterPassword(event: any) {
    this.data.confirme_mdp = event.target.value
  }

  changeRegisterEmail(event: any) {
    this.data.email = event.target.value
  }
  changeNom(event: any) {
    this.data.nom = event.target.value
  }

  changePrenom(event: any) {
    this.data.prenom = event.target.value
  }

  changeLocal(event: any) {
    if(this.data.mdp !== this.data.confirme_mdp) {
      event.preventDefault()
    } else {
      localStorage.clear();
      localStorage.setItem('link', JSON.stringify(this.link));
      localStorage.setItem('inscription', JSON.stringify(true));
    }
  }

  register(): void {
    console.log("Register");
    console.log(this.api.getHello().subscribe((data) => console.log(data)));
  }

  login(): void {
    console.log("Login");
    console.log(this.api.getHello().subscribe((data) => console.log(data)));
  }
}
