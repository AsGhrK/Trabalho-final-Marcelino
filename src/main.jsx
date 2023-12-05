import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Cadastrar from './Cadastrar/Cadastrar'
import EmAlta from "./EmAlta/EmAlta"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Home" element={<Home />}></Route>
        <Route path="Cadastrar" element={<Cadastrar />}></Route>
        <Route path="EmAlta" element={<EmAlta />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
