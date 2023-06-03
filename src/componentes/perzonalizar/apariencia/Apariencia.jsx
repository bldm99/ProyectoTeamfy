
import { useState } from 'react';
import './apariencia.css'

const Apariencia = ({ titu, imagen, descripcion , color }) => {


    const xstylos = {
        backgroundColor: color,    
    }


    return (
        <div className='apariencia'>

            <section className='cl-header' style={xstylos}>
                <div className='cl-titulo'>
                    <h2>Logo</h2>
                    <h3>{titu}</h3>
                </div>
                <div className='cl-lista'>
                    <li >
                        <ul>texto1</ul>
                        <ul>texto1</ul>
                        <ul>texto1</ul>
                        <ul>texto1</ul>
                    </li>
                </div>
            </section>

          

            <section className='p-portada'>
                <img src={imagen} alt="Imagen seleccionada" width={'100%'} />
                <div className='desc'>
                    <h4>{descripcion}</h4>
                </div>
            </section>


          
            
            
            


        </div>

    );
}
export default Apariencia
