import { useDispatch, useSelector } from "react-redux";
import { homeScreenHeaderFilterFunc } from "../reducers/headerFilterState-Reducer";
import { scrapScreenHeaderFilterFun } from "../reducers/headerFilterState-Reducer";
import { homeScreenFilterFunc } from "../reducers/homeScreenFilterState-Rudcer";
import { scrapScreenFilterFunc } from "../reducers/scrapScreenFilterState-Reducer";
import { GlobalStateProps } from "../models/globalStateProps";

const useSetFilterState = (type: string) => {
  const dispatch = useDispatch();

  // filter state ('homeScreen' or 'ScrapScreen' by type)
  const { headlineFilter, dateFilter, nationFilter } = useSelector((state: GlobalStateProps) =>
    type === "home" ? state.homeScreenFilterState : state.scrapScreenFilterState
  );

  // function to set filter state
  const { setHeadlineFilter, setDateFilter, setNationFilter } =
    type === "home" ? homeScreenFilterFunc : scrapScreenFilterFunc;

  // function to set 'header' filter state
  const headerFilterFunc =
    type === "home" ? homeScreenHeaderFilterFunc : scrapScreenHeaderFilterFun;

  const handleSetHeaderFilterState = () => {
    dispatch(headerFilterFunc.changeHeaderHeadline(headlineFilter));
    dispatch(headerFilterFunc.changeHeadaerDate(dateFilter));
    dispatch(headerFilterFunc.changeHeaderNation(nationFilter));
  };

  const result = {
    filterState: {
      headlineFilter: headlineFilter,
      dateFilter: dateFilter,
      nationFilter: nationFilter,
    },
    filterSetFunc: {
      setHeadline: setHeadlineFilter,
      setDate: setDateFilter,
      setNation: setNationFilter,
    },
    setHeaderState: handleSetHeaderFilterState,
  };

  return result;
};

export default useSetFilterState;
