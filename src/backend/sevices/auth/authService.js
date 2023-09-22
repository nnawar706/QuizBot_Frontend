import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:8000/'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.authToken
            if(token) {
                headers.set('Authorization', `Bearer ${token}`)
                return headers
            }
        },
    }),
    endpoints: (builder) => ({
        getAuthUserDetails: builder.query({
            query: () => ({
                url: 'api/v1/users/me',
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetAuthUserDetailsQuery } = authApi;