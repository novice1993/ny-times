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

const useGetFilteringArticleData = (pageNum: number) => {
  const dispatch = useDispatch();

  const headerFilterState = useSelector((state: GlobalStateProps) => state.headerFilterState);
  const homeScreenFilter = useSelector((state: GlobalStateProps) => state.homeScreenFilterState);

  // filterState in header
  const { headline, date, nation } = headerFilterState.homeScreen;
  const isFiltering =
    headline !== defaultHeadline || date !== defaultDate || nation !== defaultNation;

  // HomeScreen filterState Value : headline, date, nation
  const { headlineFilter, dateFilter, nationFilter } = homeScreenFilter;
  const options = { pageNum, headlineFilter, dateFilter, nationFilter, dispatch };

  useEffect(() => {
    isFiltering && getFilteredDataFromServer(options);
  }, [pageNum, headline, date, nation]);

  return;
};

export default useGetFilteringArticleData;

// filtered data fetching function
const getFilteredDataFromServer = async (options: FetchingFuncProps) => {
  const { pageNum, headlineFilter, dateFilter, nationFilter, dispatch } = options;

  const headlineQuery = getHeadlineQuery(headlineFilter);
  const dateQuery = getDateQuery(dateFilter);
  const nationQuery = getNationQuery(nationFilter);
  let API = `${API_ENDPOINT}&page=${pageNum}${dateQuery}`;

  // API change by query state
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

    console.log(API);

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
};

interface FetchingFuncProps {
  pageNum: number;
  headlineFilter: string;
  dateFilter: string;
  nationFilter: string[];
  dispatch: (state: any) => void;
}

// functions to get URL Query
const getHeadlineQuery = (headlineFilter: string) => {
  if (headlineFilter === "") {
    return headlineFilter;
  } else {
    return encodeURIComponent(`headline:("${headlineFilter}")`);
  }
};

const getDateQuery = (dateFilter: string) => {
  if (dateFilter === "") {
    return dateFilter;
  } else {
    const queryForm = dateFilter.replace(/\./g, "");
    return `&begin_date=${queryForm}&end_date=${queryForm}`;
  }
};

const getNationQuery = (nationFilter: string[]) => {
  if (nationFilter.length === 0) {
    return "";
  } else {
    const changedNationName = nationFilter.map((nation) => {
      switch (nation) {
        case "대한민국":
          return "south korea";
        case "중국":
          return "china";
        case "일본":
          return "japan";
        case "미국":
          return "united states";
        case "북한":
          return "north korea";
        case "러시아":
          return "russia";
        case "프랑스":
          return "france";
        case "영국":
          return "uk";
      }
    });

    const queryForm = changedNationName.map((nation) => `"${nation}"`).join(", ");
    return encodeURIComponent(`glocations:(${queryForm})`);
  }
};
