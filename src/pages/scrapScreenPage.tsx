import { useSelector } from "react-redux";
import { GlobalStateProps } from "../models/globalStateProps";

import { PageLayout } from "../layout/layout";
import Header from "../components/header";
import ScrapList from "../components/scrapList";
import FilterModal from "../components/filterModal";

const ScrapScreenPage = () => {
  const isFilterModal = useSelector((state: GlobalStateProps) => state.isFilterModal);

  return (
    <PageLayout>
      <Header />
      <ScrapList />
      {isFilterModal && <FilterModal />}
    </PageLayout>
  );
};

export default ScrapScreenPage;
