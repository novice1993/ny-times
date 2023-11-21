import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useFilteringScrapList from "../hooks/useFilteringScrapList";
import { GlobalStateProps } from "../models/globalStateProps";
import { scrapListKeyInLocalStorage } from "../constants/constatns";

import { PageLayout } from "../layout/layout";
import Header from "../components/header";
import NoScrapIndicator from "../components/noScrapIndicator";
import NoResultIndicator from "../components/noResultIndicator";
import ScrapList from "../components/scrapList";
import FilterModal from "../components/filterModal";

const ScrapScreenPage = () => {
  useFilteringScrapList();
  const [isScrap, setScrap] = useState(false);
  const [noResult, setNoResult] = useState(false);

  const isFilterModal = useSelector((state: GlobalStateProps) => state.isFilterModal);
  const scrapArticles = useSelector((state: GlobalStateProps) => state.scrapArticles);
  const headerFilterState = useSelector((state: GlobalStateProps) => state.headerFilterState);
  const { headline, date, nation } = headerFilterState.scrapScreen;

  useEffect(() => {
    if (scrapArticles.length !== 0) {
      setScrap(true);
      setNoResult(false);
    } else {
      const scrapList = localStorage.getItem(scrapListKeyInLocalStorage);

      scrapList === null
        ? setScrap(false)
        : scrapList.length === 0
        ? setScrap(false)
        : setNoResult(true); // exist scrapList, but don't match with filter
    }
  }, [scrapArticles]);

  return (
    <PageLayout>
      {(noResult || isScrap) && <Header headline={headline} date={date} nation={nation} />}
      {noResult ? <NoResultIndicator /> : isScrap ? <ScrapList /> : <NoScrapIndicator />}
      {isFilterModal && <FilterModal type="scrap" />}
    </PageLayout>
  );
};

export default ScrapScreenPage;
