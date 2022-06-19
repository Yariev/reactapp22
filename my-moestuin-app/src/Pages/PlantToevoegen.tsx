import React from "react";
import { RouteEnum } from "../Enums/routes-enum";

export const PlantToevoegen = () => {
  const newPlant = {
    naam_kort: "nieuwe FE plantnaam kort",
    naam_lang: "nieuwe FE plantnaam lang",
  };

  // var data = new FormData();
  // data.append( "json", JSON.stringify( newPlant ) );

  const postPlant = () => {
    console.log("test clicl");
    fetch(RouteEnum.NIEUWEPLANT, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(newPlant),
    });
  };

  return (
    <>
      <h1>Plant toevoegen...</h1>
      <p>voor plant bekijken: /planten/:plantId/ ??? </p>

      <button onClick={() => postPlant()}>Plant toevoegen</button>
    </>
  );
};
