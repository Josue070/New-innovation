import Home from './components/home';
import "./App.css"
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import SobreNosotros from './components/sobreNosotros';

// Router de la app
function App() {
  return (
    <>
     <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/SobreNosotros" element={<SobreNosotros/>} />
          </Routes>
      </BrowserRouter>
    </>     
  );
}

export default App;