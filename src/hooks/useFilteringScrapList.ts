import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filteringScrapList } from "../utils/aboutFilteringScrapList/filteringScrapList";
import { GlobalStateProps } from "../models/globalStateProps";

const useFilteringScrapList = () => {
  const dispatch = useDispatch();

  const headerFilterState = useSelector((state: GlobalStateProps) => state.headerFilterState);
  const scrapScreenFilter = useSelector((state: GlobalStateProps) => state.scrapScreenFilterState);
  const originScrapList = useSelector((state: GlobalStateProps) => state.scrapList.originList);

  const { headline, date, nation } = headerFilterState.scrapScreen;
  const { headlineFilter, dateFilter, nationFilter } = scrapScreenFilter;

  useEffect(() => {
    const option = { originScrapList, headlineFilter, dateFilter, nationFilter, dispatch };
    filteringScrapList(option);
  }, [headline, date, nation, originScrapList]);

  return;
};

export default useFilteringScrapList;
