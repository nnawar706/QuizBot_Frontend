import { configureStore } from "@reduxjs/toolkit"

import authReducer from "../features/auth/authSlice"
import { authApi } from "./sevices/auth/authService"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(authApi.middleware),
    // devTools: process.env.NODE_ENV !== 'production',
});