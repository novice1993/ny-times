import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { changeFooterBtnState } from "../../reducers/footerBtnState-Reducer";
import { ArticleProps } from "../../models/articleProps";

import { ListLayout } from "../../layout/layout";
import Article from "../article";
import useGetArticleData from "../../hooks/useGetArticleData";

const ArticleList = () => {
  const dispatch = useDispatch();
  const { articleInfo, articleInfoLoading, articleInfoError } = useGetArticleData();

  useEffect(() => {
    dispatch(changeFooterBtnState("home"));
  }, []);

  if (articleInfoLoading || articleInfoError) {
    return <>indicator add</>;
  }

  return (
    <ListLayout>
      {articleInfo.map((article: ArticleProps) => {
        const headline = article.headline;
        const newspaper = article.newspaper;
        const reporter = article.reporter;
        const date = article.date;
        const url = article.url;

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
    </ListLayout>
  );
};

export default ArticleList;
