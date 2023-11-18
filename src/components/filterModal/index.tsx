import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { homeScreenFilterFunc } from "../../reducers/client/homeScreenFilterState-Rudcer";
import { scrapScreenFilterFunc } from "../../reducers/client/scrapScreenFilterState-Reducer";
import { homeScreenHeaderFilterFunc } from "../../reducers/client/headerFilterState-Reducer";
import { scrapScreenHeaderFilterFun } from "../../reducers/client/headerFilterState-Reducer";
import { GlobalStateProps } from "../../models/globalStateProps";

import HeadlineFilter from "./headlineFilter";
import DateFilter from "./dateFilter";
import NationFilter from "./nationFilter";
import { setFilterModal } from "../../reducers/client/filterModalState-Reducer";

import { confirmButtonText } from "../../constants/constatns";

const FilterModal = ({ type }: { type: string }) => {
  const dispatch = useDispatch();
  const homeScreenFilter = useSelector((state: GlobalStateProps) => state.homeScreenFilterState);
  const scrapScreenFilter = useSelector((state: GlobalStateProps) => state.scrapScreenFilterState);

  // article filtering keyword (headline, date, nation)
  const { headlineFilter, dateFilter, nationFilter } =
    type === "home" ? homeScreenFilter : scrapScreenFilter;

  // set artcile filter keyword
  const { setHeadlineFilter, setDateFilter, setNationFilter } =
    type === "home" ? homeScreenFilterFunc : scrapScreenFilterFunc;

  // set header filter text (headline, date, nation)
  const { changeHeaderHeadline, changeHeadaerDate, changeHeaderNation } =
    type === "home" ? homeScreenHeaderFilterFunc : scrapScreenHeaderFilterFun;

  const handleCloseFilterModal = () => {
    dispatch(setFilterModal(false));

    dispatch(changeHeaderHeadline(headlineFilter));
    dispatch(changeHeadaerDate(dateFilter));
    dispatch(changeHeaderNation(nationFilter));
  };

  return (
    <Background>
      <div className="container">
        <HeadlineFilter
          filterState={headlineFilter}
          filterStateFunc={setHeadlineFilter}
          dispatch={dispatch}
        />
        <DateFilter filterState={dateFilter} filterStateFunc={setDateFilter} dispatch={dispatch} />
        <NationFilter
          filterState={nationFilter}
          filterStateFunc={setNationFilter}
          dispatch={dispatch}
        />
        <button className="confirmBtn" onClick={handleCloseFilterModal}>
          <div className="buttonText">{confirmButtonText}</div>
        </button>
      </div>
    </Background>
  );
};

export default FilterModal;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 335px;
    height: 480px;
    padding: 20px;
    border-radius: 16px;
    background: #fff;

    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
  }

  .confirmBtn {
    width: 295px;
    height: 60px;
    border: none;
    border-radius: 16px;
    background: #3478f6;

    .buttonText {
      color: #fff;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.8px;
    }
  }
`;
