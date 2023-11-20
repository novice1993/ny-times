export const storeFilterState = (
  type: string,
  headlineFilter: string,
  dateFilter: string,
  nationFilter: string[]
) => {
  const filterList = {
    headlineFilter: headlineFilter,
    dateFilter: dateFilter,
    nationFilter: nationFilter,
  };

  const filterData = JSON.stringify(filterList);
  localStorage.setItem(type === "home" ? "homeScreenFilter" : "scrapScreenFilter", filterData);
};
