import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { setCredentials, logout } from "../../features/authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.QUIZBOT_API_BASE_URL,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    }
})

const RefreshBaseQuery = async (args, api, extraOptions) => {
    let response = await baseQuery(args, api, extraOptions);

    if (response?.error?.originalStatus === 403) {
        console.log('acces token expired. send refresh token.');

        const refreshResponse = await baseQuery("/refresh", api, extraOptions);
        console.log(refreshResponse);

        if (refreshResponse?.data) {
            const user = api.getState().auth.user;
            // store new token
            api.dispatch(setCredentials({ ...refreshResponse.data, user }));
            // retry with new access token
            response = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logout())
        }
    }

    return response;
}

export const apiSlice = createApi({
    baseQuery: RefreshBaseQuery,
    endpoints: builder => ({})
})