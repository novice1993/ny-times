import styled from "styled-components";
import { FilterSetProps } from "../../models/flterProps";
import { mediaQuery } from "../../style/mediaQuery";

import {
  headlineInputTitle,
  headlineInputText,
} from "../../constants/aboutComponents/aboutFilterModal";

const HeadlineFilter = (props: FilterSetProps) => {
  const { filterState, filterStateFunc, dispatch } = props;

  const handleChangeHeadlineFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(filterStateFunc(value));
  };

  return (
    <Container>
      <div className="title">{headlineInputTitle}</div>
      <label className="inputBox">
        <input
          type="text"
          placeholder={headlineInputText}
          value={filterState}
          onChange={handleChangeHeadlineFilter}
        />
      </label>
    </Container>
  );
};

export default HeadlineFilter;

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

    ${mediaQuery.maxWidth310} {
      font-size: 14px;
    }
  }

  .inputBox {
    width: 100%;
    max-width: 295px;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border-radius: 8px;
    border: 1px solid #c4c4c4;
  }

  & input {
    width: 100%;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.56px;
    border: none;

    &::placeholder {
      color: #c4c4c4;

      ${mediaQuery.maxWidth310} {
        font-size: 12px;
      }
    }

    &:focus {
      outline: none;
    }
  }
`;
