import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getArticleDataFromServer from "../utils/getArticleDataFromServer";
import { GlobalStateProps } from "../models/globalStateProps";

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
