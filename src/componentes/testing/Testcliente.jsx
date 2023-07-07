
import { useState, useEffect } from 'react';
import * as Data from '../../Data';
import *as Datareact from "../../Datareact"

import Campo from '../CampoFormulario/Campo';

const Testcliente = () => {

    //var idLogeado = "64936e483562954d54515f92"
    //var emjpedido = "64977f1567f4cc77f2b7ab18"

    var idLogeado = "64979d173f4f94805507eb4e"
    var emjpedido = "64977f1567f4cc77f2b7ab18"


    const registrar = Data.postClientes
    const buscarClientes = Data.buscarClientes
    const postPedidos = Data.postPedidos
    const buscarPedidos = Data.buscarPedidos   //todos los pedidos
    const buscarPedido = Data.buscarPedido    //Solo un pedido
    const actualizarPedido = Data.actualizarPedido

    const [cliente, setCliente] = useState([])
    const [pedido, setPedido] = useState([])

    const [unicopedido, setUnicopedido] = useState([])

    const [dataclienteid , setDataclienteid] = useState("") //Permite obtener el id del dueño de la tienda


    useEffect(() => {
        const obtenercliente = async () => {
            try {

                // clienteTeamfy Permite obtener  datos del cliente logeado
                const cliTeamfy = Datareact.obtenerInfoTeamfy()
                setDataclienteid(cliTeamfy.uid)
                //const a = await buscarClientes(idLogeado, setCliente)

                const b = await buscarPedidos(cliTeamfy.uid , setPedido)
                //console.log(b)

                const c = await buscarPedido(cliTeamfy.uid, "64a75e5a272d2f69b1489755", setUnicopedido)
                console.log(c)
            } catch (error) {
                console.log(error)
            }
        }
        obtenercliente()
    }, [])

    console.log(pedido)


    const registrarcli = async () => {
        await registrar(idLogeado, "prueba3@gmail.com", "1234", "Colombia")
    }
    const registrarpe = async () => {
        await postPedidos(idLogeado,
            "prueba@gmail.com",
            "Cuadro ",
            "https://c4.wallpaperflare.com/wallpaper/365/244/884/uchiha-itachi-naruto-shippuuden-anbu-silhouette-wallpaper-preview.jpg",
            "180 $",
            "A.V Peru",
            "1",
            "En espera"
        )
    }

    const actualizar = async () => {
        await actualizarPedido(dataclienteid, "64a75e5a272d2f69b1489755" , "En espera")
    }





    return (
        <div>


            <button onClick={() => { registrarcli() }}  >Trsting Registrar cliente </button>
            <button onClick={() => { registrarpe() }}  >Testing Registra Pedido </button>
            <button onClick={() => { actualizar() }}  >Testing Actualizar  Pedido </button>

        </div>
    );
}
export default Testcliente