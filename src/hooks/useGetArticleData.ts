import { useSelector } from "react-redux";
import { useInfiniteQuery } from "react-query";
import getArticleData from "../utils/getArticleData";
import { GlobalStateProps } from "../models/globalStateProps";

const useGetArticleData = () => {
  const headerFilterState = useSelector((state: GlobalStateProps) => state.headerFilterState);
  const { headline, date, nation } = headerFilterState.homeScreen;

  const { data, isLoading, isError, hasNextPage, fetchNextPage } = useInfiniteQuery<any, Error>({
    queryKey: [`${headline}${date}${nation}`],
    queryFn: ({ pageParam = 0 }) => getArticleData(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 0 ? undefined : allPages.length;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  return {
    articleData: data,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
  };
};

export default useGetArticleData;
