import { configureStore } from "@reduxjs/toolkit";
import { footerBtnStateReducer } from "../reducers/footerBtnState-Slice";

const store = configureStore({
  reducer: {
    footerBtnState: footerBtnStateReducer,
  },
});

export default store;
