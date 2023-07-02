import React from 'react';
import './inicio.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import imgprueba from './prueba.jpg';

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
                    <img src={imgprueba} alt="Imagen" />
                </div>
            </div>

            <div className="quienes-somos">
                <h1>¿QUIENES SOMOS?</h1>
                <div className="quienes-somos-content">
                    <div className="quienes-somos-text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque efficitur risus, vitae tincidunt ligula fringilla ac. Donec nec pulvinar eros. Aenean eu ipsum ut tellus consequat posuere.
                        </p>
                    </div>
                    <img src={imgprueba} alt="Imagen" className="quienes-somos-image" />
                </div>
            </div>
            <div className="quienes-somos">
                <h1>¿Por Que Elegirnos?</h1>
                <div className="quienes-somos-content">
                    <img src={imgprueba} alt="Imagen" className="quienes-somos-image" />
                    <div className="quienes-somos-text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque efficitur risus, vitae tincidunt ligula fringilla ac. Donec nec pulvinar eros. Aenean eu ipsum ut tellus consequat posuere.
                        </p>
                    </div>

                </div>
            </div>



            <div className="inicio-equipo">
                <h1 className="inicio-titulo">NUESTRO EQUIPO FRONTEND</h1>
                <div className="inicio-integrantes">
                    <div className="integrante zoom">
                        <h3>Nombre: Fabricio Favio Polanco Pezo</h3>
                        <img src={imgprueba} alt="Imagen" />
                        <a href="">
                            <button className="inicio-button">Comenzar</button>
                        </a>
                    </div>
                    <div className="integrante zoom">
                        <h3>Nombre: Jose Hammer Pilco</h3>
                        <img src={imgprueba} alt="Imagen" />
                        <a href="">
                            <button className="inicio-button">Comenzar</button>
                        </a>
                    </div>
                    <div className="integrante zoom">
                        <h3>Nombre: Frnklyn chupamedias rrara</h3>
                        <img src={imgprueba} alt="Imagen" />
                        <a href="">
                            <button className="inicio-button">Comenzar</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="inicio-equipo">
                <h1 className="inicio-titulo">NUESTRO EQUIPO BACKEND</h1>
                <div className="inicio-integrantes">
                    <div className="integrante">
                        <h3>Nombre: ENZO LINGUINI</h3>
                        <img src={imgprueba} alt="Imagen" />
                        <a href="">
                            <button className="inicio-button">Comenzar</button>
                        </a>
                    </div>
                    <div className="integrante">
                        <h3>Nombre: BLADIMIR PUTIN</h3>
                        <img src={imgprueba} alt="Imagen" />
                        <a href="">
                            <button className="inicio-button">Comenzar</button>
                        </a>
                    </div>
                    <div className="integrante">
                        <h3>Nombre: EL OTRO COMPAÑERO</h3>
                        <img src={imgprueba} alt="Imagen" />
                        <a href="">
                            <button className="inicio-button">Comenzar</button>
                        </a>
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
