import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;

const loadingIndicatorStateSlice = createSlice({
  name: "loadingIndicatorStateSlice",
  initialState: initialState,
  reducers: {
    setLoadingIndicator: (_, action) => action.payload,
  },
});

export const { setLoadingIndicator } = loadingIndicatorStateSlice.actions;
export const loadingIndicatorStateReducer = loadingIndicatorStateSlice.reducer;
