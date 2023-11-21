import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import { filterModalReducer } from "../reducers/filterModalState-Reducer";
import { scrapArticlesReducer } from "../reducers/scrapedArticles-Reducer";
import { homeScreenFilterStateReducer } from "../reducers/homeScreenFilterState-Rudcer";
import { headerFilterStateReducer } from "../reducers/headerFilterState-Reducer";
import { scrapScreenFilterStateReducer } from "../reducers/scrapScreenFilterState-Reducer";
import { loadingIndicatorReducer } from "../reducers/loadingIndicatorState-Reducer";

const reducers = combineReducers({
  isFilterModal: filterModalReducer,
  isLoadingIndicator: loadingIndicatorReducer,
  scrapArticles: scrapArticlesReducer,
  homeScreenFilterState: homeScreenFilterStateReducer,
  scrapScreenFilterState: scrapScreenFilterStateReducer,
  headerFilterState: headerFilterStateReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["homeScreenFilterState", "scrapScreenFilterState", "headerFilterState"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
