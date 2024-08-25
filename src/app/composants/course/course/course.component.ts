import {Component, Input} from '@angular/core';
import {VoitureObj} from "../../../common/objects/voiture.object";
import {Dice} from "../../../common/singletons/dice.singleton";
import {gearboxEnum} from "../../../common/enums/gearbox.enums";

@Component({
  selector: 'run-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {

  // Id du championnat en cours
  @Input() id_championnat !: number;

  // Id du numéro de course
  @Input() id_course !: number;

  // Voitures participant au championnat
  @Input() liste_voiture!: VoitureObj[];

  // Api C# pour enregistré les données
  // api_service : ApiService;

  // Map
  //@ts-ignore
  map !: MapObj;

  // Ordre de jeux
  round_order!: VoitureObj[];

  // Voiture en active;
  voiture !: VoitureObj;

  // Nom de la piste
  nom_piste !: string;

  //Dé
  private dice: Dice;

  constructor() {
    //this.api_service = ApiService.getInstance();
    this.dice = Dice.getInstance();
  }

  ngOnInit() {
  }

  round() {
    // rollDice
    // check casse moteur
    //this.checkCasseMoteur(roll);
    // selection case
    // check bloquage
    // check virage (zone rouge be like)
    //this.checkVirage();
    // vérification case pour accrochage
    //this.checkAccrochage();
  }

  checkBloquage(): void {

  }

  checkVirage(): void {

  }

  checkAccrochage(): void {
    // les voitures que ça va concerné
    let affectedCars: VoitureObj[] = [];
    let around

    // On va check pour check si chaque voiture n'est pas dans une case à nous ou une case
    for (let i: number = 0; i < this.liste_voiture.length; i++) {

      // on veux comparer à une autre voiture
      if (this.voiture != this.liste_voiture[i]) {

        // on compare la position de la voiture avec l'autre voiture
        this.map.isAround(this.voiture, this.liste_voiture[i])

      }

    }
  }


  checkCasseMoteur(diceRolled: number): void {

    //

    if (diceRolled == this.dice.black_motor_five && this.voiture.getGear() == gearboxEnum.cinq || diceRolled == this.dice.black_motor_six && this.voiture.getGear() == gearboxEnum.six) {

      let affectedCars: VoitureObj[] = [];
      for (let i: number = 0; i < this.liste_voiture.length; i++) {
        if (this.liste_voiture[i].getGear() == gearboxEnum.cinq || this.liste_voiture[i].getGear() == gearboxEnum.six) {
          affectedCars.push(this.liste_voiture[i]);
        }
      }
      this.dice.rollBlackDice(affectedCars, 'moteur');
    }
  }
}
