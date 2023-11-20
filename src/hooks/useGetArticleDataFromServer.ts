import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getArticleDataFromServer from "../utils/aboutGetArticleFromServer/getArticleDataFromServer";
import getFilteredDataFromServer from "../utils/aboutGetArticleFromServer/getFilteredDataFromServer";
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

  const isFiltering =
    headline !== defaultHeadline || date !== defaultDate || nation !== defaultNation;

  const options = { pageNum, headlineFilter, dateFilter, nationFilter, dispatch };

  useEffect(() => {
    !isFiltering && getArticleDataFromServer(pageNum, dispatch);
    isFiltering && getFilteredDataFromServer(options);
  }, [pageNum, headline, date, nation]);

  return;
};

export default useGetArticleDataFromServer;
