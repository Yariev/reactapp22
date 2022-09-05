import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { RouteEnum } from "../Enums/routes-enum";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export const PlantToevoegen = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log("form data", data);

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

      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        {/* ...register("example") ipv name="example" */}
        <input defaultValue="test" {...register("example")} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </>
  );
};
