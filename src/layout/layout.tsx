import styled from "styled-components";

// HomeScreen, ScrapScreen 페이지 레이이웃
export const PageLayout = styled.div`
  position: relative;
  width: 375px;
  max-width: 560px;
  height: 100vh;
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
  gap: 8px;
`;
