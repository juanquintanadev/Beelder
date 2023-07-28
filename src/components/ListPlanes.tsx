
import Link from "next/link"

interface Props {
    data : any
}

function ListPlanes({data} : Props) {

    const {name, id} = data


    return (
        <div className="flex gap-5 border py-5 px-2 w-full">
            <p>Nombre del avion: {name}</p>
            {/* {data?.registries?.map((registro : any) => (
                <Registro key={registro.id} data={registro}/>
            ))} */}
            <Link href={`/airplane/${id}`} >
                Ver este registro
            </Link>
        </div>
    )
}

export default ListPlanes