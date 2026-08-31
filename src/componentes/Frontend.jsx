// import React from 'react'
import {Outlet} from 'react-router-dom'

const Frontend = () => {
  return (
    <>
        {/* Creando un layout fijo como pie de página con Outlet. */}
        <h1>Título para todas las páginas</h1>
        <Outlet />

    </>    
  )
}

export default Frontend
