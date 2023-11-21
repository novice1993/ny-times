import { useDispatch } from "react-redux";
import { IndicatorLayout } from "../../layout/layout";
import { setFilterModal } from "../../reducers/filterModalState-Reducer";
import { noScrapIndicatorIcon as noResultIndicatorIcon } from "../../constants/constatns";
import { noResultMessage, openModalButtonText } from "../../constants/constatns";

const NoResultIndicator = () => {
  const dispatch = useDispatch();

  const handleOpenFilterModal = () => {
    dispatch(setFilterModal(true));
  };

  return (
    <IndicatorLayout>
      <div className="indicator">
        <img className="iconImg" src={noResultIndicatorIcon} />
        <span className="message">{noResultMessage}</span>
      </div>
      <button className="button" onClick={handleOpenFilterModal}>
        <div className="buttonText">{openModalButtonText}</div>
      </button>
    </IndicatorLayout>
  );
};

export default NoResultIndicator;
