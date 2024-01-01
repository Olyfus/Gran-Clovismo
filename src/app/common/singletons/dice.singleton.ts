import { gearboxEnum } from "../enums/gearbox.enums";
import { ActionService } from "../services/action.services";


export class Dice {
    private static instance: Dice;

    private un!: number[];
    private deux!: number[];
    private trois!: number[];
    private quatre!: number[];
    private cinq!: number[];
    private six!: number[];
    public action: any;

    private constructor() {
        this.un = [1, 2]
        this.deux = [3, 4]
        this.trois = [5, 8]
        this.quatre = [7, 12]
        this.cinq = [11, 20]
        this.six = [21, 30]
        // this.setUn(1, 2)
        // this.setDeux(3, 4)
        // this.setTrois(5, 8)
        // this.setQuatre(7, 12)
        // this.setCinq(11, 20)
        // this.setSix(21, 30)
        this.action = new ActionService;
    }

    public getMinUn() {
        return this.un[0];
    }
    public getMaxUn() {
        return this.un[1];
    }
    private setUn(min: number, max: number) {
        this.un.push(min);
        this.un.push(max);
    }

    public getMinDeux() {
        return this.deux[0];
    }
    public getMaxDeux() {
        return this.deux[1];
    }
    private setDeux(min: number, max: number) {
        this.deux.push(min);
        this.deux.push(max);
    }

    public getMinTrois() {
        return this.trois[0];
    }
    public getMaxTrois() {
        return this.trois[1];
    }
    private setTrois(min: number, max: number) {
        this.trois.push(min);
        this.trois.push(max);
    }

    public getMinQuatre() {
        return this.quatre[0];
    }
    public getMaxQuatre() {
        return this.quatre[1];
    }
    private setQuatre(min: number, max: number) {
        this.quatre.push(min);
        this.quatre.push(max);
    }

    public getMinCinq() {
        return this.cinq[0];
    }
    public getMaxCinq() {
        return this.cinq[1];
    }
    private setCinq(min: number, max: number) {
        this.cinq.push(min);
        this.cinq.push(max);
    }

    public getMinSix() {
        return this.six[0];
    }
    public getMaxSix() {
        return this.six[1];
    }
    private setSix(min: number, max: number) {
        this.six.push(min);
        this.six.push(max);
    }


    public static getInstance(): Dice {
        if (!Dice.instance) {
            Dice.instance = new Dice();
        }
        return Dice.instance;
    }
}