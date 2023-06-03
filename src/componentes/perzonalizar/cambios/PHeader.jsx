
import { useState } from 'react'
import './pheader.css'


const PHeader = ({ xtitulo, ximagen , xdescripcion , xcolor , xtinte }) => {


    const [color , setColor] = useState(xtinte)
 

    
    const actualizarCol = (event) => {
        console.log(event.target.value)
        console.log("Funciona esto?", xtinte)
        xcolor(event.target.value)
        setColor(event.target.value) //solo cambia el color del imput

       
    }
   

    const actualizarTitulo = (event) => {
        xtitulo(event.target.value)
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            ximagen(e.target.result);
        };
        reader.readAsDataURL(file);
    };

    const actualizarDescripcion = (event) => {
        xdescripcion(event.target.value)
    }


    return (

        <div className='pheader'>
            <h3>Seccion Cabezera</h3>
            <hr />
            <div>
                <div className='textField'>
                    <h4>Editar nombre</h4>
                    <input type="text"
                        onChange={actualizarTitulo}
                    />
                </div>

                <div className='textField'>
                    <h4>Selecione su imagen de portada</h4>
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                </div>

                <div className='textField'>
                    <h4>Editar descripcion</h4>
                    <input type="text"onChange={actualizarDescripcion} />
                </div>

                <input type="color"
                        value={color}
                        onChange={actualizarCol} 
                />

                


            </div>

        </div>

    );
}
export default PHeader