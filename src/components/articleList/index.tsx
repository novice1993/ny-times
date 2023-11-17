import { ArticleProps } from "../../models/articleProps";

import { ListLayout } from "../../layout/layout";
import Article from "../article";

// 임시 data
import { dummyArticle } from "../../constants/constatns";
// import useGetArticleData from "../../hooks/useGetArticleData";

const ArticleList = () => {
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
