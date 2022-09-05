import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { RouteEnum } from "../Enums/routes-enum";

enum PlantFamilieEnum {
  groente = "groente",
  bloemen = "bloemen",
  fruit = "fruit",
  vastePlant = "vaste plant",
}

interface IFormInput {
  naam_kort: string;
  naam_lang: string;
  plant_familie: PlantFamilieEnum;
}

export const PlantToevoegen = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("form data", JSON.stringify(data));

    return postPlant(data);
  };

  const [plantSubmitted, setPlantSubmitted] = React.useState<boolean>(false);

  // var data = new FormData();
  // data.append( "json", JSON.stringify( newPlant ) );

  const postPlant = (plantData: IFormInput) => {
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

  return (
    <>
      <h1>Plant toevoegen...</h1>
      <p>voor plant bekijken: /planten/:plantId/ ??? </p>

      {/* <button onClick={() => postPlant()}>Plant toevoegen</button> */}

      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div className="form-group">
          <label htmlFor="korte_naam">Korte naam:</label>
          <input
            className="form-control"
            id="korte_naam"
            defaultValue="korte naam"
            {...register("naam_kort", { required: true })}
          />

          {errors.naam_kort && <div className="alert alert-light">naam_kort is verplicht</div>}
        </div>
        <div className="form-group">
          <label htmlFor="lange_naam">Lange naam:</label>
          <input
            className="form-control"
            id="lange_naam"
            {...register("naam_lang", { required: true, minLength: 4 })}
          />

          {errors.naam_lang && <div className="alert alert-light">naam_lang moet min 4 lang zijn</div>}
        </div>

        <div className="form-group">
          <label htmlFor="plant_familie">plant familie:</label>
          <select className="form-control" id="plant_familie" {...register("plant_familie")}>
            <option value={""}>Maak een keuze</option>
            <option value={PlantFamilieEnum.bloemen}>{PlantFamilieEnum.bloemen}</option>
            <option value={PlantFamilieEnum.fruit}>{PlantFamilieEnum.fruit}</option>
            <option value={PlantFamilieEnum.groente}>{PlantFamilieEnum.groente}</option>
            <option value={PlantFamilieEnum.vastePlant}>{PlantFamilieEnum.vastePlant}</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Plant toevoegen
        </button>

        {plantSubmitted && plantSubmitted && <div> plant is succesvol toegevoegd.</div>}
      </form>
    </>
  );
};
