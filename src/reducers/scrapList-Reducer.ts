import { createSlice } from "@reduxjs/toolkit";
import { ScrapListProps } from "../models/scrapListProps";
import { ArticleProps } from "../models/articleProps";

const initialState: ScrapListProps = {
  filteredList: [],
  originList: [],
};

const scrapListSlice = createSlice({
  name: "scrapListSlice",
  initialState: initialState,
  reducers: {
    setFilterdScrapList: (state, action) => {
      state.filteredList = action.payload;
    },
    addOringScrapList: (state, action) => {
      state.originList = [...state.originList, action.payload];
    },
    deleteOriginScrapList: (state, action) => {
      const originList = state.originList;
      const headline = action.payload;
      const newOriginList = originList.filter((article: ArticleProps) => {
        return article.headline !== headline && article;
      });

      state.originList = newOriginList;
    },
  },
});

export const { setFilterdScrapList, addOringScrapList, deleteOriginScrapList } =
  scrapListSlice.actions;
export const scrapListReducer = scrapListSlice.reducer;
