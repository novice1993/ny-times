import { useSelector } from "react-redux";
import useGetArticleData from "../hooks/useGetArticleData";
import { GlobalStateProps } from "../models/globalStateProps";

import { PageLayout } from "../layout/layout";
import Header from "../components/header";
import TotalLoadingIndicator from "../components/loadingIndicator/TotalLoadingIndicator";
import ErrorIndicator from "../components/errorIndicator";
import ArticleList from "../components/articleList";
import FilterModal from "../components/filterModal";

const HomeSreenPage = () => {
  const isFilterModal = useSelector((state: GlobalStateProps) => state.isFilterModal);
  const { articleData, status, hasNextPage, fetchNextPage } = useGetArticleData();

  return (
    <PageLayout>
      <Header type="home" />

      {status === "loading" ? (
        <TotalLoadingIndicator />
      ) : status === "error" ? (
        <ErrorIndicator />
      ) : (
        <>
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
