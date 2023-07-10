
import "./pwasap.css"
import Campo from "../../CampoFormulario/Campo"
import { useState } from "react"

const Pwasap = (props) => {

    const { xlogo, xwasap, imbanner, updwasap, updlogo } = props


    const c = () => {
        console.log("redes")
    }

    const [tempwasap , setTempwasap] = useState(xwasap)
    const [templogo , setTemplogo] = useState(xlogo)

    const actualizarlogo = (event) => {
        updlogo(event.target.value)
        setTemplogo(event.target.value)

    }

    const actualizarwasap = (event) => {
        updwasap(event.target.value)
        setTempwasap(event.target.value)

    }



    return (
        <div className="Pwasap">
            <div className="card-pwasap">

                <div className="box-logo">
                    <img src={imbanner} alt="" />
                    <div className="circle">
                        <img src={templogo} alt="" />
                    </div>
                    <div className="what">
                        <p>{tempwasap}</p>
                    </div>

                </div>
                <div className="msg">
                    <label htmlFor="">Numero de WhatsApp</label>
                    <input type="text" onChange={actualizarwasap} />
                </div>
                <div className="msg">
                    <label htmlFor="">Modificar logo</label>
                    <input type="text" onChange={actualizarlogo} />
                </div>
            </div>
        </div>
    );
}

export default Pwasap