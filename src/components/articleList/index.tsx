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
  const homeScreenFilterState = useSelector(
    (state: GlobalStateProps) => state.homeScreenFilterState
  );
  const { articleList, pageNum } = articleData;
  const { headlineFilter, dateFilter, nationFilter } = homeScreenFilterState;
  const noFiltering = headlineFilter === "" && dateFilter === "" && nationFilter.length === 0;

  // update articleList (No Filtering State)
  useEffect(() => {
    if (noFiltering) {
      getArticleDataFromServer(pageNum, dispatch);
    }
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
            key={headline + reporter}
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
