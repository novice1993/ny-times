import styled from "styled-components";
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
      <PageChangeBtn iconImg={footerHomeOnIcon} buttonText={footerButtonText01} />
      <PageChangeBtn iconImg={footerScrapOffIcon} buttonText={footerButtonText02} />
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  position: absolute;
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
