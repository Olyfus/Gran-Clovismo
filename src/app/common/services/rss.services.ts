import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})

export class RssService {
    constructor (
        private http : HttpClient
    ){}
    

    getRssFeed(url: string) : Observable<any> {
        
        return this.http.get(url, {responseType: 'text'}).pipe(
            map(res => {
                const parser = new DOMParser();
                const xml = parser.parseFromString(res, 'application/xml')
                // console.log('Xml Parser')                                        Permet d'afficher le xml récupérer par la requête http
                // console.log(parser.parseFromString(res, 'application/xml'))
                return this.parseFeed(xml);
            })
        );
    }

    private parseFeed(xml: Document): any[] {
        // Les objets récupéré sont dans les balises morceau du xml
        const items = Array.from(xml.querySelectorAll('morceau'));
        
        return items.map(item => {
            // pour chaque items, les params sont injecté avec la détection de balise querySelector(NomBalise)
            return {
                chanteur: item.querySelector('chanteur')?.textContent,
                chanson: item.querySelector('chanson')?.textContent,
                pochette: item.querySelector('pochette')?.textContent,
                duree: item.querySelector('duration')?.textContent,
                audioUrl: item.querySelector('enclosure')?.getAttribute('url'), // Extract audio URL
                description: item.querySelector('description')?.textContent,
                pubDate: item.querySelector('pubDate')?.textContent
            };
        });
    }
}