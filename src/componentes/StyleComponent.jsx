// import React from 'react'
// import styled from "@emotion/styled";
import {Titulo, Circulo, Caja, Triangulo} from "./../styled/Estilos";

const StyleComponent = () => {
  return (
    <>
      {/* Requieren ser declarados así pq requieren de propiedades dentro de */}
      <Titulo>Style Component renovado</Titulo>
      <hr />

      <Circulo>Círculo</Circulo>
      <hr />

      <Triangulo>T</Triangulo>
      <hr />

      <Caja type = "text" defaultValue = "@rrosas" placeholder = "Ingresar texto" color_custom = "orange" />
      <hr />


    </>
  );
};

export default StyleComponent;
