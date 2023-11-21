import styled from "styled-components";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFilterModal } from "../../reducers/filterModalState-Reducer";
import { mediaQuery } from "../../style/mediaQuery";

const FilterBtn = (props: HeaderProps) => {
  const { iconImg, buttonText, defalutValue } = props;
  const [isFiltered, setFiltered] = useState(false);

  const dispatch = useDispatch();
  const handleOpenFilterModal = () => {
    dispatch(setFilterModal(true));
  };

  useEffect(() => {
    buttonText !== defalutValue ? setFiltered(true) : setFiltered(false);
  }, [buttonText]);

  return (
    <Button onClick={handleOpenFilterModal} isFiltered={isFiltered}>
      {iconImg && <img src={iconImg} />}
      <div className="buttonText">{buttonText}</div>
    </Button>
  );
};

export default FilterBtn;

interface HeaderProps {
  iconImg?: string;
  buttonText: string;
  defalutValue: string;
}

const Button = styled.button<{ isFiltered: boolean }>`
  width: 35%;
  max-width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  padding: 6px 12px 4px 12px;
  border: ${(props) => (props.isFiltered ? "1px solid #82B0F4" : "1px solid #c4c4c4")};
  border-radius: 30px;

  background-color: transparent;
  color: ${(props) => (props.isFiltered ? "#82B0F4" : "#6d6d6d")};
  text-align: right;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.56px;

  ${mediaQuery.maxWidth370} {
    font-size: 12px;
  }

  ${mediaQuery.maxWidth330} {
    font-size: 10px;
  }

  ${mediaQuery.maxWidth310} {
    padding: 3px 9px 1px 9px;
  }

  .buttonText {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    white-space: normal;
  }
`;
