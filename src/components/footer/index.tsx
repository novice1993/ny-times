import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { changeFooterBtnState } from "../../reducers/footerBtnState-Reducer";
import { GlobalStateProps } from "../../models/globalStateProps";

import PageChangeBtn from "./pageChangeBtn";
import {
  footerHomeOnIcon,
  footerHomeOffIcon,
  footerScrapOnIcon,
  footerScrapOffIcon,
  footerButtonText01,
  footerButtonText02,
} from "../../constants/constatns";

const Footer = ({ type }: { type: string }) => {
  const dispatch = useDispatch();
  const footerBtnState = useSelector((state: GlobalStateProps) => state.footerBtnState);

  useEffect(() => {
    dispatch(changeFooterBtnState(type));
  }, []);

  return (
    <Container>
      <StyledLink to="/">
        <PageChangeBtn
          type="home"
          iconImg={footerBtnState === "home" ? footerHomeOnIcon : footerHomeOffIcon}
          buttonText={footerButtonText01}
        />
      </StyledLink>
      <StyledLink to="scrap">
        <PageChangeBtn
          type="scrap"
          iconImg={footerBtnState === "scrap" ? footerScrapOnIcon : footerScrapOffIcon}
          buttonText={footerButtonText02}
        />
      </StyledLink>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  width: 375px;
  height: 85px;
  padding: 20px 80px 20px 80px;
  border-radius: 30px;
  background: #000;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
