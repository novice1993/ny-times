import { createSlice } from "@reduxjs/toolkit";
import { scrapListKeyInLocalStorage } from "../constants/constatns";

const scrapList = localStorage.getItem(scrapListKeyInLocalStorage);
const initialState = scrapList === null ? [] : JSON.parse(scrapList);

const scrapArticlesSlice = createSlice({
  name: "scrapArticlesSlice",
  initialState: initialState,
  reducers: {
    setScrapArticles: (_, action) => action.payload,
  },
});

export const { setScrapArticles } = scrapArticlesSlice.actions;
export const scrapArticlesReducer = scrapArticlesSlice.reducer;
