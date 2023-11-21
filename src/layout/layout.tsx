import styled from "styled-components";
import { mediaQuery } from "../style/mediaQuery";

// HomeScreen, ScrapScreen 페이지 레이이웃
export const PageLayout = styled.div`
  position: relative;
  width: 100%;
  /* width: 375px; */
  height: 100%;
  max-width: 560px;
`;

// ArticleList, ScrapList 컴포넌트 레이아웃
export const ListLayout = styled.div`
  padding: 80px 20px 105px 20px;
  width: 100%;
  height: 100%;
  background-color: #f0f1f4;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

// indicator 컴포넌트 레이아웃

export const IndicatorLayout = styled.div`
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

      ${mediaQuery.maxWidth330} {
        font-size: 16px;
      }
    }
  }

  .button {
    width: 80%;
    max-width: 295px;
    height: 60px;
    flex-shrink: 0;
    border: none;
    border-radius: 16px;
    background: #3478f6;

    ${mediaQuery.maxWidth330} {
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

      ${mediaQuery.maxWidth330} {
        font-size: 15px;
      }
    }
  }
`;
