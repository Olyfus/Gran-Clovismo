import { Dice } from './../../common/singletons/dice.singleton';
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { IVoiture } from '../../common/interfaces/voiture.interface';
import { gearboxEnum } from '../../common/enums/gearbox.enums';
import { tireType } from '../../common/enums/tireType.enum';
import { VoitureObj } from '../../common/objects/voiture.object';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public v1!: VoitureObj;
  public round: any;
  currentApplicationVersion = environment.appVersion;
  title = 'Gran-Clovisimo ' + this.currentApplicationVersion;
  constructor() { }

  ngOnInit() {
    this.round = Dice.getInstance().action;
    this.v1 = new VoitureObj;
    this.round.rollDice(this.v1.vitesse);
    this.v1.upShift();
    this.round.rollDice(this.v1.vitesse);
    this.v1.upShift();
    this.round.rollDice(this.v1.vitesse);
    this.v1.upShift();
    this.round.rollDice(this.v1.vitesse);
    this.v1.upShift();
    this.round.rollDice(this.v1.vitesse);
  }

}
