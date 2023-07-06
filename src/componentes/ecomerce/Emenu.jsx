import { useState , useEffect } from 'react';
import './emenu.css'

import * as Datareact from "../../Datareact"
import * as Ecom from "./Ecom"

const Emenu = () => {
    var xlogo = "https://c4.wallpaperflare.com/wallpaper/834/299/692/city-lights-girl-moon-wallpaper-preview.jpg"
    //var idLogeado = "64936e483562954d54515f92" //Local

    var idLogeado = "64979d173f4f94805507eb4e" // nube
    var idpagina = "6497aa3d3f4f94805507ec55" // nube


    const buscarPaginaReact = Datareact.buscarPaginaReact
    const transparente = Datareact.convertHexToRGB

    const [pagina, setPagina] = useState([])
    const [color, setColor] = useState("")

    const [gmail, setGmail] = useState("")
 

    useEffect(() => {
        const obtener = async () => {
            try {
                const datmaster = Datareact.obtenerInfoTeamfy()
                //const page = await buscarPaginaReact(idLogeado, idpagina, setPagina)
                const page = await buscarPaginaReact(datmaster.uid , setPagina)
                setColor(page.color)
                const x = setGmail(Ecom.obtenerInfo())
                //console.log(x)
                
            } catch (error) {
                console.log(error)
            }

        }
        obtener()
    }, [])

    var modificado = `rgba(${transparente(color)} , 0.7)`
    const xstylos = {
        backgroundColor: modificado,
    }
    

    const [animacionActiva, setAnimacionActiva] = useState(false);
    const [mostrarmenu, setMostarmenu] = useState(false)
    const animacion = () => {
        setAnimacionActiva(!animacionActiva);
        setMostarmenu(!mostrarmenu)
    };


    const cerrarSesion = () => {
        Ecom.logout()
    }

    return (
        <section className='Ecl-cabezera' >
            <div className='Ecl-header' style={xstylos}>
                <div className='Ecl-titulo'>
                    <img src={xlogo} alt="Logo de empresa" />
                    <h3>{pagina.titulo}</h3>
                </div>
                <div className='Ecl-lista'  >

                    <ul className='Eli-s' >

                        <li><button onClick={ () =>{cerrarSesion()}}  >logout</button></li>
                        <li>{gmail}</li>
                        <li>About</li>
                        <li>Catalo</li>
                        <li>Contacto</li>
                        <li>Categoria</li>
                    </ul>

                    <ul className="Eicon-responive">
                        <li>
                            <div className={`icon_menu ${animacionActiva ? "animado" : ""}`} onClick={animacion}>
                                <span className={`linea1 ${animacionActiva ? "Ea" : ""}`}></span>
                                <span className={`linea2 ${animacionActiva ? "Eb" : ""}`}></span>
                                <span className={`linea3 ${animacionActiva ? "Ec" : ""}`}></span>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>

            <div className='Eapmenu' style={{ color: "black" }}>
                {mostrarmenu &&
                    <div className='x'>
                        <div >
                            <h3 >menu depegable</h3>
                        </div>
                        <div>
                            <ul>
                                <li>Opcion</li>
                                <li>Opcion</li>
                                <li>Opcion</li>

                                <li>Opcion</li>
                                <li>Opcion</li>
                                <li>Opcion</li>
                            </ul>
                        </div>
                    </div>
                }
            </div>

        </section>
    );
}
export default Emenu