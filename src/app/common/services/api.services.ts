import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})

export class ApiService {
    
    host = 'http://127.0.0.1:3000';
    tag = 'radio';
    
    constructor(
        private http: HttpClient
    ) {}

    getListRadio() {
        // Le Client http, Utilise la méthode Get pour API, chemin de l'API pour la méthode, mappe tout les objet
        return this.http.get(`${this.host}/${this.tag}`).pipe(map((res) => res));
    }
    
    getRadioById(id : number) { 
        return this.http.get(`${this.host}/${this.tag}/${id}`).pipe(map((res) => res));
    }
}