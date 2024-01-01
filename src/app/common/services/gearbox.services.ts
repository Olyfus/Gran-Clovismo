import { Injectable } from "@angular/core";
import { gearboxEnum } from "../enums/gearbox.enums";

@Injectable({
    providedIn: 'root'
})

export class GearboxService {

    public downShift(gear: gearboxEnum, quantity: number) {
        let newGear = gearboxEnum.neutre;
        if (quantity > 5) {
            quantity = 5
        } else if (quantity < 1 || quantity == null || quantity == undefined) {
            quantity = 1
        }
        switch (quantity) {

            case 1:
                switch (gear) {
                    case gearboxEnum.un:
                    case gearboxEnum.deux:
                    case gearboxEnum.trois:
                    case gearboxEnum.quatre:
                    case gearboxEnum.cinq:
                    case gearboxEnum.six:
                    default:
                }
                break;

            case 2:
                switch (gear) {
                    case gearboxEnum.un:
                    case gearboxEnum.deux:
                    case gearboxEnum.trois:
                    case gearboxEnum.quatre:
                    case gearboxEnum.cinq:
                    case gearboxEnum.six:
                    default:
                }
                break;

            case 3:
                switch (gear) {
                    case gearboxEnum.un:
                    case gearboxEnum.deux:
                    case gearboxEnum.trois:
                    case gearboxEnum.quatre:
                    case gearboxEnum.cinq:
                    case gearboxEnum.six:
                    default:
                }
                break;

            case 4:
                switch (gear) {
                    case gearboxEnum.un:
                    case gearboxEnum.deux:
                    case gearboxEnum.trois:
                    case gearboxEnum.quatre:
                    case gearboxEnum.cinq:
                    case gearboxEnum.six:
                    default:
                }
                break;

            case 5:
                switch (gear) {
                    case gearboxEnum.un:
                    case gearboxEnum.deux:
                    case gearboxEnum.trois:
                    case gearboxEnum.quatre:
                    case gearboxEnum.cinq:
                    case gearboxEnum.six:
                    default:
                }
                break;

            default:
                console.log("quantity default for downshift");
        }
        return newGear;
    }

    public upShift(gear: gearboxEnum): gearboxEnum {
        let newGear = gearboxEnum.neutre;
        switch (gear) {
            case gearboxEnum.un:
                newGear = gearboxEnum.deux;
                console.log("Upshift " + gearboxEnum.deux + "!");
                break;
            case gearboxEnum.deux:
                newGear = gearboxEnum.trois;
                console.log("Upshift " + gearboxEnum.trois + "!");
                break;
            case gearboxEnum.trois:
                newGear = gearboxEnum.quatre;
                console.log("Upshift " + gearboxEnum.quatre + "!");
                break;
            case gearboxEnum.quatre:
                newGear = gearboxEnum.cinq;
                console.log("Upshift " + gearboxEnum.cinq + "!");
                break;
            case gearboxEnum.cinq:
                newGear = gearboxEnum.six;
                console.log("Upshift " + gearboxEnum.six + "!");
                break;
            case gearboxEnum.six:
                console.error("no 7 gear");
                break;
            default:
                console.log("tried to upshift whil clutched");
        }
        return newGear;
    }
}