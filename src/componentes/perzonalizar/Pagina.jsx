
import './pagina.css'

import Cambios from './cambios/Cambios';
import Apariencia from './apariencia/Apariencia';
import { useState } from 'react';

import imgpredeterminada from  './portada.jpg'

const Pagina = () => {
    //


    
    const [titulo, setTitulo] = useState('titulo provisional')
    const [selectedImage, setSelectedImage] = useState(imgpredeterminada);
    const [descripcion, setDescripcion] = useState('Tienda de ... ')
    const [color , setColor] = useState("#D9F7E9")
    

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            setSelectedImage(e.target.result);
        };

        reader.readAsDataURL(file);
    };

    return (
        <div className='pagina'>
           
            <div className='cambios'>
                <Cambios
                    xtitulo={setTitulo}
                    ximagen={setSelectedImage}
                    xdescripcion={setDescripcion}
                    xcolor={setColor}
                    tinte={color}

                />
            </div>

            <div className='apariencia'>  
                <Apariencia
                    titu={titulo} 
                    imagen={selectedImage}
                    descripcion={descripcion} 
                    color={color}
                />
               
                
                {/*<div>
                    <h2>Galeríagggg</h2>
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                    {selectedImage && (
                        <img src={selectedImage} alt="Imagen seleccionada" />
                    )}
                    </div>*/}
            </div>
        </div>
    );
}
export default Pagina