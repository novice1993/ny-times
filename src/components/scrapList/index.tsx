import { useSelector } from "react-redux";
import { GlobalStateProps } from "../../models/globalStateProps";
import { ArticleProps } from "../../models/articleProps";

import { ListLayout } from "../../layout/layout";
import Article from "../article";

const ScrapList = () => {
  const scrapArticles = useSelector((state: GlobalStateProps) => state.scrapArticles);

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
