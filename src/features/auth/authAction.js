import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const userLogin = createAsyncThunk(
    'login',
    async({ email, password }, { rejectWithValue }) => {
        try {
            const config = {
                headers: { 
                    'Content-Type': 'application/json',
                }
            }

            const { data } = await axios.post(
                'http://localhost:8000/api/v1/login',
                { email, password },
                config
            )

            // store user's token in local storage
            // localStorage.setItem('userToken', data.userToken)
            localStorage.setItem("refreshToken", data.refresh_token)

            return data
        } catch (err) {
            return rejectWithValue(err?.response?.data?.detail || err.message)
        }
    }
)

export const userLogout = createAsyncThunk(
    'logout',
    async({ refresh_token }, { getState, rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getState().auth.authToken}`
                }
            }

            const { data } = await axios.post(
                'http://localhost:8000/api/v1/logout',
                { refresh_token },
                config
            )

            localStorage.removeItem('refreshToken')

            return data
        } catch (err) {
            return rejectWithValue(err?.response?.data?.error || err.message)
        }
    }
)

export const userRegistration = createAsyncThunk(
    'register',
    async ({ name, email, password, role }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const data = await axios.post(
                'http://localhost:8000/api/v1/users/register',
                { name, email, password, role },
                config
            )

            return data
        } catch (err) {
            return rejectWithValue(err?.response?.data?.error || err.message)
        }
    }
)