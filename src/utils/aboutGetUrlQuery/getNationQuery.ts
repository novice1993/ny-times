import { changeNationFormat } from "../aboutOrganizeData/changeNationFormat";

export const getNationQuery = (nationFilter: string[]) => {
  if (nationFilter.length === 0) {
    return "";
  } else {
    const changedNationName = changeNationFormat(nationFilter);

    const queryForm = changedNationName.map((nation) => `"${nation}"`).join(", ");
    return encodeURIComponent(`glocations:(${queryForm})`);
  }
};
