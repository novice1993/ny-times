import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getFilteredDataFromServer from "../utils/getFilteredDataFromServer";
import { GlobalStateProps } from "../models/globalStateProps";

import {
  headerButtonText01 as defaultHeadline,
  headerButtonText02 as defaultDate,
  headerButtonText03 as defaultNation,
} from "../constants/constatns";

const useGetFilteringArticleData = (pageNum: number) => {
  const dispatch = useDispatch();

  const headerFilterState = useSelector((state: GlobalStateProps) => state.headerFilterState);
  const homeScreenFilter = useSelector((state: GlobalStateProps) => state.homeScreenFilterState);

  // filterState in header
  const { headline, date, nation } = headerFilterState.homeScreen;
  const isFiltering =
    headline !== defaultHeadline || date !== defaultDate || nation !== defaultNation;

  // HomeScreen filterState Value : headline, date, nation
  const { headlineFilter, dateFilter, nationFilter } = homeScreenFilter;
  const options = { pageNum, headlineFilter, dateFilter, nationFilter, dispatch };

  useEffect(() => {
    isFiltering && getFilteredDataFromServer(options);
  }, [pageNum, headline, date, nation]);

  return;
};

export default useGetFilteringArticleData;
