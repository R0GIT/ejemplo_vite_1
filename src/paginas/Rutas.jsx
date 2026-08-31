// import React from 'react' //Se refresca la página.
import { NavLink, Link } from "react-router-dom"; //No se refresca la página.

const Rutas = () => {

    let id = 12;
    let slug = "lo-que-sea";

  return (
    <>
    <h1>Rutas</h1>
    <ul>
        <li>
            {/* <a href = '/'>Home</a> */}
            <NavLink to = '/'>Home</NavLink>
        </li>
        <li>
            {/* <a href = '/sobre-nosotros'>Sobre nosotros</a> */}
            <Link to = '/sobre-nosotros'>Sobre nosotros</Link>
        </li>
        <li>
            {/* Url estática. */}
            <Link to = '/rutas/path/1/hola-mundo'>Párametros path estaticos</Link>
        </li>
        <li>
            {/* Url dinámica. */}
            <Link to = {`/rutas/path/${id}/${slug}`}>Párametros path dinamicos</Link>
        </li>
        <li>
            {/* Url query string. */}
            <Link to = {`/rutas/query-string?id=${id}&slug=${slug}`}>Párametros query string</Link>
        </li>
    </ul>
    </>
  )
}

export default Rutas
