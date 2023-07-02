
import axios from "axios";
import jwt_decode from "jwt-decode";

//var idLogeado = "64936e483562954d54515f92"  Local
var idLogeado = "64979d173f4f94805507eb4e"    //nube

var imagenprueba = "https://c4.wallpaperflare.com/wallpaper/834/299/692/city-lights-girl-moon-wallpaper-preview.jpg"

//const URL = 'http://localhost:3000/paginaReact'
const URL = 'https://teamapi-1.bladimirchipana.repl.co/'

export const buscarPaginaReact = async (_id, paginaId, xset) => {
    if (_id === idLogeado) {
        try {
            const response = await axios.get(`${URL}paginaReact`, {
                params: {
                    _id,
                    paginaId
                }
            });
            const data = response.data;
            //console.log(data);
            xset(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    } else {
        console.log("No tienes acceso");
    }
};



export const actualizarPaginaReact = async (_id, paginaId, titulo, banner, descripcion, color, logo, wasap) => {
    try {
        const response = await axios.put(`${URL}paginaReact`, {
            _id,
            paginaId,
            titulo,
            banner,
            descripcion,
            color,
            logo,
            wasap
        });
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
};


/*---------------------------------------Seccion de productos--------------------------------------- */
export const buscarProducto = async (_id, productoId, xset) => {
    if (_id === idLogeado) {
        try {
            const response = await axios.get(`${URL}data`, {
                params: {
                    _id,
                    productoId
                }
            });
            const data = response.data;
            //console.log(data);
            xset(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    } else {
        console.log("No tienes acceso");
    }
};



//Funcion para convertir un color a otro formato
export function convertHexToRGB(hex) {
    const hexWithoutAlpha = hex.substring(0, 7);
    const red = parseInt(hexWithoutAlpha.substring(1, 3), 16);
    const green = parseInt(hexWithoutAlpha.substring(3, 5), 16);
    const blue = parseInt(hexWithoutAlpha.substring(5, 7), 16);

    return `${red}, ${green}, ${blue}`;
}




const URLtest = "http://localhost:3000/"
//Funciones e login y register de los clientes Teamfy
export const registerTeamfy = async (dueño, d_email, d_password, telefono, navigate) => {
    try {
        const response = await axios.post(`${URLtest}teamfyregister`, {
            dueño,
            d_email,
            d_password,
            telefono,
            titulo: 'Título de la página',
            banner: 'URL del banner',
            descripcion: 'Descripción de la página',
            color: 'Color',
            logo: 'URL del logo',
            wasap: 'Número de WhatsApp',
            sub1: 'Sub1',
            sub2: 'Sub2',
            sub3: 'Sub3',
            sub4: 'Sub4',
        });
        // Guardar el token en localStorage
        localStorage.setItem("tokenTeam", response.data.token);
        console.log(response.data)
        //si todo es correcto redirigimos al usuario
        navigate("/");
    } catch (error) {
        console.log(error)
    }

}

export const loginTeamfy = async (d_email, d_password, navigate) => {
    try {
        const response = await axios.post(`${URLtest}teamfylogin`, {
            d_email,
            d_password,
        });
        // Guardar el token en localStorage
        localStorage.setItem("tokenTeam", response.data.token);
        console.log(response.data)
        //si todo es correcto redirigimos al usuario
        navigate("/");
    } catch (error) {
        console.log(error)
    }

}



export const obtenerInfoTeamfy = () => {
    try {
        const token = localStorage.getItem("tokenTeam");

        const decodedToken = jwt_decode(token);
        // Obtener el ID del token decodificado
        const useremail = decodedToken?.em;

        return useremail
    } catch (error) {
        console.log(error)
    }
}







