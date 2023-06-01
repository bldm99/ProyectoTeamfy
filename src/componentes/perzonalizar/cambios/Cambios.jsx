import './cambios.css'


const Cambios = ({ xtitulo }) => {

    const actualizarTitulo = (event) => {
        xtitulo(event.target.value)
    }

    return (

        <section className='cambios'>
            <h2>Ajustes de plantilla</h2>
            <input type="text"
                onChange={actualizarTitulo }
            />


        </section>

    );
}
export default Cambios