import {Component} from '@angular/core';
import {ApiService} from "../../common/services/api/api.services";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthApiServices} from "../../common/services/api/api_auth.services";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  l_or_r: boolean;
  password: any;
  login_password: string = 'password';
  register_password: string = 'password';
  register_confirm_password: string = 'password';
  link: any;

  data_login = {
    email: '',
    password: ''
  }

  data_register = {
    nom: '',
    prenom: '',
    email: '',
    mdp: '',
    confirme_mdp: ''
  }

  constructor(private api: ApiService, private authApi: AuthApiServices, private router: Router) {
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

  changeLoginEmail(event: any) {
    this.data_login.email = event.target.value
  }

  changeLoginPassword(event: any) {
    this.data_login.password = event.target.value
    console.log(this.data_login.password)
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
    this.data_register.mdp = event.target.value
  }

  seeConfirmRegisterPassword() {
    this.register_confirm_password = this.register_confirm_password === 'password' ? 'text' : 'password'
  }

  changeConfirmRegisterPassword(event: any) {
    this.data_register.confirme_mdp = event.target.value
  }

  changeRegisterEmail(event: any) {
    this.data_register.email = event.target.value
  }

  changeNom(event: any) {
    this.data_register.nom = event.target.value
  }

  changePrenom(event: any) {
    this.data_register.prenom = event.target.value
  }

  changeLocal(event: any) {
    if (this.data_register.mdp !== this.data_register.confirme_mdp) {
      event.preventDefault()
    } else {
      localStorage.clear();
      localStorage.setItem('link', JSON.stringify(this.link));
      localStorage.setItem('inscription', JSON.stringify(true));
    }
  }

  register(): void {
    console.log("Register");
    this.authApi.register_data = this.data_register;
    this.authApi.register().subscribe((data) => console.log(data));
  }

  login(): void {
    console.log("Login");
    this.authApi.login_data = this.data_login;
    console.log(this.authApi.login().subscribe((data) => console.log(data)));
    //this.authApi.login().subscribe((data) => console.log(data));
  }
}
