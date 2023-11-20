export const getDateQuery = (dateFilter: string) => {
  if (dateFilter === "") {
    return dateFilter;
  } else {
    const queryForm = dateFilter.replace(/\./g, "");
    return `&begin_date=${queryForm}&end_date=${queryForm}`;
  }
};
