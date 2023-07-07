
import './pagina.css'

import Cambios from './cambios/Cambios';
import axios from 'axios';
import Apariencia from './apariencia/Apariencia';
import { useState, useEffect } from 'react';
import * as Data from '../../Data';
import * as Datareact from '../../Datareact'

import imgpredeterminada from './portada.jpg'

import { ImMenu } from "react-icons/im";

const Pagina = () => {

    //var idLogeado = "64936e483562954d54515f92"
    //var idpagina = "6494df187587bad2f3d03dc9"

    var idLogeado = "64979d173f4f94805507eb4e"
    var idpagina = "6497aa3d3f4f94805507ec55"


    const unico = Data.unico
    const pagina = Datareact.buscarPaginaReact
    const actualizarPagina = Datareact.actualizarPaginaReact

    const [userteamfy, setUserteamfy] = useState("")
    const [idp, setIdp] = useState([])



    const [user, setUser] = useState([])
    const [datapagina, setDatapagina] = useState([])


    const [titulo, setTitulo] = useState("Nombre de tu tirndsa")
    const [selectedImage, setSelectedImage] = useState(imgpredeterminada);
    const [descripcion, setDescripcion] = useState('Tienda de ... ')
    const [color, setColor] = useState("#D9F7E9")

    //mrnu lateral responsivo
    var mysty = {
        display: "none",
    };
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const obtenerdata = async () => {
            try {
                const idteam = Datareact.obtenerInfoTeamfy()
                setUserteamfy(idteam.uid)

                const idPagina = Datareact.buscarPaginaReact(idteam.uid, setIdp)

                const ty = await pagina(idteam.uid, setDatapagina)
                setTitulo(ty.titulo)
                setDescripcion(ty.descripcion)
                setSelectedImage(ty.banner)
                setColor(ty.color)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerdata()

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])


    const modificar = async () => {
        await actualizarPagina(
            userteamfy,
            idp._id,
            titulo,
            selectedImage,
            descripcion,
            color,
            "https://c4.wallpaperflare.com/wallpaper/575/892/1007/logo-gigabyte-aorus-hd-wallpaper-preview.jpg",
            "789658741"
        )
    }


    if (windowWidth > 768) {
        mysty = {
            display: "block"
        }
    }
    const [expanded, setExpanded] = useState(true);
    const handleClick = () => {
        setExpanded(!expanded);
    };


    return (
        <div className='pagina'>

            <div className='fixp'>
                <ImMenu onClick={handleClick} size={32} color="#783030" />
            </div>

            <div className='cambios' style={expanded ? {} : mysty}   >
                {/*<button onClick={() => { modificar() }}  >Guardar{idp._id} Cambios</button>*/}
                <Cambios
                    xtitulo={setTitulo}
                    ximagen={setSelectedImage}
                    xdescripcion={setDescripcion}
                    xcolor={setColor}
                    tinte={color}
                />
            </div>

            <div className='apariencia'>
                <Apariencia
                    titu={titulo}
                    imagen={selectedImage}
                    descripcion={descripcion}
                    color={color}
                />
            </div>

        </div>
    );
}
export default Pagina





/*<div className="prueba">
                    <div>
                        {user.pagina && user.pagina.map((x) => (
                            <div key={x._id}>

                                <h5>{x.titulo}</h5>
                                <h5>{x.descripcion}</h5>
                                <img src={x.banner} alt="Imagen" style={{ width: '300px', height: '200px' }} />
                            </div>
                        ))}
                    </div>
                </div>*/

/*const x = await unico(idLogeado, setUser)
var f = x.pagina
const listaPagina = f.map((item) => {
    setTitulo(item.titulo)
    setDescripcion(item.descripcion)
});*/
                //console.log(listaPagina);

/*const handleImageChange = (event) => {
const file = event.target.files[0];
const reader = new FileReader();

reader.onload = (e) => {
setSelectedImage(e.target.result);
};
reader.readAsDataURL(file);
};*/