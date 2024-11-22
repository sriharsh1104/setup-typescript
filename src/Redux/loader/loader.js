import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loader: false,
};

/**LOADER SLICE */
export const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    resetLoaderSlice: () => initialState,
    setLoader: (state, action) => {
      state.loader = action.payload;
    },
  },
});

export const { resetLoaderSlice, setLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
