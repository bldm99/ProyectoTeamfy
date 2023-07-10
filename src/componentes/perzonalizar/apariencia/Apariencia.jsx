
import { useState, useEffect } from 'react';
import './apariencia.css'
import Apmenu from './Apmenu';
import xlogo from './xLogo.png'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ImFacebook2 } from "react-icons/im";
import { ImWhatsapp } from "react-icons/im";
import { ImTwitter } from "react-icons/im";

import * as Data from '../../../Data'
import * as Datareact from '../../../Datareact'
import { Try } from '@mui/icons-material';

const Apariencia = ({ titu, imagen, descripcion, color, logo, wasap, sub1, sub2, sub3, sub4 }) => {

    //var idLogeado = "64936e483562954d54515f92" //Local

    var idLogeado = "64979d173f4f94805507eb4e" // nube
    var idpagina = "6497aa3d3f4f94805507ec55" // nube


    var imagenprueba = "https://c4.wallpaperflare.com/wallpaper/834/299/692/city-lights-girl-moon-wallpaper-preview.jpg"

    const buscarProductos = Data.buscarProductos
    //const buscarPaginaReact = Datareact.buscarPaginaReact

    const [productos, setProductos] = useState([])
    const [pagina, setPagina] = useState([])
    const [p, setP] = useState([])

    const [animacionActiva, setAnimacionActiva] = useState(false);
    const [mostrarmenu, setMostarmenu] = useState(false)
    const animacion = () => {
        setAnimacionActiva(!animacionActiva);
        setMostarmenu(!mostrarmenu)
    };

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                //buscamos el id del que esta logeado 
                const idteam = Datareact.obtenerInfoTeamfy()

                const resultado = await buscarProductos(idteam.uid, setProductos)
                const page = await Datareact.buscarPaginaReact(idteam.uid, setPagina)

            } catch (error) {
                console.log(error)
            }
        }
        obtenerProductos()
    }, [])



    var fondo = ""


    if (color) {
        fondo = color
    } else {
        fondo = pagina.color
    }
    const xstylos = {
        backgroundColor: fondo,
    }







    return (
        <div className='apariencia'>
<ToastContainer />
            <section className='cl-cabezera' >

                <div className='cl-header' style={xstylos}>
                    <div className='cl-titulo'>
                        <img src={logo} alt="Logo de empresa" />
                        <h3>{titu ? titu : pagina.titulo}</h3>
                    </div>
                    <div className='cl-lista'  >

                        <ul className='li-s' >
                            <li><ImWhatsapp style={{ color: '#55E511' }}/> {wasap} </li>
                            <li>{sub1}</li>
                            <li>{sub2}</li>
                            <li>{sub3}</li>
                            <li>{sub4}</li>
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



                <div className='apmenu' style={{ color: "red" }}>
                    {mostrarmenu &&
                        <Apmenu
                            sub1={sub1}
                            sub2={sub2}
                            sub3={sub3}
                            sub4={sub4}
                            wasap={wasap}
                        />
                    }
                </div>

            </section>

            <section className='p-portada'>
                <img src={imagen ? imagen : pagina.banner} alt="Imagen seleccionada" width={'100%'} />

                <div className='desc'>
                    <h4>{descripcion ? descripcion : pagina.descripcion}</h4>
                    <p>Lorem ipsum ddolor sit amet consectetur adipisicing elit. Quam, rem minus.
                        Voluptas inventore eveniet perspiciatis quam. Fuga eligendi nesciunt dignissimos?
                        Eligendi fuga quisquam iure, aliquam impedit suscipit unde tempore dolores.
                    </p>
                    <ul>
                        <li><ImFacebook2 /></li>
                        <li><ImWhatsapp /></li>
                        <li><ImTwitter /></li>
                    </ul>
                </div>
            </section>

            <section className='cl-information'>
                <div className='card-information'>
                    <div className='all-info'>
                        <div>
                            <div>
                                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Odio iusto, facere temporibus dolor minus enim tempora in vel.
                                </h4>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Saepe voluptas corrupti ab voluptates eligendi mollitia quod nam!
                                    Fugit architecto nam repudiandae, voluptatibus aspernatur saepe,
                                    molesstiae ut ullam accusamus aperiam eum?
                                </p>
                            </div>
                            <div className='info-btn'>
                                <button>Vermas</button>
                                <button>Continuar comprando</button>
                            </div>
                        </div>

                    </div>

                </div>

            </section>

            <section className='cl-contenido'>
                <h4>Intereses</h4>
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
