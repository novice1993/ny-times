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

  // function for setting artcile filtering keyword
  const { setHeadlineFilter, setDateFilter, setNationFilter } =
    type === "home" ? homeScreenFilterFunc : scrapScreenFilterFunc;

  // set header filter text (headline, date, nation)
  const { changeHeaderHeadline, changeHeadaerDate, changeHeaderNation } =
    type === "home" ? homeScreenHeaderFilterFunc : scrapScreenHeaderFilterFun;

  const handleCloseFilterModal = () => {
    dispatch(setFilterModal(false));

    // 입력하는 순간 -> real Filter change
    // modal close 하는 순간 -> 한번에 header Filter setting
    // headerFilter setting 될 때 -> localStorage에 저장하면 된다
    // 이때 type home, type scrp으로 분기
    dispatch(changeHeaderHeadline(headlineFilter));
    dispatch(changeHeadaerDate(dateFilter));
    dispatch(changeHeaderNation(nationFilter));

    // ✔︎ 발생하는 문제
    // -> homeScreen 화면에서 렌더링 시 filter에 있는 값을 header filter로 받아오지 못하고 있음,,,,
    // 무엇이 문제인지 파악 필요

    // localStore 저장 테스트
    const filterList = {
      headlineFilter: headlineFilter,
      dateFilter: dateFilter,
      nationFilter: nationFilter,
    };

    const filterData = JSON.stringify(filterList);
    localStorage.setItem(type === "home" ? "homeScreenFilter" : "scrapScreenFilter", filterData);
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
