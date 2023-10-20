import React from "react";
import { useForm, SubmitHandler, useFormContext } from "react-hook-form";
import { InputField } from "../Components/Form/InputField";
import { PlantSoortEnum, GroenteFamilieEnum, StandplaatsEnum } from "../Enums/plant-enum";
import { PlantFormFields } from "../interfaces/plant";
import { postPlant } from "../Service/plant-service";

export interface FormFields extends PlantFormFields {}

export const PlantToevoegen = () => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormFields>();

  const watchPlantsoort = watch("plantsoort");

  const [plantSubmitted, setPlantSubmitted] = React.useState<boolean>(false);

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log("form data", data, JSON.stringify(data));
    return postPlant(data, setPlantSubmitted);
  };

  return (
    <>
      <h1>Plant toevoegen...</h1>
      {/* <p>voor plant bekijken: /planten/:plantId/ ??? </p> */}

      {/* <button onClick={() => postPlant()}>Plant toevoegen</button> */}

      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      {/* register your input into the hook by invoking the "register" function */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField name="zaaiperiode" />

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
          <label htmlFor="plantsoort">Plant familie:</label>
          <select className="form-control" id="plantsoort" {...register("plantsoort")}>
            <>
              <option value={""}>Maak een keuze</option>
              {Object.keys(PlantSoortEnum).map((plantSoort, index) => {
                return (
                  <option key={plantSoort + index} value={plantSoort}>
                    {plantSoort}
                  </option>
                );
              })}
            </>
          </select>
        </div>

        {watchPlantsoort === PlantSoortEnum.groente && (
          <div className="form-group">
            <label htmlFor="groentefamilie">Groente familie:</label>
            <select className="form-control" id="groentefamilie" {...register("groentefamilie")}>
              <>
                <option value={""}>Maak een keuze</option>
                {Object.keys(GroenteFamilieEnum).map((groenteFamilie, index) => {
                  return (
                    <option key={groenteFamilie + index} value={groenteFamilie}>
                      {groenteFamilie}
                    </option>
                  );
                })}
              </>
            </select>
          </div>
        )}

        <div className="form-group">
          <label htmlFor="standplaats">Standplaats:</label>
          <select className="form-control" id="standplaats" {...register("standplaats")}>
            <>
              <option value={""}>Maak een keuze</option>
              {Object.keys(StandplaatsEnum).map((standplaats, index) => {
                return (
                  <option key={standplaats + index} value={standplaats}>
                    {standplaats}
                  </option>
                );
              })}
            </>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="zaaiperiode">Zaaiperiode:</label>
          <input className="form-control" id="zaaiperiode" {...register("zaaiperiode")} />
        </div>

        <div className="form-group">
          <label htmlFor="zaaiinstructie">Zaaiinstructie:</label>
          <textarea cols={24} rows={5} className="form-control" id="zaaiinstructie" {...register("zaaiinstructie")} />
        </div>

        <div className="form-group">
          <label htmlFor="voeding">Voeding:</label>
          <input className="form-control" id="voeding" {...register("voeding")} />
        </div>

        <button type="submit" className="btn btn-primary">
          Plant toevoegen
        </button>

        {plantSubmitted && plantSubmitted && <div> plant is succesvol toegevoegd.</div>}
      </form>
    </>
  );
};
