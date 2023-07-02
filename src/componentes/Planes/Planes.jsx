import "./Planes.css"
import { Link } from "react-router-dom"
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import calaveraoro from '/Users/Fabeto/Desktop/TAREAS/Proyecto Integrador/ProyectoTeamfy/src/componentes/Planes/calaveraoro.jpg';
import calaverabronce from '/Users/Fabeto/Desktop/TAREAS/Proyecto Integrador/ProyectoTeamfy/src/componentes/Planes/calaverabronce.jpg';
import calaveraplata from '/Users/Fabeto/Desktop/TAREAS/Proyecto Integrador/ProyectoTeamfy/src/componentes/Planes/calaveraplata.jpg';

const Planes = () => {


    return (


        <div className="my__caja">

            <div className="mini">
                <div className="ab">
                    <div className="plan">
                        <h2>Oro</h2>
                        <img
                            src={calaveraoro}
                            alt="Imagen Oro"
                            className="plan__imagen"
                        />
                        <li><Link to={'/detallesplanoro'}><button type="submit" className="caja_btn">
                            Ver Detalles
                        </button></Link></li>
                    </div>
                </div>
            </div>
            <div className="mini">
                <div className="ab">
                    <div className="plan">
                        <h2>Plata</h2>
                        <img
                            src={calaveraplata}
                            alt="Imagen Oro"
                            className="plan__imagen"
                        />
                        <a href={planoro}>
                            <button type="submit" className="caja_btn">
                                Ver Detalles
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="mini">
                <div className="ab">
                    <div className="plan">
                        <h2>Bronce</h2>
                        <img
                            src={calaverabronce}
                            alt="Imagen Oro"
                            className="plan__imagen"
                        />
                        <a href={<planoro />} >
                            <button type="submit" className="caja_btn">
                                Ver Detalles
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>



    );

}

export default Planes