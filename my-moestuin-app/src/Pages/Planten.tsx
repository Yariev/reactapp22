import React from "react";
import { RouteEnum } from "../Enums/routes-enum";
import { PlantFormFields } from "../interfaces/plant";

export const Planten = () => {
  const [planten, setPlanten] = React.useState<PlantFormFields[]>([]);
  const [fetchingError, setFetchingError] = React.useState<string | null>(null);
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    fetch(RouteEnum.PLANTEN)
      .then((response) => {
        if (response.ok) {
          setLoading(false);
          return response.json();
        }
        setFetchingError("Something went wrong");
        // throw new Error("Something went wrong");
      })
      .then((responseJson: PlantFormFields[]) => {
        //console.log("fetch", responseJson);
        setPlanten(responseJson);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setFetchingError(error); //hoe testen?
        setLoading(false);
      });
  }, []);

  // console.log("data", planten, fetchingError, isLoading);
  if (planten.length > 0) {
    const plantenReduce: PlantFormFields =
      //planten.reduce((obj, item) => {
      //   return obj;
      // });

      planten.reduce(
        (prevVal: PlantFormFields, currVal: PlantFormFields, currIndex: number, array: PlantFormFields[]) => {
          console.log("prevVal", prevVal, "currVal", currVal, "currIndex", currIndex, "array", array);
          return prevVal;
        }
      );
    console.log("planten", plantenReduce);
  }

  // const groupBy = (inputArray: IPlant[], prop: keyof IPlant) => {
  //   inputArray.reduce((prevVal: IPlant, currVal: IPlant) => {
  //     console.log(prevVal, currVal);

  //     let groupKey: keyof IPlant = currVal[prop];
  //     if (!prevVal[groupKey]) {
  //       prevVal[groupKey] = [];
  //     }
  //     prevVal[groupKey].push(currVal);
  //     return prevVal;
  //   }, {});
  // };

  // console.log("planten", groupBy(planten, "plant_familie"));

  return (
    <>
      <h1>Planten</h1>

      {fetchingError && fetchingError}
      {isLoading && "Loading new..."}
      {!fetchingError &&
        planten &&
        planten.map((plant, index) => {
          return (
            <div key={index}>
              {plant.id} {plant.naam_kort} {plant.naam_lang} {plant.plantsoort}
            </div>
          );
        })}
    </>
  );
};
