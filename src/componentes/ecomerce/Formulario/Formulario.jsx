
import "./formulario.css"
import { useState } from "react";
import Campo from "../../CampoFormulario/Campo";
const Formulario = (props) => {

    const {datos} = props



    const [direccion , setDireccion] = useState("")





    const registrar = (event) =>{
        event.preventDefault()
        let valoresFormulario = {
            
            direccion
        }
        console.log(valoresFormulario)
        datos(valoresFormulario)
    }

    return(
        <div className="ECformulario">
            <form onSubmit={registrar}> 
                <h2>Rellena el formulario </h2>
                

                <Campo 
                    place="Ingresar la direccion de envio"
                    obligatorio  
                    valor={direccion}
                    actualizarvalor={setDireccion}
                    tipo={'text'}  
                />

                <button>Realizar Pedido</button>
                
                
            </form>
        </div>
    );
}

export default Formulario