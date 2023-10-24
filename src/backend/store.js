import { configureStore } from "@reduxjs/toolkit"

import authReducer from "../features/auth/authSlice"
import { authApi } from "./sevices/auth/authService"
import { roomsApi } from "./sevices/rooms/roomService"
import { quizApi } from "./sevices/quizzes/quizService"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
        [roomsApi.reducerPath]: roomsApi.reducer,
        [quizApi.reducerPath]: quizApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(
            authApi.middleware, 
            roomsApi.middleware,
            quizApi.middleware
        ),
    // devTools: process.env.NODE_ENV !== 'production',
})