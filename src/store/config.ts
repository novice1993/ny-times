import { configureStore } from "@reduxjs/toolkit";
import { footerBtnStateReducer } from "../reducers/footerBtnState-Reducer";
import { filterModalReducer } from "../reducers/filterModalState-Reducer";
import { scrapArticlesReducer } from "../reducers/scrapedArticles-Reducer";

const store = configureStore({
  reducer: {
    footerBtnState: footerBtnStateReducer,
    isFilterModal: filterModalReducer,
    scrapArticles: scrapArticlesReducer,
  },
});

export default store;
