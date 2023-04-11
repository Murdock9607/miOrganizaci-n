import "./ListaOpciones.css"
const ListaOpciones = (props) => {
    const equipos = [
        "Programación",
        "FrontEnd",
        "Data science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y gestión"
    ]
    const manejarCambio = (e) =>{
        console.log(props.valor, e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="Lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo} </option>
            )}
        </select>
    </div>
}
export default ListaOpciones