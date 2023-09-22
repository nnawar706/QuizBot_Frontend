import { createSlice } from "@reduxjs/toolkit"

// import { addRoom } from "./roomAction"

const initialState = {
  loading: false,
  data: [],
  error: null,
  success: false,
};

const roomSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    setData: (state, { payload }) => {
      state.data = payload.data
    },
  },
  extraReducers: {
    // [userLogin.pending]: (state) => {
    //   state.loading = true
    // },
    // [userLogin.fulfilled]: (state, { payload }) => {
    //   state.loading = false
    //   state.authToken = payload.access_token;
    //   state.success = true;
    // },
    // [userLogin.rejected]: (state, { payload }) => {
    //   state.loading = false;
    //   state.error = payload;
    // },
    // [userRefresh.fulfilled]: (state, { payload }) => {
    //   state.authToken = payload.access;
    //   state.success = true;
    // },
    // [userRefresh.rejected]: (state, { payload }) => {
    //   state.error = payload;
    // },
  },
});

export const { setData } = roomSlice.actions
export default roomSlice.reducer
