import { createSlice } from "@reduxjs/toolkit";

const initialState: string = "home";

const footerBtnSlice = createSlice({
  name: "footerBtnSlice",
  initialState: initialState,
  reducers: {
    changeFooterBtnState: (_, action) => action.payload,
  },
});

export const { changeFooterBtnState } = footerBtnSlice.actions;
export const footerBtnStateReducer = footerBtnSlice.reducer;
