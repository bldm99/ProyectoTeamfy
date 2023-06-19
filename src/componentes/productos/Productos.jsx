import React, { useState } from 'react';
import './Productos.css';

const Productos = () => {
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Producto 1', precio: 10, imagen: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/aa53a0a800c846abb44aae8a00367e1d_9366/Zapatillas_Tensaur_Sport_Training_Cierre_de_Cordones_Blanco_GW6422_01_standard.jpg' },
    { id: 2, nombre: 'Producto 2', precio: 20, imagen: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/aa53a0a800c846abb44aae8a00367e1d_9366/Zapatillas_Tensaur_Sport_Training_Cierre_de_Cordones_Blanco_GW6422_01_standard.jpg' },
    { id: 3, nombre: 'Producto 3', precio: 30, imagen: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/aa53a0a800c846abb44aae8a00367e1d_9366/Zapatillas_Tensaur_Sport_Training_Cierre_de_Cordones_Blanco_GW6422_01_standard.jpg' },
  ]);

  const [indiceActual, setIndiceActual] = useState(0);
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: '',
    precio: '',
    imagen: null,
  });

  const mostrarSiguienteProducto = () => {
    setIndiceActual((indiceActual + 1) % productos.length);
  };

  const mostrarProductoAnterior = () => {
    setIndiceActual((indiceActual - 1 + productos.length) % productos.length);
  };

  const handleInputChange = (e) => {
    setNuevoProducto({
      ...nuevoProducto,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setNuevoProducto({
        ...nuevoProducto,
        imagen: reader.result,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const agregarProducto = () => {
    const productoNuevo = {
      id: productos.length + 1,
      nombre: nuevoProducto.nombre,
      precio: nuevoProducto.precio,
      imagen: nuevoProducto.imagen,
    };

    setProductos([...productos, productoNuevo]);
    setNuevoProducto({
      nombre: '',
      precio: '',
      imagen: null,
    });
  };

  return (
    <div className="productos-wrapper">
      <h1>Productos</h1>
      <div className="productos-container">
        <button className="nav-button" onClick={mostrarProductoAnterior}>
          &lt;
        </button>
        <div className="producto-actual">
          <img
            src={productos[indiceActual].imagen}
            alt={productos[indiceActual].nombre}
            className="producto-imagen"
          />
          <div className="producto-informacion">
            <h3>{productos[indiceActual].nombre}</h3>
            <p>Precio: ${productos[indiceActual].precio}</p>
          </div>
        </div>
        <button className="nav-button" onClick={mostrarSiguienteProducto}>
          &gt;
        </button>
      </div>
      <div className="agregar-producto-container">
        <h2>Agregar Producto</h2>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del producto"
          value={nuevoProducto.nombre}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="precio"
          placeholder="Precio"
          value={nuevoProducto.precio}
          onChange={handleInputChange}
        />
        <input
          type="file"
          name="imagen"
          accept="image/*"
          onChange={handleImageUpload}
        />
        <button className="agregar-button" onClick={agregarProducto}>
          Agregar Producto
        </button>
      </div>

      <section className="container-related-products">
        <h2>Productos Relacionados</h2>
        <div className="card-list-products">
          <div className="card">
            <div className="card-img">
              <img
                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
                alt="producto-1"
              />
            </div>
            <div className="info-card">
              <div className="text-product">
                <h3>Nike - Roshe Run</h3>
                <p className="category">Footwear, Sneakers</p>
              </div>
              <div className="price">$85.00</div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img
                src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80"
                alt="producto-2"
              />
            </div>
            <div className="info-card">
              <div className="text-product">
                <h3>Common Projects Achilles</h3>
                <p className="category">Footwear, Sneakers</p>
              </div>
              <div className="price">$255.00</div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img
                src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="producto-3"
              />
            </div>
            <div className="info-card">
              <div className="text-product">
                <h3>Adidas - Boston Super OG</h3>
                <p className="category">Footwear, Sneakers</p>
              </div>
              <div className="price">$105.00</div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img
                src="https://images.unsplash.com/photo-1617606002779-51d866bdd1d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="producto-4"
              />
            </div>
            <div className="info-card">
              <div className="text-product">
                <h3>Common Projects Achilles</h3>
                <p className="category">Footwear, Sneakers</p>
              </div>
              <div className="price">$250.00</div>
            </div>
          </div>
        </div>
      </section>
      <footer>
  <p>TeamFy</p>
</footer>

    </div>
    
  );
};

export default Productos;
