
import './login.css'
import Campo from '../CampoFormulario/Campo'
import video from '../../assets/mylivewallpapers-com-Magical-Forest.mp4'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import * as Datareact from '../../Datareact'

import Registerteam from './Registerteam';
import Loginteam from './Loginteam';

const Login = () => {

    const [componente, setComponete] = useState(
        <Loginteam funclogin={Datareact.loginTeamfy} />
    );




    return (
        <div className='body-login'>
            <h1>Teamfy</h1>

            <div className='login-letras'>
                <li onClick={() => setComponete(
                    <Registerteam funcregister={Datareact.registerTeamfy} />
                )} >Register</li>

                <li onClick={() => setComponete(
                    <Loginteam funclogin={Datareact.loginTeamfy} />
                )} >Login</li>
                <p>Con Teamfy, los usuarios pueden dar vida a sus ideas y proyectos digitales
                     sin necesidad de tener conocimientos técnicos avanzados. La plataforma ofrece 
                     una amplia variedad de plantillas y herramientas de diseño para personalizar la apariencia y el estilo de las páginas web,
                     permitiendo a los usuarios reflejar su identidad de marca de manera única.
                </p>
                <p>Teamfy es la plataforma ideal para aquellos que desean crear, 
                    vender y gestionar sus páginas web de manera fácil y efectiva. 
                </p>
            </div>
            <video src={video} loop autoPlay></video>

            <div className='login-container'>

                {componente}



            </div>

        </div>
    );
}

export default Login

