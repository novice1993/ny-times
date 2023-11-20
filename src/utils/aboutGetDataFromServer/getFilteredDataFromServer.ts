import axios from "axios";
import {
  setTotalLoadingIndicator,
  setUnderlineLoadingIndicator,
} from "../../reducers/client/loadingIndicatorState-Reducer";
import { transformRawData } from "../aboutOrganizeData/transformRawData";
import { plusArticleData } from "../../reducers/server/articleDataFromServer-Reducer";
import { getHeadlineQuery } from "../aboutGetUrlQuery/getHeadlineQuery";
import { getDateQuery } from "../aboutGetUrlQuery/getDateQuery";
import { getNationQuery } from "../aboutGetUrlQuery/getNationQuery";

import { API_ENDPOINT } from "../../constants/apiConstant";
import { API_DELAYTIME } from "../../constants/constatns";

const getFilteredDataFromServer = async (option: FetchingFuncProps) => {
  const { pageNum, headlineFilter, dateFilter, nationFilter, dispatch } = option;

  const headlineQuery = getHeadlineQuery(headlineFilter as string);
  const dateQuery = getDateQuery(dateFilter as string);
  const nationQuery = getNationQuery(nationFilter as string[]);
  let API = `${API_ENDPOINT}&page=${pageNum}${dateQuery}`;

  // API change by Query state
  if (headlineQuery !== "") {
    nationQuery !== ""
      ? (API = `${API}&fq=${headlineQuery}%20AND%20${nationQuery}`)
      : (API = `${API}&fq=${headlineQuery}`);
  } else {
    nationQuery !== "" ? (API = `${API}&fq=${nationQuery}`) : null;
  }

  setTimeout(async () => {
    try {
      const res = await axios.get(API);
      const rawData = res.data.response.docs;
      dispatch(setTotalLoadingIndicator(false));
      dispatch(setUnderlineLoadingIndicator(false));

      if (rawData.length === 0) {
        console.log("there is no article data");
        // pageNum === 0 이면서 신규 data가 없는 경우
        // pageNum !== 0 이면서 신규 data가 없는 경우
        // → 2가지 경우로 나눠서 분기처리?
      } else {
        const transformData = transformRawData(rawData);
        dispatch(plusArticleData(transformData));
      }
    } catch (error) {
      console.log(error);
    }
  }, API_DELAYTIME);
};

export default getFilteredDataFromServer;

interface FetchingFuncProps {
  pageNum: number;
  headlineFilter?: string;
  dateFilter?: string;
  nationFilter?: string[];
  dispatch: (state: any) => void;
}
