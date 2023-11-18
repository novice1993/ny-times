import axios from "axios";
import { transformRawData } from "../utils/transformRawData";
import { plusArticleData } from "../reducers/server/articleDataFromServer-Reducer";

import { API_ENDPOINT } from "../constants/apiConstant";

const getArticleDataFromServer = async (page: number, dispatch: (state: any) => void) => {
  try {
    const res = await axios.get(`${API_ENDPOINT}&page=${page}`);
    const rawData = res.data.response.docs;
    const transformData = transformRawData(rawData);
    dispatch(plusArticleData(transformData));
  } catch (error) {
    console.log(error);
  }
};

export default getArticleDataFromServer;