
import './pagina.css'

import Cambios from './cambios/Cambios';
import Apariencia from './apariencia/Apariencia';
import Inicio from '../inicio/Inicio';
import { useState } from 'react';

const Pagina = () => {

    const [titulo, setTitulo] = useState('titulo provisional')
    const [selectedImage, setSelectedImage] = useState(null);
    

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
            <>fragment</>
            <div className='cambios'>
                <Cambios
                    xtitulo={setTitulo}
                />
            </div>

            <div className='apariencia'>
                
                <Apariencia titu={titulo} />


                {titulo}
                <div>
                    <h2>Galería</h2>
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                    {selectedImage && (
                        <img src={selectedImage} alt="Imagen seleccionada" />
                    )}
                </div>


            </div>
        </div>
    );
}
export default Pagina