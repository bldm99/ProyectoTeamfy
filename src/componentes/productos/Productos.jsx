import React, { useState, useEffect } from 'react';
import * as Datareact from '../../Datareact';
import './Productos.css';
import * as Data from '../../Data';
import Campo from '../CampoFormulario/Campo';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Productos = () => {
  var idLogeado = "64979d173f4f94805507eb4e"
  const [nombre, setNombre] = useState("")
  const [precio, setPrecio] = useState("")
  const [imagen, setImagen] = useState("")
  const [stock, setStock] = useState("")
  const [f_Inicio, setInicio] = useState("")
  const [f_Final, setFinal] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [html, setHtmln] = useState("")
  const [sku, setSku] = useState("")
  const registrarproducto = Data.postProductos
  const buscarProductos = Data.buscarProductos
  const [productos, setProductos] = useState([]);
  const [indiceActual, setIndiceActual] = useState(0);
  const [dataproductos, setDataproductos] = useState([])
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: '',
    precio: '',
    imagen: null,
  });

  const [userteamfy, setUserteamfy] = useState("")
  const registrarx = async (event) => {
    event.preventDefault()
    try {
      await Data.postProductos(userteamfy, nombre, precio, imagen, stock, f_Inicio, f_Final, descripcion, html, sku)

      await buscarProductos(userteamfy, setDataproductos)
      toast.success('¡Nuevo producto registrado de manera exitosa!');
      console.log("Producto registrado")
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const obtenerdata = async () => {
      try {

        const idteam = Datareact.obtenerInfoTeamfy()

        const product = await buscarProductos(idteam.uid, setDataproductos)
        setUserteamfy(idteam.uid)

      } catch (error) {
        console.log(error)
      }
    }
    obtenerdata()
  }, []);

  console.log(dataproductos)

  const mostrarSiguienteProducto = () => {
    setIndiceActual((indiceActual + 1) % dataproductos.length);
  };

  const mostrarProductoAnterior = () => {
    setIndiceActual((indiceActual - 1 + dataproductos.length) % dataproductos.length);
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

  const agregarProducto = async () => {
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
      <ToastContainer/>
      <h1>Productos</h1>
      <div className="productos-container">
        <button className="nav-button" onClick={mostrarProductoAnterior}>
          &lt;
        </button>
        <div className="producto-actual">
          <img
            src={dataproductos[indiceActual]?.imagen}
            alt={dataproductos[indiceActual]?.nombre}
            className="producto-imagen"
          />
          <div className="producto-informacion">
            <h3>{dataproductos[indiceActual]?.nombre}</h3>
            <p>Precio: ${dataproductos[indiceActual]?.precio}</p>
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
          {dataproductos.map((producto) => (
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
      <section className='final-register'>
        
        <form onSubmit={registrarx}>
        <h3>Ingrese datos del nuevo producto</h3>
          <Campo
            valor={nombre}
            place={'Nombre'}
            actualizarvalor={setNombre}
            obligatorio
            tipo={'text'}
          />

          <Campo
            valor={precio}
            place={'Precio'}
            actualizarvalor={setPrecio}
            obligatorio
            tipo={'text'}
          />
          <Campo
            valor={imagen}
            place={'Imagen'}
            actualizarvalor={setImagen}
            obligatorio
            tipo={'text'}
          />
          <Campo
            valor={stock}
            place={'Stock'}
            actualizarvalor={setStock}
            obligatorio
            tipo={'text'}
          />
          <Campo
            valor={f_Inicio}
            place={'Inicio'}
            actualizarvalor={setInicio}
            obligatorio
            tipo={'text'}
          />
          <Campo
            valor={f_Final}
            place={'Final'}
            actualizarvalor={setFinal}
            obligatorio
            tipo={'text'}
          />
          <Campo
            valor={descripcion}
            place={'Descripcion'}
            actualizarvalor={setDescripcion}
            obligatorio
            tipo={'text'}
          />
          <Campo
            valor={html}
            place={'html'}
            actualizarvalor={setHtmln}
            obligatorio
            tipo={'text'}
          />
          <Campo
            valor={sku}
            place={'sku'}
            actualizarvalor={setSku}
            obligatorio
            tipo={'text'}
          />

          <button id='registrar'>Registrar</button>
        </form>

      </section>
    </div>

  );
};

export default Productos;