
import './pagina.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Cambios from './cambios/Cambios';
import axios from 'axios';
import Apariencia from './apariencia/Apariencia';
import { useState, useEffect } from 'react';
import * as Data from '../../Data';
import * as Datareact from '../../Datareact'

import imgpredeterminada from './portada.jpg'

import { ImMenu } from "react-icons/im";

const Pagina = () => {


    const tflogo = "https://t4.ftcdn.net/jpg/04/63/32/89/360_F_463328917_omAk7Zf7qkeIUXghapTUGMeoyLOxxCAt.jpg"
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

    const [logo, setLogo] = useState(tflogo)
    const [wasap, setWasap] = useState("+051")
    const [sub1, setSub1] = useState("titulo1")
    const [sub2, setSub2] = useState("titulo2")
    const [sub3, setSub3] = useState("titulo3")
    const [sub4, setSub4] = useState("titulo4")



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

                setLogo(ty.logo)
                setWasap(ty.wasap)

                setSub1(ty.sub1)
                setSub2(ty.sub2)
                setSub3(ty.sub3)
                setSub4(ty.sub4)
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
        try {
            await actualizarPagina(
                userteamfy,
                idp._id,
                titulo,
                selectedImage,
                descripcion,
                color,
                logo,
                wasap,
                sub1,
                sub2,
                sub3,
                sub4
            )
            toast.success('¡Pagina actualizada de manera exitosa!');
        } catch (error) {
            console.log(error)
        }
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
                

                <Cambios
                    xtitulo={setTitulo}
                    ximagen={setSelectedImage}
                    xdescripcion={setDescripcion}
                    xcolor={setColor}
                    tinte={color}

                    xlogo={logo}
                    xwasap={wasap}
                    updwasap={setWasap}
                    updlogo={setLogo}
                    xsub1={setSub1}
                    xsub2={setSub2}
                    xsub3={setSub3}
                    xsub4={setSub4}

                    imbanner={selectedImage}

                    actualizar={modificar}
                />
            </div>


            <div className='apariencia'>
                <Apariencia
                    titu={titulo}
                    imagen={selectedImage}
                    descripcion={descripcion}
                    color={color}

                    logo={logo}
                    wasap={wasap}
                    sub1={sub1}
                    sub2={sub2}
                    sub3={sub3}
                    sub4={sub4}
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