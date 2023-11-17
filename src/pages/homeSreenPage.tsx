import { useSelector } from "react-redux";
import { GlobalStateProps } from "../models/globalStateProps";

import { PageLayout } from "../layout/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import ArticleList from "../components/articleList";
import FilterModal from "../components/filterModal";

const HomeSreenPage = () => {
  const isFilterModal = useSelector((state: GlobalStateProps) => state.isFilterModal);

  return (
    <PageLayout>
      <Header />
      <ArticleList />
      <Footer type="home" />
      {isFilterModal && <FilterModal />}
    </PageLayout>
  );
};

export default HomeSreenPage;
