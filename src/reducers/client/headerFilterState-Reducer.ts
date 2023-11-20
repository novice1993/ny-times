import { createSlice } from "@reduxjs/toolkit";
import { setHeaderStateInitValue } from "../../utils/setHeaderStateInitValue";
import {
  headerButtonText01 as defaultHeadline,
  headerButtonText02 as defaultDate,
  headerButtonText03 as defaultNation,
} from "../../constants/constatns";

const storedHomeFilter = localStorage.getItem("homeScreenFilter");
const storedScrapFilter = localStorage.getItem("scrapScreenFilter");

const initialState = {
  homeScreen: setHeaderStateInitValue(storedHomeFilter),
  scrapScreen: setHeaderStateInitValue(storedScrapFilter),
};

const headerFilterStateSlice = createSlice({
  name: "headerFilterStateSlice",
  initialState: initialState,
  reducers: {
    changeHomeHeaderHeadline: (state, action) => {
      if (action.payload === "") {
        state.homeScreen.headline = defaultHeadline;
      } else {
        state.homeScreen.headline = action.payload;
      }
    },
    changeHomeHeaderDate: (state, action) => {
      if (action.payload === "") {
        state.homeScreen.date = defaultDate;
      } else {
        state.homeScreen.date = action.payload;
      }
    },
    chnageHomeHeaderNation: (state, action) => {
      if (action.payload.length === 0) {
        state.homeScreen.nation = defaultNation;
      } else if (action.payload.length === 1) {
        state.homeScreen.nation = action.payload[0];
      } else {
        const remainNum = action.payload.length - 1;
        state.homeScreen.nation = `${action.payload[0]} 외 ${remainNum}개`;
      }
    },

    chnageScrapHeaderHeadline: (state, action) => {
      if (action.payload === "") {
        state.scrapScreen.headline = defaultHeadline;
      } else {
        state.scrapScreen.headline = action.payload;
      }
    },
    chnageScrapHeaderDate: (state, action) => {
      if (action.payload === "") {
        state.scrapScreen.date = defaultDate;
      } else {
        state.scrapScreen.date = action.payload;
      }
    },
    chnageScrapHeaderNation: (state, action) => {
      if (action.payload.length === 0) {
        state.scrapScreen.nation = defaultNation;
      } else if (action.payload.length === 1) {
        state.scrapScreen.nation = action.payload[0];
      } else {
        const remainNum = action.payload.length - 1;
        state.scrapScreen.nation = `${action.payload[0]} 외 ${remainNum}개`;
      }
    },
  },
});

export const {
  changeHomeHeaderHeadline,
  changeHomeHeaderDate,
  chnageHomeHeaderNation,
  chnageScrapHeaderHeadline,
  chnageScrapHeaderDate,
  chnageScrapHeaderNation,
} = headerFilterStateSlice.actions;

export const homeScreenHeaderFilterFunc = {
  changeHeaderHeadline: changeHomeHeaderHeadline,
  changeHeadaerDate: changeHomeHeaderDate,
  changeHeaderNation: chnageHomeHeaderNation,
};
export const scrapScreenHeaderFilterFun = {
  changeHeaderHeadline: chnageScrapHeaderHeadline,
  changeHeadaerDate: chnageScrapHeaderDate,
  changeHeaderNation: chnageScrapHeaderNation,
};

export const headerFilterStateReducer = headerFilterStateSlice.reducer;
