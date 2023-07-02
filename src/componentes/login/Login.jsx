
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

            <div className='login-letras'>
                <li onClick={() => setComponete(
                    <Registerteam funcregister={Datareact.registerTeamfy} />
                )} >Register</li>

                <li onClick={() => setComponete(
                    <Loginteam funclogin={Datareact.loginTeamfy} />
                )} >Login</li>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse odit velit,
                    quidem inventore quod laborum facilis sequi, tempora enim natus aliquid
                    voluptate suscipit? Dignissimos excepturi eaque asperiores quos est.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse odit velit,
                    quidem inventore quod laborum facilis sequi, tempora enim natus aliquid
                    voluptate suscipit? Dignissimos excepturi eaque asperiores quos est.
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

