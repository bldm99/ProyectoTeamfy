import "./ptitulos.css"

const Ptitulos = (props) => {

    const { xsub1, xsub2, xsub3, xsub4 } = props

    const actualizarsub1 = (event) => {
        xsub1(event.target.value)
    }
    const actualizarsub2 = (event) => {
        xsub2(event.target.value)
    }
    const actualizarsub3 = (event) => {
        xsub3(event.target.value)
    }
    const actualizarsub4 = (event) => {
        xsub4(event.target.value)
    }

    return (
        <div className="Ptitulo">
            <div className="card-ptitulo">

                <div className="cont-subtitulos">
                    <p>Modificar Subtitulos de cabezera</p>
                </div>

                <div className="p-sub">
                    <div className="msg">
                        <div className="p-label">
                            <label htmlFor="">Subtitulo 1</label>
                        </div>

                        <input type="text" onChange={actualizarsub1} />
                    </div>
                    <div className="msg">
                        <div className="p-label">
                            <label htmlFor="">Subtitulo 2</label>
                        </div>
                        <input type="text" onChange={actualizarsub2} />
                    </div>
                    <div className="msg">
                        <div className="p-label">
                            <label htmlFor="">Subtitulo 3</label>
                        </div>
                        <input type="text" onChange={actualizarsub3} />
                    </div>
                    <div className="msg">
                        <div className="p-label">
                            <label htmlFor="">Subtitulo 4</label>
                        </div>
                        <input type="text" onChange={actualizarsub4} />
                    </div>
                </div>

            </div>

        </div>
    );
}
export default Ptitulos