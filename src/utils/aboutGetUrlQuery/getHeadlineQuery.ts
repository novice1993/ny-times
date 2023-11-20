export const getHeadlineQuery = (headlineFilter: string) => {
  if (headlineFilter === "") {
    return headlineFilter;
  } else {
    return encodeURIComponent(`headline:("${headlineFilter}")`);
  }
};
