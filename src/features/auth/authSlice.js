import { createSlice } from "@reduxjs/toolkit"

import { userLogin, userLogout } from "./authAction"
import { userRefresh } from "./refreshAuthAction"
import { userRegistration } from "./registerUserAction"

const initialState = {
    loading: false,
    authInfo: {},
    authToken: null,
    error: null,
    success: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, { payload }) => {
            state.authInfo = payload.data
        },
    },
    extraReducers: {
        [userLogin.pending]: (state) => {
            state.loading = true
            state.success = false
            state.error   = null
        },
        [userLogin.fulfilled]: (state, { payload }) => {
            state.loading   = false
            state.authToken = payload.access_token
            state.success   = true
            state.error     = null
        },
        [userLogin.rejected]: (state, { payload }) => {
            state.loading = false
            state.success = false
            state.error   = payload
        },
        [userRefresh.fulfilled]: (state, { payload }) => {
            state.authToken = payload.access
            state.error     = null
            state.success   = true
        },
        [userRefresh.rejected]: (state, { payload }) => {
            state.error     = payload
            state.success   = false
        },
        [userLogout.fulfilled]: (state) => {
            state.authToken = null
            state.authInfo  = {}
            state.success   = true
            state.error     = null
        },
        [userLogout.rejected]: (state, { payload }) => {
            state.error   = payload
            state.success = false
        },
        [userRegistration.pending]: (state) => {
            state.loading = true
            state.success = false
            state.error   = null
        },
        [userRegistration.fulfilled]: (state) => {
            state.success = true
            state.loading = false
            state.error   = null
        },
        [userRegistration.rejected]: (state, { payload }) => {
            state.error   = payload
            state.loading = false
            state.success = false
        }
    },
});

export const { setCredentials } = authSlice.actions
export default authSlice.reducer
