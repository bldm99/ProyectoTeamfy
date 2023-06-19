
import { useState , useEffect} from 'react';
import * as Data from '../../Data';

import Campo from '../CampoFormulario/Campo';

const Test = () => {

    const Viewproductos = Data.Viewproductos //Ver
    const postProducto = Data.postProducto //Registrar


    const [productos , setProductos] = useState([])

    //valores  de formulario
    const [dueño , setDueño] = useState("")
    const [nombre , setNombre] = useState("")
    const [precio , setPrecio] = useState("")
    const [imagen , setImagen] = useState("")

    useEffect(() => {
        const obtenerProducto = async () => {
            try {
                const x = await Viewproductos('abc123', setProductos)
                //console.log(x)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerProducto()
    }, [])


    const registrar = async (event) => {
        event.preventDefault()
        try {
            await  postProducto(dueño , nombre , precio, imagen) 
            await Viewproductos('abc123', setProductos);
        } catch (error) {
            console.log(error)
        }
    }

    //console.log(productos)

    

    return(
        <div>
            <form onSubmit={registrar}>
                <Campo
                    valor={dueño}
                    place={'Email'}
                    actualizarvalor={setDueño}
                    obligatorio
                    tipo={'text'}
                />
                
                <Campo
                    valor={nombre}
                    place={'Nombre'}
                    actualizarvalor={setNombre}
                    obligatorio
                    tipo={'text'}
                />
                <Campo
                    valor={precio}
                    place={'Precio'}
                    actualizarvalor={setPrecio}
                    obligatorio
                    tipo={'text'}
                />
                <Campo
                    valor={imagen}
                    place={'Imagen'}
                    actualizarvalor={setImagen}
                    obligatorio
                    tipo={'text'}
                />

                <button>Registrar</button>
            </form>



            <h5>Hola mundo</h5>
            {productos.map((item) => (
                        <div key={item._id}>
                            <h4>{item.dueño}</h4>
                            <h4>{item.nombre}</h4>
                            <h4>{item.precio}</h4>    
                            <img src={item.imagen} alt="Imagen"  style={{width:'500px', height:'400px'}}/>
                        </div>
            ))}
        </div>
       
    );
}

export default Test