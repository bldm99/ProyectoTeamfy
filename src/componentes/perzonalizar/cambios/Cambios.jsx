//import '../../menulateral/lateral.css'
import './cambios.css'
import { useState } from 'react';
import PHeader from './PHeader'
import Inicio from '../../inicio/Inicio';
import Pwasap from './Pwasap';
import Ptitulos from './Ptitulos';


import { BsPersonWorkspace } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsFileFont } from "react-icons/bs";




const Cambios = ({ xtitulo, ximagen, xdescripcion, xcolor, tinte,
    xlogo, xwasap,
    updwasap, updlogo,
    xsub1, xsub2, xsub3, xsub4,
    imbanner,
    actualizar
}) => {



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
                    <li onClick={() => setChangecomp(<Pwasap
                        xlogo={xlogo}
                        xwasap={xwasap}
                        updwasap={updwasap}
                        updlogo={updlogo}
                        imbanner={imbanner}

                    />)}>
                        <BsWhatsapp style={{ color: '#55E511' }} />
                    </li>

                    <li onClick={() => setChangecomp(<PHeader
                        xtitulo={xtitulo}
                        ximagen={ximagen}
                        xdescripcion={xdescripcion}
                        xcolor={xcolor}
                        xtinte={tinte}
                    />)}>
                        <BsPersonWorkspace style={{ color: '#E63F1B' }} />
                    </li>

                    <li onClick={() => setChangecomp(<Ptitulos
                        xsub1={xsub1}
                        xsub2={xsub2}
                        xsub3={xsub3}
                        xsub4={xsub4}
                    />)}>
                        <BsFileFont style={{ color: '#E63F1B' }} />
                    </li>
                </ul>
            </div>

            <div className='cajas'>
                <h3>Ajustes de plantilla</h3>
                <div className='fix-cambios'>
                    <button onClick={() => { actualizar() }}  >Guardar Cambios</button>
                </div>
                {changecomp}
            </div>

        </section>

    );
}
export default Cambios