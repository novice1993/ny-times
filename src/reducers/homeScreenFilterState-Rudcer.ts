import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headlineFilter: "",
  dateFilter: "",
  nationFilter: [] as string[],
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
      if (!action.payload.isSelect) {
        state.nationFilter.push(action.payload.nation);
      } else {
        state.nationFilter = state.nationFilter.filter((nation: string) => {
          return nation !== action.payload.nation;
        });
      }
    },
  },
});

export const { setHeadlineFilter, setDateFilter, setNationFilter } =
  homeScreenFilterStateSlice.actions;
export const homeScreenFilterFunc = { setHeadlineFilter, setDateFilter, setNationFilter };
export const homeScreenFilterStateReducer = homeScreenFilterStateSlice.reducer;
