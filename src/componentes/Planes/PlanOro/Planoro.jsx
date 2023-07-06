import React from 'react';
import '../PlanOro/Planoro.css';

import planoromedalla from "../PlanOro/imagenes/planoromedalla.png"

import beneficio1  from "../PlanOro/imagenes/beneficio1.jpg"
import beneficio2  from "../PlanOro/imagenes/beneficio2.jpg"
import beneficio3  from "../PlanOro/imagenes/beneficio3.jpg"
import beneficio4  from "../PlanOro/imagenes/beneficio4.jpg"
import beneficio5  from "../PlanOro/imagenes/beneficio5.jpg"
import beneficio6  from "../PlanOro/imagenes/beneficio6.webp"



export default function planoro() {
    return (
        <div className="planoro-slider">
            <div className="planoro-slider-content">
                <div className="planoro-slider-text">
                    <p>TEAMFY</p>
                    ______________________________________________________________________________
                    <h1>¡PLAN ORO!</h1>
                    <p>Llega a muchas más personas con Teamfy</p>
                </div>
            </div>

            <div className="planoro-quienes-somos">
                <h1>Razones para elegir el Plan Oro:</h1>
                <div className="planoro-quienes-somos-content">
                    <div className="planoro-quienes-somos-text">
                        <p>
                            1.-Amplia gama de funciones avanzadas y herramientas.<br></br>
                            2.-Capacidad para gestionar un gran número de productos.<br></br>
                            3.-Soporte prioritario y asistencia técnica personalizada.
                        </p>
                    </div>
                    <img src={planoromedalla} alt="Imagen" className="planoro-quienes-somos-image" />
                </div>
            </div>

            <div className="planoro-inicio-equipo">
                <h1 className="planoro-inicio-titulo">Beneficios principales del Plan Oro:</h1>
                <div className="planoro-inicio-integrantes">
                    <div className="planoro-integrante zoom">
                        <img src={beneficio1} alt="Imagen" />
                        <h3>Mayor capacidad de personalización</h3>
                    </div>
                    <div className="planoro-integrante zoom">
                        <img src={beneficio2} alt="Imagen" />
                        <h3>Acceso a análisis y métricas detalladas</h3>
                    </div>
                    <div className="planoro-integrante zoom">
                        <img src={beneficio3} alt="Imagen" />
                        <h3>Integración con sistemas de pago y envío de mayor alcance.</h3>
                    </div>
                    <div className="planoro-integrante zoom">
                        <img src={beneficio4} alt="Imagen" />
                        <h3>Opciones de promoción y publicidad mejoradas.</h3>
                    </div>
                    <div className="planoro-integrante zoom">
                        <img src={beneficio5} alt="Imagen" />
                        <h3>Soporte técnico prioritario y asistencia personalizada.</h3>
                    </div>
                    <div className="planoro-integrante zoom">
                        <img src={beneficio6} alt="Imagen" />
                        <h3>Gestión eficiente de un gran número de productos.</h3>
                    </div>
                </div>
                <h1>S./1.250</h1>
            </div>
           
            <a href="">
            
                <button className="planoro-button">Contratar</button>
            </a>
            <br />
            <br />
            <footer className="planoro-footer">
                <h1 className="planoro-footer-title">TEAMFY</h1>
                <div className="planoro-footer-line"></div>
                <p className="planoro-footer-text">@Todos los derechos Reservados</p>
            </footer>
        </div>
    );
}
