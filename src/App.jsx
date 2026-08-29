import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Basicos from "./componentes/Basicos";
import ComponenteDeClase from "./componentes/ComponenteDeClase";

function App() {

  return (
    // Fragment
    <>
    {/* Esto es un componente funcional que le inyectamos a otro componente. */}
    {/* <Basicos /> */}

    {/* Componente de clases */}
    <ComponenteDeClase />
    </>
  );
}

export default App;
