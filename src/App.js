import React from "react";
import "./App.css";
import logo from "../assets/logo.png";

import { ModalComponent } from "./components/ModalComponent";
import { NavbarComponent } from './components/NavbarComponent';

function App() {
  return (
    <>
      <NavbarComponent logo={logo} class={""} userName="Marcelo"/>
      <ModalComponent/>
    </>
  );
}

export default App;
