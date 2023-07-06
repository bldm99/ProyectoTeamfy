import React from 'react';
import imgprueba from './prueba.jpg';
import '../PlanBronce/Planbronce.css';
import medallabronce from "../PlanBronce/imagenes/planbroncemedalla.png"

import beneficio1  from "../PlanBronce/imagenes/beneficio1.jpg"
import beneficio2  from "../PlanBronce/imagenes/beneficio2.jpg"
import beneficio3  from "../PlanBronce/imagenes/beneficio3.jpg"



export default function PlanBronce() {
    return (
        <div className="planbronce-slider">
            <div className="planbronce-slider-content">
                <div className="planbronce-slider-text">
                    <p>TEAMFY</p>
                    ______________________________________________________________________________
                    <h1>¡PLAN BRONCE!</h1>
                    <p>Llega a más personas con Teamfy</p>
                </div>
            </div>

            <div className="planbronce-quienes-somos">
                <h1>Razones para elegir el Plan Bronce:</h1>
                <div className="planbronce-quienes-somos-content">
                    <div className="planbronce-quienes-somos-text">
                        <p>
                            1.-Solución económica para aquellos con un presupuesto limitado.<br></br>
                            2.-Funciones y herramientas básicas para comenzar a vender en línea.<br></br>
                            3.-Soporte técnico limitado pero accesible.<br></br>
                        </p>
                    </div>
                    <img src={medallabronce} alt="Imagen" className="planbronce-quienes-somos-image" />
                </div>
            </div>

            <div className="planbronce-inicio-equipo">
                <h1 className="planbronce-inicio-titulo">Beneficios</h1>
                <div className="planbronce-inicio-integrantes">
                    <div className="planbronce-integrante zoom">
                        <img src={beneficio1} alt="Imagen" />
                        <h3>Mayor capacidad de personalización</h3>
                    </div>
                    <div className="planbronce-integrante zoom">
                        <img src={beneficio2} alt="Imagen" />
                        <h3>Acceso a análisis y métricas detalladas</h3>
                    </div>
                    <div className="planbronce-integrante zoom">
                        <img src={beneficio3} alt="Imagen" />
                        <h3>Integración con sistemas de pago y envío de mayor alcance.</h3>
                        
                    </div>
                    
                </div>
                <h1>S./750</h1>
            </div>
            <a href="">
                <button className="planbronce-button">Contratar</button>
            </a>
            <br />
            <br />
            <footer className="planbronce-footer">
                <h1 className="planbronce-footer-title">TEAMFY</h1>
                <div className="planbronce-footer-line"></div>
                <p className="planbronce-footer-text">@Todos los derechos Reservados</p>
            </footer>
        </div>
    );
}
