import axios from "axios";
import store from "../store/config";
import { transformRawData } from "../utils/aboutOrganizeData/transformRawData";
import { getHeadlineQuery, getDateQuery, getNationQuery } from "./aboutGetUrlQuery";

import { API_ENDPOINT } from "../constants/apiConstant";

const getArticleData = async (pageNum: number) => {
  const headerFilterState = store.getState().homeScreenFilterState;
  const { headlineFilter, dateFilter, nationFilter } = headerFilterState;

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

  try {
    const res = await axios.get(API);
    const rawData = res.data.response.docs;
    const articleInfo = transformRawData(rawData);
    return articleInfo;
  } catch (error) {
    console.error(error);
  }
};

export default getArticleData;
