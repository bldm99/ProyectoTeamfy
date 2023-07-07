import React from 'react';
import './lateral.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClipboardList, faBoxOpen, faUsers, faFileAlt, faChartBar, faBullhorn, faTags, faShoppingCart, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import Productos from '../productos/Productos';
import Pedidos from '../pedidos/Pedidos';
import Error from '../error/Error';
import Inicio from '../inicio/Inicio';
import Clientes from '../clientes/Clientes';
import Html from '../testing/Html';
import Test from '../testing/Test';
import Testcliente from '../testing/Testcliente';

const Lateral = ({ cambio }) => {

 

  return (
    <section className='lateral' >
      
      <div>
        
        <ul>
          <li id="inicio" onClick={() => cambio(<Inicio/>)}>
            <FontAwesomeIcon icon={faHome} className="icon" />
            Inicio
          </li>
          <li id="pedidos" onClick={() => cambio(<Pedidos/>)}>
            <FontAwesomeIcon icon={faClipboardList} className="icon" />
            Pedidos
          </li>
          <li id="productos" onClick={() => cambio(<Productos/>)}>
            <FontAwesomeIcon icon={faBoxOpen} className="icon" />
            Productos
          </li>
          <li id="clientes" onClick={() => cambio(<Clientes/>)}>
            <FontAwesomeIcon icon={faUsers} className="icon" />
            Clientes
          </li>
          <li id="contenido">
            <FontAwesomeIcon icon={faFileAlt} className="icon" />
            Contenido
          </li>
          <li id="estadisticas">
            <FontAwesomeIcon icon={faChartBar} className="icon" />
            Informe de estadística
          </li>
          <li id="marketing" onClick={() => cambio(<Html/>)}>
            <FontAwesomeIcon icon={faBullhorn} className="icon" />
            Marketing
          </li>
          <li id="descuentos">
            <FontAwesomeIcon icon={faTags} className="icon" />
            Descuentos
          </li>
          <li id="tienda-online" onClick={() => cambio(<Test/>)}>
            <FontAwesomeIcon icon={faShoppingCart} className="icon" />
            Ver tu Tienda Online
          </li>
          <li id="personalizar-tienda">
            <Link to="/administrar">
              <FontAwesomeIcon icon={faCog} className="icon" />
              Personalizar Tienda
            </Link>
          </li>
          <li id="configuracion" onClick={() => cambio(<Testcliente/>)}>
            <FontAwesomeIcon icon={faCog} className="icon" />
            Configuración
          </li>
          <li id="cerrar-sesion">
            <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
            <Link to="/cerrar-sesion">
              Cerrar Sesión
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Lateral;
