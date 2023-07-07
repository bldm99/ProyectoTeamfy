//import '../../menulateral/lateral.css'
import './cambios.css'
import { useState } from 'react';
import PHeader from './PHeader'
import Inicio from '../../inicio/Inicio';


import { BsPersonWorkspace } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsFileFont } from "react-icons/bs";




const Cambios = ({ xtitulo, ximagen, xdescripcion, xcolor, tinte }) => {

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
                    <li onClick={() => setChangecomp(<Inicio />)} ><BsWhatsapp style={{ color:'#55E511' }}/></li>
                    <li onClick={() => setChangecomp(<PHeader
                        xtitulo={xtitulo}
                        ximagen={ximagen}
                        xdescripcion={xdescripcion}
                        xcolor={xcolor}
                        xtinte={tinte}
                    />)}><BsPersonWorkspace style={{ color:'#E63F1B' }}/></li>

                    <li><BsFileFont style={{ color:'#E63F1B' }}/></li>
                </ul>
            </div>
            
            <div className='cajas'>
                <h3>Ajustes de plantilla</h3>
                {changecomp}
            </div>

        </section>

    );
}
export default Cambios