import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeFooterBtnState } from "../../reducers/footerBtnState-Reducer";
import { ListLayout } from "../../layout/layout";
// import Article from "../article";
// import { dummyArticle } from "../../constants/constatns";
// import { ArticleProps } from "../../models/articleProps";

const ScrapList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeFooterBtnState("scrap"));
  }, []);

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