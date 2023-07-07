import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './pedidos.css';

import * as Data from '../../Data';
import *as Datareact from "../../Datareact"

import Formulario from "../ecomerce/Formulario/Formulario"
import Despacho from './despacho/Despacho';


const Pedidos = () => {

  /* -------------------Agregacion  nueva-------------------------- */
  const [dataclienteid, setDataclienteid] = useState("") //Permite obtener el id del dueño de la tienda
  const [pedidoid, setPedidoid] = useState([])

  const [modalVisible, setModalVisible] = useState(false);

  const handleComprar = () => {
    setModalVisible(true);
  };

  const handleOutsideClick = (event) => {
    if (event.target.classList.contains("modal")) {
      setModalVisible(false);
    }
  };

  /* -------------------Agregacion  nueva-------------------------- */

  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    const obtenerPedido = async () => {
      try {
        // clienteTeamfy Permite obtener  datos del cliente logeado
        const cliTeamfy = Datareact.obtenerInfoTeamfy()
        setDataclienteid(cliTeamfy.uid)
        const b = await Data.buscarPedidos(cliTeamfy.uid, setImages)

      } catch (error) {
        console.log(error)
      }
    }
    obtenerPedido()
    return () => {
      document.removeEventListener("click", handleOutsideClick);

    };
    //fetchImages();
  }, []);

  /*const fetchImages = async () => {
    try {
      const response = await axios.get('https://teamapi-1.bladimirchipana.repl.co/userpr');
      setImages(response.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };*/


  const showSlide = (index) => {
    if (index < 0) {
      index = images.length - 1;
    } else if (index >= images.length) {
      index = 0;
    }
    setCurrentSlide(index);
  };

  const changeSlide = (n) => {
    showSlide(currentSlide + n);
  };

  const goToSlide = (index) => {
    showSlide(index - 1);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };


  const filteredImages = images.filter((image) =>
    image.nombre_producto.toLowerCase().includes(searchTerm.toLowerCase())
  );

 

  return (
    <div className='xpedidos'>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <button className="search-button">Search</button>
      </div>
      <div className="carousel">
        <div
          className="carousel-inner"
          style={{
            width: `${filteredImages.length * 100}%`,
            transform: `translateX(-${currentSlide * (100 / filteredImages.length)}%)`,
          }}
        >
          {filteredImages.map((image, index) => (
            <a key={index} href="/ruta-de-destino" className="slide">
              <div className="image-container">
                <img src={image.imagen_producto} alt={`Imagen ${index + 1}`} />
              </div>
              <div className="image-info">
                <div className="image-name">{image.nombre_producto}</div>
                <div className="image-price">{`Price: $${image.precio_producto}`}</div>
              </div>
            </a>
          ))}
        </div>
        <a className="prev" onClick={() => changeSlide(-1)}>
          &#10094;
        </a>
        <a className="next" onClick={() => changeSlide(1)}>
          &#10095;
        </a>
        <div className="indicators">
          {filteredImages.map((_, index) => (
            <button
              key={index}
              className={`indicator ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index + 1)}
            ></button>
          ))}
        </div>
      </div>

      <div className="product-grid">
        {filteredImages.map((image, index) => (

          <div key={image._id} href="/ruta-de-destino" className="product-item">
            <div className="product-image">
              <img src={image.imagen_producto} alt={`Imagen ${index + 1}`} />
            </div>
            <div className="product-info">
              <div className="product-name">{image.nombre_producto}</div>
              <div className="product-price">{`Price: $${image.precio_producto}`}</div>
            </div>
            
            <button onClick={() => { handleComprar(); setPedidoid(image); }}>Despachar</button>


          </div>


        ))}
      </div>
      <button onClick={() => { handleComprar() }}>Despachar</button>
      <section className="Despacho">
        {modalVisible && (
          <div className="modal">
            <Despacho
              datapedido={pedidoid}

            />
          </div>
        )}
      </section>
    </div>
  );
};

export default Pedidos;
