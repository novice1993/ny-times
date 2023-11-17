import { ArticleProps } from "../../models/articleProps";

import { ListLayout } from "../../layout/layout";
import Article from "../article";

// 임시 data
import { dummyArticle } from "../../constants/constatns";

// make article data fetching function
import axios from "axios";
import { API_ENDPOINT } from "../../constants/apiConstant";
import { transformRawData } from "../../utils/transformRawData";
import { useEffect } from "react";

const getArticleDataFromServer = async (page: number) => {
  const res = await axios.get(`${API_ENDPOINT}&page=${page}`);
  const rawData = res.data.response.docs;
  const transformData = transformRawData(rawData);

  return transformData;
};

const ArticleList = () => {
  // useEffect(() => {
  //   try {
  //     const articleData = getArticleDataFromServer(0);
  //     articleData.then((result) => console.log(result));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, []);

  return (
    <ListLayout>
      {dummyArticle.map((article: ArticleProps) => {
        const { headline, newspaper, reporter, date, url } = article;

        return (
          <Article
            key={headline}
            headline={headline}
            newspaper={newspaper}
            reporter={reporter}
            date={date}
            url={url}
          />
        );
      })}
      {/* <div className="observerTarget" ref={targetRef} /> */}
    </ListLayout>
  );
};

export default ArticleList;
