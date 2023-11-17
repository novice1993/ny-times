// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { API_ENDPOINT } from "../constants/apiConstant";

// const useGetArticleData = () => {
//   const { data, isLoading, isError } = useQuery({
//     queryKey: ["articleInfo"],
//     queryFn: getArticleData,
//     refetchOnWindowFocus: false,
//   });

//   return { articleInfo: data, articleInfoLoading: isLoading, articleInfoError: isError };
// };

// export default useGetArticleData;

// // get article data from server
// const getArticleData = async () => {
//   const res = await axios.get(API_ENDPOINT);
//   const articleData = res.data.response.docs;
//   const articleInfo = articleData.map((article: any) => {
//     const information = {
//       headline: article.headline.main,
//       newspaper: article.source,
//       reporter: article.byline.original,
//       date: article.pub_date,
//       url: article.web_url,
//     };
//     return information;
//   });

//   return articleInfo;
// };
