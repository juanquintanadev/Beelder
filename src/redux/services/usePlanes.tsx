import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

type Planes = {
    id: number;
    name: string;
    registries: [string];
}


export const planesApi = createApi({
    reducerPath: 'planesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3200/'}),
        endpoints: (builder) => ({
            getPlanes: builder.query<Planes[], null>({
                query: () => 'airplanes',
            }),
            getPlanesById: builder.query<Planes, {id: string}>({
                query: (id) => `airplanes/${id}`,
            })
        })
    }
)

export const {useGetPlanesQuery, useGetPlanesByIdQuery} = planesApi
