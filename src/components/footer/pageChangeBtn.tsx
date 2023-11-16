import styled from "styled-components";
import { useSelector } from "react-redux";
import { GlobalStateProps } from "../../models/globalStateProps";

const PageChangeBtn = (props: FooterProps) => {
  const iconImg = props.iconImg;
  const buttonText = props.buttonText;
  const type = props.type; // 'home' or 'scrap'

  const footerBtnState = useSelector((state: GlobalStateProps) => state.footerBtnState);

  return (
    <Container type={type} footerBtnState={footerBtnState}>
      <img src={iconImg} />
      <span>{buttonText}</span>
    </Container>
  );
};

export default PageChangeBtn;

interface FooterProps {
  iconImg: string;
  buttonText: string;
  type: string;
}

const Container = styled.div<{ type: string; footerBtnState: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;

  & img {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  & span {
    color: ${(props) =>
      props.type === "home" // home 버튼
        ? props.footerBtnState === "home"
          ? "#fff"
          : "#6d6d6d"
        : props.footerBtnState === "scrap" // scrap 버튼
        ? "#fff"
        : "#6d6d6d"};

    text-align: center;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
  }
`;
