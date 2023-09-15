import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {user: null, token: null},
    reducers: {
        setCredentiales: (state, action) => {
            const { user, accessToken } = action.payload;
            state.user = user;
            state.token = accessToken;
        },
        logout: state => {
            state.user = null;
            state.token = null;
        }
    },
});

export const { setCredentiales, logout } = authSlice.actions;
export default authSlice.reducer;

export const selectAuthUser = (state) => state.auth.user
export const selectAuthToken = (state) => state.auth.token;