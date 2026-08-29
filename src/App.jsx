import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { formatearFecha, formatearNumero, acortarTexto } from "./helpers/helpers";

function App() {
  let fecha = new Date();
  let cantidad = 12345;
  let texto = "asdfghjklLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,";
  let paises = [
    {
      Id: 1,
      Nombre: "México",
      Clave: "MX"
    },
    {
      Id: 2,
      Nombre: "Colombia",
      Clave: "COL"
    },
    {
      Id: 3,
      Nombre: "Grecia",
      Clave: "GR"
    },
  ]
  let numero = 122;
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
      {(edad >= 18) && (<>Es mayor que yo<hr/></>)}

      {/* E3: CONDICIÓN TERNARIA {condicion} ? 'true' : 'false' */}
      {(edad >= 18) ? (<div>No me importa que usted sea mayor que yo<hr/></div>) : (<div>Es menor<hr/></div>)}

      <h1>Renderizado switch case</h1>
      {(() => {
        switch(numero)
        {
          case 13:
            return (
              <div>Número es 13</div>
            )
          break;
          case 12:
            return (
              <div>Número es 12</div>
            )
          break;
          default:
            return (
              <div>No es ningúno de los números</div>
            )
          break;
        }
      })()}
      <hr/>

      <h1>Ejemplos de loop</h1>
      <h3>Loop normal con ES6</h3>
        <ul>
          {[...Array(11)].map((x, i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>

      <h3>Inline IIFE</h3>
        <ul>
          {(function (rows, i, len) {
            while (++i <= len) {
              rows.push(<li key={i}>{i}</li>)
            }
              return rows;
          })([], 0, 10)}
        </ul>

      <h3>Con ES2015 syntax y Array methods</h3>
          {Array(11).fill(1).map((el, i) => 
            <li key={i}>{i}</li>
          )}

      <h3>Ciclo for sencillo</h3>
      {(() => {
        let rows = [];
        for (let i = 1; i <= 10; i++)
        {
          rows.push(<li key={i}>{i}</li>);
        }
        return rows;
      })()}
      <hr/>

      <h1>Recorrer elementos con map</h1>
      <ul>
        {paises.map((pais, index) => (
          <li key={pais.Id}>{index} - {pais.Nombre} (La clave es: {pais.Clave})</li>
        ))}
      </ul>

      <hr/>
      <h1>Helpers personalizados</h1>
      <ul>
        <li>Fecha: {formatearFecha(fecha)}</li>
        <li>Cantidad: ${formatearNumero(cantidad)}</li>
        <li>Cantidad: {`$${formatearNumero(cantidad)}`}</li>
        <li>Texto: {acortarTexto(texto, 0, 75)}...</li>
      </ul>

    </>
  );
}

export default App;
