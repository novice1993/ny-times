import { useDispatch, useSelector } from "react-redux";
import { homeScreenFilterFunc } from "../reducers/homeScreenFilterState-Rudcer";
import { scrapScreenFilterFunc } from "../reducers/scrapScreenFilterState-Reducer";
import { homeScreenHeaderFilterFunc } from "../reducers/headerFilterState-Reducer";
import { scrapScreenHeaderFilterFun } from "../reducers/headerFilterState-Reducer";
import { GlobalStateProps } from "../models/globalStateProps";

const useSetFilterState = (type: string) => {
  const dispatch = useDispatch();

  const filterKey = type === "home" ? "homeScreenFilterState" : "scrapScreenFilterState";
  const filterState = useSelector((state: GlobalStateProps) => state[filterKey]);
  const filterSetFunc = type === "home" ? homeScreenFilterFunc : scrapScreenFilterFunc;

  const headerFilterSetFunc =
    type === "home" ? homeScreenHeaderFilterFunc : scrapScreenHeaderFilterFun;

  const setHeaderFilterState = () => {
    const { headlineFilter, dateFilter, nationFilter } = filterState;
    const actions = headerFilterSetFunc;

    dispatch(actions.changeHeaderHeadline(headlineFilter));
    dispatch(actions.changeHeadaerDate(dateFilter));
    dispatch(actions.changeHeaderNation(nationFilter));
  };

  const result = {
    filterState,
    filterSetFunc,
    setHeaderFilterState,
  };

  return result;
};

export default useSetFilterState;
