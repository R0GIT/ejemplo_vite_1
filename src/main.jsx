import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx"; //Se reemplazo por RouterProvider.
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../public/css/blog.css';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Frontend from "./componentes/Frontend.jsx";
import Home from "./paginas/Home.jsx";
import SobreNosotros from "./paginas/SobreNosotros.jsx";
import Rutas from "./paginas/Rutas.jsx";
import RutasPath from "./paginas/RutasPath.jsx";
import RutasQueryString from "./paginas/RutasQueryString.jsx";
import ErrorPersonalizado from "./paginas/ErrorPersonalizado.jsx";
import Error404 from "./paginas/Error404.jsx";

const router = createBrowserRouter
(
  [
    {
      path: '/',
      element: <Frontend />, //Global
      children:
      [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/sobre-nosotros',
          // element: <Frontend />, //Individual
          element: <SobreNosotros />
        },
        {
          path: '/rutas',
          element: <Rutas />
        },
        {
          path: '/rutas/path/:id/:slug',
          element: <RutasPath />
        },
        {
          path: '/rutas/query-string',
          element: <RutasQueryString />,
          errorElement: <ErrorPersonalizado /> //Página personalizada error por ruta.
        },
        {
          //Siempre debe ir al final.
          path: '*',
          element: <Error404 /> 
        }
      ]
    }
  ]
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
