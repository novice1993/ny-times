import axios from "axios";
import store from "../store/config";
import { transformRawData } from "../utils/aboutOrganizeData/transformRawData";
import { getHeadlineQuery, getDateQuery, getNationQuery } from "./aboutGetUrlQuery";
import { API_ENDPOINT } from "../constants/apiConstant";

const getArticleData = async (pageNum: number) => {
  const headerFilterState = store.getState().homeScreenFilterState;
  const { headlineFilter, dateFilter, nationFilter } = headerFilterState;

  // Url Queries
  const headlineQuery = getHeadlineQuery(headlineFilter as string);
  const dateQuery = getDateQuery(dateFilter as string);
  const nationQuery = getNationQuery(nationFilter as string[]);

  // API change by Query state
  let API = `${API_ENDPOINT}&page=${pageNum}${dateQuery}`;
  API += headlineQuery !== "" ? `&fq=${headlineQuery}` : "";
  API += nationQuery !== "" ? `${headlineQuery !== "" ? "%20AND%20" : "&fq="}${nationQuery}` : "";

  try {
    const res = await axios.get(API);
    const rawData = res.data.response.docs;
    const articleInfo = transformRawData(rawData);

    return articleInfo;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getArticleData;
