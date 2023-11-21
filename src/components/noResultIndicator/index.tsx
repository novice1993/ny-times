import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setFilterModal } from "../../reducers/filterModalState-Reducer";
import { noScrapIndicatorIcon as noResultIndicatorIcon } from "../../constants/constatns";
import { noResultMessage, openModalButtonText } from "../../constants/constatns";

const NoResultIndicator = () => {
  const dispatch = useDispatch();

  const handleOpenFilterModal = () => {
    dispatch(setFilterModal(true));
  };

  return (
    <Container>
      <div className="indicator">
        <img className="iconImg" src={noResultIndicatorIcon} />
        <span className="message">{noResultMessage}</span>
      </div>
      <button className="openModalBtn" onClick={handleOpenFilterModal}>
        <div className="buttonText">{openModalButtonText}</div>
      </button>
    </Container>
  );
};

export default NoResultIndicator;

const Container = styled.div`
  height: 100vh;
  background-color: #f0f1f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .indicator {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    .iconImg {
      width: 36px;
      height: 36px;
    }

    .message {
      color: #6d6d6d;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 28px;
      letter-spacing: -0.9px;
      text-transform: uppercase;
    }
  }

  .openModalBtn {
    width: 295px;
    height: 60px;
    flex-shrink: 0;
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
