import React from "react";
import "./Sass/Style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Planten } from "./Pages/Planten";
import { IetsAnders } from "./Pages/IetsAnders";
import { PlantToevoegen } from "./Pages/PlantToevoegen";
import { NavbarContainer } from "./Navbar/Navbar";
import { RouteEnum } from "./Enums/routes-enum";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <NavbarContainer />
        <div className="container content-container">
          <Routes>
            <Route path={RouteEnum.HOME} element={<Planten />} />
            <Route path={RouteEnum.PLANTEN} element={<Planten />} />
            <Route path={RouteEnum.NIEUWEPLANT} element={<PlantToevoegen />} />
            {/* <Route
              path={RouteEnum.PLANT_PROFILE}
              element={<PlantToevoegen />}
            /> */}
            <Route path={RouteEnum.IETSANDERS} element={<IetsAnders />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
