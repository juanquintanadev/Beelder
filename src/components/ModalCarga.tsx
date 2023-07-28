"use client"
import {useAppDispatch} from '@/redux/hooks'
import {cargarModal} from '@/redux/features/modalSlice'
import Registros from './Registros'

interface Props {
    data : any
}

function ModalCarga({ data} : Props) {

    const dispatch = useAppDispatch()

    const {registries} = data


    return (
        <div>
            <h2 className='text-black'>Muestra de datos del avion</h2>
            <form className='text-black' action="">
                <div>
                    <label htmlFor="">Fecha inicio</label>
                    {registries?.map((reg : any, index : number) => <Registros key={index} data={reg}/>)}
                </div>
            </form>
            <button
                className='text-black'
                type="button"
                onClick={() => {
                    dispatch(cargarModal())
                }}
            >Add Registry</button>
        </div>
    )
}

export default ModalCarga