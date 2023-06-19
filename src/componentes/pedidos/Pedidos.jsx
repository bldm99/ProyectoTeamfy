
import './pedidos.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pedidos = () => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get(
        'https://teamapi.bladimirchipana.repl.co/pruebas'
      );
      setImages(response.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

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

  return (
    <div className="carousel">
      <br></br>
      <div
        className="carousel-inner"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${currentSlide * (100 / images.length)}%)`,
        }}
      >
        {images.map((image, index) => (
          <a key={index} href="/ruta-de-destino" className="slide"> {/* Reemplaza "/ruta-de-destino" con la ruta adecuada */}
            <div className="image-container">
              <img src={image.imagen} alt={`Imagen ${index + 1}`} />
            </div>
            <div className="image-info">
              <div className="image-name">{image.nombre}</div>
              <div className="image-price">{`Price: $${image.precio}`}</div>
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
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index + 1)}
          ></button>
        ))}
      </div>
    </div>
  );
};


export default Pedidos 
