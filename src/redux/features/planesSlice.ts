import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    planes: [],
    loading: false,
    error: null,
}

export const planesSlice = createSlice({
    name: "planes",
    initialState,
    reducers: {
        cargarPlanes: (state, actions) => {
            state.planes = actions.payload
        }
    }
})


export const {cargarPlanes} = planesSlice.actions

export default planesSlice.reducer