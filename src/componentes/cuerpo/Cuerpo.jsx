
import './cuerpo.css'

import Lateral from '../menulateral/Lateral';
import Contenido from '../contenido/Contenido';
import Inicio from '../inicio/Inicio';
import Error from '../error/Error';
import Pedidos from '../pedidos/Pedidos';

import { ImMenu } from "react-icons/im";


import { useState, useEffect } from 'react';


const Cuerpo = () => {

    //El componete cuerpo en princio mostrara el comp <Contenido/>
    const [componente, setComponete] = useState(<Inicio />);

    //Componete lateral , muestra un barra lateral
    const [lateral, seLateral] = useState(() => Lateral);


    var mysty = {
        display: "none",
    };

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if(windowWidth > 768){
        mysty = {
            display: "block"
            
        }
    }



    const [expanded, setExpanded] = useState(true);

    const handleClick = () => {
        setExpanded(!expanded);
    };

   


    return (
        <div className='cuerpo' >

            <div className='fix'>
                <ImMenu onClick={handleClick} size={32} color="#783030"/>
            </div>
            <div className='lado' style={expanded ? {} : mysty}  >
                {/* Pasamos la prop cambio al componente <lateral/> para que este
                    pueda cambiar el estado de componete 
                */}
                {lateral && <Lateral cambio={setComponete} />}
            </div>

            <div className='componentes'>
                {componente}
            </div>

        </div>
    );
}

export default Cuerpo