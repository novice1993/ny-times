import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import { plusArticlePageNum } from "../../reducers/server/articleDataFromServer-Reducer";
import getArticleDataFromServer from "../../utils/getArticleDataFromServer";

import { GlobalStateProps } from "../../models/globalStateProps";
import { ArticleProps } from "../../models/articleProps";
import { ListLayout } from "../../layout/layout";
import Article from "../article";

const ArticleList = () => {
  const dispatch = useDispatch();
  const [targetRef, inView] = useInView();

  const articleData = useSelector((state: GlobalStateProps) => state.articleDataFromServer);
  const { articleList, pageNum } = articleData;

  // update articleList
  useEffect(() => {
    getArticleDataFromServer(pageNum, dispatch);
  }, [pageNum]);

  // plus article pageNum
  useEffect(() => {
    if (inView) {
      dispatch(plusArticlePageNum());
    }
  }, [inView]);

  return (
    <ListLayout>
      {articleList.map((article: ArticleProps) => {
        const { headline, newspaper, reporter, date, url } = article;

        return (
          <Article
            key={url}
            headline={headline}
            newspaper={newspaper}
            reporter={reporter}
            date={date}
            url={url}
          />
        );
      })}
      <div className="observerTarget" ref={targetRef} />
    </ListLayout>
  );
};

export default ArticleList;
