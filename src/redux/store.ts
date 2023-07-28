import { configureStore } from "@reduxjs/toolkit";
import cargarPlanes  from "./features/planesSlice";
import { planesApi } from "./services/usePlanes"; './services/usePlanes.tsx'
import {mostrarModal} from '@/redux/features/modalSlice'
import {setupListeners}  from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
    reducer: {
        cargarPlanes,
        [planesApi.reducerPath]: planesApi.reducer,
        mostrarModal: mostrarModal.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([planesApi.middleware])
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

