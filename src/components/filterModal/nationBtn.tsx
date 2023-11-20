import { useState, useEffect } from "react";
import styled from "styled-components";
import { FilterSetProps } from "../../models/flterProps";

const NationBtn = (props: ButtonProps) => {
  const { nation, filterState, filterStateFunc, dispatch } = props;
  const [isSelect, setSelect] = useState(false);

  const handleSetSelectNation = () => {
    const payload = { isSelect: isSelect, nation: nation };
    dispatch(filterStateFunc(payload));
    setSelect(!isSelect);
  };

  // already selected check
  useEffect(() => {
    const alreadySelect = (filterState as string[]).some((selectedNation: string) => {
      return selectedNation === nation;
    });
    alreadySelect && setSelect(true);
  }, []);

  return (
    <Button onClick={handleSetSelectNation} isSelect={isSelect}>
      {nation}
    </Button>
  );
};

export default NationBtn;

interface ButtonProps extends FilterSetProps {
  nation: string;
}

const Button = styled.button<{ isSelect: boolean }>`
  display: flex;
  padding: 6px 12px 4px 12px;
  justify-content: center;
  align-items: center;

  color: ${(props) => (props.isSelect ? "#F2F2F2" : "#6d6d6d")};
  background-color: ${(props) => (props.isSelect ? "#82B0F4" : "#fff")};

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.56px;
  border-radius: 30px;
  border: 1px solid #f2f2f2;
`;
