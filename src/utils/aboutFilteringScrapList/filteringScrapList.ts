import { getHeadlinFilteringArticle } from "./getHeadlineFilterArticle";
import { getDateFilteringArticle } from "./getDateFilteringArticle";
import { getNationFilteringArticle } from "./getNationFilterArticle";
import { setScrapArticles } from "../../reducers/scrapedArticles-Reducer";
import { ArticleProps } from "../../models/articleProps";

export const filteringScrapList = (props: OwnProps) => {
  const { originList, headlineFilter, dateFilter, nationFilter, dispatch } = props;

  let filteredList = [...originList];

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
  originList: ArticleProps[];
  headlineFilter: string;
  dateFilter: string;
  nationFilter: string[];
  dispatch: (func: any) => void;
}
