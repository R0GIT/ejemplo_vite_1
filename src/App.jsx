import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  let edad = 18;
  // E1:
  let respuesta = "";
  if (edad >= 18)
    respuesta = <h1>Ya alcanza el timbre</h1>
  else
    respuesta = <h1>Pide permiso</h1>

  return (
    //Fragment
    <>

      {/* E1: IF-ELSE */} 
      {respuesta}

      {/* E2: CONDICIÓN AMPERSAND && */}
      <h1>Renderizado condicional</h1>
      {(edad >= 18) && (<div>Es mayor que yo<hr/></div>)}

      {/* E3: CONDICIÓN TERNARIA {condicion} ? 'true' : 'false' */}
      {(edad >= 18) ? (<div>No me importa que usted sea mayor que yo<hr/></div>) : (<div>Es menor<hr/></div>)}

    </>
  );
}

export default App;
