import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headlineFilter: "",
  dateFilter: "",
  nationFilter: [],
};

const scrapScreenFilterStateSlice = createSlice({
  name: "scrapScreenFilterStateSlice",
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
  scrapScreenFilterStateSlice.actions;
export const scrapScreenFilterFunc = { setHeadlineFilter, setDateFilter, setNationFilter };
export const scrapScreenFilterStateReducer = scrapScreenFilterStateSlice.reducer;
