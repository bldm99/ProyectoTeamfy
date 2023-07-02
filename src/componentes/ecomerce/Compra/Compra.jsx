import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import "./compra.css"

//import Campo from "../../CampoFormulario/Campo"
import Formulario from "../Formulario/Formulario";

import * as Datareact from "../../../Datareact"
import * as Data from "../../../Data"
import * as Ecom from "../Ecom"

const Compra = () => {
    const navigate = useNavigate();
    var idLogeado = "64979d173f4f94805507eb4e"

    const buscarProducto = Datareact.buscarProducto


    const { id } = useParams()

    const [producto, setProducto] = useState([])
    const [correologeado, setCorreologeado] = useState("")




    useEffect(() => {
        const optener = async () => {
            const res = await buscarProducto(idLogeado, id, setProducto)
            const xcorreo = Ecom.obtenerInfo()
            setCorreologeado(xcorreo)
        }
        optener()
    }, [])


    const registrarPedido = async (valores) => {
        try {
            await Data.postPedidos(
                idLogeado,
                correologeado,
                producto.nombre,
                producto.imagen,
                producto.precio,
                valores.direccion,
                "5",
                "En espera",
                navigate,
            )
            console.log("El pedido fue realizado con exito")
        } catch (error) {
            console.log(error)
        }
        
    }



    return (
        <div className="ECcompra">

            <section className="EC-cont-pro">

                <div className="EC-producto">
                    <h2>{producto.nombre}</h2>
                    <hr />
                    <div className="EC-caja">
                        <div className="mini">
                            <img src={producto.imagen} alt="" />
                            <img src={producto.imagen} alt="" />
                            <img src={producto.imagen} alt="" />
                        </div>
                        <div className="max">
                            <img src={producto.imagen} alt="" />
                        </div>
                        <div className="details">
                            <div>
                                <h3>{producto.descripcion}</h3>
                                <h4>{producto.nombre}</h4>
                            </div>
                            <div className="details-datos">
                                <p>Precio: {producto.precio}</p>
                                <p>Stock: {producto.stock}</p>

                                <button>Comprar</button>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className="ECoformulario">
                <Formulario
                    datos={registrarPedido}
                />
            </section>

        </div>
    )
}
export default Compra