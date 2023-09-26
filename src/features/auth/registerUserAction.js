import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const userRegistration = createAsyncThunk(
    "register",
    async ({ name, email, password, role }, { rejectWithValue }) => {
        try {
        const config = {
            headers: {
            "Content-Type": "application/json",
            },
        };

        const data = await axios.post(
            "http://localhost:8000/api/v1/users/register",
            { name, email, password, role },
            config
        );

        return data;
        } catch (err) {
        return rejectWithValue(err?.response?.data?.error || err.message);
        }
    }
)
