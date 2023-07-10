import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Campo from "../CampoFormulario/Campo";


const Loginteam = (props) => {

    const navigate = useNavigate();

    const {funclogin}  = props

   
    const [correo, setCorreo] = useState("")
    const [password, setPassword] = useState("")

    const logeaTe = async (event) =>{
        event.preventDefault()
        await funclogin( correo , password , navigate)
    }

    

    return (
        <div className='componente-login'>
            <div>
                <h2>Iniciar Sesion Teamfy</h2>
            </div>

            <div className='team-formmulario'>
                <form onSubmit={logeaTe}>

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
                        tipo={'password'}
                    />
                    
                    <button>Iniciar Sesion</button>

                </form>

            </div>

        </div>
    );
}

export default Loginteam