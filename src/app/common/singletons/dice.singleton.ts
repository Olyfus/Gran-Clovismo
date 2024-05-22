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
        this.action = new ActionService;
    }

    public getMinUn() {
        return this.un[0];
    }
    public getMaxUn() {
        return this.un[1];
    }

    public getMinDeux() {
        return this.deux[0];
    }
    public getMaxDeux() {
        return this.deux[1];
    }
    public getMinTrois() {
        return this.trois[0];
    }
    public getMaxTrois() {
        return this.trois[1];
    }

    public getMinQuatre() {
        return this.quatre[0];
    }
    public getMaxQuatre() {
        return this.quatre[1];
    }

    public getMinCinq() {
        return this.cinq[0];
    }
    public getMaxCinq() {
        return this.cinq[1];
    }

    public getMinSix() {
        return this.six[0];
    }
    public getMaxSix() {
        return this.six[1];
    }
    
    public static getInstance(): Dice {
        if (!Dice.instance) {
            Dice.instance = new Dice();
        }
        return Dice.instance;
    }
}