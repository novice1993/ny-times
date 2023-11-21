import styled from "styled-components";
import { useDispatch } from "react-redux";
import useSetFilterState from "../../hooks/useSetFilterState";

import HeadlineFilter from "./headlineFilter";
import DateFilter from "./dateFilter";
import NationFilter from "./nationFilter";
import { setFilterModal } from "../../reducers/filterModalState-Reducer";
import { confirmButtonText } from "../../constants/constatns";

const FilterModal = ({ type }: { type: string }) => {
  const dispatch = useDispatch();
  const { filterState, filterSetFunc, setHeaderState } = useSetFilterState(type);

  const { headlineFilter, dateFilter, nationFilter } = filterState;
  const { setHeadline, setDate, setNation } = filterSetFunc;

  const handleClickModalBtn = () => {
    dispatch(setFilterModal(false));
    setHeaderState();
  };

  return (
    <Background>
      <div className="container">
        <HeadlineFilter
          filterState={headlineFilter}
          filterStateFunc={setHeadline}
          dispatch={dispatch}
        />
        <DateFilter filterState={dateFilter} filterStateFunc={setDate} dispatch={dispatch} />
        <NationFilter filterState={nationFilter} filterStateFunc={setNation} dispatch={dispatch} />
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
