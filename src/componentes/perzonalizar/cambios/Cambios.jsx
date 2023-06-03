//import '../../menulateral/lateral.css'
import './cambios.css'
import { useState } from 'react';
import PHeader from './PHeader'
import Inicio from '../../inicio/Inicio';


const Cambios = ({ xtitulo, ximagen, xdescripcion , xcolor , tinte }) => {

    //<li onClick={() => cambio(<Inicio/>)} >Inicio</li>
    

    const [changecomp, setChangecomp] = useState(
        <PHeader
            xtitulo={xtitulo}
            ximagen={ximagen}
            xdescripcion={xdescripcion}
            xcolor={xcolor}
            xtinte={tinte}
        />
    );


    return (

        <section className='cam'>
            <div className='options'>
                <ul className='options-li'>
                    <li onClick={() => setChangecomp(<Inicio />)} >A</li>
                    <li onClick={() => setChangecomp(<PHeader
                        xtitulo={xtitulo}
                        ximagen={ximagen}
                        xdescripcion={xdescripcion}
                    />)}>B</li>
                    
                    <li>C</li>
                </ul>
            </div>
            <div className='cajas'>
                <h2>Ajustes de plantilla</h2>
                
                {/*<PHeader 
                    xtitulo={xtitulo} 
                    ximagen={ximagen}
                    xdescripcion={xdescripcion} 
                />*/}

                {changecomp}


            </div>

        </section>

    );
}
export default Cambios