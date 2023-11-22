import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useFilteringScrapList from "../hooks/useFilteringScrapList";
import { GlobalStateProps } from "../models/globalStateProps";

import { PageLayout } from "../layout/layout";
import Header from "../components/header";
import ScrapList from "../components/scrapList";
import FilterModal from "../components/filterModal";
import NoScrapIndicator from "../components/noScrapIndicator";
import NoResultIndicator from "../components/noResultIndicator";

const ScrapScreenPage = () => {
  useFilteringScrapList();
  const [isScrap, setScrap] = useState(false);
  const [noResult, setNoResult] = useState(false);

  const isFilterModal = useSelector((state: GlobalStateProps) => state.isFilterModal);
  const scrapList = useSelector((state: GlobalStateProps) => state.scrapList);
  const headerFilterState = useSelector((state: GlobalStateProps) => state.headerFilterState);

  const { filteredList, originList } = scrapList;
  const { headline, date, nation } = headerFilterState.scrapScreen;

  useEffect(() => {
    const existScrap = originList.length !== 0 ? true : false;
    const existFilteredScrap = filteredList.length !== 0 ? true : false;

    setScrap(existScrap && existFilteredScrap);
    setNoResult(existScrap && !existFilteredScrap);
  }, [filteredList]);

  return (
    <PageLayout>
      {(noResult || isScrap) && <Header headline={headline} date={date} nation={nation} />}
      {noResult ? <NoResultIndicator /> : isScrap ? <ScrapList /> : <NoScrapIndicator />}
      {isFilterModal && <FilterModal type="scrap" />}
    </PageLayout>
  );
};

export default ScrapScreenPage;
