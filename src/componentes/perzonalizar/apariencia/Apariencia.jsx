
import { useState } from 'react';
import './apariencia.css'
import Apmenu from './Apmenu';

import xlogo from './xLogo.png'

const Apariencia = ({ titu, imagen, descripcion, color }) => {

    const [animacionActiva, setAnimacionActiva] = useState(false);
    const [mostrarmenu, setMostarmenu] = useState(false)
    const animacion = () => {
        setAnimacionActiva(!animacionActiva);
        setMostarmenu(!mostrarmenu)
    };


    /*const Vermenu = () => {
        setMostarmenu(!mostrarmenu)
    }*/


    const xstylos = {
        backgroundColor: color,
    }


    return (
        <div className='apariencia'>

            <section className='cl-cabezera' >

                <div className='cl-header' style={xstylos}>
                    <div className='cl-titulo'>
                        <img src={xlogo} alt="Logo de empresa" />
                        <h3>{titu}</h3>
                    </div>
                    <div className='cl-lista'>
                        <ul className='li-s' >
                            <li>texto1</li>
                            <li>texto1</li>
                            <li>texto1</li>
                            <li>texto1</li>
                        </ul>


                        <ul className="icon-responive">
                            <li>
                                <div className={`icon_menu ${animacionActiva ? "animado" : ""}`} onClick={animacion}>
                                    <span className={`linea1 ${animacionActiva ? "a" : ""}`}></span>
                                    <span className={`linea2 ${animacionActiva ? "b" : ""}`}></span>
                                    <span className={`linea3 ${animacionActiva ? "c" : ""}`}></span>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
                


                <div className='apmenu' style={{ color: "black" }}>
                    {mostrarmenu && <Apmenu />}
                </div>

            </section>




            <section className='p-portada'>
                <img src={imagen} alt="Imagen seleccionada" width={'100%'} />

                <div className='desc'>
                    <h4>{descripcion}</h4>
                </div>
            </section>

            <section className='cl-contenido'>
                <div>
                    <h2>Ultimo en tendencias</h2>
                </div>
                <div className='contenido-producto'>

                    <div className='caja-p'>
                        <img src="https://p4.wallpaperbetter.com/wallpaper/971/957/138/women-model-brunette-street-wallpaper-preview.jpg" alt="" />
                        <div className='nom'>
                            <h3>Nombre producto</h3>
                            <h4>S/. 0.0</h4>
                        </div>
                    </div>
                    <div className='caja-p'>
                        <img src="https://p4.wallpaperbetter.com/wallpaper/971/957/138/women-model-brunette-street-wallpaper-preview.jpg" alt="" />
                        <div className='nom'>
                            <h3>Nombre producto</h3>
                            <h4>S/. 0.0</h4>
                        </div>
                    </div>
                    <div className='caja-p'>
                        <img src="https://p4.wallpaperbetter.com/wallpaper/971/957/138/women-model-brunette-street-wallpaper-preview.jpg" alt="" />
                        <div className='nom'>
                            <h3>Nombre producto</h3>
                            <h4>S/. 0.0</h4>
                        </div>
                    </div>
                    <div className='caja-p'>
                        <img src="https://p4.wallpaperbetter.com/wallpaper/971/957/138/women-model-brunette-street-wallpaper-preview.jpg" alt="" />
                        <div className='nom'>
                            <h3>Nombre producto</h3>
                            <h4>S/. 0.0</h4>
                        </div>
                    </div>
                    <div className='caja-p'>
                        <img src="https://p4.wallpaperbetter.com/wallpaper/971/957/138/women-model-brunette-street-wallpaper-preview.jpg" alt="" />
                        <div className='nom'>
                            <h3>Nombre producto</h3>
                            <h4>S/. 0.0</h4>
                        </div>
                    </div>
                    <div className='caja-p'>
                        <img src="https://p4.wallpaperbetter.com/wallpaper/971/957/138/women-model-brunette-street-wallpaper-preview.jpg" alt="" />
                        <div className='nom'>
                            <h3>Nombre producto</h3>
                            <h4>S/. 0.0</h4>
                        </div>
                    </div>

                </div>

            </section>








        </div>

    );
}
export default Apariencia
