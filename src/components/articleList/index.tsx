import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import useGetArticleDataFromServer from "../../hooks/useGetArticleDataFromServer";
import { plusArticlePageNum } from "../../reducers/server/articleDataFromServer-Reducer";

import { GlobalStateProps } from "../../models/globalStateProps";
import { ArticleProps } from "../../models/articleProps";
import { ListLayout } from "../../layout/layout";
import Article from "../article";

const ArticleList = () => {
  const dispatch = useDispatch();
  const [targetRef, inView] = useInView();

  const articleData = useSelector((state: GlobalStateProps) => state.articleDataFromServer);
  const isLoadingIndicator = useSelector((state: GlobalStateProps) => state.isLoadingIndicator);
  const { articleList, pageNum } = articleData;

  useGetArticleDataFromServer(pageNum);

  // plus article pageNum
  useEffect(() => {
    inView && dispatch(plusArticlePageNum());
  }, [inView]);

  return (
    <ListLayout>
      {isLoadingIndicator.total ? (
        <div>filter change ...</div>
      ) : (
        <>
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
          <div className="observerTarget" ref={targetRef}>
            {isLoadingIndicator.underline && <div>loading ...</div>}
          </div>
        </>
      )}
    </ListLayout>
  );
};

export default ArticleList;
