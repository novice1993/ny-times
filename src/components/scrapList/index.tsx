import { useSelector } from "react-redux";
import useFilteringScrapList from "../../hooks/useFilteringScrapList";

import { GlobalStateProps } from "../../models/globalStateProps";
import { ListLayout } from "../../layout/layout";
import Article from "../article";
import { ArticleProps } from "../../models/articleProps";

const ScrapList = () => {
  const scrapArticles = useSelector((state: GlobalStateProps) => state.scrapArticles);
  useFilteringScrapList();

  return (
    <ListLayout>
      {scrapArticles.map((article: ArticleProps) => {
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
    </ListLayout>
  );
};

export default ScrapList;
