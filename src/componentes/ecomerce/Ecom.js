
import axios from "axios"
import jwt_decode from "jwt-decode";

const UR = "http://localhost:3000/"


export const userRegister = async (_id, correo, password, pais, navigate) => {
    try {
        const response = await axios.post(`${UR}register`, {
            _id,
            correo,
            password,
            pais
        });
        // Guardar el token en localStorage
        localStorage.setItem("token", response.data.token);
        //console.log(response.data)
        //si todo es correcto redirigimos al usuario
        navigate("/paginaexplorer");
    } catch (error) {
        console.log(error)
    }
}

export const userLogin = async (_id, correo, password, navigate) => {
    try {
        const response = await axios.post(`${UR}login`, {
            _id,
            correo,
            password,
        });
        // Guardar el token en localStorage
        localStorage.setItem("token", response.data.token);
        //si todo es correcto redirigimos al usuario
        navigate("/paginaexplorer");
    } catch (error) {
        console.log(error)
    }
}


export const obtenerInfo =  () => {
    try {
        const token = localStorage.getItem("token");

        const decodedToken = jwt_decode(token);
        // Obtener el ID del token decodificado
        const useremail = decodedToken?.em;

        return useremail
    } catch (error) {
        console.log(error)
    }
}


export const logout = () => {
    localStorage.removeItem("token");
    
  }
