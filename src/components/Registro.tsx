import moment from "moment"

interface Porps {
    data : any
}

function Registro({data} : Porps) {

    const {startDate, endDate, status} = data

    const fechaSalida = moment.utc(startDate).format('llll')
    const fechaLLegada = moment.utc(endDate).format('llll')
    
    return (
        <div>
            <p>Fecha de salida: {fechaSalida}</p>
            <p>Fecha de llegada: {fechaLLegada}</p>
            <p>Estado del avion: {status}</p>
        </div>
    )
}

export default Registro