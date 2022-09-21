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
      state.name = action.payload.firstname + " " + action.payload.lastname;
    },
    logout(state, action) {
      delete state.email;
      delete state.token;
      delete state.name;
    },
  },
});

const { actions, reducer } = adminSlice;
export const { login, logout } = actions;

export default reducer;
