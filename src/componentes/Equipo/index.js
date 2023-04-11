import "./Equipo.css"
const Equipo = (props) => {
    //Destructuración
    const {colorPrimario, colorSecundario, titulo} = props.datos
    //
    const estiloBackground = {backgroundColor: colorSecundario}
    const estiloTitulo = {borderColor: colorPrimario}

    return <section className="Equipo" style={estiloBackground}>
        <h3 style={estiloTitulo}>{titulo} </h3>
        <div className="colaboradores"  ></div>
    </section>
}
export default Equipo;