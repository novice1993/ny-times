import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { transformRawData } from "../utils/transformRawData";
import { API_ENDPOINT } from "../constants/apiConstant";

// useInfiniteQuery
export const useGetArticleDataToInfinite = () => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ["articles"],
    queryFn: ({ pageParam = 0 }) => getArtilcleDataForInfinite(pageParam),
    getNextPageParam: (lastPage: any, allPages: any) => {
      return lastPage.length !== 0 ? allPages.length + 1 : undefined;
    },
    select: (rawData) => {
      const selectedData = rawData.pages.map((originData) => {
        const articleData = originData.data.response.docs;
        const neededInfo = transformRawData(articleData);

        return neededInfo;
      });

      return selectedData;
    },
    refetchOnWindowFocus: false,
  });

  return {
    articleData: data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    fetchStatus: status,
  };
};

// infinite Query Callback Function
const getArtilcleDataForInfinite = async (page: number) => {
  const res = await axios.get(`${API_ENDPOINT}&page=${page}`);
  return res;
};
