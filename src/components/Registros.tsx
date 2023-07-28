
interface Props {
    data: any
}

function Registros({data} : Props) {

    const {endDate, startDate, status} = data;

    return (
        <div>Registros</div>
    )
}

export default Registros