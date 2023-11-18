import { configureStore } from "@reduxjs/toolkit";
import { filterModalReducer } from "../reducers/client/filterModalState-Reducer";
import { scrapArticlesReducer } from "../reducers/client/scrapedArticles-Reducer";
import { articleDataFromServerReducer } from "../reducers/server/articleDataFromServer-Reducer";

const store = configureStore({
  reducer: {
    isFilterModal: filterModalReducer,
    scrapArticles: scrapArticlesReducer,
    articleDataFromServer: articleDataFromServerReducer,
  },
});

export default store;
