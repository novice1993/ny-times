import { useSelector } from "react-redux";
import useGetArticleData from "../hooks/useGetArticleData";
import { GlobalStateProps } from "../models/globalStateProps";

import { PageLayout } from "../layout/layout";
import Header from "../components/header";
import ArticleList from "../components/articleList";
import FilterModal from "../components/filterModal";
import TotalLoadingIndicator from "../components/loadingIndicator/TotalLoadingIndicator";
import ErrorIndicator from "../components/errorIndicator";

const HomeSreenPage = () => {
  const isFilterModal = useSelector((state: GlobalStateProps) => state.isFilterModal);
  const headerFilterState = useSelector((state: GlobalStateProps) => state.headerFilterState);

  const { articleData, status, hasNextPage, fetchNextPage } = useGetArticleData();
  const { headline, date, nation } = headerFilterState.homeScreen;

  return (
    <PageLayout>
      <Header headline={headline} date={date} nation={nation} />
      {status === "loading" && <TotalLoadingIndicator />}
      {status === "error" && <ErrorIndicator />}
      {status === "success" && (
        <ArticleList
          articleData={articleData}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
        />
      )}
      {isFilterModal && <FilterModal type="home" />}
    </PageLayout>
  );
};

export default HomeSreenPage;
