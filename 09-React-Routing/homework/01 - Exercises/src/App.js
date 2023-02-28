import React from "react";
import { Route, Routes } from "react-router-dom";
/* eslint-disable */
import Home from "./components/Home/Home.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Shipping from "./components/Shipping/Shipping.jsx";
import Promotions from "./components/Promotions/Promotions.jsx";
import CardDetail from "./components/CardDetail/CardDetail.jsx";
/* eslint-disable */

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/cruises/:id" element={<CardDetail />} />
      </Routes>
    </div>
  );
}
//Es importante tener en cuenta que el componente NavBar se coloca fuera de las rutas porque se quiere que se muestre en todas las páginas de la aplicación. Además, cada ruta tiene su propio elemento que se renderiza cuando la URL coincide con el path de la ruta.




