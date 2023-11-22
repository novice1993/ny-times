import styled from "styled-components";
import { useDispatch } from "react-redux";
import useSetFilterState from "../../hooks/useSetFilterState";
import { setFilterModal } from "../../reducers/filterModalState-Reducer";
import { mediaQuery } from "../../style/mediaQuery";
import { confirmButtonText } from "../../constants/aboutComponents/aboutFilterModal";

import HeadlineFilter from "./headlineFilter";
import DateFilter from "./dateFilter";
import NationFilter from "./nationFilter";

const FilterModal = ({ type }: { type: string }) => {
  const dispatch = useDispatch();
  const { filterState, filterSetFunc, setHeaderFilterState } = useSetFilterState(type);

  const { headlineFilter, dateFilter, nationFilter } = filterState;
  const { setHeadlineFilter, setDateFilter, setNationFilter } = filterSetFunc;

  const handleClickModalBtn = () => {
    dispatch(setFilterModal(false));
    setHeaderFilterState();
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
        <button className="confirmBtn" onClick={handleClickModalBtn}>
          <div className="buttonText">{confirmButtonText}</div>
        </button>
      </div>
    </Background>
  );
};

export default FilterModal;

const Background = styled.div`
  position: fixed;
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
    width: 90%;
    max-width: 335px;
    height: 480px;
    padding: 20px;
    border-radius: 16px;
    background: #fff;

    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  .confirmBtn {
    width: 80%;
    max-width: 295px;
    height: 60px;
    border: none;
    border-radius: 16px;
    background: #3478f6;

    ${mediaQuery.maxWidth310} {
      width: 70%;
      height: 50px;
    }

    .buttonText {
      color: #fff;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.8px;

      ${mediaQuery.maxWidth310} {
        font-size: 15px;
      }
    }
  }
`;
