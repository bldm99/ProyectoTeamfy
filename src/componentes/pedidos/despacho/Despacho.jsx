import "./despacho.css"
import { useState, useEffect } from "react";

import imag from "../../../assets/ps.jpg"

const Despacho = (props) => {

    const { datapedido, updatePedido } = props

    const [animate, setAnimate] = useState(false);

    const [valorestado, setValorestado] = useState(datapedido.estado)

    useEffect(() => {
        setAnimate(true);
    }, []);

    const actualizar = (event) => {
        event.preventDefault()
        let valoresForm = {
            id_pedido: datapedido._id,
            new_estado: valorestado
        }
        updatePedido(valoresForm)
    }

 
    var valorbutton = valorestado === "En espera" ? "Mantener estado" : "Confirmar despacho";




    return (
        <div className="TDespacho">
            <div className="box-despacho">

                <div className={`despacho-imagen ${animate ? 'animate' : ''}`}>
                    <img src={datapedido.imagen_producto ? datapedido.imagen_producto : imag} alt="" />
                </div>

                <form onSubmit={actualizar}>
                    <h3>{datapedido.nombre_producto}</h3>
                    <p><strong>Direccion de envio:</strong> {datapedido.direccion}</p>
                    <p><strong>Cliente: </strong>{datapedido.correo_cliente}</p>
                    <div className="more-detalles">
                        <div>
                            <strong><label>Cant.</label></strong>
                            <p>{datapedido.cantidad}</p>
                        </div>
                        <div>
                            <strong><label>Pre.</label></strong>
                            <p>{datapedido.precio_producto}</p>
                        </div>
                        <div>
                            <strong><label>Tot.</label></strong>
                            <p>{datapedido.total}</p>
                        </div>
                    </div>
                    <div>
                        <strong>Estado:</strong> {valorestado}
                    </div>

                    <div className="my-options" >
                        <label htmlFor="" onClick={() => { setValorestado("En espera") }}>En espera</label>
                        <label htmlFor="" onClick={() => { setValorestado("Completado") }}>Completado</label>
                    </div>

                    <div className="btn-pedido">
                        <button>{valorbutton}</button>
                    </div>








                </form>
            </div>

        </div>
    );
}

export default Despacho