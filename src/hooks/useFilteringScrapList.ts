import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setScrapArticles } from "../reducers/scrapedArticles-Reducer";
import { filteringScrapList } from "../utils/aboutFilteringScrapList/filteringScrapList";
import { GlobalStateProps } from "../models/globalStateProps";

import { scrapListKeyInLocalStorage } from "../constants/constatns";

import {
  headerButtonText01 as defaultHeadline,
  headerButtonText02 as defaultDate,
  headerButtonText03 as defaultNation,
} from "../constants/constatns";

const useFilteringScrapList = () => {
  const dispatch = useDispatch();
  const headerFilterState = useSelector((state: GlobalStateProps) => state.headerFilterState);
  const scrapScreenFilter = useSelector((state: GlobalStateProps) => state.scrapScreenFilterState);

  const { headline, date, nation } = headerFilterState.scrapScreen;
  const { headlineFilter, dateFilter, nationFilter } = scrapScreenFilter;

  const isFiltering =
    headline !== defaultHeadline || date !== defaultDate || nation !== defaultNation;

  useEffect(() => {
    const originScrapList = JSON.parse(localStorage.getItem(scrapListKeyInLocalStorage) as string);
    const option = { originScrapList, headlineFilter, dateFilter, nationFilter, dispatch };

    !isFiltering && dispatch(setScrapArticles(originScrapList));
    isFiltering && filteringScrapList(option);
  }, [headline, date, nation]);

  return;
};

export default useFilteringScrapList;
