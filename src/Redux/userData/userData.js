import { createSlice } from "@reduxjs/toolkit";

// Initial state for user data
const initialState = {
  userInfo: "",
};

// User Data Slice
export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    resetUserDataSlice: () => initialState,
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
   
  },
});

export const {
  resetUserDataSlice,
  setUserInfo,
} = userDataSlice.actions;

export default userDataSlice.reducer;
