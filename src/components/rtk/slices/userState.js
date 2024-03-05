import { createSlice } from "@reduxjs/toolkit";

export const userState = createSlice({
  initialState: false,
  name: "userState",
  reducers: {
    showMessage: (state, action) => {
      return action.payload;
    },
    resetState: () => false,
  },
});

export const { showMessage, resetState } = userState.actions;
export default userState.reducer;
