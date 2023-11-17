import { useGetArticleDataToInfinite } from "../../hooks/useGetArticleDataInfinite";
import { ArticleProps } from "../../models/articleProps";

import { ListLayout } from "../../layout/layout";
import Article from "../article";

const ArticleList = () => {
  const { articleData, hasNextPage, fetchNextPage, isFetchingNextPage, fetchStatus } =
    useGetArticleDataToInfinite();

  if (isFetchingNextPage || fetchStatus === "error") {
    return <>indicator add</>;
  }

  const articleInfo = articleData?.flat();

  return (
    <ListLayout>
      {articleInfo?.map((article: ArticleProps) => {
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
