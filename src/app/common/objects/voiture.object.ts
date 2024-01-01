import { IVoiture } from './../interfaces/voiture.interface';
import { gearboxEnum } from "../enums/gearbox.enums";
import { tireType } from "../enums/tireType.enum";
import { Component } from '@angular/core';

const testCar: IVoiture = {
    viePneu: 3,
    frein: 3,
    carrosserie: 3,
    tenueRoute: 3,
    essence: 3,
    moteur: 3,
    typePneu: tireType.tendre,
    vitesse: gearboxEnum.un
};


export class VoitureObj implements IVoiture {
    viePneu!: number;
    frein!: number;
    carrosserie!: number;
    tenueRoute!: number;
    essence!: number;
    moteur!: number;
    typePneu!: tireType;
    vitesse!: gearboxEnum;

    constructor() {
        this.selectVoiture(testCar)
    }

    private setViePneu(amount: number): void {
        this.viePneu = amount;
    }
    getViePneu(): number {
        return this.viePneu;
    }

    private setFrein(amount: number): void {
        this.frein = amount;
    }
    getFrein(): number {
        return this.frein
    }

    private setCarrosserie(amount: number): void {
        this.carrosserie = amount;
    }
    getCarrosserie(): number {
        return this.carrosserie
    }

    private setTenueRoute(amount: number): void {
        this.tenueRoute = amount;
    }
    getTenueRoute(): number {
        return this.tenueRoute;
    }

    private setEssence(amount: number): void {
        this.essence = amount;
    }
    getEssence(): number {
        return this.essence;
    }

    private setMoteur(amount: number): void {
        this.moteur = amount
    }
    getMoteur(): number {
        return this.moteur;
    }

    private setTypePneu(type: tireType): void {
        this.typePneu = type;
    }
    getTypePneu(): tireType {
        return this.typePneu;
    }

    private setVitesse(gear: gearboxEnum) {
        this.vitesse = gear;
    }
    getVitesse(): gearboxEnum {
        return this.vitesse
    }

    upShift(): void {
        switch (this.vitesse) {
            case gearboxEnum.un:
                this.vitesse = gearboxEnum.deux;
                console.log("Upshift " + this.vitesse + "!");
                break;
            case gearboxEnum.deux:
                this.vitesse = gearboxEnum.trois;
                console.log("Upshift " + this.vitesse + "!");
                break;
            case gearboxEnum.trois:
                this.vitesse = gearboxEnum.quatre;
                console.log("Upshift " + this.vitesse + "!");
                break;
            case gearboxEnum.quatre:
                this.vitesse = gearboxEnum.cinq;
                console.log("Upshift " + this.vitesse + "!");
                break;
            case gearboxEnum.cinq:
                this.vitesse = gearboxEnum.six;
                console.log("Upshift " + this.vitesse + "!");
                break;
            case gearboxEnum.six:
                console.error("no 7 gear");
                break;
            default:
                console.log("tried to upshift whil clutched");
        }
    }

    downShift(quantity: number): void {
        switch (this.vitesse) {
            case gearboxEnum.un:

        }
    }

    selectVoiture(voiture: IVoiture) {
        this.viePneu = voiture.viePneu;
        this.frein = voiture.frein;
        this.carrosserie = voiture.carrosserie;
        this.tenueRoute = voiture.tenueRoute;
        this.essence = voiture.essence;
        this.moteur = voiture.moteur;
        this.typePneu = voiture.typePneu;
        this.vitesse = voiture.vitesse;
    }

}
