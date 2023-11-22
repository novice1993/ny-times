import styled from "styled-components";
import { FadeLoader } from "react-spinners";
import { mediaQuery } from "../../style/mediaQuery";
import { loadingIndicatorText } from "../../constants/aboutComponents/aboutIndicators";

const TotalLoadingIndicator = () => {
  return (
    <Container>
      <FadeLoader />
      <div className="indicatorText">{loadingIndicatorText}</div>
    </Container>
  );
};

export default TotalLoadingIndicator;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .indicatorText {
    font-size: 22px;
    color: #4a464699;

    ${mediaQuery.maxWidth330} {
      font-size: 18px;
    }
  }
`;
