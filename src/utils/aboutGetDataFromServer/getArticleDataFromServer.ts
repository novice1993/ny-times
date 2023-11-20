import axios from "axios";
import {
  setTotalLoadingIndicator,
  setUnderlineLoadingIndicator,
} from "../../reducers/client/loadingIndicatorState-Reducer";
import { transformRawData } from "../aboutOrganizeData/transformRawData";
import { plusArticleData } from "../../reducers/server/articleDataFromServer-Reducer";
import { setFetchingErrorState } from "../../reducers/client/fetchingErrorState-Reducer";
import { setFilterModal } from "../../reducers/client/filterModalState-Reducer";
import { API_ENDPOINT } from "../../constants/apiConstant";
import { API_DELAYTIME } from "../../constants/apiConstant";

const getArticleDataFromServer = async (option: FetchingFuncProps) => {
  const { pageNum, dispatch } = option;

  try {
    setTimeout(async () => {
      const res = await axios.get(`${API_ENDPOINT}&page=${pageNum}`);
      const rawData = res.data.response.docs;

      dispatch(setTotalLoadingIndicator(false));
      dispatch(setUnderlineLoadingIndicator(false));
      dispatch(setFetchingErrorState(false));

      if (rawData.length === 0) {
        pageNum === 0 && dispatch(plusArticleData([]));
      } else {
        const transformData = transformRawData(rawData);
        dispatch(plusArticleData(transformData));
        dispatch(setFilterModal(false));
      }
    }, API_DELAYTIME);
  } catch (error) {
    console.error(error);
    dispatch(setFetchingErrorState(true));
  }
};

export default getArticleDataFromServer;

interface FetchingFuncProps {
  pageNum: number;
  dispatch: (state: any) => void;
}
