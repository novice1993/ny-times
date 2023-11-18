import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setFilterModal } from "../../reducers/client/filterModalState-Reducer";

const FilterBtn = (props: HeaderProps) => {
  const iconImg = props.iconImg;
  const buttonText = props.buttonText;

  const dispatch = useDispatch();
  const handleOpenFilterModal = () => {
    dispatch(setFilterModal(true));
  };

  return (
    <Button onClick={handleOpenFilterModal}>
      {iconImg && <img src={iconImg} />}
      <div className="buttonText">{buttonText}</div>
    </Button>
  );
};

export default FilterBtn;

interface HeaderProps {
  iconImg?: string;
  buttonText: string;
}

const Button = styled.button`
  max-width: 119px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  padding: 6px 12px 4px 12px;
  border: 1px solid #c4c4c4;
  border-radius: 30px;

  background-color: transparent;
  color: #6d6d6d;
  text-align: right;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.56px;

  .buttonText {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    white-space: normal;
  }
`;
