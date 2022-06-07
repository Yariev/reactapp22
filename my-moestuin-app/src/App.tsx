import React from "react";
import "./Sass/Style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Planten } from "./Pages/Planten";
import { IetsAnders } from "./Pages/IetsAnders";
import { PlantToevoegen } from "./Pages/PlantToevoegen";
import { MenuContainer } from "./Navbar/Navbar";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <MenuContainer />
        <div className="container content-container">
          <Routes>
            <Route path="/" element={<Planten />} />
            <Route path="/Planten" element={<Planten />} />
            <Route path="/Plant-toevoegen" element={<PlantToevoegen />} />
            <Route path="/Iets-anders" element={<IetsAnders />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
