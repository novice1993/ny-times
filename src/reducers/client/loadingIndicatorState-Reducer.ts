import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: false,
  underline: false,
};

const loadingIndicatorSlice = createSlice({
  name: "loadingIndicatorSlcie",
  initialState: initialState,
  reducers: {
    setTotalLoadingIndicator: (state, action) => {
      state.total = action.payload;
    },
    setUnderlineLoadingIndicator: (state, action) => {
      state.underline = action.payload;
    },
  },
});

export const { setTotalLoadingIndicator, setUnderlineLoadingIndicator } =
  loadingIndicatorSlice.actions;
export const loadingIndicatorReducer = loadingIndicatorSlice.reducer;
