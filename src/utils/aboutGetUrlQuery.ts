import { changeNationFormat } from "./aboutOrganizeData/changeNationFormat";

export const getHeadlineQuery = (headlineFilter: string) => {
  if (headlineFilter === "") {
    return headlineFilter;
  } else {
    return encodeURIComponent(`headline:("${headlineFilter}")`);
  }
};

export const getDateQuery = (dateFilter: string) => {
  if (dateFilter === "") {
    return dateFilter;
  } else {
    const queryForm = dateFilter.replace(/\./g, "");
    return `&begin_date=${queryForm}&end_date=${queryForm}`;
  }
};

export const getNationQuery = (nationFilter: string[]) => {
  if (nationFilter.length === 0) {
    return "";
  } else {
    const changedNationName = changeNationFormat(nationFilter);

    const queryForm = changedNationName.map((nation) => `"${nation}"`).join(", ");
    return encodeURIComponent(`glocations:(${queryForm})`);
  }
};
