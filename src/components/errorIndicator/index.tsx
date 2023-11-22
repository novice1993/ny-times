import { IndicatorLayout } from "../../layout/layout";
import { errorIndicatorIcon } from "../../constants/aboutComponents/aboutIndicators";
import { errorMessage, reloadButtonText } from "../../constants/aboutComponents/aboutIndicators";

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
          {reloadButtonText}
        </div>
      </button>
    </IndicatorLayout>
  );
};

export default ErrorIndicator;
