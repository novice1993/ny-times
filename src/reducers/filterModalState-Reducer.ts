import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;

const filterModalSlice = createSlice({
  name: "filterModalSlice",
  initialState: initialState,
  reducers: {
    setFilterModal: (_, action) => action.payload,
  },
});

export const { setFilterModal } = filterModalSlice.actions;
export const filterModalReducer = filterModalSlice.reducer;
