import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import useGetNofilteringArticleData from "../../hooks/useGetNofilteringArticleData";
import useGetFilteringArticleData from "../../hooks/useGetFilteringArticleData";
import { plusArticlePageNum } from "../../reducers/server/articleDataFromServer-Reducer";

import { GlobalStateProps } from "../../models/globalStateProps";
import { ArticleProps } from "../../models/articleProps";
import { ListLayout } from "../../layout/layout";
import Article from "../article";

const ArticleList = () => {
  const dispatch = useDispatch();
  const [targetRef, inView] = useInView();

  const articleData = useSelector((state: GlobalStateProps) => state.articleDataFromServer);
  const { articleList, pageNum } = articleData;

  useGetNofilteringArticleData(pageNum); // fetching all article data

  // plus article pageNum
  useEffect(() => {
    inView && dispatch(plusArticlePageNum());
  }, [inView]);

  return (
    <ListLayout>
      {articleList.map((article: ArticleProps) => {
        const { headline, newspaper, reporter, date, url, nation } = article;

        return (
          <Article
            key={headline + reporter}
            headline={headline}
            newspaper={newspaper}
            reporter={reporter}
            date={date}
            url={url}
            nation={nation}
          />
        );
      })}
      <div className="observerTarget" ref={targetRef} />
    </ListLayout>
  );
};

export default ArticleList;
