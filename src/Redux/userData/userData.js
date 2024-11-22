import { createSlice } from "@reduxjs/toolkit";

// Initial state for user data
const initialState = {
  firstName: "",
  isLoggedIn: "",
  userWalletAddress: "",
  logoutUser:"",
  selectedBatchForAdmin:"",
  totalAmountForEachBatch:"",
};

// User Data Slice
export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    resetUserDataSlice: () => initialState,
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setUserWalletAddress: (state, action) => {
      state.userWalletAddress = action.payload;
    },
    setLogoutUser: (state, action) => {
      state.logoutUser = action.payload;
    },
    setSelectedBatchForAdmin: (state, action) => {
      state.selectedBatchForAdmin = action.payload;
    },
    setTotalAmountForEachBatch: (state, action) => {
      state.totalAmountForEachBatch = action.payload;
    },
  },
});

export const {
  resetUserDataSlice,
  setFirstName,
  setIsLoggedIn,
  setUserWalletAddress,
  setLogoutUser,
  setSelectedBatchForAdmin,
  setTotalAmountForEachBatch
} = userDataSlice.actions;

export default userDataSlice.reducer;
