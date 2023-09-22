import { createSlice } from "@reduxjs/toolkit"

import { addRoom } from "./roomAction"

const initialState = {
  loading: false,
  authInfo: {},
  authToken: null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.authInfo = payload.data;
    },
  },
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.loading = true;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.authToken = payload.access_token;
      state.success = true;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [userRefresh.fulfilled]: (state, { payload }) => {
      state.authToken = payload.access;
      state.success = true;
    },
    [userRefresh.rejected]: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;
