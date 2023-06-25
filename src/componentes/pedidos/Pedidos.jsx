import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './pedidos.css';

const Pedidos = () => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get('https://teamapi-1.bladimirchipana.repl.co/userpr');
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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredImages = images.filter((image) =>
    image.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
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
          <a key={index} href="/ruta-de-destino" className="product-item">
            <div className="product-image">
              <img src={image.imagen} alt={`Imagen ${index + 1}`} />
            </div>
            <div className="product-info">
              <div className="product-name">{image.nombre}</div>
              <div className="product-price">{`Price: $${image.precio}`}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Pedidos;
