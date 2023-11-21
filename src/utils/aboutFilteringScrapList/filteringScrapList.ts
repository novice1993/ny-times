import { getHeadlinFilteringArticle } from "./getHeadlineFilterArticle";
import { getDateFilteringArticle } from "./getDateFilteringArticle";
import { getNationFilteringArticle } from "./getNationFilterArticle";
import { setScrapArticles } from "../../reducers/scrapedArticles-Reducer";
import { ArticleProps } from "../../models/articleProps";

export const filteringScrapList = (option: OwnProps) => {
  const { originScrapList, headlineFilter, dateFilter, nationFilter, dispatch } = option;

  let filteredList = [...originScrapList];

  if (headlineFilter !== "") {
    filteredList = getHeadlinFilteringArticle(filteredList, headlineFilter);
  }

  if (dateFilter !== "") {
    filteredList = getDateFilteringArticle(filteredList, dateFilter);
  }

  if (nationFilter.length !== 0) {
    filteredList = getNationFilteringArticle(filteredList, nationFilter);
  }

  dispatch(setScrapArticles(filteredList));
};

interface OwnProps {
  originScrapList: ArticleProps[];
  headlineFilter: string;
  dateFilter: string;
  nationFilter: string[];
  dispatch: (func: any) => void;
}
