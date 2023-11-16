import styled from "styled-components";
import { useDispatch } from "react-redux";
import HeadlineFilter from "./headlineFilter";
import DateFilter from "./dateFilter";
import NationFilter from "./nationFilter";
import { setFilterModal } from "../../reducers/filterModalState-Reducer";
import { confirmButtonText } from "../../constants/constatns";

const FilterModal = () => {
  const dispatch = useDispatch();
  const handleCloseFilterModal = () => {
    dispatch(setFilterModal(false));
  };

  return (
    <Background>
      <div className="container">
        <HeadlineFilter />
        <DateFilter />
        <NationFilter />
        <button className="confirmBtn" onClick={handleCloseFilterModal}>
          <div className="buttonText">{confirmButtonText}</div>
        </button>
      </div>
    </Background>
  );
};

export default FilterModal;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 335px;
    height: 480px;
    padding: 20px;
    border-radius: 16px;
    background: #fff;

    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
  }

  .confirmBtn {
    width: 295px;
    height: 60px;
    border: none;
    border-radius: 16px;
    background: #3478f6;

    .buttonText {
      color: #fff;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.8px;
    }
  }
`;
