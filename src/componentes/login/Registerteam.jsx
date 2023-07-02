import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Campo from "../CampoFormulario/Campo";
const Registerteam = (props) => {

    const navigate = useNavigate();

    const {funcregister}  = props

    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [password, setPassword] = useState("")
    const [telefono, setTelefono] = useState("")

    const registrarTe = async (event) =>{
        event.preventDefault()
        await funcregister(nombre , correo , password , telefono , navigate)
    }

    return (
        <div className='componente-register'>
            <div>
                <h2>Registrarse</h2>
            </div>

            <div className='team-formmulario'>
                <form onSubmit={registrarTe}>

                    <Campo
                        place="Nombre"
                        obligatorio
                        valor={nombre}
                        actualizarvalor={setNombre}
                        tipo={'text'}
                    />
                    <Campo
                        place="Ingresar su email"
                        obligatorio
                        valor={correo}
                        actualizarvalor={setCorreo}
                        tipo={'text'}
                    />
                    <Campo
                        place="Password"
                        obligatorio
                        valor={password}
                        actualizarvalor={setPassword}
                        tipo={'text'}
                    />
                    <Campo
                        place="Telefono"
                        obligatorio
                        valor={telefono}
                        actualizarvalor={setTelefono}
                        tipo={'text'}
                    />
                    <button>Registrar</button>

                </form>

            </div>

        </div>
    );
}

export default Registerteam