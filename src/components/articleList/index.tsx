import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";

import { GlobalStateProps } from "../../models/globalStateProps";
import { ArticleProps } from "../../models/articleProps";

import { ListLayout } from "../../layout/layout";
import Article from "../article";
import NoResultIndicator from "../noResultIndicator";
import UnderlineLoadingIndicator from "../loadingIndicator/UnderlineLoadingIndicator";

const ArticleList = ({ articleData, hasNextPage, fetchNextPage }: ArticleListProps) => {
  const [targetRef, inView] = useInView();
  const [existArticle, setExistArticle] = useState(false);
  const isLoadingIndicator = useSelector((state: GlobalStateProps) => state.isLoadingIndicator);

  useEffect(() => {
    inView && hasNextPage && fetchNextPage();
  }, [inView]);

  // check article search result
  useEffect(() => {
    if (articleData) {
      const isExist = articleData.pages[0].length === 0 ? false : true;
      setExistArticle(isExist);
    }
  }, [articleData]);

  if (articleData !== undefined) {
    const articleList = articleData.pages.flat();

    if (!existArticle) {
      return <NoResultIndicator />;
    } else {
      return (
        <ListLayout>
          {articleList.map((article: ArticleProps) => {
            if (!article) {
              return null;
            }
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
          <ObsererTarget ref={targetRef}>
            {isLoadingIndicator.underline && <UnderlineLoadingIndicator />}
          </ObsererTarget>
        </ListLayout>
      );
    }
  }
};

export default ArticleList;

interface ArticleListProps {
  articleData: any;
  hasNextPage: boolean | undefined;
  fetchNextPage: () => void;
}

const ObsererTarget = styled.div`
  padding: 22px 0px 18px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
