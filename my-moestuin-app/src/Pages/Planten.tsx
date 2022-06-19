import React from "react";
import { RouteEnum } from "../Enums/routes-enum";

interface IPlant {
  id: number;
  naam_kort: string;
  naam_lang: string;
}

export const Planten = () => {
  const [planten, setPlanten] = React.useState<IPlant[]>([]);
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
      .then((responseJson: IPlant[]) => {
        console.log("fetch", responseJson);
        setPlanten(responseJson);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setFetchingError(error); //hoe testen?
        setLoading(false);
      });
  }, []);
  //console.log("data", planten, fetchingError, isLoading);

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
              {plant.id} {plant.naam_kort} {plant.naam_lang}
            </div>
          );
        })}
    </>
  );
};
