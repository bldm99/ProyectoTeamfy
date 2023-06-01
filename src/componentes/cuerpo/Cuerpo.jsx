
import './cuerpo.css'

import Lateral from '../menulateral/Lateral';
import Contenido from '../contenido/Contenido';
import Inicio from '../inicio/Inicio';
import Error from '../error/Error';
import Pedidos from '../pedidos/Pedidos';

import { useState, useEffect } from 'react';


const Cuerpo = () => {

    //El componete cuerpo en princio mostrara el comp <Contenido/>
    const [componente, setComponete] = useState(<Contenido/>);

    //Componete lateral , muestra un barra lateral
    const [lateral, seLateral] = useState(() => Lateral);


    /*useEffect(() => {
        setComponete(<Error />);
    }, []);*/
    

    return (
        <div className='cuerpo'>
            
            <div className='lado'>
                {/* Pasamos la prop cambio al componente <lateral/> para que este
                    pueda cambiar el estado de componete 
                */}
                {lateral && <Lateral cambio={ setComponete} />}
            </div>

            <div className='componentes'>
                {componente }
            </div>
            
        </div>
    );
}

export default Cuerpo