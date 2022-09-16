import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {},
  reducers: {
    login(state, action) {
      delete state.email;
      delete state.token;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    logout(state, action) {
      delete state.email;
      delete state.token;
    },
  },
});

const { actions, reducer } = adminSlice;
export const { login, logout } = actions;

export default reducer;
