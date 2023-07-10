import React, { useState, useEffect } from "react";
import './clientes.css'

import * as Data from '../../Data';
import *as Datareact from "../../Datareact"

const Clientes = () => {

    const [clientes, setClientes] = useState([])
    const [filtroPais, setFiltroPais] = useState('');
    const [filtroTexto, setFiltroTexto] = useState('');

    useEffect(() => {

        const obtenerCliente = async () => {
            try {
                // clienteTeamfy Permite obtener  datos del cliente logeado
                const cliTeamfy = Datareact.obtenerInfoTeamfy()
                const e = await Data.buscarClientes(cliTeamfy.uid, setClientes)


            } catch (error) {
                console.log(error)
            }
        }
        obtenerCliente()

    }, []);

    const filtrarPorPais = (pais) => {
        setFiltroPais(pais);
    };

    const mostrarTodos = () => {
        setFiltroPais('');
    };

    const filtrarPorTexto = (event) => {
        const texto = event.target.value;
        setFiltroTexto(texto);
    };

    const clientesFiltrados = clientes.filter((cliente) => {
        if (filtroPais && cliente.pais !== filtroPais) {
            return false;
        }
        if (filtroTexto && !cliente.correo.toLowerCase().includes(filtroTexto.toLowerCase())) {
            return false;
        }
        return true;
    });





    return (
        <div className="contenedor">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <h2 id="label-cliente">Clientes</h2>
            <button className="button-cliente">Agregar Cliente</button>
            <div className="workspace">
                <div className="workspace-head">
                    <a href="#" className="active" onClick={mostrarTodos}>Todos</a>
                    <a href="#">Nuevos</a>
                    <a href="#" onClick={() => filtrarPorPais('Peru')}>De Peru</a>
                    <a href="#" onClick={() => filtrarPorPais('Colombia')}>De Colombia</a>
                    <a href="#" onClick={() => filtrarPorPais('Argentina')}>De Argentina</a>
                    <div className="search-container">
                        <input type="text" placeholder="Buscar clientes" onChange={filtrarPorTexto} />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </div>
                </div>
                <div className="workspace-body">
                    <div>
                        <h2>Clientes</h2>
                        <table className="clientes-table">
                            <thead>
                                <tr>
                                    <th style={{ background: "green", color: "white", fontWeight: "bold" }}>Correo sty</th>
                                    <th style={{ background: "green", color: "white", fontWeight: "bold" }}>País</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clientesFiltrados.map((cliente) => (
                                    <tr key={cliente.correo}>
                                        <td>{cliente.correo}</td>
                                        <td>{cliente.pais}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Clientes;