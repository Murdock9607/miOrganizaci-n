import "./ListaOpciones.css"
const ListaOpciones = (props) => {

    const manejarCambio = (e) =>{
        props.actualizarEquipo(e.target.value)
    }

    return <div className="Lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {/* Con la prop equipos proveniente de Formularrio.js se hace un arreglo usando .map 
            cada elemento de este arreglo sera una option y si se selecciona se pondrá como default */}
            {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo} </option>
            )}
        </select>
    </div>
}
export default ListaOpciones