import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

//Componentes importados
import Menu from './componentes/menu/Menu'
import Lateral from './componentes/menulateral/Lateral'
import Error from './componentes/error/Error'

import Cuerpo from './componentes/cuerpo/Cuerpo'
import Pagina from './componentes/perzonalizar/Pagina'



function App() {


  return (
    <BrowserRouter>

      <Menu></Menu>
   
   
      <Routes>
        <Route path='/' element={<Cuerpo/>} />
        <Route path='/administrar' element={<Pagina/>} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
