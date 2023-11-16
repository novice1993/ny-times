import styled from "styled-components";
import { dateFilterTitle, dateFilterInputText, dateFilterIconImg } from "../../constants/constatns";

const DateFilter = () => {
  return (
    <Container>
      <div className="title">{dateFilterTitle}</div>
      <div className="inputBox">
        <label>
          <input type="text" placeholder={dateFilterInputText} />
        </label>
        <img src={dateFilterIconImg} />
      </div>
    </Container>
  );
};

export default DateFilter;

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
    display: flex;
    width: 295px;
    padding: 10px 20px;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    border: 1px solid #c4c4c4;
  }

  & input {
    color: #c4c4c4;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.56px;
    border: none;
  }
`;
