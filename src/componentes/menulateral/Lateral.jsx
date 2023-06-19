
import './lateral.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Productos from '../productos/Productos';


import Pedidos from '../pedidos/Pedidos';
import Error from '../error/Error';
import Inicio from '../inicio/Inicio';
import Clientes from '../clientes/Clientes'



import Test from '../testing/Test';



const Lateral = ({cambio}) => {

    /*const [com , setCom] = useState(<Pedidos/>)
    const x = ()=> {
        cambio(<Pedidos/>)
    }
    const er = ()=> {
        cambio(<Error/>)
    }
    const inicio = () => {
        cambio(<Inicio/>)
    }*/


    return (
        <section className='lateral'>
            <h2>Barra lateral</h2>
            <div>
                <ul>
                    <li onClick={() => cambio(<Inicio/>)} >Inicio</li> {/* Bradon */}
                    <li onClick={() => cambio(<Pedidos/>)}>Pedidos</li>
                    <li onClick={() => cambio(<Productos/>)}>Productos</li>
                    <li onClick={() => cambio(<Clientes/>)}>Clientes</li>
                    <li>Contenido</li>
                    <li>Informe de estadistica</li>
                    <li>Marketing</li>
                    <li>Descuentos</li>
                    <li onClick={() => cambio(<Test/>)}>Ver tu Tirnda Onliene</li>
                   
                    <li><Link to={"/administrar"}>Perzonalizar Tienda</Link></li>
                    <li>Configuracion</li>
                    

                </ul>
            </div>
        </section>
    );
}
export default Lateral