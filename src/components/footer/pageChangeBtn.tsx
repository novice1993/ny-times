import styled from "styled-components";

const PageChangeBtn = (props: FooterProps) => {
  const iconImg = props.iconImg;
  const buttonText = props.buttonText;

  return (
    <Container>
      <img src={iconImg} />
      <span>{buttonText}</span>
    </Container>
  );
};

export default PageChangeBtn;

interface FooterProps {
  iconImg: string;
  buttonText: string;
}

const Container = styled.div`
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
    color: #fff; // on color
    // color: #6d6d6d; // off color
    text-align: center;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
  }
`;
