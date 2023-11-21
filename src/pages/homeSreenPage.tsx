import { useSelector } from "react-redux";
import useGetArticleData from "../hooks/useGetArticleData";
import { GlobalStateProps } from "../models/globalStateProps";

import { PageLayout } from "../layout/layout";
import Header from "../components/header";
import TotalLoadingIndicator from "../components/loadingIndicator/TotalLoadingIndicator";
import ErrorIndicator from "../components/errorIndicator";
import ArticleList from "../components/articleList";
import FilterModal from "../components/filterModal";

// test
// import useGetArticleData from "../hooks/useGetArticleData";

const HomeSreenPage = () => {
  const isFilterModal = useSelector((state: GlobalStateProps) => state.isFilterModal);
  // const fetchErrorState = useSelector((state: GlobalStateProps) => state.fetchingErrorState);

  const { articleData, isLoading, isError, hasNextPage, fetchNextPage } = useGetArticleData();

  return (
    <PageLayout>
      {isLoading ? (
        <>
          <Header type="home" />
          <TotalLoadingIndicator />
        </>
      ) : (
        <>
          <Header type="home" />
          <ArticleList
            articleData={articleData}
            hasNextPage={hasNextPage}
            fetchNextPage={fetchNextPage}
          />
          {isFilterModal && <FilterModal type="home" />}
        </>
      )}
    </PageLayout>
  );
};

export default HomeSreenPage;
