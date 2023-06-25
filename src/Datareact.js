
import axios from "axios";


//var idLogeado = "64936e483562954d54515f92"  Local
var idLogeado = "64979d173f4f94805507eb4e"    //nube

var imagenprueba = "https://c4.wallpaperflare.com/wallpaper/834/299/692/city-lights-girl-moon-wallpaper-preview.jpg"

//const URL = 'http://localhost:3000/paginaReact'
const URL = 'https://teamapi-1.bladimirchipana.repl.co/paginaReact'

export const buscarPaginaReact = async (_id, paginaId, xset) => {
    if (_id === idLogeado) {
        try {
            const response = await axios.get(`${URL}`, {
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



export const actualizarPaginaReact = async (_id, paginaId, titulo , banner , descripcion , color , logo , wasap) => {
  try {
    const response = await axios.put(URL, {
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





