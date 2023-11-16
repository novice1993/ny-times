import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { GlobalStateProps } from "../../models/globalStateProps";
import { changeFooterBtnState } from "../../reducers/footerBtnState-Reducer";

const PageChangeBtn = (props: FooterProps) => {
  const iconImg = props.iconImg;
  const buttonText = props.buttonText;
  const type = props.type; // 'home' or 'scrap'

  const dispatch = useDispatch();
  const footerBtnState = useSelector((state: GlobalStateProps) => state.footerBtnState);

  const handleChangeFooterBtnState = () => {
    if (type === "home") {
      dispatch(changeFooterBtnState("home"));
    } else if (type === "scrap") {
      dispatch(changeFooterBtnState("scrap"));
    }
  };

  return (
    <Container type={type} footerBtnState={footerBtnState} onClick={handleChangeFooterBtnState}>
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
