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
  register_data = {
    nom: '',
    prenom: '',
    email: '',
    mdp: '',
    confirme_mdp: ''
  }

  login_data = {
    email: '',
    mdp: ''
  }

  getAllUsers(): Observable<User[]> {
    return this.client.get<User[]>(`${this.auth_url}/getall`).pipe(map((res) => res));
  }

  //login(dto: loginDto): Observable<string> {
  login(): Observable<string> {
    return this.client.get<string>(`${this.auth_url}/login`).pipe(map((access_token)=> access_token));
  }

  register(): void {
   // this.client.post(`${this.auth_url}/`,)
  }
}
