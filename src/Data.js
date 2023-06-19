

import axios from "axios";

const URL = 'https://teamapi.bladimirchipana.repl.co/'

export const Viewproductos = async (xpermiso , xset) => {
    if(xpermiso === 'abc123'){
        try {
            const respuesta = await axios.get(`${URL}pruebas`)
            xset(respuesta.data)
            return respuesta.data
        } catch (error) {
            console.log(error)
        }
    }else{
        console.log("No tienes acceso")
    } 
}

export const postProducto = async (dueño , nombre , precio , imagen) => {
    try {
        await axios.post(`${URL}pruebas` , {
            dueño ,
            nombre ,
            precio ,
            imagen
        })
    } catch (error) {
        console.log(error)
    }
}

const updateProuctos = () => {
    console.log("en proceso")
}

const Eliminar = () => {
    console.log("en proceso")
}


