import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headlineFilter: "",
  dateFilter: "",
  nationFilter: [],
};

const homeScreenFilterStateSlice = createSlice({
  name: "homeScreenFilterStateSlice",
  initialState: initialState,
  reducers: {
    setHeadlineFilter: (state, action) => {
      state.headlineFilter = action.payload;
    },
    setDateFilter: (state, action) => {
      state.dateFilter = action.payload;
    },
    setNationFilter: (state, action) => {
      state.nationFilter = action.payload;
    },
  },
});

export const { setHeadlineFilter, setDateFilter, setNationFilter } =
  homeScreenFilterStateSlice.actions;
export const homeScreenFilterFunc = { setHeadlineFilter, setDateFilter, setNationFilter };
export const homeScreenFilterStateReducer = homeScreenFilterStateSlice.reducer;
