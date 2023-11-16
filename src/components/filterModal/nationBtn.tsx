import styled from "styled-components";

const NationBtn = ({ nation }: ButtonProps) => {
  return <Button>{nation}</Button>;
};

export default NationBtn;

interface ButtonProps {
  nation: string;
}

const Button = styled.button`
  display: flex;
  padding: 6px 12px 4px 12px;
  justify-content: center;
  align-items: center;

  background-color: #fff;
  border-radius: 30px;
  border: 1px solid #f2f2f2;

  color: #6d6d6d;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.56px;
`;
