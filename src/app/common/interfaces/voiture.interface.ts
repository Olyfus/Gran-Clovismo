import { gearboxEnum } from "../enums/gearbox.enums";
import { tireType } from "../enums/tireType.enum";

export interface IVoiture {
    tire: number;
    brake: number;
    body: number;
    grip: number;
    fuel: number;
    engine: number;

    tireType: tireType;
    gear: gearboxEnum;

    ecurie?: string;
    pilote?: string;
    couleurP?: string;
    couleurS?: string;
}
