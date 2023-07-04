
import './campo.css'

const Campo = (props) => {

    const {valor , place , actualizarvalor , obligatorio , tipo , span} = props

    const manejarCambio = (event) => {
        actualizarvalor(event.target.value)
    }

    const t = span

   

    return (
        <div className={`campo campo-${tipo}  form-item`  }>
            
            <div className='f' dangerouslySetInnerHTML={{ __html: t }} />

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