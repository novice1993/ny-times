import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_ENDPOINT } from "../constants/apiConstant";
import changeDateFormat from "../utils/changeDateFormat";
import changeReporterFormat from "../utils/changeReporterFromate";

const useGetArticleData = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["articleInfo"],
    queryFn: () => getArticleData(),
  });

  return { articleInfo: data, articleInfoLoading: isLoading, articleInfoError: isError };
};

export default useGetArticleData;

// get article data from server
const getArticleData = async () => {
  const res = await axios.get(API_ENDPOINT);
  const articleData = res.data.response.docs;
  const articleInfo = articleData.map((article: any) => {
    const information = {
      headline: article.headline.main,
      newspaper: article.source,
      reporter: changeReporterFormat(article.byline.original),
      date: changeDateFormat(article.pub_date),
      url: article.web_url,
    };
    return information;
  });

  return articleInfo;
};
