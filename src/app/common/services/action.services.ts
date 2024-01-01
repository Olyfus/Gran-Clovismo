import { Injectable } from "@angular/core";
import { gearboxEnum } from "../enums/gearbox.enums";
import { Dice } from "../singletons/dice.singleton";

@Injectable({
    providedIn: 'root'
})

export class ActionService {
    public randRoll(min: number, max: number): number {
        let random: number;
        random = Math.floor(Math.random() * (max - min) + min)
        return random;
    }

    public rollDice(gear: gearboxEnum): number {
        let roll: number;
        switch (gear) {
            case gearboxEnum.un:
                roll = this.randRoll(Dice.getInstance().getMinUn(), Dice.getInstance().getMaxUn())
                break;

            case gearboxEnum.deux:
                roll = this.randRoll(Dice.getInstance().getMinDeux(), Dice.getInstance().getMaxDeux())
                break;

            case gearboxEnum.trois:
                roll = this.randRoll(Dice.getInstance().getMinTrois(), Dice.getInstance().getMaxTrois())
                break;

            case gearboxEnum.quatre:
                roll = this.randRoll(Dice.getInstance().getMinQuatre(), Dice.getInstance().getMaxQuatre())
                break;

            case gearboxEnum.cinq:
                roll = this.randRoll(Dice.getInstance().getMinCinq(), Dice.getInstance().getMaxCinq())
                break;

            case gearboxEnum.six:
                roll = this.randRoll(Dice.getInstance().getMinSix(), Dice.getInstance().getMaxSix())
                break;

            default:
                throw new Error('Clutch engaged');
        }
        console.log("Roll " + roll);
        return roll;
    }
}