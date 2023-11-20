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
    setArticlePageNum: (state, action) => {
      state.pageNum = action.payload;
    },
    plusArticlePageNum: (state) => {
      state.pageNum = state.pageNum + 1;
    },
    plusArticleData: (state, action) => {
      const originArticleData = state.articleList;
      const newArticleData = action.payload;

      if (state.pageNum === 0) {
        state.articleList = newArticleData;
      } else {
        state.articleList = [...originArticleData, ...newArticleData];
      }
    },
  },
});

export const { setArticlePageNum, plusArticleData, plusArticlePageNum } =
  articleDataFromServerSlice.actions;
export const articleDataFromServerReducer = articleDataFromServerSlice.reducer;

// 현재 -> 메인 페이지에서 데이터를 불러온다 -> 하단에 닿으면 pageNum이 증가한다

// 필터버튼 누르면 -> fetching 후 -> 기존 데이터 갈아치우고 -> pageNum을 0으로 만들어야한다.
// 그런데 이때 => pageNum이 변경되어서 메인 페이지 발동이 걸리면 안된다 => filter 없을 때만 작동한다고 조건을 걸자

// 문제,,, 필터에 아무것도 입력하지 않고 닫기를 누르면 -> 메인 페이지 발동이 걸려야 한다 -> 이때 기존의 데이터에 누적하는 로직이 발동하면 안됨 -> 다 갈아치워야 함 -> 분기로 처리 ok

// 문제2,,, 아무것도 변화시키지 않고 필터창을 닫았을 때 (적용하기 눌렀을 때) -> fetching 하면 안됨
// => 버튼을 눌렀을 때가 트리거가 아니라, useEffect로 처리?
