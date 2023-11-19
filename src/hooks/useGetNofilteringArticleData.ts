import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { transformRawData } from "../utils/transformRawData";
import { plusArticleData } from "../reducers/server/articleDataFromServer-Reducer";
import { GlobalStateProps } from "../models/globalStateProps";

import { API_ENDPOINT } from "../constants/apiConstant";
import {
  headerButtonText01 as defaultHeadline,
  headerButtonText02 as defaultDate,
  headerButtonText03 as defaultNation,
} from "../constants/constatns";

const useGetNofilteringArticleData = (pageNum: number) => {
  const dispatch = useDispatch();

  const headerFilterState = useSelector((state: GlobalStateProps) => state.headerFilterState);
  const { headline, date, nation } = headerFilterState.homeScreen;

  const isFiltering =
    headline !== defaultHeadline || date !== defaultDate || nation !== defaultNation;

  useEffect(() => {
    !isFiltering && getArticleDataFromServer(pageNum, dispatch);
  }, [pageNum, headline, date, nation]);

  return;
};

export default useGetNofilteringArticleData;

// fetching function
const getArticleDataFromServer = async (page: number, dispatch: (state: any) => void) => {
  try {
    const res = await axios.get(`${API_ENDPOINT}&page=${page}`);
    const rawData = res.data.response.docs;

    if (rawData.length === 0) {
      console.log("there is no article data");
    } else {
      const transformData = transformRawData(rawData);
      dispatch(plusArticleData(transformData));
    }
  } catch (error) {
    console.log(error);
  }
};
