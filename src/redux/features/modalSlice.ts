import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false
}

export const mostrarModal = createSlice({
    name: "mostrarModal",
    initialState,
    reducers: {
        cargarModal: (state) => {
            state.loading = !state.loading;
        }
    }
})

export const { cargarModal } = mostrarModal.actions

export default mostrarModal.reducer
