import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: "root",
})

export class ApiService {

  host: string = 'http://127.0.0.1';
  port: number = 3000;

  root_host: string = this.host + ':' + this.port.toString() + '/'

  client: HttpClient;

  constructor(
    private http: HttpClient
  ) {
    this.client = http;
  }

  getHello(): Observable<any> {
    // Le Client http, Utilise la méthode Get pour API, chemin de l'API pour la méthode, mappe tout la data renvoyé

    console.log(this.client.get(`${this.root_host}/user/`));
    return this.http.get(`${this.root_host}/`)
      .pipe(map((data) =>
        data));
  }

}
