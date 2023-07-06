import React from 'react';
import '../PlanPlata/PlanPlata.css';

import planplatamedalla from "../PlanPlata/imagenes/planplatamedalla.png"

import beneficio1  from "../PlanPlata/imagenes/beneficio1.jpg"
import beneficio2  from "../PlanPlata/imagenes/beneficio2.jpg"
import beneficio3  from "../PlanPlata/imagenes/beneficio3.jpg"
import beneficio4  from "../PlanPlata/imagenes/beneficio4.jpg"




export default function PlanPlata() {
    return (
        <div className="planplata-slider">
            <div className="planplata-slider-content">
                <div className="planplata-slider-text">
                    <p>TEAMFY</p>
                    ______________________________________________________________________________
                    <h1>¡PLAN PLATA!</h1>
                    <p>Llega a más personas con Teamfy</p>
                </div>
            </div>

            <div className="planplata-quienes-somos">
                <h1>¿Por qué plata?</h1>
                <div className="planplata-quienes-somos-content">
                    <div className="planplata-quienes-somos-text">
                        <p>
                            1.-Personalización básica para adaptarse a la identidad de la marca. <br></br>
                            2.-Informes y análisis básicos para evaluar el desempeño de la tienda.<br></br>
                            3.-Integración con sistemas de pago y envío populares y confiables.<br></br>        
                        </p>
                    </div>
                    <img src={planplatamedalla} alt="Imagen" className="planplata-quienes-somos-image" />
                </div>
            </div>

            <div className="planplata-inicio-equipo">
                <h1 className="planplata-inicio-titulo">Beneficios</h1>
                <div className="planplata-inicio-integrantes">
                    <div className="planplata-integrante zoom">
                        <img src={beneficio1} alt="Imagen" />
                        <h3>Mayor capacidad de personalización</h3>
                    </div>
                    <div className="planplata-integrante zoom">
                        <img src={beneficio2} alt="Imagen" />
                        <h3>Acceso a análisis y métricas detalladas</h3>
                    </div>
                    <div className="planplata-integrante zoom">
                        <img src={beneficio3} alt="Imagen" />
                        <h3>Integración con sistemas de pago y envío de mayor alcance.</h3>
                    </div>
                    <div className="planplata-integrante zoom">
                        <img src={beneficio4} alt="Imagen" />
                        <h3>Opciones de promoción y publicidad mejoradas.</h3>
                    </div>

                    
                </div>
                <h1>S./950</h1>
            </div>
            <a href="">
                <button className="planplata-button">Contratar</button>
            </a>
            <br />
            <br />
            <footer className="planplata-footer">
                <h1 className="planplata-footer-title">TEAMFY</h1>
                <div className="planplata-footer-line"></div>
                <p className="planplata-footer-text">@Todos los derechos Reservados</p>
            </footer>
        </div>
    );
}
