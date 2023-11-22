import { changeNationFormat } from "./aboutOrganizeData/changeNationFormat";

// headline Query
export const getHeadlineQuery = (headlineFilter: string) => {
  const isHeadline = headlineFilter !== "" ? true : false;
  return isHeadline ? encodeURIComponent(`headline:("${headlineFilter}")`) : headlineFilter;
};

// date Query
export const getDateQuery = (dateFilter: string) => {
  const isDate = dateFilter !== "" ? true : false;

  if (isDate) {
    const queryForm = dateFilter.replace(/\./g, "");
    return `&begin_date=${queryForm}&end_date=${queryForm}`;
  } else {
    return dateFilter;
  }
};

// nation Query
export const getNationQuery = (nationFilter: string[]) => {
  const isNation = nationFilter.length !== 0 ? true : false;

  if (isNation) {
    const changedNationName = changeNationFormat(nationFilter);
    const queryForm = changedNationName.map((nation) => `"${nation}"`).join(", ");

    return encodeURIComponent(`glocations:(${queryForm})`);
  } else {
    return "";
  }
};
