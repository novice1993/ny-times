import { IndicatorLayout } from "../../layout/layout";
import { errorIndicatorIcon } from "../../constants/constatns";

const errorMessage = "기사 목록을 불러올 수 없습니다.";
const pageReloadButtonText = "페이지 새로고침";

const handleReloadPage = () => {
  window.location.reload();
};

const ErrorIndicator = () => {
  return (
    <IndicatorLayout>
      <div className="indicator">
        <img className="iconImg" src={errorIndicatorIcon} />
        <span className="message">{errorMessage}</span>
      </div>
      <button className="button">
        <div className="buttonText" onClick={handleReloadPage}>
          {pageReloadButtonText}
        </div>
      </button>
    </IndicatorLayout>
  );
};

export default ErrorIndicator;
