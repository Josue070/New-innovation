import Banner from "./banner/banner";
import Span from "./span/span";
import Fooder from "./footer/fooder";
import Responsive from "./carrusel/slider";
import Navbar1 from "./nueva barra/navbar";


import React from 'react'



function home() {
  return (
    <React.Fragment>
      <Navbar1/>
      <Banner/>
      <Responsive/>
      <Span/>
      <Fooder/>
    </React.Fragment>
  )
}

export default home
