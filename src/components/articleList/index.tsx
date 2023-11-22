import styled from "styled-components";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useInView } from "react-intersection-observer";
import { ArticleProps } from "../../models/articleProps";
import { GlobalStateProps } from "../../models/globalStateProps";

import { ListLayout } from "../../layout/layout";
import Article from "../article";
import NoResultIndicator from "../noResultIndicator";
import UnderlineLoadingIndicator from "../loadingIndicator/UnderlineLoadingIndicator";

const ArticleList = ({ articleData, hasNextPage, fetchNextPage }: ArticleListProps) => {
  const [targetRef, inView] = useInView();
  const isLoading = useSelector((state: GlobalStateProps) => state.loadingIndicatorState);

  useEffect(() => {
    inView && hasNextPage && fetchNextPage();
  }, [inView]);

  const articleList = articleData.pages.flat() || [];
  const existArticle = articleList.length > 0;

  return (
    <ListLayout>
      {!existArticle && <NoResultIndicator />}
      {existArticle && (
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
          <ObserverTarget ref={targetRef}>
            {isLoading && <UnderlineLoadingIndicator />}
          </ObserverTarget>
        </>
      )}
    </ListLayout>
  );
};

export default ArticleList;

interface ArticleListProps {
  articleData: any;
  hasNextPage: boolean | undefined;
  fetchNextPage: () => void;
}

const ObserverTarget = styled.div`
  padding: 22px 0px 18px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
