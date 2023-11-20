import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getArticleDataFromServer from "../utils/aboutGetDataFromServer/getArticleDataFromServer";
import getFilteredDataFromServer from "../utils/aboutGetDataFromServer/getFilteredDataFromServer";
import { setUnderlineLoadingIndicator } from "../reducers/client/loadingIndicatorState-Reducer";
import { GlobalStateProps } from "../models/globalStateProps";

import {
  headerButtonText01 as defaultHeadline,
  headerButtonText02 as defaultDate,
  headerButtonText03 as defaultNation,
} from "../constants/constatns";

const useGetArticleDataFromServer = (pageNum: number) => {
  const dispatch = useDispatch();

  const headerFilterState = useSelector((state: GlobalStateProps) => state.headerFilterState);
  const homeScreenFilter = useSelector((state: GlobalStateProps) => state.homeScreenFilterState);

  const { headline, date, nation } = headerFilterState.homeScreen;
  const { headlineFilter, dateFilter, nationFilter } = homeScreenFilter;
  const isFilter = headline !== defaultHeadline || date !== defaultDate || nation !== defaultNation;

  useEffect(() => {
    dispatch(setUnderlineLoadingIndicator(true));
    const option = isFilter
      ? { pageNum, headlineFilter, dateFilter, nationFilter, dispatch }
      : { pageNum, dispatch };

    isFilter ? getFilteredDataFromServer(option) : getArticleDataFromServer(option);
  }, [pageNum, headline, date, nation]);

  return;
};

export default useGetArticleDataFromServer;
