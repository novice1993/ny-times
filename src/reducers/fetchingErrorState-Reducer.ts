import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;

const fetchingErrorStateSlice = createSlice({
  name: "fetchingErrorStateSlice",
  initialState: initialState,
  reducers: {
    setFetchingErrorState: (_, action) => action.payload,
  },
});

export const { setFetchingErrorState } = fetchingErrorStateSlice.actions;
export const fetchingErrorStateReducer = fetchingErrorStateSlice.reducer;
