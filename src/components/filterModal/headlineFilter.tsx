import styled from "styled-components";
import { headLineFilterTitle, headLineFilterInputText } from "../../constants/constatns";

const HeadlineFilter = () => {
  return (
    <Container>
      <div className="title">{headLineFilterTitle}</div>
      <label className="inputBox">
        <input type="text" placeholder={headLineFilterInputText} />
      </label>
    </Container>
  );
};

export default HeadlineFilter;

const Container = styled.div`
  width: 295px;
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
  }

  .inputBox {
    width: 295px;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border-radius: 8px;
    border: 1px solid #c4c4c4;
  }

  & input {
    width: 100%;
    color: #c4c4c4;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.56px;
    border: none;
  }
`;
