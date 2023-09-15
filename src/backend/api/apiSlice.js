import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { setCredentiales, logout } from "../../features/authSlice";

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
    }
}