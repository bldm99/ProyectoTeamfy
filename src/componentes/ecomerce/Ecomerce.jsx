import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./ecomerce.css"
import * as Data from "../../Data"
import * as Datareact from "../../Datareact"


import Apmenu from "../perzonalizar/apariencia/Apmenu"
import Emenu from "./Emenu"




const Ecomerce = () => {
    var xlogo = "https://c4.wallpaperflare.com/wallpaper/834/299/692/city-lights-girl-moon-wallpaper-preview.jpg"

    const idLocal = import.meta.env.VITE_idLocal;

    //var idLogeado = "64936e483562954d54515f92" //Local

    var idLogeado = "64979d173f4f94805507eb4e" // nube
    var idpagina = "6497aa3d3f4f94805507ec55" // nube

    const buscarProductos = Data.buscarProductos
    const buscarPaginaReact = Datareact.buscarPaginaReact
    const transparente = Datareact.convertHexToRGB

    const [productos, setProductos] = useState([])
    const [pagina, setPagina] = useState([])

    



    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const resultado = await buscarProductos(idLogeado, setProductos)
                //console.log(resultado)
                const page = await buscarPaginaReact(idLogeado, idpagina, setPagina)
                //setColor(page.color)
                

            } catch (error) {
                console.log(error)
            }
        }
        obtenerProductos()
    }, [])



    return (
        <div className='Eapariencia'>

            <Emenu
            />

            <section className='Ep-portada'>

                <img src={pagina.banner} alt="Imagen seleccionada" />

                <div className='Edesc'>
                    <h4>{pagina.descripcion}</h4>
                </div>
            </section>

            <section className='Ecl-contenido'>
                <div>
                    <h2>Ultimo en tendencias</h2>
                </div>
                <div className='Econtenido-producto'>

                    {productos.map((item) => (
                        <div className='Ecaja-p' key={item._id}>
                            <div>
                                <Link to={`/paginaexplorer/${item._id}`}>
                                    <img src={item.imagen} alt="Imagen" />
                                </Link>
                            </div>
                            <div className='Ea-informacion'>
                                <div className='Enom'>
                                    <h3>{item.nombre}</h3>
                                    <p>S/. {item.precio}</p>
                                </div>
                                <div className='Enom-2'>
                                    <p>{item.stock}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {productos.map((item) => (
                        <div className='Ecaja-p' key={item._id}>
                            <div>
                                <Link to={`/paginaexplorer/${item._id}`}>
                                    <img src={item.imagen} alt="Imagen" />
                                </Link>
                            </div>
                            <div className='Ea-informacion'>
                                <div className='Enom'>
                                    <h3>{item.nombre}</h3>
                                    <p>S/. {item.precio}</p>
                                </div>
                                <div className='Enom-2'>
                                    <p>{item.stock}</p>
                                </div>
                            </div>
                        </div>
                    ))}



                    <div className='Ecaja-p'>
                        <img src="https://p4.wallpaperbetter.com/wallpaper/971/957/138/women-model-brunette-street-wallpaper-preview.jpg" alt="" />
                        <div className='Enom'>
                            <h3>Nombre producto</h3>
                            <h4>S/. 0.0</h4>
                        </div>
                    </div>


                </div>

            </section>








        </div>

    );
}
export default Ecomerce