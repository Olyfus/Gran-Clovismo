import { IVoiture } from './../interfaces/voiture.interface';
import { gearboxEnum } from "../enums/gearbox.enums";
import { tireType } from "../enums/tireType.enum";
import { Component } from '@angular/core';
import { GearboxService } from '../services/gearbox.services';

const testCar: IVoiture = {
    viePneu: 3,
    frein: 3,
    carrosserie: 3,
    tenueRoute: 3,
    essence: 3,
    moteur: 3,
    typePneu: tireType.tendre,
    vitesse: gearboxEnum.neutre
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
    gearBoxFunction: GearboxService;

    constructor() {
        this.selectVoiture(testCar);
        this.gearBoxFunction = new GearboxService;
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
        this.vitesse = this.gearBoxFunction.upShift(this.vitesse);
    }

    downShift(quantity: number): void {
        if (quantity > 5) {
            quantity = 5
        } else if (quantity < 1 || quantity == null || quantity == undefined) {
            quantity = 1
        }
        switch (this.vitesse) {
            case gearboxEnum.un:
                switch (quantity) {
                    default:
                }
                break;
            case gearboxEnum.deux:
                break;

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
