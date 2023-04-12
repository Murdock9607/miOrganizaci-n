import "./Equipo.css"
import Colaborador from "../Colaborador"
const Equipo = (props) => {
    //Destructuración
    const { colorPrimario, colorSecundario, titulo } = props.datos
    //
    const estiloBackground = { backgroundColor: colorSecundario }
    const estiloTitulo = { borderColor: colorPrimario }
    const { colaboradores } = props

    return <>
        {colaboradores.length > 0 && <section className="Equipo" style={estiloBackground}>
            <h3 style={estiloTitulo}>{titulo} </h3>
            <div className="colaboradores"  >
                {colaboradores.map((colaborador, index) => <Colaborador datos={colaborador} key={index} colorPrimario={colorPrimario} />)}
            </div>
        </section>}
    </>
}
export default Equipo;