"use client"
import {useAppSelector, useAppDispatch} from '@/redux/hooks'
import {useGetPlanesByIdQuery} from '@/redux/services/usePlanes'
import {cargarModal} from '@/redux/features/modalSlice'
import ReactModal from 'react-modal'
import ModalCarga from '@/components/ModalCarga'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export default function Page({ params }: { params: { id: any } }) {

    const {id} = params;

    const {data} = useGetPlanesByIdQuery(id)

    const modal = useAppSelector(state => state.mostrarModal)

    const dispatch = useAppDispatch()


    return (
        <>
        {modal.loading ? 
        <ReactModal
            isOpen={modal.loading}
            ariaHideApp={false}
        >
            <ModalCarga data={data} />
        </ReactModal>
        : null}
        <div className='flex flex-col items-center justify-center mt-10'>
            <h2>Edicion del avion: {data?.name}</h2>
            <button
                type="button"
                onClick={() => {
                    dispatch(cargarModal())
                }}
            >Add Registry</button>
        </div>
        </>
    )
        
}