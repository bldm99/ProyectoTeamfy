

import Campo from "../../CampoFormulario/Campo";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as Ecom from "../Ecom"

const Eregister = () => {

    const idLocal = import.meta.env.VITE_idLocal;
    
    const userRegister = Ecom.userRegister

    const navigate = useNavigate();
    


    const [correo, setCorreo] = useState("")
    const [password, setPassword] = useState("")
    const [pais, setPais] = useState("")


    const [lcorreo, setLcorreo] = useState("")
    const [lpassword, setLpassword] = useState("")

    const registrar = async (event) => {
        event.preventDefault()
        await userRegister(idLocal, correo, password, pais ,navigate)
    }


    const logear = async (event) => {
        event.preventDefault()
        await Ecom.userLogin(idLocal, lcorreo, lpassword ,navigate)
    }


    return (
        <div>Regitros
            <form onSubmit={registrar}>
                <h2>Registrarse</h2>
                <Campo
                    place="Ingresar su email"
                    obligatorio
                    valor={correo}
                    actualizarvalor={setCorreo}
                    tipo={'text'}
                />

                <Campo
                    place="Ingresar una contraseña"
                    obligatorio
                    valor={password}
                    actualizarvalor={setPassword}
                    tipo={'text'}
                />

                <Campo
                    place="Ingrese un Pais"
                    obligatorio
                    valor={pais}
                    actualizarvalor={setPais}
                    tipo={'text'}
                />

                <button>Confirmar</button>
            </form>

            <form onSubmit={logear}>
                <h2>Iniciar Sesion</h2>
                <Campo
                    place="Ingresar su email"
                    obligatorio
                    valor={lcorreo}
                    actualizarvalor={setLcorreo}
                    tipo={'text'}
                />

                <Campo
                    place="Ingresar una contraseña"
                    obligatorio
                    valor={lpassword}
                    actualizarvalor={setLpassword}
                    tipo={'text'}
                />

                <button>Ingresar</button>
            </form>
        </div>
    )
}

export default Eregister