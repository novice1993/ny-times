import { changeNationFormat } from "../aboutOrganizeData/changeNationFormat";
import { ArticleProps } from "../../models/articleProps";

export const getNationFilteringArticle = (scrapList: ArticleProps[], nationFilter: string[]) => {
  const nationList = changeNationFormat(nationFilter);

  const filterdList = scrapList.filter((scrap: ArticleProps) => {
    return nationList.some((nation) => {
      return nation === scrap.nation;
    });
  });

  return filterdList;
};
