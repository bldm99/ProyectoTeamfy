import "./Planes.css"
import { Link } from "react-router-dom"


import calaveraoro from '../Planes/calaveraoro.jpg';
import calaverabronce from '../Planes/calaverabronce.jpg';
import calaveraplata from '../Planes/calaveraplata.jpg';


const Planes = () => {


    return (


        <div className="my__caja">

            <div className="mini">
                <div className="ab">
                    <div className="plan">
                        <h2>Oro</h2>
                        <img
                            src={calaveraoro}
                            alt="Imagen Oro"
                            className="plan__imagen"
                        />
                        <ul>
                            <li><Link to={'/planoro'}><button type="submit" className="caja_btn">
                                Ver Detalles
                            </button></Link></li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className="mini">
                <div className="ab">
                    <div className="plan">
                        <h2>Plata</h2>
                        <img
                            src={calaveraplata}
                            alt="Imagen Oro"
                            className="plan__imagen"
                        />

                        <ul>
                            <li><Link to={'/planplata'}><button type="submit" className="caja_btn">
                                Ver Detalles
                            </button></Link></li>
                        </ul>


                    </div>
                </div>
            </div>
            <div className="mini">
                <div className="ab">
                    <div className="plan">
                        <h2>Bronce</h2>
                        <img
                            src={calaverabronce}
                            alt="Imagen Oro"
                            className="plan__imagen"
                        />
                        <ul>
                            <li><Link to={'/planbronce'}><button type="submit" className="caja_btn">
                                Ver Detalles
                            </button></Link></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>



    );

}

export default Planes