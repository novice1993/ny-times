import {
  headerButtonText01 as defaultHeadline,
  headerButtonText02 as defaultDate,
  headerButtonText03 as defaultNation,
} from "../constants/constatns";

export const setHeaderStateInitValue = (storedData: string | null) => {
  const defaultValue = {
    headline: defaultHeadline,
    date: defaultDate,
    nation: defaultNation,
  };

  if (storedData !== null) {
    const filters = JSON.parse(storedData);
    const { headlineFilter, dateFilter, nationFilter } = filters;

    defaultValue.headline = headlineFilter !== "" ? headlineFilter : defaultHeadline;
    defaultValue.date = dateFilter !== "" ? dateFilter : defaultDate;

    if (nationFilter.length !== 0) {
      if (nationFilter.length === 1) {
        defaultValue.nation = nationFilter[0];
      } else {
        const remainNum = nationFilter.length - 1;
        defaultValue.nation = `${nationFilter[0]} 외 ${remainNum}개`;
      }
    }
  }

  return defaultValue;
};
