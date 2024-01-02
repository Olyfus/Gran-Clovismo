import { IVoiture } from './../interfaces/voiture.interface';
import { gearboxEnum } from "../enums/gearbox.enums";
import { tireType } from "../enums/tireType.enum";
import { GearboxService } from '../services/gearbox.services';

const testCar: IVoiture = {
    tire: 3,
    brake: 3,
    body: 3,
    grip: 3,
    fuel: 3,
    engine: 3,
    tireType: tireType.tendre,
    gear: gearboxEnum.neutre
};


export class VoitureObj {
    private tire!: number;
    private brake!: number;
    private body!: number;
    private grip!: number;
    private fuel!: number;
    private engine!: number;
    private tireType!: tireType;
    private gear!: gearboxEnum;
    gearBoxFunction: GearboxService;
    ecurie?: string | undefined;
    pilote?: string | undefined;
    couleurP?: string | undefined;
    couleurS?: string | undefined;

    constructor() {
        this.selectVoiture(testCar);
        this.gearBoxFunction = new GearboxService;
    }

    settire(amount: number): void {
        this.tire = amount;
    }
    gettire(): number {
        return this.tire;
    }

    setBrake(amount: number): void {
        this.brake = amount;
    }
    getBrake(): number {
        return this.brake
    }

    setBody(amount: number): void {
        this.body = amount;
    }
    getBody(): number {
        return this.body
    }

    setGrip(amount: number): void {
        this.grip = amount;
    }
    getGrip(): number {
        return this.grip;
    }

    setFuel(amount: number): void {
        this.fuel = amount;
    }
    getFuel(): number {
        return this.fuel;
    }

    setEngine(amount: number): void {
        this.engine = amount
    }
    getEngine(): number {
        return this.engine;
    }

    setTireType(type: tireType): void {
        this.tireType = type;
    }
    getTireType(): tireType {
        return this.tireType;
    }

    setGear(gear: gearboxEnum) {
        this.gear = gear;
    }
    getGear(): gearboxEnum {
        return this.gear
    }

    upShift(): void {
        this.gearBoxFunction.upShift(this);
    }

    downShift(quantity: number): void {
        this.gearBoxFunction.downShift(this, quantity);
    }

    selectVoiture(voiture: IVoiture) {
        this.tire = voiture.tire;
        this.brake = voiture.brake;
        this.body = voiture.body;
        this.grip = voiture.grip;
        this.fuel = voiture.fuel;
        this.engine = voiture.engine;
        this.tireType = voiture.tireType;
        this.gear = voiture.gear;
    }

}
