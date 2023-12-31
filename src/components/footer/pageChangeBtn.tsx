import styled from "styled-components";

const PageChangeBtn = (props: FooterProps) => {
  const { iconImg, buttonText, type, activeBtn } = props; // type: 'home' or 'scrap', active: current active Btn

  return (
    <Container type={type} activeBtn={activeBtn}>
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
  activeBtn: string;
}

const Container = styled.div<{ type: string; activeBtn: string }>`
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
      props.type === "home" // home Btn
        ? props.activeBtn === "home"
          ? "#fff"
          : "#6d6d6d"
        : props.activeBtn === "scrap" // scrap Btn
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
