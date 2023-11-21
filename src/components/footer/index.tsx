import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  const location = useLocation();
  const [activeBtn, setActiveBtn] = useState("home");

  useEffect(() => {
    const urlPath = location.pathname;
    urlPath === "/" ? setActiveBtn("home") : setActiveBtn("scrap");
  }, [location]);

  return (
    <Container>
      <StyledLink to="/">
        <PageChangeBtn
          type="home"
          activeBtn={activeBtn}
          iconImg={activeBtn === "home" ? footerHomeOnIcon : footerHomeOffIcon}
          buttonText={footerButtonText01}
        />
      </StyledLink>
      <StyledLink to="/scrap">
        <PageChangeBtn
          type="scrap"
          activeBtn={activeBtn}
          iconImg={activeBtn === "scrap" ? footerScrapOnIcon : footerScrapOffIcon}
          buttonText={footerButtonText02}
        />
      </StyledLink>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  position: sticky;
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
