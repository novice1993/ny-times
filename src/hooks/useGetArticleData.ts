import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInfiniteQuery } from "react-query";
import getArticleData from "../utils/getArticleData";
import { setLoadingIndicator } from "../reducers/loadingIndicatorState-Reducer";
import { GlobalStateProps } from "../models/globalStateProps";

const useGetArticleData = () => {
  const dispatch = useDispatch();

  const headerFilterState = useSelector((state: GlobalStateProps) => state.headerFilterState);
  const { headline, date, nation } = headerFilterState.homeScreen;

  const { data, status, hasNextPage, fetchNextPage } = useInfiniteQuery<any, Error>({
    queryKey: [headline, date, nation],
    queryFn: ({ pageParam = 0 }) => getArticleData(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage !== undefined && lastPage.length === 0 ? undefined : allPages.length;
    },
  });

  // on loadingIndicator
  dispatch(setLoadingIndicator(true));

  // off loadingIndicator
  useEffect(() => {
    data !== undefined && dispatch(setLoadingIndicator(false));
  }, [data]);

  return {
    articleData: data,
    status,
    hasNextPage,
    fetchNextPage,
  };
};

export default useGetArticleData;
