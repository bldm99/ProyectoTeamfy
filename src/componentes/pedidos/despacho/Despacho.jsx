import "./despacho.css"
import { useState, useEffect } from "react";

import imag from "../../../assets/ps.jpg"

const Despacho = (props) => {

    const { datapedido } = props

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);


    return (
        <div className="TDespacho">
            <div className="box-despacho">

                <div className={`despacho-imagen ${animate ? 'animate' : ''}`}>
                    <img src={datapedido.imagen_producto ? datapedido.imagen_producto : imag} alt=""
                        
                    />
                </div>

                <form>
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




                    <button>Realizar Pedido</button>


                </form>
            </div>

        </div>
    );
}

export default Despacho