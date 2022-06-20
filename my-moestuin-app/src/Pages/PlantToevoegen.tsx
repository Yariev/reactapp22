import React from "react";
import { RouteEnum } from "../Enums/routes-enum";

export const PlantToevoegen = () => {
  const [plantSubmitted, setPlantSubmitted] = React.useState<boolean>(false);

  const newPlant = {
    naam_kort: "nieuwe FE plantnaam kort",
    naam_lang: "nieuwe FE plantnaam lang",
  };

  // var data = new FormData();
  // data.append( "json", JSON.stringify( newPlant ) );

  const postPlant = () => {
    fetch(RouteEnum.NIEUWEPLANT, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(newPlant),
    }).then((res: Response) => {
      console.log("response", res);
      setPlantSubmitted(true);
    });
  };

  return (
    <>
      <h1>Plant toevoegen...</h1>
      <p>voor plant bekijken: /planten/:plantId/ ??? </p>

      <button onClick={() => postPlant()}>Plant toevoegen</button>
      {plantSubmitted && plantSubmitted && <div> plant is succesvol toegevoegd.</div>}
    </>
  );
};
