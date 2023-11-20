export const getNationInfo = (article: any) => {
  let nation = null;
  const articleKeywords = article.keywords;

  articleKeywords.forEach((keyword: any) => {
    keyword.name === "glocations" ? (nation = keyword.value) : null;
  });

  return nation;
};
