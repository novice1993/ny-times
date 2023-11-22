import styled from "styled-components";
import NationBtn from "./nationBtn";
import { FilterSetProps } from "../../models/flterProps";
import { mediaQuery } from "../../style/mediaQuery";

import { nationFilterTitle, nations } from "../../constants/aboutComponents/aboutFilterModal";

const NationFilter = (props: FilterSetProps) => {
  const { filterState, filterStateFunc, dispatch } = props;
  return (
    <Container>
      <div className="title">{nationFilterTitle}</div>
      <div className="nationList">
        {nations.map((nation) => {
          return (
            <NationBtn
              key={nation}
              nation={nation}
              filterState={filterState}
              filterStateFunc={filterStateFunc}
              dispatch={dispatch}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default NationFilter;

const Container = styled.div`
  max-width: 295px;
  height: 108px;

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

  .nationList {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;

    ${mediaQuery.maxWidth310} {
      justify-content: center;
    }
  }
`;
