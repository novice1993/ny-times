import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import { filterModalReducer } from "../reducers/filterModalState-Reducer";
import { scrapListReducer } from "../reducers/scrapList-Reducer";
import { homeScreenFilterStateReducer } from "../reducers/homeScreenFilterState-Rudcer";
import { headerFilterStateReducer } from "../reducers/headerFilterState-Reducer";
import { scrapScreenFilterStateReducer } from "../reducers/scrapScreenFilterState-Reducer";

const reducers = combineReducers({
  isFilterModal: filterModalReducer,
  scrapList: scrapListReducer,
  homeScreenFilterState: homeScreenFilterStateReducer,
  scrapScreenFilterState: scrapScreenFilterStateReducer,
  headerFilterState: headerFilterStateReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["scrapList", "homeScreenFilterState", "scrapScreenFilterState", "headerFilterState"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
