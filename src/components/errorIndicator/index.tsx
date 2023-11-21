import styled from "styled-components";
import { errorIndicatorIcon } from "../../constants/constatns";

const errorMessage = "기사 목록을 불러올 수 없습니다.";
const pageReloadButtonText = "페이지 새로고침";

const handleReloadPage = () => {
  window.location.reload();
};

const ErrorIndicator = () => {
  return (
    <Container>
      <div className="indicator">
        <img className="iconImg" src={errorIndicatorIcon} />
        <span className="message">{errorMessage}</span>
      </div>
      <button className="pageReloadBtn">
        <div className="buttonText" onClick={handleReloadPage}>
          {pageReloadButtonText}
        </div>
      </button>
    </Container>
  );
};

export default ErrorIndicator;

const Container = styled.div`
  height: 100vh;
  background-color: #f0f1f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .indicator {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    .iconImg {
      width: 36px;
      height: 36px;
    }

    .message {
      color: #6d6d6d;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 28px;
      letter-spacing: -0.9px;
      text-transform: uppercase;
    }
  }

  .pageReloadBtn {
    width: 80%;
    max-width: 295px;
    height: 60px;
    flex-shrink: 0;
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
