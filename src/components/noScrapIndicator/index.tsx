import styled from "styled-components";
import { Link } from "react-router-dom";
import { IndicatorLayout } from "../../layout/layout";

import {
  noScrapIndicatorIcon,
  noScrapMessage,
  goHomeButtonText,
} from "../../constants/aboutComponents/aboutIndicators";

const NoScrapIndicator = () => {
  return (
    <IndicatorLayout>
      <div className="indicator">
        <img className="iconImg" src={noScrapIndicatorIcon} />
        <span className="message">{noScrapMessage}</span>
      </div>
      <StyledLink to="/">
        <button className="button">
          <div className="buttonText">{goHomeButtonText}</div>
        </button>
      </StyledLink>
    </IndicatorLayout>
  );
};

export default NoScrapIndicator;

const StyledLink = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: center;
  text-decoration: none;
`;
