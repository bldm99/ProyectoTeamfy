import React, { useState, useEffect } from 'react';
import './Productos.css';

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [indiceActual, setIndiceActual] = useState(0);
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: '',
    precio: '',
    imagen: null,
  });

  useEffect(() => {
    fetch('https://teamapi.bladimirchipana.repl.co/pruebas')
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.log(error));
  }, []);

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
            src={productos[indiceActual]?.imagen}
            alt={productos[indiceActual]?.nombre}
            className="producto-imagen"
          />
          <div className="producto-informacion">
            <h3>{productos[indiceActual]?.nombre}</h3>
            <p>Precio: ${productos[indiceActual]?.precio}</p>
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
          {productos.map((producto) => (
            <div className="card-product" key={producto.id}>
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="producto-imagen"
              />
              <div className="card-product-info">
                <h3>{producto.nombre}</h3>
                <p>Precio: ${producto.precio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Productos;
