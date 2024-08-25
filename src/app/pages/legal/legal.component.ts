import {Component} from '@angular/core';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrl: './legal.component.css'
})
export class LegalComponent {
  date_maj = "22/08/2024"
  heure_maj = "10h06"
  hebergeur_contact = "a.plasse42@gmail.com"


  host_domaine = {
    name: "OVH", fct: "Nom de domaine",
    adresse: "2 rue Kellermann - 59100 Roubaix - France",
    siret: "RCS Lille Métropole 424 761 419 00045",
    cde_ape: "",
    nb_tva: "FR 22 424 761 419",
    pres: "Michel Paulin",
    description: "OVH SAS est une filiale de la société OVH Groupe SA, société immatriculée au RCS de Lille sous le numéro 537  407 926 sise 2, rue Kellermann, 59100 Roubaix."
  }

  host_protect = {
    name: "CLOUDFLARE", fct: "CDN &amp; Serveur Mandataire",
    siret: "Cloudflare, Inc. ― Cloudflare France SAS",
    adresse: "101 Townsend St. San Francisco, CA 94107",
    french_antenna: "6 place de la Madeleine 75008 Paris",
    mail: "privacyquestions@cloudflare.com"
  }
}
