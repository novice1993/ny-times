import { useSelector } from "react-redux";
import { GlobalStateProps } from "../models/globalStateProps";

import { PageLayout } from "../layout/layout";
import Header from "../components/header";
import Footer from "../components/footer";
// import NoScrapIndicator from "../components/noScrapIndicator";
import ScrapList from "../components/scrapList";
import FilterModal from "../components/filterModal";

const ScrapScreenPage = () => {
  const isFilterModal = useSelector((state: GlobalStateProps) => state.isFilterModal);

  return (
    <PageLayout>
      {/* <NoScrapIndicator /> */}
      <Header />
      <ScrapList />
      <Footer type="scrap" />
      {isFilterModal && <FilterModal />}
    </PageLayout>
  );
};

export default ScrapScreenPage;
