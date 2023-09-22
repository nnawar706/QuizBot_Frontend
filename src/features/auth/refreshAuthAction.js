import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const userRefresh = createAsyncThunk(
    "refresh",
    async ({ refresh }, { rejectWithValue }) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }

        const { data } = await axios.post(
            "http://localhost:8000/api/v1/refresh",
            { refresh },
            config
        );

        // store user's token in local storage
        if (data) localStorage.setItem("refreshToken", data.refresh);

        return data;
        } catch (err) {
            return rejectWithValue(err?.response?.data?.detail || err.message);
        }
    }
);
