import { ListLayout } from "../../layout/layout";
import Article from "../article";
import useGetArticleData from "../../hooks/useGetArticleData";

import { ArticleProps } from "../../models/articleProps";

const ArticleList = () => {
  const { articleInfo, articleInfoLoading, articleInfoError } = useGetArticleData();

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
