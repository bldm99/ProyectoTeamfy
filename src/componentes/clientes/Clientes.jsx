import React from "react";
import './clientes.css'

const Clientes = () =>{
    return (
        
        <div class="contenedor">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <h2 id="label-cliente">Clientes</h2>
            <button class="button-cliente">Agregar Cliente</button>
            <div class="workspace">
                <div class="workspace-head">
                    <a href="#todos" class="active">Todos</a>
                    <a href="#nuevos">Nuevos</a>
                    <a href="#dePeru">De Perú</a>
                    <div class="search-container">
                        <form action="/action_page.php">
                            <input type="text" placeholder="Buscar clientes"></input>
                            <button type="submit"><i class="fa fa-search"></i></button>
                        </form>
                    </div>
                </div>
                <div class="workspace-body">
                    <table>
                       <tr>
                        <td class="nombre-cliente">Jose Pilco</td>
                        <td class="estado-cliente"><div class="color-estado-cliente">Activo</div></td>
                        <td class="pedidos-cliente">0 pedidos</td>
                        <td id="compras-cliente">$150.00 en compras</td>
                       </tr>
                       <tr>
                        <td class="nombre-cliente">Jose Pilco</td>
                        <td class="estado-cliente"><div class="color-estado-cliente">Activo</div></td>
                        <td class="pedidos-cliente">0 pedidos</td>
                        <td class="compras-cliente">$150.00 en compras</td>
                       </tr>
                       <tr>
                        <td class="nombre-cliente">Jose Pilco</td>
                        <td class="estado-cliente"><div class="color-estado-cliente-inactivo">Inactivo</div></td>
                        <td class="pedidos-cliente">0 pedidos</td>
                        <td class="compras-cliente">$150.00 en compras</td>
                       </tr>
                        
                    </table>
                </div>
                
            </div>
        </div>
    );
}
export default Clientes;