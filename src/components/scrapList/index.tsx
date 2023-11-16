import { ListLayout } from "../../layout/layout";
// import Article from "../article";
// import { dummyArticle } from "../../constants/constatns";
// import { ArticleProps } from "../../models/articleProps";

const ScrapList = () => {
  return (
    <ListLayout>
      {/* {dummyArticle.map((article: ArticleProps) => {
        const title = article.title;
        const scrap = article.scrap;
        const newspaper = article.newspaper;
        const reporter = article.reporter;
        const date = article.date;

        return (
          <Article
            key={title}
            title={title}
            scrap={scrap}
            newspaper={newspaper}
            reporter={reporter}
            date={date}
          />
        );
      })} */}
    </ListLayout>
  );
};

export default ScrapList;
