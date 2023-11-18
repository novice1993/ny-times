import { createSlice } from "@reduxjs/toolkit";
import { ArticlePageProps } from "../../models/articlePageProps";

const initialState: ArticlePageProps = {
  articleList: [],
  pageNum: 0,
};

const articleDataFromServerSlice = createSlice({
  name: "articleDataFromServerSlice",
  initialState: initialState,
  reducers: {
    plusArticlePageNum: (state) => {
      state.pageNum = state.pageNum + 1;
    },
    plusArticleData: (state, action) => {
      const originArticleData = state.articleList;
      const newArticleData = action.payload;
      state.articleList = [...originArticleData, ...newArticleData];
    },
  },
});

export const { plusArticleData, plusArticlePageNum } = articleDataFromServerSlice.actions;
export const articleDataFromServerReducer = articleDataFromServerSlice.reducer;
