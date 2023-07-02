import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import { Navigate } from 'react-router-dom'

import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'

//Componentes importados
import Menu from './componentes/menu/Menu'
import Lateral from './componentes/menulateral/Lateral'
import Error from './componentes/error/Error'

import Cuerpo from './componentes/cuerpo/Cuerpo'
import Pagina from './componentes/perzonalizar/Pagina'
import Apariencia from './componentes/perzonalizar/apariencia/Apariencia'

import Ecomerce from './componentes/ecomerce/Ecomerce'
import Emenu from './componentes/ecomerce/Emenu'
import Compra from './componentes/ecomerce/Compra/Compra'

import Eregister from './componentes/ecomerce/Compra/Eregister'

import Login from './componentes/login/Login'


//Control de usuario de la tienda del cliente
const PrivateWrapper = () => {
  const isAuthenticated = localStorage.getItem("token") !== null;
  if (isAuthenticated) {
    return (
      <Outlet />
    );
  } else {
    return (
      // Redirige a la página de inicio de sesión si el usuario no está autenticado
      <Navigate to="/test" />
    );
  }
};

//Control de clientes  Teamfy
const PrivateWrapperTeamfy = () => {
  const isAuthenticated = localStorage.getItem("tokenTeam") !== null;
  if (isAuthenticated) {
    return (
      <Outlet />
    );
  } else {
    return (
      // Redirige a la página de inicio de sesión si el usuario no está autenticado
      <Navigate to="/login" />
    );
  }
};

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateWrapperTeamfy />} >
          <Route path="/administrar/*" element={<><Menu /><Pagina /></>} />
        </Route>

        {/*<Route element={<PrivateWrapperTeamfy />} >
          <Route path="/*" element={<><Menu /><Cuerpo /></>} />
        </Route>*/}
        <Route path="/*" element={<><Menu /><Cuerpo /></>} />

        <Route path="/test/*" element={<Eregister />} />
        <Route path="/paginaexplorer/" element={<><Ecomerce /></>} />
        <Route path='/paginaexplorer/:id' element={<> <Emenu /> <Compra /> </>} />

        <Route path="/login/*" element={<Login />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
