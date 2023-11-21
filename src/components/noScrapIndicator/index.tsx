import styled from "styled-components";

import { Link } from "react-router-dom";
import { noScrapIndicatorIcon, noScrapMessage, goHomeButtonText } from "../../constants/constatns";

const NoScrapIndicator = () => {
  return (
    <Container>
      <div className="indicator">
        <img className="iconImg" src={noScrapIndicatorIcon} />
        <span className="message">{noScrapMessage}</span>
      </div>
      <StyledLink to="/">
        <button className="goHomeBtn">
          <div className="buttonText">{goHomeButtonText}</div>
        </button>
      </StyledLink>
    </Container>
  );
};

export default NoScrapIndicator;

const Container = styled.div`
  height: 100%;
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

  .goHomeBtn {
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

const StyledLink = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: center;
  text-decoration: none;
`;
