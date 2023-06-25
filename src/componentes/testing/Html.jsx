
import { useState , useEffect } from "react";
import * as Data from '../../Data';

import Campo from "../CampoFormulario/Campo";

const Html = () => {

    //var idLogeado = "64936e483562954d54515f92"  Local
    var idLogeado = "64979d173f4f94805507eb4e"    //nube

    const registroPagina = Data.postPagina


    

    const [x, setX] = useState("")

    const registrarpagina = async (event) => {
        var idprueba = idLogeado
        event.preventDefault()
        try {
            await registroPagina(idprueba,x)
            //await viewUsers('abc123', setDatausers);
        } catch (error) {
            console.log(error)
        }
    }



    return(
        <div>

            <div>
            <form onSubmit={registrarpagina}>
                    <Campo
                        valor={x}
                        place={'Coloque su htm'}
                        actualizarvalor={setX}
                        obligatorio
                        tipo={'text'}
                    />
                    <button>Registrar</button>
                </form>
            </div>

           

            <div dangerouslySetInnerHTML={{ __html: x }} />


        </div>
    );

}

export default Html