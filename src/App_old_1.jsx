import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Parser from "html-react-parser"; //Instalar librerias npm

function App() {
  const [count, setCount] = useState(0);

  let ejemplo = `<h1>Titulo desde JSX con interpolación</h1>`;
  let ejemplo2 = `<h1 className="clase_azul">Titulo desde JSX con interpolación</h1>`;
  return (
    //Fragment
    <>
      <h1 className="clase_roja">Hola mundo desde React con Vite</h1>
      <div
        className="clase_azul"
        dangerouslySetInnerHTML={{ __html: ejemplo }}
      ></div>
      <hr />
      { Parser(ejemplo2)}
    </>
  );
}

export default App;
