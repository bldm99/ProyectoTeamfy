import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Campo from "../CampoFormulario/Campo";

import { database } from '../../Database';
import { collection, addDoc } from 'firebase/firestore';
import { getDatabase, ref, push } from "firebase/database";

const Registerteam = (props) => {

    const navigate = useNavigate();

    const { funcregister } = props

    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [password, setPassword] = useState("")
    const [telefono, setTelefono] = useState("")

    const registrarTe = async (event) => {
        event.preventDefault()

        const usuario = {
            nombre: nombre,
            correo: correo,
            password: password,
            telefono: telefono
        };

        try {
            //await addDoc(collection(database, 'usuarios'), usuario);
            const db = getDatabase();
            const usuariosRef = ref(db, "usuarios");
            await push(usuariosRef, usuario);
            await funcregister(nombre, correo, password, telefono, navigate)

        } catch (error) {
            console.log(error);
        }

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
                        tipo={'password'}
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