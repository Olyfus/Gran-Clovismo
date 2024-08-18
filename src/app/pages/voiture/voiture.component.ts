import {Component} from '@angular/core';
import {testCar, VoitureObj} from '../../common/objects/voiture.object';
import {Dice} from '../../common/singletons/dice.singleton';
import {gearboxEnum} from '../../common/enums/gearbox.enums';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrl: './voiture.component.css'
})
export class VoitureComponent {
  public v1!: VoitureObj;
  public round: any;


  constructor() {
  }

  ngOnInit() {
    this.round = Dice.getInstance().action;
    this.v1 = new VoitureObj;
    this.v1.selectVoiture(testCar);
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
