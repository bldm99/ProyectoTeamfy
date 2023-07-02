
import { useState, useEffect } from 'react';
import * as Data from '../../Data';

import Campo from '../CampoFormulario/Campo';

const Test = () => {


    //var idLogeado = "64936e483562954d54515f92"  Local
    var idLogeado = "64979d173f4f94805507eb4e"    //nube
    

    const [edit , setEdit] = useState(true)
    
    

    const postUsers = Data.postUsers //Registrar usarios e inicializar
    const viewUsers = Data.viewUsers //Ver Get todo
    const postProductos = Data.postProductos // Registrar solo productos fusion PUT-POST 
    const buscarUsuario = Data.buscarUsuario
    const actualizarUsuario = Data.actualizarUsuario

    const buscarProductos = Data.buscarProductos


    const [datusers, setDatausers] = useState([])
    const [dataproductos, setDataproductos] = useState([])


    //Datos de usuario
    const [dueño, setDueño] = useState("")
    const [d_email, setD_email] = useState("")
    const [telefono, setTelefono] = useState("")
    const [tarjeta, setTarjeta] = useState("")
    const [suscripcion, setSuscripcion] = useState("")
    const [total, setTotal] = useState("")

    //Datos los productos de usuario
    const [nombre, setNombre] = useState("")
    const [precio, setPrecio] = useState("")
    const [imagen, setImagen] = useState("")
    const [stock, setStock] = useState("")
    const [f_Inicio, setInicio] = useState("")
    const [f_Final, setFinal] = useState("")
    const [descripcion, setDescripcion] = useState("")

    //console.log(edit)

    useEffect(() => {
        const obtenerdata = async () => {
            try {
                const x = await viewUsers('abc123', setDatausers)

                const product = await buscarProductos(idLogeado , setDataproductos)
                //console.log(product)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerdata()
    }, [])

    //console.log(dataproductos)



    const registrar = async (event) => {
        event.preventDefault()
        try {
            if(edit){
                await postUsers(dueño, d_email, telefono, tarjeta, suscripcion, total)
                limpiar()
                await viewUsers('abc123', setDatausers);     
            }else{
                await actualizarUsuario( idLogeado ,dueño, d_email, telefono, tarjeta, suscripcion, total)
                limpiar()
                await viewUsers('abc123', setDatausers);     
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    //console.log(productos)
    //Registrar datos embebidos
    const registrarx = async (event) => {
        event.preventDefault()
        try {
            await postProductos(idLogeado,nombre , precio , imagen , stock , f_Inicio , f_Final , descripcion)
            //await viewUsers('abc123', setDatausers);
            await buscarProductos(idLogeado , setDataproductos)
            console.log("Producto registrado")
        } catch (error) {
            console.log(error)
        }
    }


    const ver = async () => {
        //console.log(idLogeado)
        //bucamos el id del usuario
        const datosx = await buscarUsuario(idLogeado)
        //Atraves de un boton cambiamos los diferentes estados y se mostraran en el formulario
        setDueño(datosx.dueño)
        setD_email(datosx.d_email)
        setTelefono(datosx.telefono)
        setTarjeta(datosx.tarjeta)
        setSuscripcion(datosx.suscripcion)
        setTotal(datosx.total_productos)
        setEdit(!edit ) //false 
    }

    
    const limpiar = () => { 
        setDueño("")
        setD_email("")
        setTelefono("")
        setTarjeta("")
        setSuscripcion("")
        setTotal("") 
    }

    const buscar = async () => {
        await buscarProductos(idLogeado)
    }





    return (
        <div>
            
            <h4>{edit ? "Modo Registros" : "Modo Edición"}</h4>
            <button onClick={ () =>{buscar()}}  >Buscar Productos</button>
            
           
            <form onSubmit={registrar}>
                <Campo
                    valor={dueño}
                    place={'Nombre'}
                    actualizarvalor={setDueño}
                    obligatorio
                    tipo={'text'}
                />

                <Campo
                    valor={d_email}
                    place={'Email'}
                    actualizarvalor={setD_email}
                    obligatorio
                    tipo={'text'}
                />
                <Campo
                    valor={telefono}
                    place={'Telefono'}
                    actualizarvalor={setTelefono}
                    obligatorio
                    tipo={'text'}
                />
                <Campo
                    valor={tarjeta}
                    place={'Targeta'}
                    actualizarvalor={setTarjeta}
                    obligatorio
                    tipo={'text'}
                />
                <Campo
                    valor={suscripcion}
                    place={'Suscripcipn'}
                    actualizarvalor={setSuscripcion}
                    obligatorio
                    tipo={'text'}
                />
                <Campo
                    valor={total}
                    place={'Total productos'}
                    actualizarvalor={setTotal}
                    obligatorio
                    tipo={'text'}
                />

                <button>Registrar</button>
            </form>


           

            <button onClick={ () =>{ver()}}  >mostrsr</button>

            <h3>Registrar Datos embebidos</h3>
            <div>
                <form onSubmit={registrarx}>
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
                    <Campo
                        valor={stock}
                        place={'Stock'}
                        actualizarvalor={setStock}
                        obligatorio
                        tipo={'text'}
                    />
                    <Campo
                        valor={f_Inicio}
                        place={'Inicio'}
                        actualizarvalor={setInicio}
                        obligatorio
                        tipo={'text'}
                    />
                    <Campo
                        valor={f_Final}
                        place={'Final'}
                        actualizarvalor={setFinal}
                        obligatorio
                        tipo={'text'}
                    />
                    <Campo
                        valor={descripcion}
                        place={'Descripcion'}
                        actualizarvalor={setDescripcion}
                        obligatorio
                        tipo={'text'}
                    />

                    <button>Registrar</button>
                </form>

            </div>

                <div>
                    <h2>Productos listados solo  del usuario logeado</h2>
                    <div>
                        {dataproductos.map((item) => (
                            <div key={item._id}>
                                <h5>{item.nombre}</h5>
                                <h5>{item.precio}</h5>
                                <h5>{item.stock}</h5>
                                <h5>{item.f_Inicio}</h5>
                                <h5>{item.f_Final}</h5>
                                <h5>{item.descripcion}</h5>
                                <img src={item.imagen} alt="Imagen" style={{ width: '50%', height: '50%' }} />  
                            </div>   
                        ))}
                    </div>
                </div>

              
                <h5>Hola mundo</h5>
                {/*datusers.map((item) => (
                    <div key={item._id}>
                        
                        <h4>{item.dueño}</h4>
                        <h4>{item.d_email}</h4>
                        <div>
                            {item.productos && item.productos.map((data) => (
                                <div key={data._id } >
                                    {"uuid= data._id"}
                                    <h5>{data.nombre}</h5>
                                    <h5>{data.precio }</h5>
                                    <img src={data.imagen} alt="Imagen" style={{ width: '500px', height: '400px' }} />

                                </div>
                            ))

                            }
                            

                        </div>
                        
                    </div>
                ))*/}
            </div>

            );
}
export default Test