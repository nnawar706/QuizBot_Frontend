import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseUrl = "http://localhost:8000/"

export const roomsApi = createApi({
    reducerPath: "roomsApi",
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.authToken
            headers.set("Content-Type", "application/json");
            if (token) headers.set("Authorization", `Bearer ${token}`)
            return headers
        },
    }),
    endpoints: (builder) => ({
        getRooms: builder.query({
            query: () => ({
                url: "api/v1/rooms/",
                method: "GET",
            }),
        }),
        
        storeRoom: builder.query({
            query: () => ({
                url: "api/v1/rooms/",
                method: "POST",
            }),
        }),
    }),
});

export const { useGetRoomsQuery, useStoreRoomMutation } = roomsApi
