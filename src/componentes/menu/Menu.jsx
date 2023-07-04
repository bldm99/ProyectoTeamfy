import React from 'react';
import "./menu.css";

import { AiOutlineSearch } from 'react-icons/ai';  //icono 

import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';  //boton icono 
import SearchIcon from '@mui/icons-material/Search';

import { useState, useEffect } from 'react';
import * as Datareact from "../../Datareact"

//importando componentes
import Nosotros from '../Planes/Planes';
import Planes from '../Planes/Planes';


const Menu = () => {

    const [userteamfy, setUserteamfy] = useState("")


    useEffect(() => {

        try {
            const optener = async () => {

                const xuser = Datareact.obtenerInfoTeamfy()
                setUserteamfy(xuser)
                console.log(xuser)
                
            }
            optener()
        } catch (error) {
            console.log(error)
        }

    }, [])



    return (
        <section className="menu">
            <Link to={'/'}>
                <header>

                    <img
                        className="logo-empresa"
                        src="https://img.freepik.com/vector-premium/plantilla-diseno-logotipo-tienda-alimentos_145155-1251.jpg"
                        alt="Logo de Empresa"
                    />
                    <h1 className="titulo-empresa">Teamfy</h1>

                </header>
            </Link>

            <div className="barra-busqueda">
                <div>
                    <TextField className="busqueda"
                        size='small'
                        id="search"
                        type="text"
                        fullWidth
                        placeholder="Buscar"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />

                </div>
            </div>

            <nav className='navigator'>
                <ul className="menu-lista">

                    <li className="menu__list__item itm1">
                        <a to="/dd">{userteamfy?.useremail}</a>
                        <Nosotros />

                    </li>

                    <li className="menu__list__item itm1">
                        <a to="/djfsdf">Planes</a>
                        <Planes />

                    </li>
                    <li className="menu__list__item itm3">
                        <a to="/sobre">Ofertas Especiales</a>
                        <Nosotros />
                    </li>
                </ul>
            </nav>
        </section >
    );
}

export default Menu;