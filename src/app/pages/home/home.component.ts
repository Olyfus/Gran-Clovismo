import { Dice } from './../../common/singletons/dice.singleton';
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { gearboxEnum } from '../../common/enums/gearbox.enums';
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
  }

  clickUp() {
    this.v1.upShift();
    this.rollWithCarGearbox(this.v1.getGear());
    console.log("Essence :" + this.v1.getFuel());
  }

  clickDown(select: number) {
    this.v1.downShift(select);
    this.rollWithCarGearbox(this.v1.getGear());
    console.log("Essence :" + this.v1.getFuel());
  }

  rollWithCarGearbox(gear: gearboxEnum) {
    this.round.rollDice(gear);
  }
}
