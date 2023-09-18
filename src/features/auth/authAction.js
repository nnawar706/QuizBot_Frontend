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
            localStorage.setItem('userToken', data.userToken)

            return data
        } catch (err) {
            return rejectWithValue(err?.response?.data?.detail || err.message);
        }
    }
)