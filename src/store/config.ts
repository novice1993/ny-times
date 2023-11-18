import { configureStore } from "@reduxjs/toolkit";
import { filterModalReducer } from "../reducers/client/filterModalState-Reducer";
import { scrapArticlesReducer } from "../reducers/client/scrapedArticles-Reducer";
import { articleDataFromServerReducer } from "../reducers/server/articleDataFromServer-Reducer";
import { homeScreenFilterStateReducer } from "../reducers/client/homeScreenFilterState-Rudcer";
import { headerFilterStateReducer } from "../reducers/client/headerFilterState-Reducer";
import { scrapScreenFilterStateReducer } from "../reducers/client/scrapScreenFilterState-Reducer";

const store = configureStore({
  reducer: {
    isFilterModal: filterModalReducer,
    scrapArticles: scrapArticlesReducer,
    articleDataFromServer: articleDataFromServerReducer,
    homeScreenFilterState: homeScreenFilterStateReducer,
    scrapScreenFilterState: scrapScreenFilterStateReducer,
    headerFilterState: headerFilterStateReducer,
  },
});

export default store;
