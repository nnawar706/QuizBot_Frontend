import { apiSlice } from "../backend/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: "http://localhost:8000/api/v1/login",
                method: "POST",
                body: { ...credentials }
            })
        }),
    })
})

export const { useLoginMutation } = authApiSlice;