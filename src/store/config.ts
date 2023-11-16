import { configureStore } from "@reduxjs/toolkit";
import { footerBtnStateReducer } from "../reducers/footerBtnState-Reducer";
import { filterModalReducer } from "../reducers/filterModalState-Reducer";

const store = configureStore({
  reducer: {
    footerBtnState: footerBtnStateReducer,
    isFilterModal: filterModalReducer,
  },
});

export default store;
