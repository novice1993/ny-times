import { createSlice } from "@reduxjs/toolkit";
import {
  headerButtonText01 as defaultHeadline,
  headerButtonText02 as defaultDate,
  headerButtonText03 as defaultNation,
} from "../constants/aboutComponents/aboutHeader";

const defaultValue = {
  headline: defaultHeadline,
  date: defaultDate,
  nation: defaultNation,
};

const initialState = {
  homeScreen: defaultValue,
  scrapScreen: defaultValue,
};

const headerFilterStateSlice = createSlice({
  name: "headerFilterStateSlice",
  initialState: initialState,
  reducers: {
    changeHomeHeaderHeadline: (state, action) => {
      state.homeScreen.headline = action.payload === "" ? defaultHeadline : action.payload;
    },
    changeHomeHeaderDate: (state, action) => {
      state.homeScreen.date = action.payload === "" ? defaultDate : action.payload;
    },
    chnageHomeHeaderNation: (state, action) => {
      const { payload } = action;

      switch (payload.length) {
        case 0:
          state.homeScreen.nation = defaultNation;
          break;
        case 1:
          state.homeScreen.nation = payload[0];
          break;
        default:
          state.homeScreen.nation = `${payload[0]} 외 ${payload.length - 1}개`;
          break;
      }
    },
    chnageScrapHeaderHeadline: (state, action) => {
      state.scrapScreen.headline = action.payload === "" ? defaultHeadline : action.payload;
    },
    chnageScrapHeaderDate: (state, action) => {
      state.scrapScreen.date = action.payload === "" ? defaultDate : action.payload;
    },
    chnageScrapHeaderNation: (state, action) => {
      const { payload } = action;

      switch (payload.length) {
        case 0:
          state.scrapScreen.nation = defaultNation;
          break;
        case 1:
          state.scrapScreen.nation = payload[0];
          break;
        default:
          state.scrapScreen.nation = `${payload[0]} 외 ${payload.length - 1}개`;
          break;
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

export const headerFilterStateReducer = headerFilterStateSlice.reducer;

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
