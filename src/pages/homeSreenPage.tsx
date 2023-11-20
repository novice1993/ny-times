import { useSelector } from "react-redux";
import { GlobalStateProps } from "../models/globalStateProps";

import { PageLayout } from "../layout/layout";
import Header from "../components/header";
import ErrorIndicator from "../components/errorIndicator";
import ArticleList from "../components/articleList";
import FilterModal from "../components/filterModal";

const HomeSreenPage = () => {
  const isFilterModal = useSelector((state: GlobalStateProps) => state.isFilterModal);
  const fetchErrorState = useSelector((state: GlobalStateProps) => state.fetchingErrorState);

  return (
    <PageLayout>
      {fetchErrorState ? (
        <ErrorIndicator />
      ) : (
        <>
          <Header type="home" />
          <ArticleList />
          {isFilterModal && <FilterModal type="home" />}
        </>
      )}
    </PageLayout>
  );
};

export default HomeSreenPage;
