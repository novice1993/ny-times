import { useSelector } from "react-redux";
import { GlobalStateProps } from "../models/globalStateProps";

import { PageLayout } from "../layout/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import NoScrapIndicator from "../components/noScrapIndicator";
import ScrapList from "../components/scrapList";
import FilterModal from "../components/filterModal";

const ScrapScreenPage = () => {
  const isFilterModal = useSelector((state: GlobalStateProps) => state.isFilterModal);
  const scrapArticles = useSelector((state: GlobalStateProps) => state.scrapArticles);
  const isScrap = scrapArticles.length === 0 ? false : true;

  return (
    <PageLayout>
      {isScrap ? (
        <>
          <Header />
          <ScrapList />
          {isFilterModal && <FilterModal />}
        </>
      ) : (
        <NoScrapIndicator />
      )}

      <Footer type="scrap" />
    </PageLayout>
  );
};

export default ScrapScreenPage;
