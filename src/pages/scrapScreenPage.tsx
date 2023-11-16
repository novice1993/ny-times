import { useSelector } from "react-redux";
import { GlobalStateProps } from "../models/globalStateProps";

import { PageLayout } from "../layout/layout";
import Header from "../components/header";
import ArticleList from "../components/articleList";
import FilterModal from "../components/filterModal";

const ScrapScreenPage = () => {
  const isFilterModal = useSelector((state: GlobalStateProps) => state.isFilterModal);

  return (
    <PageLayout>
      <Header />
      <ArticleList />
      {isFilterModal && <FilterModal />}
    </PageLayout>
  );
};

export default ScrapScreenPage;
