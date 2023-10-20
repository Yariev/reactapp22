import React from "react";
import { RouteEnum } from "../Enums/routes-enum";
import { FormFields } from "../Pages/PlantToevoegen";

// var data = new FormData();
// data.append( "json", JSON.stringify( newPlant ) );

export const postPlant = (plantData: FormFields, setPlantSubmitted: (arg0: boolean) => void) => {
  fetch(RouteEnum.NIEUWEPLANT, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify(plantData),
  }).then((res: Response) => {
    console.log("response", res);
    setPlantSubmitted(true);
  });
};
