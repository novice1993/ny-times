import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import PageChangeBtn from "./pageChangeBtn";
import {
  footerHomeOnIcon,
  footerHomeOffIcon,
  footerScrapOnIcon,
  footerScrapOffIcon,
  footerButtonText01,
  footerButtonText02,
} from "../../constants/aboutComponents/aboutFooter";

const Footer = () => {
  const location = useLocation();
  const [activeBtn, setActiveBtn] = useState("home");

  useEffect(() => {
    const urlPath = location.pathname;
    setActiveBtn(urlPath === "/" ? "home" : "scrap");
  }, [location]);

  const buttons = [
    {
      type: "home",
      iconImg: activeBtn === "home" ? footerHomeOnIcon : footerHomeOffIcon,
      buttonText: footerButtonText01,
      to: "/",
    },
    {
      type: "scrap",
      iconImg: activeBtn === "scrap" ? footerScrapOnIcon : footerScrapOffIcon,
      buttonText: footerButtonText02,
      to: "/scrap",
    },
  ];

  return (
    <Container>
      {buttons.map((btn) => (
        <StyledLink to={btn.to} key={btn.type}>
          <PageChangeBtn
            type={btn.type}
            activeBtn={activeBtn}
            iconImg={btn.iconImg}
            buttonText={btn.buttonText}
          />
        </StyledLink>
      ))}
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 560px;
  max-height: 85px;
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
