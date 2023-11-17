import { configureStore } from "@reduxjs/toolkit";
import { filterModalReducer } from "../reducers/filterModalState-Reducer";
import { scrapArticlesReducer } from "../reducers/scrapedArticles-Reducer";

const store = configureStore({
  reducer: {
    isFilterModal: filterModalReducer,
    scrapArticles: scrapArticlesReducer,
  },
});

export default store;
