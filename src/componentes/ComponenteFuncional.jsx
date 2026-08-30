// import React from 'react'
import ComponenteFuncional2 from "./ComponenteFuncional2";
import Numero from "./Numero";
import ChildrenComponent from "./ChildrenComponent";

const ComponenteFuncional = () => {
    let nombre = "César Cancino";
    let numero = 12;
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
  return (
    <>
    <h1>Hola desde componente funcional</h1>
    <ComponenteFuncional2 prop1 = "manzana" nombre = {nombre} paises = {paises} />
    <hr />
    
    {/* {(numero == 12) ? (<div>Es 12</div>) : (<div>No es 12</div>)} */}
    {(numero == 12) ? (<Numero numero = {numero} />) : (<div>No es 12</div>)}
    <hr />

    {(numero == 12) && <Numero numero = {numero} />}
    <hr />

    <ChildrenComponent otro = "más contenido">
        <p className="clase_roja">contenido desde el children</p>
    </ChildrenComponent>
    </>    
  )
}

export default ComponenteFuncional
