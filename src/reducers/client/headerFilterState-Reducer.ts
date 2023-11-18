import { createSlice } from "@reduxjs/toolkit";
import {
  headerButtonText01,
  headerButtonText02,
  headerButtonText03,
} from "../../constants/constatns";

const initialState = {
  homeScreen: {
    headline: headerButtonText01,
    date: headerButtonText02,
    nation: headerButtonText03,
  },
  scrapScreen: {
    headline: headerButtonText01,
    date: headerButtonText02,
    nation: headerButtonText03,
  },
};

const headerFilterStateSlice = createSlice({
  name: "headerFilterStateSlice",
  initialState: initialState,
  reducers: {
    changeHomeHeaderHeadline: (state, action) => {
      if (action.payload === "") {
        state.homeScreen.headline = headerButtonText01;
      } else {
        state.homeScreen.headline = action.payload;
      }
    },
    chnageHomeHeaderDate: (state, action) => {
      if (action.payload === "") {
        state.homeScreen.date = headerButtonText02;
      } else {
        state.homeScreen.date = action.payload;
      }
    },
    chnageHomeHeaderNation: (state, action) => {
      if (action.payload.length === 0) {
        state.homeScreen.nation = headerButtonText03;
      } else {
        state.homeScreen.nation = action.payload;
      }
    },
    chnageScrapHeaderHeadline: (state, action) => {
      if (action.payload === "") {
        state.scrapScreen.headline = headerButtonText01;
      } else {
        state.scrapScreen.headline = action.payload;
      }
    },
    chnageScrapHeaderDate: (state, action) => {
      if (action.payload === "") {
        state.scrapScreen.date = headerButtonText02;
      } else {
        state.scrapScreen.date = action.payload;
      }
    },
    chnageScrapHeaderNation: (state, action) => {
      if (action.payload.length === 0) {
        state.scrapScreen.nation = headerButtonText03;
      } else {
        state.scrapScreen.nation = action.payload;
      }
    },
  },
});

export const {
  changeHomeHeaderHeadline,
  chnageHomeHeaderDate,
  chnageHomeHeaderNation,
  chnageScrapHeaderHeadline,
  chnageScrapHeaderDate,
  chnageScrapHeaderNation,
} = headerFilterStateSlice.actions;

export const homeScreenHeaderFilterFunc = {
  changeHeaderHeadline: changeHomeHeaderHeadline,
  changeHeadaerDate: chnageHomeHeaderDate,
  changeHeaderNation: chnageHomeHeaderNation,
};
export const scrapScreenHeaderFilterFun = {
  changeHeaderHeadline: chnageScrapHeaderHeadline,
  changeHeadaerDate: chnageScrapHeaderDate,
  changeHeaderNation: chnageScrapHeaderNation,
};

export const headerFilterStateReducer = headerFilterStateSlice.reducer;
