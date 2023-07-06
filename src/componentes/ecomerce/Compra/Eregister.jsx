

import Campo from "../../CampoFormulario/Campo";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './eregister.css'

import * as Ecom from "../Ecom"
import * as Datareact from "../../../Datareact"

const Eregister = () => {

    const idLocal = import.meta.env.VITE_idLocal;

    const userRegister = Ecom.userRegister

    const navigate = useNavigate();



    const [correo, setCorreo] = useState("")
    const [password, setPassword] = useState("")
    const [pais, setPais] = useState("")


    const [lcorreo, setLcorreo] = useState("")
    const [lpassword, setLpassword] = useState("")

    const [dueñopage , setDueñopage] = useState("")

    useEffect(() => {
        const obtenerdata = async () => {
            try {
                const datmaster = Datareact.obtenerInfoTeamfy()
                setDueñopage(datmaster.uid)
                
                
            } catch (error) {
                console.log(error)
            }

        }
        obtenerdata()
    }, [])

    const registrar = async (event) => {
        event.preventDefault()
        //await userRegister(idLocal, correo, password, pais, navigate)
        await userRegister(dueñopage, correo, password, pais, navigate)
    }


    const logear = async (event) => {
        event.preventDefault()
        await Ecom.userLogin(idLocal, lcorreo, lpassword, navigate)
    }


    return (

        <div class="login-card-container">
            <div class="login-card">
                <div class="login-card-logo">
                    <img src="https://i.ibb.co/8gRHDr6/calcomania.png" alt="logo" />
                </div>
                <div class="login-card-header">
                    <h1>Iniciar sesión</h1>
                    <div>Por favor, inicia sesión para usar la plataforma</div>
                </div>
                <form class="login-card-form" onSubmit={registrar}>
                    <div class="form-item">


                        <Campo
                            valor={correo}
                            place={'Ingresa tu correo electrónico'}
                            actualizarvalor={setCorreo}
                            obligatorio
                            tipo={'text'}
                            span={"<span class='form-item-icon material-symbols-rounded'>mail</span>"}
                        />

                    </div>
                    <div class="form-item">


                        <Campo
                            valor={password}
                            place={'Ingresa tu contraseña'}
                            actualizarvalor={setPassword}
                            obligatorio
                            tipo={'text'}
                            span={"<span class='form-item-icon material-symbols-rounded'>lock</span>"}
                        />

                    </div>
                    <div class="form-item">


                        <Campo
                            valor={pais}
                            place={'Pais'}
                            actualizarvalor={setPais}
                            obligatorio
                            tipo={'text'}
                        />   

                    </div>
                    <div class="form-item-other">
                        <div class="checkbox">
                            <input type="checkbox" id="rememberMeCheckbox" checked />
                            <label for="rememberMeCheckbox">Recuérdame</label>
                        </div>
                        <a href="#">¡Olvidé mi contraseña!</a>
                    </div>
                    <button type="submit">Iniciar sesión</button>
                </form>
                <div class="login-card-footer">
                    ¿No tienes una cuenta? <a href="#">Crea una cuenta gratuita.</a>
                </div>
            </div>
            <div class="login-card-social">
                <div>Otras opciones de inicio de sesión</div>
                <div class="login-card-social-btns">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook"
                            width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                        </svg>
                    </a>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-google" width="24"
                            height="24" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Eregister