import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
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

const Footer = () => {
  const [scrapState, setScrapState] = useState("noScrap");
  const footerBtnState = useSelector((state: GlobalStateProps) => state.footerBtnState);

  useEffect(() => {
    const isScrap = localStorage.getItem("scrapList");

    if (isScrap !== null) {
      setScrapState("scrap");
    } else {
      setScrapState("noScrap");
    }
  }, [footerBtnState]);

  return (
    <Container>
      <StyledLink to="/">
        <PageChangeBtn
          type="home"
          iconImg={footerBtnState === "home" ? footerHomeOnIcon : footerHomeOffIcon}
          buttonText={footerButtonText01}
        />
      </StyledLink>
      <StyledLink to={scrapState === "scrap" ? "/scrap" : "/noScrap"}>
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
