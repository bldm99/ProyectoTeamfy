
import { useState, useEffect } from 'react';
import './apariencia.css'
import Apmenu from './Apmenu';
import xlogo from './xLogo.png'

import * as Data from '../../../Data'
import * as Datareact from '../../../Datareact'
import { Try } from '@mui/icons-material';

const Apariencia = ({ titu, imagen, descripcion, color }) => {

    //var idLogeado = "64936e483562954d54515f92" //Local

    var idLogeado = "64979d173f4f94805507eb4e" // nube
    var idpagina = "6497aa3d3f4f94805507ec55" // nube

    
    var imagenprueba = "https://c4.wallpaperflare.com/wallpaper/834/299/692/city-lights-girl-moon-wallpaper-preview.jpg"

    const buscarProductos = Data.buscarProductos
    const buscarPaginaReact = Datareact.buscarPaginaReact

    const [productos, setProductos] = useState([])
    const [pagina, setPagina] = useState([])

    const [animacionActiva, setAnimacionActiva] = useState(false);
    const [mostrarmenu, setMostarmenu] = useState(false)
    const animacion = () => {
        setAnimacionActiva(!animacionActiva);
        setMostarmenu(!mostrarmenu)
    };

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const resultado = await buscarProductos(idLogeado, setProductos)
                console.log(resultado)
                const page = await buscarPaginaReact(idLogeado, idpagina , setPagina)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerProductos()
    }, [])


    /*const Vermenu = () => {
        setMostarmenu(!mostrarmenu)
    }*/


    var fondo = ""


    if(color){
        fondo = color
    }else{
       fondo = pagina.color
    } 
    const xstylos = {
        backgroundColor: fondo,
    }
    
    

    



    return (
        <div className='apariencia'>

            <section className='cl-cabezera' >

                <div className='cl-header' style={xstylos}>
                    <div className='cl-titulo'>
                        <img src={xlogo} alt="Logo de empresa" />
                        <h3>{titu ? titu : pagina.titulo}</h3>
                    </div>
                    <div className='cl-lista'  >

                        <ul className='li-s' >
                            <li>About</li>
                            <li>Catalo</li>
                            <li>Contacto</li>
                            <li>Categoria</li>
                        </ul>


                        <ul className="icon-responive">
                            <li>
                                <div className={`icon_menu ${animacionActiva ? "animado" : ""}`} onClick={animacion}>
                                    <span className={`linea1 ${animacionActiva ? "a" : ""}`}></span>
                                    <span className={`linea2 ${animacionActiva ? "b" : ""}`}></span>
                                    <span className={`linea3 ${animacionActiva ? "c" : ""}`}></span>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>



                <div className='apmenu' style={{ color: "black" }}>
                    {mostrarmenu && <Apmenu />}
                </div>

            </section>

            <section className='p-portada'>

                <img src={imagen ? imagen : pagina.banner} alt="Imagen seleccionada" width={'100%'} />

                <div className='desc'>
                    <h4>{descripcion ? descripcion : pagina.descripcion}</h4>
                </div>
            </section>

            <section className='cl-contenido'>
                <div>
                    <h2>Ultimo en tendencias</h2>
                </div>
                <div className='contenido-producto'>

                    {productos.map((item) => (
                        <div className='caja-p' key={item._id}>
                            <img src={item.imagen} alt="Producto" />
                            <div className='a-informacion'>
                                <div className='nom'>
                                    <h3>{item.nombre}</h3>
                                    <p>S/. {item.precio}</p>
                                </div>
                                <div className='nom-2'>
                                    <p>{item.stock}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    {productos.map((item) => (
                        <div className='caja-p' key={item._id}>
                            <img src={item.imagen} alt="Producto" />
                            <div className='a-informacion'>
                                <div className='nom'>
                                    <h3>{item.nombre}</h3>
                                    <p>S/. {item.precio}</p>
                                </div>
                                <div className='nom-2'>
                                    <p>{item.stock}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    {productos.map((item) => (
                        <div className='caja-p' key={item._id}>
                            <img src={item.imagen} alt="Producto" />
                            <div className='a-informacion'>
                                <div className='nom'>
                                    <h3>{item.nombre}</h3>
                                    <p>S/. {item.precio}</p>
                                </div>
                                <div className='nom-2'>
                                    <p>{item.stock}</p>
                                </div>
                            </div>
                        </div>
                    ))}


                    <div className='caja-p'>
                        <img src="https://p4.wallpaperbetter.com/wallpaper/971/957/138/women-model-brunette-street-wallpaper-preview.jpg" alt="" />
                        <div className='nom'>
                            <h3>Nombre producto</h3>
                            <h4>S/. 0.0</h4>
                        </div>
                    </div>


                </div>

            </section>








        </div>

    );
}
export default Apariencia
