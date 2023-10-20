import { PlantSoortEnum, GroenteFamilieEnum, StandplaatsEnum } from "../Enums/plant-enum";

export type PlantFormFields = {
  id: number;
  naam_kort: string;
  naam_lang: string;
  plantsoort: PlantSoortEnum;
  groentefamilie?: GroenteFamilieEnum;
  standplaats: StandplaatsEnum;
  voeding: string;
  zaaiperiode: string;
  zaaiinstructie: string;
};
