import React from 'react';
import './pedidos.css';
import imgprueba from './mona1.png';

const Pedidos = () => {
  return (
    <div className='contenedor'>
      <h2 className='titulo'>Tus Pedidos</h2>
      <div className='cont-imagenes'>
        <a href='#' className='enlace-imagen'>
          <div className='imagen padre'>
            <img className='imagen-producto' src={imgprueba} alt='' />
            <h3 className='subtitulo'>Nombre Producto</h3>
          </div>
        </a>
        <a href='#' className='enlace-imagen'>
          <div className='imagen padre'>
            <img className='imagen-producto' src={imgprueba} alt='' />
            <h3 className='subtitulo'>Nombre Producto</h3>
          </div>
        </a>
        <a href='#' className='enlace-imagen'>
          <div className='imagen padre'>
            <img className='imagen-producto' src={imgprueba} alt='' />
            <h3 className='subtitulo'>Nombre Producto</h3>
          </div>
        </a>
        <a href='#' className='enlace-imagen'>
          <div className='imagen padre'>
            <img className='imagen-producto' src={imgprueba} alt='' />
            <h3 className='subtitulo'>Nombre Producto</h3>
          </div>
        </a>
        <a href='#' className='enlace-imagen'>
          <div className='imagen padre'>
            <img className='imagen-producto' src={imgprueba} alt='' />
            <h3 className='subtitulo'>Nombre Producto</h3>
          </div>
        </a>
        <a href='#' className='enlace-imagen'>
          <div className='imagen padre'>
            <img className='imagen-producto' src={imgprueba} alt='' />
            <h3 className='subtitulo'>Nombre Producto</h3>
          </div>
        </a>
        <a href='#' className='enlace-imagen'>
          <div className='imagen padre'>
            <img className='imagen-producto' src={imgprueba} alt='' />
            <h3 className='subtitulo'>Nombre Producto</h3>
          </div>
        </a>
        <a href='#' className='enlace-imagen'>
          <div className='imagen padre'>
            <img className='imagen-producto' src={imgprueba} alt='' />
            <h3 className='subtitulo'>Nombre Producto</h3>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Pedidos;
