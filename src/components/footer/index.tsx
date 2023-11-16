import styled from "styled-components";
import { Link } from "react-router-dom";
import PageChangeBtn from "./pageChangeBtn";
import {
  footerHomeOnIcon,
  footerScrapOffIcon,
  footerButtonText01,
  footerButtonText02,
} from "../../constants/constatns";

const Footer = () => {
  return (
    <Container>
      <Link to="/">
        <PageChangeBtn iconImg={footerHomeOnIcon} buttonText={footerButtonText01} />
      </Link>
      <Link to="/scrap">
        <PageChangeBtn iconImg={footerScrapOffIcon} buttonText={footerButtonText02} />
      </Link>
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
