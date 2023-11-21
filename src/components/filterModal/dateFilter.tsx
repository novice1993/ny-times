import styled from "styled-components";
import Calendar from "./calendar";
import { FilterSetProps } from "../../models/flterProps";
import { dateFilterTitle, dateResetText, dateFilterIconImg } from "../../constants/constatns";
import { mediaQuery } from "../../style/mediaQuery";

const DateFilter = (props: FilterSetProps) => {
  const { filterState, filterStateFunc, dispatch } = props;

  const handleRestDate = () => {
    dispatch(filterStateFunc(""));
  };

  return (
    <Container>
      <div className="title">
        <span>{dateFilterTitle}</span>
        <span className="guideText">{dateResetText}</span>
      </div>
      <div className="inputBox">
        <label>
          <Calendar
            filterState={filterState}
            filterStateFunc={filterStateFunc}
            dispatch={dispatch}
          />
        </label>
        <img src={dateFilterIconImg} onClick={handleRestDate} />
      </div>
    </Container>
  );
};

export default DateFilter;

const Container = styled.div`
  width: 100%;
  max-width: 295px;
  height: 76px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  .title {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.8px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    ${mediaQuery.maxWidth310} {
      font-size: 14px;
    }
  }

  .guideText {
    font-size: 11px;
    color: #9999;
  }

  .inputBox {
    width: 100%;
    max-width: 295px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    border: 1px solid #c4c4c4;

    & ::placeholder {
      color: #c4c4c4;

      ${mediaQuery.maxWidth310} {
        font-size: 12px;
      }
    }

    & :focus {
      outline: none;
    }
  }

  & input {
    width: 100%;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.56px;
    border: none;
  }
`;
