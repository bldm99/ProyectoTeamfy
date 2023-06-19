
const Campo = (props) => {

    const {valor , place , actualizarvalor , obligatorio , tipo} = props

    const manejarCambio = (event) => {
        actualizarvalor(event.target.value)
    }

    return (
        <div className={`campo campo-${tipo}`}>
            <input
                placeholder={place}
                required={obligatorio}
                value={valor}
                onChange={manejarCambio}
                type={tipo}
            />
        </div>
    );
}

export default Campo