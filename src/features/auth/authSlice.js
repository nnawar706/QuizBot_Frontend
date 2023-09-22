import { createSlice } from "@reduxjs/toolkit"

import { userLogin } from "./authAction"

const initialState = {
    loading: false,
    authInfo: {}, // for user object
    authToken: null, // for storing the JWT
    refreshToken: null,
    error: null,
    success: false, // for monitoring the registration process.
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, { payload }) => {
            state.authInfo = payload.data
        }
    },
    extraReducers: {
        [userLogin.pending]: (state) => {
            state.loading = true;
        },
        [userLogin.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.authToken = payload.access_token;
            state.refreshToken = payload.refresh_token;
            state.success = true;
        },
        [userLogin.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        }
    },
});

export const { setCredentials } = authSlice.actions
export default authSlice.reducer;
