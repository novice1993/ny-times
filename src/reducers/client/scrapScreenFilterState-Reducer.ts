import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headlineFilter: "",
  dateFilter: "",
  nationFilter: [] as string[],
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
      if (!action.payload.isSelect) {
        state.nationFilter.push(action.payload.nation);
      } else {
        state.nationFilter = state.nationFilter.filter((nation) => {
          return nation !== action.payload.nation;
        });
      }
    },
  },
});

export const { setHeadlineFilter, setDateFilter, setNationFilter } =
  scrapScreenFilterStateSlice.actions;
export const scrapScreenFilterFunc = { setHeadlineFilter, setDateFilter, setNationFilter };
export const scrapScreenFilterStateReducer = scrapScreenFilterStateSlice.reducer;
