import { gearboxEnum } from "../enums/gearbox.enums";
import { tireType } from "../enums/tireType.enum";

export interface IVoiture {
    viePneu: number;
    frein: number;
    carrosserie: number;
    tenueRoute: number;
    essence: number;
    moteur: number;

    typePneu: tireType;
    vitesse: gearboxEnum;

    ecurie?: string;
    pilote?: string;
    couleurP?: string;
    couleurS?: string;
}
