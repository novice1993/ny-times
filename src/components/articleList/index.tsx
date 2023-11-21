import styled from "styled-components";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";

import { GlobalStateProps } from "../../models/globalStateProps";
import { ArticleProps } from "../../models/articleProps";
import { ListLayout } from "../../layout/layout";
// import NoResultIndicator from "../noResultIndicator";

import UnderlineLoadingIndicator from "../loadingIndicator/UnderlineLoadingIndicator";
import Article from "../article";

interface OwnProps {
  articleData: any;
  hasNextPage: boolean | undefined;
  fetchNextPage: () => void;
}

const ArticleList = ({ articleData, hasNextPage, fetchNextPage }: OwnProps) => {
  // const dispatch = useDispatch();
  // const [noResult, setNoResult] = useState(false);
  const [targetRef, inView] = useInView();
  const isLoadingIndicator = useSelector((state: GlobalStateProps) => state.isLoadingIndicator);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  if (articleData !== undefined) {
    const articleList = articleData.pages.flat();

    return (
      <ListLayout>
        {articleList.map((article: ArticleProps, idx: number) => {
          if (!article) {
            return null;
          }

          const { headline, newspaper, reporter, date, url, nation } = article;

          return (
            <Article
              key={headline + reporter + idx}
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
};

export default ArticleList;

const ObsererTarget = styled.div`
  padding: 22px 0px 18px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
