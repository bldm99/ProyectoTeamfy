import React from 'react';
import './inicio.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from "../inicio/logo.jpg"
import quienesomos from "../inicio/quienes-somos.jpg"
import imgprueba from './prueba.jpg';
import porqueelegirnos from "../inicio/porqueelegirnos.png"
import logofacebook from "../inicio/facebook.png"
import logolinkedin from "../inicio/linkedin.png"

const Inicio = () => {
    return (
        <div className="slider">
            <div className="slider-content">
                <div className="slider-text">
                    <p>TeamFy</p>
                    __________________________________________________
                    <h1>¡BIENVENIDOS!</h1>
                    <p>Llega a muchas más personas con Teamfy</p>
                    <a href="">
                        <button className="slider-button">Comenzar</button>
                    </a>
                </div>
                <div className="slider-image">
                    <img src={logo} alt="Imagen" />
                </div>

            </div>

            <div className="quienes-somos">
                <h1>¿QUIENES SOMOS?</h1>
                <div className="quienes-somos-content">
                    <div className="quienes-somos-text">
                        <p>
                            En Teamfy, somos una plataforma en línea que ofrece a nuestros clientes la oportunidad de crear su propia tienda virtual y vender productos en línea. Nuestra misión es brindar una solución integral para aquellos que desean establecer su presencia en Internet y expandir su negocio de manera efectiva.
                        </p>
                    </div>
                    <img src={quienesomos} alt="Imagen" className="quienes-somos-image1" />
                </div>
            </div>
            <div className="quienes-somos">
                <h1>¿Por Que Elegirnos?</h1>
                <div className="quienes-somos-content">
                    <img src={porqueelegirnos} alt="Imagen" className="quienes-somos-image" />
                    <div className="quienes-somos-text">
                        <p>
                            1.-Facilidad de uso y personalización <br></br>
                            2.-Potentes herramientas de comercio electrónico<br></br>
                            3.-Alcance global<br></br>
                            4.-Soporte al cliente excepcional<br></br>
                            5.-Seguridad y confianza
                        </p>
                    </div>

                </div>
            </div>

            <div className="inicio-equipo">
                <h1 className="inicio-titulo">NUESTRO EQUIPO FRONTEND</h1>
                <div className="inicio-integrantes">
                    <div className="integrante zoom">
                        <img src={imgprueba} alt="Imagen" />

                        <h3><br></br> Fabricio Favio Polanco Pezo <br></br> <strong>Cargo:</strong> <br></br> Supervisor Jefe</h3>
                        <div className="logo-container">
                            <a href="/face"> <img className='logo' src={logofacebook} alt="" /></a>
                            <a href="/linke"> <img className='logo' src={logolinkedin} /></a>

                        </div>

                    </div>
                    <div className="integrante zoom">
                        <img src={imgprueba} alt="Imagen" />

                        <h3><br></br> Fabricio Favio Polanco Pezo <br></br> <strong>Cargo:</strong> <br></br> Supervisor Jefe</h3>
                        <div className="logo-container">
                            <a href="/face"> <img className='logo' src={logofacebook} alt="" /></a>
                            <a href="/linke"> <img className='logo' src={logolinkedin} /></a>

                        </div>

                    </div>
                    <div className="integrante zoom">
                        <img src={imgprueba} alt="Imagen" />

                        <h3><br></br> Fabricio Favio Polanco Pezo <br></br> <strong>Cargo:</strong> <br></br> Supervisor Jefe</h3>
                        <div className="logo-container">

                            <a href="/face"> <img className='logo' src={logofacebook} alt="" /></a>
                            <a href="/linke"> <img className='logo' src={logolinkedin} /></a>

                        </div>

                    </div>
                </div>
            </div>
            <div className="inicio-equipo">
                <h1 className="inicio-titulo">NUESTRO EQUIPO BACKEND</h1>
                <div className="inicio-integrantes">
                    <div className="integrante zoom">
                        <img src={imgprueba} alt="Imagen" />

                        <h3><br></br> Fabricio Favio Polanco Pezo <br></br> <strong>Cargo:</strong> <br></br> Supervisor Jefe</h3>
                        <div className="logo-container">
                            <a href="/face"> <img className='logo' src={logofacebook} alt="" /></a>
                            <a href="/linke"> <img className='logo' src={logolinkedin} /></a>

                        </div>

                    </div>
                    <div className="integrante zoom">
                        <img src={imgprueba} alt="Imagen" />

                        <h3><br></br> Fabricio Favio Polanco Pezo <br></br> <strong>Cargo:</strong> <br></br> Supervisor Jefe</h3>
                        <div className="logo-container">
                            <a href="/face"> <img className='logo' src={logofacebook} alt="" /></a>
                            <a href="/linke"> <img className='logo' src={logolinkedin} /></a>

                        </div>

                    </div>
                    <div className="integrante zoom">
                        <img src={imgprueba} alt="Imagen" />

                        <h3><br></br> Fabricio Favio Polanco Pezo <br></br> <strong>Cargo:</strong> <br></br> Supervisor Jefe</h3>
                        <div className="logo-container">

                            <a href="/face"> <img className='logo' src={logofacebook} alt="" /></a>
                            <a href="/linke"> <img className='logo' src={logolinkedin} /></a>

                        </div>

                    </div>
                </div>
            </div>
            <br />
            <br />
            <footer className="footer">
                <h1 className="footer-title">TEAMFY</h1>
                <div className="footer-line"></div>
                <p className="footer-text">@Todos los derechos Reservados</p>
            </footer>

        </div>
    );
};

export default Inicio;
