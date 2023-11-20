import { ArticleProps } from "../../models/articleProps";

export const getHeadlinFilteringArticle = (scrapList: ArticleProps[], headlineFilter: string) => {
  const filterdList = scrapList.filter((scrap: ArticleProps) => {
    const headline = scrap.headline.toLowerCase();
    const filteringWord = headlineFilter.toLowerCase();

    return headline.includes(filteringWord);
  });
  return filterdList;
};
