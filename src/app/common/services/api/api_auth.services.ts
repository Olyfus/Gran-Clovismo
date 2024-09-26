import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {ApiService} from "./api.services";
import {User} from "../../objects/user.object";


@Injectable({
  providedIn: "root",
})


export class AuthApiServices extends ApiService {
  auth_url: string = this.root_host+'/user';
  access_token: string = ''
  register_data = {
    nom: '',
    prenom: '',
    email: '',
    mdp: '',
    confirme_mdp: ''
  }

  register_dto = {
    email: '',
    password: '',
    nom: '',
    prenom: '',
  }

  login_data = {
    email: '',
    password: ''
  }

  getAllUsers(): Observable<User[]> {
    return this.client.get<User[]>(`${this.auth_url}/getall`).pipe(map((res) => res));
  }

  //login(dto: loginDto): Observable<string> {
  login(): Observable<string> {
    console.log('Plop')
    console.log(this.login_data)
    return this.client.post<string>(`${this.auth_url}/login`, this.login_data).pipe(map((token)=> this.access_token =token));
  }

  register(): Observable<string>{
    console.log('Plop')
    console.log(this.register_data)
    if (this.register_data.mdp == this.register_data.confirme_mdp) {
      console.log('Plop pop opp')
      this.register_dto.email = this.register_data.email;
      this.register_dto.password = this.register_data.mdp;
      this.register_dto.nom = this.register_data.nom;
      this.register_dto.prenom = this.register_data.prenom;
      return this.client.post<string>(`${this.auth_url}/register`, this.register_dto).pipe(map((a) => a));
    }
    return this.client.post<string>(`${this.auth_url}/login`, this.login_data).pipe(map((access_token)=> access_token))
  }
}
