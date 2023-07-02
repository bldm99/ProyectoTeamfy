import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import { Navigate } from 'react-router-dom'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

//Componentes importados
import Menu from './componentes/menu/Menu'
import Lateral from './componentes/menulateral/Lateral'
import Error from './componentes/error/Error'

import Cuerpo from './componentes/cuerpo/Cuerpo'
import Pagina from './componentes/perzonalizar/Pagina'
import Apariencia from './componentes/perzonalizar/apariencia/Apariencia'



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/administrar/*"
          element={
            <>
              <Menu />
              <Pagina />
            </>
          }
        />
        <Route
          path="/*"
          element={
            <>
              <Menu />
              <Cuerpo />
            </>
          }
        />
        <Route
          path="/pagina/*"
          element={
            <>
              
              <Apariencia />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
