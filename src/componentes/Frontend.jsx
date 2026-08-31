// import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Frontend = () => {
  return (
    <>
        {/* Creando un layout fijo como pie de página con Outlet. */}
        {/* <h1>Título para todas las páginas</h1> */}
        
        <Header />

        <main className='container'>
          <Outlet />
        </main>
        
        <Footer />
    </>    
  )
}

export default Frontend
